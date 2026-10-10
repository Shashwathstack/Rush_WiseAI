import { Container, Title, Card, Text, Group, Progress, SimpleGrid, Badge, Button, Select } from '@mantine/core';
import { demoSlots } from '../../utils/demoData';

export function KitchenCapacity() {
  return (
    <Container size="xl" py="md">
      <Group justify="space-between" mb="xl">
        <Title order={2}>Capacity Management</Title>
        <Select
          defaultValue="today"
          data={[
            { value: 'today', label: 'Today' },
            { value: 'tomorrow', label: 'Tomorrow' },
          ]}
        />
      </Group>

      <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }}>
        {demoSlots.map((slot, index) => {
          const util = (slot.reserved / slot.capacity) * 100;
          return (
            <Card key={index} shadow="sm" radius="md" withBorder>
              <Group justify="space-between" mb="sm">
                <Text fw={700} size="lg">{slot.time}</Text>
                <Badge color={slot.status === 'full' ? 'red' : slot.status === 'warning' ? 'yellow' : 'green'}>
                  {slot.status.toUpperCase()}
                </Badge>
              </Group>

              <Group justify="space-between" mb="xs">
                <Text size="sm" c="dimmed">Reserved: {slot.reserved}</Text>
                <Text size="sm" c="dimmed">Capacity: {slot.capacity}</Text>
              </Group>

              <Progress 
                value={util} 
                color={util >= 100 ? 'red' : util >= 80 ? 'yellow' : 'green'} 
                mb="md"
              />

              <Button variant="light" color="orange" fullWidth disabled={slot.status === 'full'}>
                Adjust Capacity
              </Button>
            </Card>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
