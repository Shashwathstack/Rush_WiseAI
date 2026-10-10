import { Container, Title, Text, Button, Group, Image, SimpleGrid, Card, ThemeIcon, rem } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Clock, Smartphone, ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Clock,
    title: 'Smart Scheduling',
    description: 'Pick a 15-minute slot that works for you. No more waiting in long lines.',
  },
  {
    icon: Smartphone,
    description: 'Order from anywhere on campus and get notified when your food is ready.',
    title: 'Order Anywhere',
  },
  {
    icon: ChefHat,
    title: 'Fresh & Hot',
    description: 'Kitchen staff start preparing your food right before your pickup time.',
  },
];

export function LandingPage() {
  const featureItems = features.map((feature) => (
    <Card key={feature.title} shadow="sm" radius="md" padding="xl" withBorder>
      <ThemeIcon
        size={50}
        radius="md"
        variant="light"
        color="orange"
      >
        <feature.icon style={{ width: rem(26), height: rem(26) }} strokeWidth={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7} fw={600} size="lg">
        {feature.title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ textAlign: 'center', marginTop: rem(40), marginBottom: rem(80) }}>
          <Title order={1} fw={900} size="3.5rem" mb="md" style={{ color: 'var(--rw-charcoal)' }}>
            Beat the rush. <br />
            <Text component="span" c="orange" inherit>Pick your time.</Text>
          </Title>

          <Text c="dimmed" mt="md" size="xl" mx="auto" maw={600}>
            RushWise helps you order food in advance, choose suitable pickup times, and avoid long queues at the college canteen.
          </Text>

          <Group justify="center" mt="xl">
            <Button
              component={Link}
              to="/menu"
              size="xl"
              radius="xl"
              color="orange"
            >
              Order Now
            </Button>
            <Button
              component={Link}
              to="/track-order"
              size="xl"
              radius="xl"
              variant="default"
            >
              Track Order
            </Button>
          </Group>
        </div>
      </motion.div>

      <Title order={2} ta="center" mb="xl">
        How RushWise Works
      </Title>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {featureItems}
      </SimpleGrid>

      <div style={{ marginTop: rem(100), textAlign: 'center', padding: rem(40), backgroundColor: 'rgba(255, 112, 67, 0.05)', borderRadius: 'var(--rw-radius)' }}>
         <Title order={3} mb="md">Are you canteen staff?</Title>
         <Text mb="xl">Manage incoming orders, preparation priorities, and pickup deadlines.</Text>
         <Button component={Link} to="/staff/login" variant="outline" color="orange">
           Staff Portal
         </Button>
      </div>
    </Container>
  );
}
