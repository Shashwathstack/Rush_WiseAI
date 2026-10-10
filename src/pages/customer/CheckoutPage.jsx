import { useState } from 'react';
import { Container, Title, Grid, Card, Text, Button, Group, Divider, ActionIcon, Alert, Select } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Trash2, Clock, Info } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { demoSlots } from '../../utils/demoData';
import { toast } from 'sonner';

export function CheckoutPage() {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (!selectedSlot) {
      toast.error('Please select a pickup time');
      return;
    }
    
    const slot = demoSlots.find(s => s.time === selectedSlot);
    if (slot && slot.status === 'full') {
      toast.error('This slot is now full. Please select another time.');
      return;
    }

    setLoading(true);
    // Simulate backend call
    setTimeout(() => {
      clearCart();
      setLoading(false);
      navigate('/order-confirmation/RW-' + Math.floor(Math.random() * 10000));
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <Container size="sm" py="xl" ta="center">
        <Title order={2} mb="md">Your cart is empty</Title>
        <Text c="dimmed" mb="xl">Looks like you haven't added any food yet.</Text>
        <Button onClick={() => navigate('/menu')} color="orange">Browse Menu</Button>
      </Container>
    );
  }

  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="xl">Checkout</Title>

      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Card shadow="sm" radius="md" withBorder mb="lg">
            <Title order={3} mb="lg">Your Items</Title>
            {items.map((item) => (
              <div key={item.id}>
                <Group justify="space-between" mb="md" wrap="nowrap">
                  <div style={{ flex: 1 }}>
                    <Text fw={500}>{item.name}</Text>
                    <Text size="sm" c="dimmed">₹{item.price} each</Text>
                  </div>
                  
                  <Group gap="xs">
                    <ActionIcon variant="light" color="gray" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus size={16} />
                    </ActionIcon>
                    <Text fw={500} w={20} ta="center">{item.quantity}</Text>
                    <ActionIcon variant="light" color="orange" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus size={16} />
                    </ActionIcon>
                  </Group>

                  <Text fw={600} w={60} ta="right">₹{item.price * item.quantity}</Text>
                  
                  <ActionIcon color="red" variant="subtle" onClick={() => removeFromCart(item.id)}>
                    <Trash2 size={18} />
                  </ActionIcon>
                </Group>
                <Divider my="sm" />
              </div>
            ))}
          </Card>

          <Card shadow="sm" radius="md" withBorder>
            <Title order={3} mb="md">Schedule Pickup</Title>
            <Alert icon={<Info size={16} />} title="Smart Scheduling" color="blue" mb="md">
              Select an available time slot. Slots have limited capacity to ensure fresh food and no waiting.
            </Alert>
            
            <Select
              label="Select Pickup Time"
              placeholder="Pick a time slot"
              data={demoSlots.map(slot => ({
                value: slot.time,
                label: `${slot.time} - ${slot.status === 'full' ? 'Full' : 'Available'}`,
                disabled: slot.status === 'full'
              }))}
              value={selectedSlot}
              onChange={setSelectedSlot}
              size="md"
              mb="md"
            />

            {selectedSlot && (
              <Card withBorder bg="var(--mantine-color-orange-light)" padding="sm" radius="md">
                <Group>
                  <Clock size={20} color="var(--rw-orange)" />
                  <Text fw={500}>Estimated Ready Time: {selectedSlot}</Text>
                </Group>
              </Card>
            )}
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }}>
          <Card shadow="sm" radius="md" withBorder style={{ position: 'sticky', top: 90 }}>
            <Title order={3} mb="md">Order Summary</Title>
            
            <Group justify="space-between" mb="xs">
              <Text c="dimmed">Subtotal</Text>
              <Text fw={500}>₹{totalPrice}</Text>
            </Group>
            
            <Group justify="space-between" mb="xs">
              <Text c="dimmed">Taxes (5%)</Text>
              <Text fw={500}>₹{(totalPrice * 0.05).toFixed(2)}</Text>
            </Group>

            <Divider my="md" />

            <Group justify="space-between" mb="xl">
              <Text size="lg" fw={700}>Total</Text>
              <Text size="lg" fw={700} c="orange">₹{(totalPrice * 1.05).toFixed(2)}</Text>
            </Group>

            <Button 
              fullWidth 
              size="lg" 
              color="orange" 
              onClick={handlePlaceOrder}
              loading={loading}
            >
              Confirm & Pay
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
