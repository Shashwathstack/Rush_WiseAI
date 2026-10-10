import { Container, Title, Card, Text, Group, Button, Table, Badge, ActionIcon, Progress } from '@mantine/core';
import { Plus, Settings } from 'lucide-react';
import { demoSlots } from '../../utils/demoData';

export function AdminSlots() {
  return (
    <Container size="xl" py="md">
      <Group justify="space-between" mb="xl">
        <Title order={2}>Pickup Slots</Title>
        <Button color="orange" leftSection={<Plus size={16} />}>
          Create Custom Slot
        </Button>
      </Group>

      <Card shadow="sm" radius="md" withBorder>
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Time Slot</Table.Th>
              <Table.Th>Capacity / Reserved</Table.Th>
              <Table.Th>Utilization</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {demoSlots.map((slot, index) => {
              const util = (slot.reserved / slot.capacity) * 100;
              return (
                <Table.Tr key={index}>
                  <Table.Td fw={500}>{slot.time}</Table.Td>
                  <Table.Td>{slot.reserved} / {slot.capacity}</Table.Td>
                  <Table.Td>
                    <Progress value={util} color={util >= 100 ? 'red' : util >= 80 ? 'yellow' : 'green'} size="lg" />
                  </Table.Td>
                  <Table.Td>
                    <Badge color={slot.status === 'full' ? 'red' : slot.status === 'warning' ? 'yellow' : 'green'}>
                      {slot.status}
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    <ActionIcon variant="light" color="blue"><Settings size={16} /></ActionIcon>
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </Card>
    </Container>
  );
}
