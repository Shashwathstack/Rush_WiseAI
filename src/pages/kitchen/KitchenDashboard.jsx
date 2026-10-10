import { Container, Title, Grid, Card, Text, Group, RingProgress, Table, Badge, Button, ThemeIcon } from '@mantine/core';
import { ChefHat, Check, Clock, TrendingUp } from 'lucide-react';

const activeOrders = [
  { id: 'RW-102', items: '2x Masala Dosa, 1x Coffee', time: '12:15 PM', status: 'preparing', priority: 'high' },
  { id: 'RW-103', items: '1x Veg Fried Rice', time: '12:30 PM', status: 'pending', priority: 'medium' },
  { id: 'RW-104', items: '2x Paneer Sandwich', time: '12:30 PM', status: 'pending', priority: 'medium' },
  { id: 'RW-100', items: '1x Special Thali', time: '12:00 PM', status: 'ready', priority: 'low' },
];

export function KitchenDashboard() {
  const rows = activeOrders.map((order) => (
    <Table.Tr key={order.id}>
      <Table.Td fw={500}>{order.id}</Table.Td>
      <Table.Td>{order.items}</Table.Td>
      <Table.Td>{order.time}</Table.Td>
      <Table.Td>
        <Badge 
          color={order.status === 'ready' ? 'green' : order.status === 'preparing' ? 'blue' : 'gray'}
          variant="light"
        >
          {order.status}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Badge 
          color={order.priority === 'high' ? 'red' : order.priority === 'medium' ? 'yellow' : 'gray'}
          variant="dot"
        >
          {order.priority}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Button variant="light" size="xs" color="orange">View</Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="xl" py="md">
      <Title order={2} mb="xl">Kitchen Dashboard</Title>

      <Grid mb="xl">
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" radius="md" withBorder>
            <Group justify="space-between">
              <div>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>Active Orders</Text>
                <Text fw={700} size="xl">14</Text>
              </div>
              <ThemeIcon color="orange" variant="light" size="xl" radius="md">
                <ChefHat size={20} />
              </ThemeIcon>
            </Group>
          </Card>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" radius="md" withBorder>
            <Group justify="space-between">
              <div>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>Pending</Text>
                <Text fw={700} size="xl">8</Text>
              </div>
              <ThemeIcon color="gray" variant="light" size="xl" radius="md">
                <Clock size={20} />
              </ThemeIcon>
            </Group>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" radius="md" withBorder>
            <Group justify="space-between">
              <div>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>Ready for Pickup</Text>
                <Text fw={700} size="xl">6</Text>
              </div>
              <ThemeIcon color="green" variant="light" size="xl" radius="md">
                <Check size={20} />
              </ThemeIcon>
            </Group>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" radius="md" withBorder>
            <Group justify="space-between" wrap="nowrap">
              <div>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>Workload</Text>
                <Text fw={700} size="xl">75%</Text>
              </div>
              <RingProgress
                size={50}
                thickness={5}
                roundCaps
                sections={[{ value: 75, color: 'orange' }]}
              />
            </Group>
          </Card>
        </Grid.Col>
      </Grid>

      <Card shadow="sm" radius="md" withBorder>
        <Group justify="space-between" mb="md">
          <Title order={3}>Live Orders</Title>
          <Button variant="light" color="orange" leftSection={<TrendingUp size={16} />}>
            View Queue
          </Button>
        </Group>

        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Order ID</Table.Th>
              <Table.Th>Items</Table.Th>
              <Table.Th>Pickup Time</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Priority</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows}
          </Table.Tbody>
        </Table>
      </Card>
    </Container>
  );
}
