
import { useState } from 'react';
import {
  Container,
  Title,
  Card,
  TextInput,
  PasswordInput,
  Button,
  Text,
  Group,
  Alert,
  Stack,
} from '@mantine/core';
import { LogIn, UserPlus, AlertCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const isStaff = location.pathname.startsWith('/staff');
  const isAdmin = location.pathname.startsWith('/admin');
  const isCustomer = !isStaff && !isAdmin;

  const [isRegistering, setIsRegistering] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const portalName = isAdmin
    ? 'Admin Portal'
    : isStaff
      ? 'Kitchen Staff Portal'
      : 'Customer Portal';

  const redirectUrl = isAdmin
    ? '/admin'
    : isStaff
      ? '/kitchen'
      : '/';

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      if (isRegistering && isCustomer) {
        const { data, error: signUpError } =
          await supabase.auth.signUp({
            email: email.trim(),
            password,
            options: {
              data: {
                full_name: fullName.trim(),
                role: 'customer',
              },
            },
          });

        if (signUpError) throw signUpError;

        if (data.session) {
          setMessage('Account created successfully!');
          navigate('/');
        } else {
          setMessage(
            'Account created. Check your email to confirm your account, then sign in.'
          );
          setIsRegistering(false);
        }

        return;
      }

      // Authenticate with Supabase; do not simulate login.
      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (loginError) throw loginError;

      if (!data.user) {
        throw new Error('Supabase did not return a user.');
      }

      // Verify the role stored in the user's own profile.
      const { data: profile, error: profileError } =
        await supabase
          .from('profiles')
          .select('role')
          .eq('id', data.user.id)
          .maybeSingle();

      if (profileError) {
        throw new Error(
          `Could not verify your profile: ${profileError.message}`
        );
      }

      if (!profile) {
        await supabase.auth.signOut();
        throw new Error(
          'No profile exists for this account. Ask the administrator to check profile creation.'
        );
      }

      const requiredRole = isAdmin
        ? 'admin'
        : isStaff
          ? 'staff'
          : 'customer';

      if (profile.role !== requiredRole) {
        await supabase.auth.signOut();
        throw new Error(
          `This account does not have the required ${requiredRole} role.`
        );
      }

      navigate(redirectUrl, { replace: true });
    } catch (err) {
      setError(err.message || 'Authentication failed.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container size={420} my={80}>
      <Title ta="center" fw={900}>
        RushWise {portalName}
      </Title>

      <Text c="dimmed" size="sm" ta="center" mt={5} mb={30}>
        {isRegistering
          ? 'Create your customer account'
          : 'Sign in to access your account'}
      </Text>

      <Card withBorder shadow="md" p={30} radius="md">
        <form onSubmit={handleSubmit}>
          <Stack gap="md">
            {error && (
              <Alert
                color="red"
                title="Authentication failed"
                icon={<AlertCircle size={18} />}
              >
                {error}
              </Alert>
            )}

            {message && (
              <Alert color="green">{message}</Alert>
            )}

            {isRegistering && isCustomer && (
              <TextInput
                label="Full Name"
                placeholder="Your name"
                value={fullName}
                onChange={(event) =>
                  setFullName(event.currentTarget.value)
                }
                required
              />
            )}

            <TextInput
              label="Email"
              placeholder="you@example.com"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) =>
                setEmail(event.currentTarget.value)
              }
              required
            />

            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              autoComplete={
                isRegistering ? 'new-password' : 'current-password'
              }
              value={password}
              onChange={(event) =>
                setPassword(event.currentTarget.value)
              }
              minLength={6}
              required
            />

            <Button
              color="orange"
              type="submit"
              fullWidth
              loading={loading}
              leftSection={
                isRegistering
                  ? <UserPlus size={18} />
                  : <LogIn size={18} />
              }
            >
              {isRegistering ? 'Create Account' : 'Sign In'}
            </Button>

            {isCustomer && (
              <Group justify="center">
                <Text size="sm" c="dimmed">
                  {isRegistering
                    ? 'Already have an account?'
                    : "Don't have an account?"}
                </Text>

                <Button
                  variant="subtle"
                  color="orange"
                  size="compact-sm"
                  type="button"
                  onClick={() => {
                    setIsRegistering((current) => !current);
                    setError('');
                    setMessage('');
                  }}
                >
                  {isRegistering ? 'Sign In' : 'Register'}
                </Button>
              </Group>
            )}
          </Stack>
        </form>
      </Card>
    </Container>
  );
}
