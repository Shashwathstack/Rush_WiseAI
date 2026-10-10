import { Container, Title, Card, Text, Group, Badge, SimpleGrid, RingProgress, List, ThemeIcon } from '@mantine/core';
import { ChefHat } from 'lucide-react';
import { demoOrders } from '../../utils/demoData';

export function KitchenBatchPrep() {
  // Aggregate items from pending and preparing orders
  const activeItems = {};
  demoOrders.filter(o => o.status !== 'ready').forEach(order => {
    order.items.forEach(item => {
      if (!activeItems[item.name]) activeItems[item.name] = 0;
      activeItems[item.name] += item.qty;
    });
  });

  const batches = Object.entries(activeItems).map(([name, qty]) => ({ name, qty }));
  batches.sort((a, b) => b.qty - a.qty);

  return (
    <Container size="xl" py="md">
      <Group justify="space-between" mb="xl">
        <div>
          <Title order={2}>Batch Preparation</Title>
          <Text c="dimmed">Aggregate quantities to prepare similar foods together efficiently.</Text>
        </div>
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>
        {batches.map((batch, idx) => (
          <Card key={idx} shadow="sm" radius="md" withBorder>
            <Group justify="space-between" mb="md">
              <Text fw={700} size="lg">{batch.name}</Text>
              <ThemeIcon color="orange" variant="light" size="lg" radius="xl">
                <ChefHat size={18} />
              </ThemeIcon>
            </Group>
            
            <Group>
              <RingProgress
                size={80}
                thickness={8}
                roundCaps
                sections={[{ value: (batch.qty / 15) * 100, color: 'blue' }]}
                label={
                  <Text ta="center" fw={700} size="xl">
                    {batch.qty}
                  </Text>
                }
              />
              <div>
                <Text size="sm" c="dimmed">Total Portions</Text>
                <Badge variant="outline" color="blue">To Prepare</Badge>
              </div>
            </Group>
          </Card>
        ))}
        {batches.length === 0 && (
          <Text c="dimmed" mt="xl">No active items to batch prepare.</Text>
        )}
      </SimpleGrid>
    </Container>
  );
}
