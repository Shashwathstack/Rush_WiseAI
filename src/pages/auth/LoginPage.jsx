
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const isStaff = location.pathname.includes('/staff');
  const isAdmin = location.pathname.includes('/admin');
  const isCustomer = !isStaff && !isAdmin;

  const portalName = isStaff
    ? 'Kitchen Staff Portal'
    : isAdmin
      ? 'Admin Portal'
      : 'Customer Portal';

  const redirectUrl = isStaff
    ? '/kitchen'
    : isAdmin
      ? '/admin'
      : '/';

  async function handleRegister() {
    setError('');
    setMessage('');

    if (!isCustomer) {
      setError('Registration is available only for customers.');
      return;
    }

    setLoading(true);

    try {
      const { data, error: signupError } =
        await supabase.auth.signUp({
          email: email.trim(),
          password,
        });

      if (signupError) throw signupError;

      if (data.session) {
        setMessage('Account created successfully. You can now sign in.');
      } else {
        setMessage(
          'Registration submitted. Check your email to confirm your account, then sign in.'
        );
      }

      setIsRegistering(false);
      setPassword('');
    } catch (err) {
      setError(err.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(event) {
    event.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (loginError) throw loginError;

      const user = data.user;

      if (!user) {
        throw new Error('Unable to verify your account.');
      }

      // Get the role assigned to this user in the profiles table.
      const { data: profile, error: profileError } =
        await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();

      if (profileError || !profile) {
        await supabase.auth.signOut();
        throw new Error(
          'Your user profile was not found. Ask the administrator to check your profile setup.'
        );
      }

      const role = String(profile.role || '').toLowerCase();

      const hasCorrectRole =
        (isAdmin && role === 'admin') ||
        (isStaff && role === 'staff') ||
        (isCustomer && ['user', 'customer'].includes(role));

      if (!hasCorrectRole) {
        await supabase.auth.signOut();
        throw new Error(
          `Access denied. This login requires the ${
            isAdmin ? 'admin' : isStaff ? 'staff' : 'customer'
          } role.`
        );
      }

      navigate(redirectUrl, { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
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
          : 'Enter your credentials to access your account'}
      </Text>

      <Card withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={(event) => {
            if (isRegistering) {
              event.preventDefault();
              handleRegister();
            } else {
              handleLogin(event);
            }
          }}
        >
          <Stack gap="md">
            {error && (
              <Alert
                color="red"
                icon={<AlertCircle size={18} />}
                title="Authentication failed"
              >
                {error}
              </Alert>
            )}

            {message && (
              <Alert color="green" title="Success">
                {message}
              </Alert>
            )}

            <TextInput
              label="Email"
              type="email"
              placeholder={
                isCustomer
                  ? 'user@example.com'
                  : isStaff
                    ? 'staff@rushwise.com'
                    : 'admin@rushwise.com'
              }
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              autoComplete="email"
              required
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              value={password}
              onChange={(event) =>
                setPassword(event.currentTarget.value)
              }
              autoComplete={
                isRegistering ? 'new-password' : 'current-password'
              }
              minLength={6}
              required
            />

            <Button
              color="orange"
              type="submit"
              loading={loading}
              leftSection={
                isRegistering ? (
                  <UserPlus size={18} />
                ) : (
                  <LogIn size={18} />
                )
              }
            >
              {isRegistering ? 'Create Account' : 'Sign In'}
            </Button>

            {isCustomer && (
              <Button
                type="button"
                variant="light"
                color="gray"
                leftSection={<UserPlus size={18} />}
                disabled={loading}
                onClick={() => {
                  setError('');
                  setMessage('');
                  setIsRegistering((current) => !current);
                }}
              >
                {isRegistering
                  ? 'Back to Sign In'
                  : 'Register as Customer'}
              </Button>
            )}
          </Stack>
        </form>
      </Card>
    </Container>
  );
}
