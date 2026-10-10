import { useState } from 'react';
import { Container, Title, Card, Text, Button, TextInput, Group, Stepper, Badge, Divider } from '@mantine/core';
import { Search, Clock, Check, Utensils, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [tracking, setTracking] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleTrack = () => {
    if (!orderId) return;
    setTracking(true);
    setTimeout(() => {
      setTracking(false);
      setSearched(true);
    }, 1000);
  };

  return (
    <Container size="sm" py="xl">
      <Title order={1} mb="md">Track Your Order</Title>
      
      <Card shadow="sm" radius="md" withBorder mb="xl">
        <Group align="flex-end">
          <TextInput
            label="Order ID"
            placeholder="e.g. RW-1234"
            value={orderId}
            onChange={(e) => setOrderId(e.currentTarget.value)}
            style={{ flex: 1 }}
            size="md"
          />
          <Button 
            onClick={handleTrack} 
            loading={tracking}
            size="md"
            color="orange"
            leftSection={<Search size={18} />}
          >
            Track
          </Button>
        </Group>
      </Card>

      {searched && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card shadow="md" radius="lg" withBorder padding="xl">
            <Group justify="space-between" mb="lg">
              <div>
                <Text size="xs" c="dimmed" tt="uppercase" fw={700}>Order Status</Text>
                <Title order={3}>{orderId}</Title>
              </div>
              <Badge size="lg" color="blue" variant="light">Preparing</Badge>
            </Group>

            <Stepper active={1} color="orange" orientation="vertical" mb="xl">
              <Stepper.Step 
                label="Order Confirmed" 
                description="12:05 PM - Kitchen received your order" 
                icon={<Check size={18} />}
              />
              <Stepper.Step 
                label="Preparing" 
                description="12:10 PM - Currently being prepared" 
                icon={<Utensils size={18} />}
              />
              <Stepper.Step 
                label="Ready for Pickup" 
                description="Estimated: 12:30 PM" 
                icon={<Clock size={18} />}
              />
            </Stepper>

            <Divider my="md" />
            
            <Title order={4} mb="sm">Items</Title>
            <Group justify="space-between" mb="xs">
              <Text>2x Masala Dosa</Text>
              <Text c="dimmed">₹120</Text>
            </Group>
            <Group justify="space-between">
              <Text>1x Cold Coffee</Text>
              <Text c="dimmed">₹50</Text>
            </Group>
            
            <AlertCircle size={16} style={{ display: 'inline', marginRight: 8, marginTop: 20, color: 'var(--mantine-color-dimmed)' }} />
            <Text size="sm" c="dimmed" style={{ display: 'inline' }}>
              Please show your Order ID at the counter to collect your food.
            </Text>
          </Card>
        </motion.div>
      )}
    </Container>
  );
}
