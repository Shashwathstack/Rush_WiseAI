import { Container, Title, Card, Text, Button, Group, ThemeIcon, rem, Stepper } from '@mantine/core';
import { useParams, Link } from 'react-router-dom';
import { Check, Clock, Utensils, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function OrderConfirmationPage() {
  const { orderId } = useParams();

  return (
    <Container size="sm" py="xl">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        <Card shadow="md" radius="lg" padding="xl" withBorder ta="center">
          <ThemeIcon size={80} radius="100%" color="green" variant="light" mx="auto" mb="lg">
            <Check style={{ width: rem(40), height: rem(40) }} />
          </ThemeIcon>
          
          <Title order={2} mb="xs">Order Confirmed!</Title>
          <Text c="dimmed" mb="xl">
            Your order <strong>{orderId}</strong> has been received and sent to the kitchen.
          </Text>

          <Card bg="var(--mantine-color-gray-0)" radius="md" mb="xl" style={{ textAlign: 'left' }} darkHidden>
            <Group justify="space-between" mb="xs">
              <Text c="dimmed" size="sm">Estimated Pickup Time</Text>
              <Text fw={600} color="orange">12:30 PM</Text>
            </Group>
            <Group justify="space-between">
              <Text c="dimmed" size="sm">Total Paid</Text>
              <Text fw={600}>₹189.00</Text>
            </Group>
          </Card>
          
          <Card bg="var(--mantine-color-dark-6)" radius="md" mb="xl" style={{ textAlign: 'left' }} lightHidden>
            <Group justify="space-between" mb="xs">
              <Text c="dimmed" size="sm">Estimated Pickup Time</Text>
              <Text fw={600} color="orange">12:30 PM</Text>
            </Group>
            <Group justify="space-between">
              <Text c="dimmed" size="sm">Total Paid</Text>
              <Text fw={600}>₹189.00</Text>
            </Group>
          </Card>

          <Stepper active={0} color="orange" size="sm" mb="xl" iconSize={32}>
            <Stepper.Step icon={<Check size={18} />} label="Confirmed" />
            <Stepper.Step icon={<Utensils size={18} />} label="Preparing" />
            <Stepper.Step icon={<Clock size={18} />} label="Ready" />
          </Stepper>

          <Group justify="center" mt="xl">
            <Button component={Link} to="/track-order" color="orange" size="md" radius="xl">
              Track Order
            </Button>
            <Button component={Link} to="/menu" variant="default" size="md" radius="xl">
              Back to Menu
            </Button>
          </Group>
        </Card>
      </motion.div>
    </Container>
  );
}
