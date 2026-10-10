import { Container, Title, Card, TextInput, PasswordInput, Button, Text, Group } from '@mantine/core';
import { LogIn, UserPlus } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const isStaff = location.pathname.includes('/staff');
  const isAdmin = location.pathname.includes('/admin');
  const isCustomer = !isStaff && !isAdmin;

  let portalName = "Customer Portal";
  let redirectUrl = "/";
  if (isStaff) {
    portalName = "Kitchen Staff Portal";
    redirectUrl = "/kitchen";
  } else if (isAdmin) {
    portalName = "Admin Portal";
    redirectUrl = "/admin";
  }

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate auth logic
    navigate(redirectUrl);
  };

  return (
    <Container size={420} my={80}>
      <Title ta="center" fw={900}>
        RushWise {portalName}
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5} mb={30}>
        Enter your credentials to access your account
      </Text>

      <Card withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleLogin}>
          <TextInput 
            label="Email" 
            placeholder={isCustomer ? "user@example.com" : "staff@rushwise.com"} 
            required 
            mb="md"
          />
          <PasswordInput 
            label="Password" 
            placeholder="Your password" 
            required 
            mb="xl"
          />
          <Group grow>
            <Button color="orange" type="submit" leftSection={<LogIn size={18} />}>
              Sign in
            </Button>
            {isCustomer && (
              <Button variant="light" color="gray" leftSection={<UserPlus size={18} />}>
                Register
              </Button>
            )}
          </Group>
        </form>
      </Card>
    </Container>
  );
}
