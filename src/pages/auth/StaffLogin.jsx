import { Container, Title, Card, TextInput, PasswordInput, Button, Text, Group } from '@mantine/core';
import { LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function StaffLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate auth logic
    navigate('/kitchen');
  };

  return (
    <Container size={420} my={80}>
      <Title ta="center" fw={900}>
        RushWise Staff Portal
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5} mb={30}>
        Enter your credentials to access the kitchen or admin dashboard
      </Text>

      <Card withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleLogin}>
          <TextInput 
            label="Email" 
            placeholder="staff@rushwise.com" 
            required 
            mb="md"
          />
          <PasswordInput 
            label="Password" 
            placeholder="Your password" 
            required 
            mb="xl"
          />
          <Button fullWidth color="orange" type="submit" leftSection={<LogIn size={18} />}>
            Sign in
          </Button>
        </form>
      </Card>
    </Container>
  );
}
