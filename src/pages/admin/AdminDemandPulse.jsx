import { Container, Title, Card, Text, Group, Button, Badge, ThemeIcon, Progress, Divider } from '@mantine/core';
import { Activity, Plus, X, RefreshCw } from 'lucide-react';

export function AdminDemandPulse() {
  return (
    <Container size="xl" py="md">
      <Group justify="space-between" mb="xl">
        <Title order={2}>DemandPulse Intelligence</Title>
        <Button variant="light" color="orange" leftSection={<RefreshCw size={16} />}>Refresh</Button>
      </Group>

      <Card shadow="sm" radius="md" withBorder mb="xl" bg="var(--mantine-color-orange-light)">
        <Group align="flex-start" wrap="nowrap">
          <ThemeIcon color="orange" size="xl" radius="md">
            <Activity size={24} />
          </ThemeIcon>
          <div>
            <Title order={3} mb="xs">High Demand Detected</Title>
            <Text mb="sm">The 1:00 PM slot is currently at 90% utilization due to high orders of Masala Dosa and Veg Fried Rice. Kitchen capacity allows for an extra 15-minute slot at 1:30 PM.</Text>
            
            <Divider my="md" />
            
            <Group>
              <div>
                <Text size="sm" c="dimmed">Proposed Slot</Text>
                <Text fw={700}>1:30 PM</Text>
              </div>
              <div>
                <Text size="sm" c="dimmed">Est. Extra Workload</Text>
                <Text fw={700}>8 Units</Text>
              </div>
              <div>
                <Text size="sm" c="dimmed">Kitchen Status</Text>
                <Badge color="green">Capacity Available</Badge>
              </div>
            </Group>

            <Group mt="lg">
              <Button color="orange" leftSection={<Plus size={16} />}>Approve & Create Slot</Button>
              <Button variant="outline" color="red" leftSection={<X size={16} />}>Reject Suggestion</Button>
            </Group>
          </div>
        </Group>
      </Card>

      <Title order={3} mb="md">Current Slot Utilization</Title>
      <Card shadow="sm" radius="md" withBorder>
        <Group justify="space-between" mb="xs">
          <Text fw={500}>1:00 PM</Text>
          <Text size="sm" c="dimmed">9/10 Units (90%)</Text>
        </Group>
        <Progress value={90} color="red" mb="md" />

        <Group justify="space-between" mb="xs">
          <Text fw={500}>1:15 PM</Text>
          <Text size="sm" c="dimmed">8/10 Units (80%)</Text>
        </Group>
        <Progress value={80} color="yellow" mb="md" />

        <Group justify="space-between" mb="xs">
          <Text fw={500}>1:30 PM (Proposed)</Text>
          <Text size="sm" c="dimmed">0/10 Units (0%)</Text>
        </Group>
        <Progress value={0} color="green" />
      </Card>
    </Container>
  );
}
