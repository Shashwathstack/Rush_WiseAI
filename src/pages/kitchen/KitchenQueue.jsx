import { useState } from 'react';
import { Container, Title, Card, Text, Group, Badge, Button, Grid, TextInput, Select, Drawer, Stack, Divider } from '@mantine/core';
import { Search, ChefHat, Check, Clock, AlertCircle } from 'lucide-react';
import { demoOrders } from '../../utils/demoData';

export function KitchenQueue() {
  const [search, setSearch] = useState('');
  const [orders, setOrders] = useState(demoOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = orders.filter(o => o.id.toLowerCase().includes(search.toLowerCase()));

  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
    setSelectedOrder(null);
  };

  return (
    <Container size="xl" py="md">
      <Group justify="space-between" mb="xl">
        <Title order={2}>Preparation Queue</Title>
      </Group>

      <Card shadow="sm" radius="md" withBorder mb="xl">
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              placeholder="Search by Order ID..."
              leftSection={<Search size={16} />}
              value={search}
              onChange={(e) => setSearch(e.currentTarget.value)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Select
              placeholder="Filter by Status"
              data={['All', 'Pending', 'Preparing', 'Ready']}
              defaultValue="All"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Select
              placeholder="Sort by"
              data={['Urgency', 'Pickup Time']}
              defaultValue="Urgency"
            />
          </Grid.Col>
        </Grid>
      </Card>

      <Grid>
        {filteredOrders.filter(o => o.status !== 'ready').map(order => (
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={order.id}>
            <Card shadow="sm" radius="md" withBorder style={{ borderLeft: order.priority === 'high' ? '4px solid var(--mantine-color-red-6)' : undefined }}>
              <Group justify="space-between" mb="xs">
                <Text fw={700} size="lg">{order.id}</Text>
                <Badge color={order.status === 'preparing' ? 'blue' : 'gray'}>{order.status}</Badge>
              </Group>

              <Group gap="xs" mb="md">
                <Clock size={16} color="var(--mantine-color-dimmed)" />
                <Text size="sm" c="dimmed">Pickup: {order.time}</Text>
                {order.priority === 'high' && (
                  <Badge color="red" variant="light" size="xs">Urgent</Badge>
                )}
              </Group>

              <Divider mb="md" />

              <Stack gap="xs" mb="xl">
                {order.items.map((item, idx) => (
                  <Group key={idx} justify="space-between">
                    <Text size="sm">{item.qty}x {item.name}</Text>
                  </Group>
                ))}
              </Stack>

              <Group grow>
                <Button variant="light" color="orange" onClick={() => setSelectedOrder(order)}>Details</Button>
                {order.status === 'pending' && (
                  <Button color="blue" onClick={() => handleStatusChange(order.id, 'preparing')}>Start</Button>
                )}
                {order.status === 'preparing' && (
                  <Button color="green" onClick={() => handleStatusChange(order.id, 'ready')}>Ready</Button>
                )}
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Drawer
        opened={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        title={<Title order={3}>Order {selectedOrder?.id}</Title>}
        position="right"
      >
        {selectedOrder && (
          <Stack>
            <Group justify="space-between">
              <Text c="dimmed">Status:</Text>
              <Badge>{selectedOrder.status}</Badge>
            </Group>
            <Group justify="space-between">
              <Text c="dimmed">Pickup Deadline:</Text>
              <Text fw={500}>{selectedOrder.time}</Text>
            </Group>
            <Divider my="sm" />
            <Title order={4}>Items to Prepare</Title>
            {selectedOrder.items.map((item, idx) => (
              <Group justify="space-between" key={idx}>
                <Text fw={500}>{item.name}</Text>
                <Badge variant="outline">{item.qty}</Badge>
              </Group>
            ))}

            <Button mt="xl" fullWidth color="blue" disabled={selectedOrder.status !== 'pending'} onClick={() => handleStatusChange(selectedOrder.id, 'preparing')}>Start Preparing</Button>
            <Button fullWidth color="green" disabled={selectedOrder.status !== 'preparing'} onClick={() => handleStatusChange(selectedOrder.id, 'ready')}>Mark as Ready</Button>
          </Stack>
        )}
      </Drawer>
    </Container>
  );
}
