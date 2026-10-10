import { Container, Title, Card, Text, Group, Badge, Button, Stack, Divider } from '@mantine/core';
import { Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MyOrdersPage() {
  const mockOrders = [
    {
      id: 'RW-1234',
      date: 'Today, 12:05 PM',
      status: 'Preparing',
      total: '₹170',
      items: '2x Masala Dosa, 1x Cold Coffee'
    },
    {
      id: 'RW-1102',
      date: 'Yesterday, 01:15 PM',
      status: 'Completed',
      total: '₹220',
      items: '1x Veg Biryani, 1x Raita, 1x Coke'
    },
    {
      id: 'RW-0945',
      date: 'Oct 08, 09:30 AM',
      status: 'Completed',
      total: '₹90',
      items: '2x Idli, 1x Tea'
    }
  ];

  return (
    <Container size="sm" py="xl">
      <Title order={1} mb="xl">My Orders</Title>
      
      <Stack gap="md">
        {mockOrders.map((order) => (
          <Card key={order.id} shadow="sm" radius="md" withBorder padding="lg">
            <Group justify="space-between" mb="xs">
              <div>
                <Text fw={700} size="lg">{order.id}</Text>
                <Text size="sm" c="dimmed">
                  <Clock size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                  {order.date}
                </Text>
              </div>
              <Badge 
                color={order.status === 'Preparing' ? 'blue' : 'green'} 
                variant="light" 
                size="lg"
              >
                {order.status}
              </Badge>
            </Group>
            
            <Divider my="sm" />
            
            <Group justify="space-between" align="center">
              <div style={{ flex: 1, paddingRight: 16 }}>
                <Text size="sm" lineClamp={1}>{order.items}</Text>
                <Text fw={600} mt="xs">Total: {order.total}</Text>
              </div>
              <Button 
                component={Link} 
                to="/track-order"
                variant="light" 
                color="orange"
                rightSection={<ChevronRight size={16} />}
              >
                {order.status === 'Preparing' ? 'Track' : 'Details'}
              </Button>
            </Group>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
