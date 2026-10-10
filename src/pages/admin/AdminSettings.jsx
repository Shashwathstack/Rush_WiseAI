import { Container, Title, Card, Text, Group, Button, Switch, NumberInput, Divider, Stack } from '@mantine/core';

export function AdminSettings() {
  return (
    <Container size="xl" py="md">
      <Title order={2} mb="xl">Kitchen Settings</Title>

      <Card shadow="sm" radius="md" withBorder mb="xl">
        <Title order={3} mb="md">Operational Hours & Capacity</Title>
        <Stack gap="md">
          <Group justify="space-between">
            <div>
              <Text fw={500}>Kitchen Status</Text>
              <Text size="sm" c="dimmed">Accepting new orders</Text>
            </div>
            <Switch defaultChecked color="orange" size="md" />
          </Group>
          
          <Divider />
          
          <Group justify="space-between">
            <div>
              <Text fw={500}>Default Slot Capacity</Text>
              <Text size="sm" c="dimmed">Maximum workload units per 15-min slot</Text>
            </div>
            <NumberInput defaultValue={10} min={1} max={50} w={100} />
          </Group>

          <Divider />
          
          <Group justify="space-between">
            <div>
              <Text fw={500}>Auto-Approve DemandPulse</Text>
              <Text size="sm" c="dimmed">Automatically create suggested slots when capacity allows</Text>
            </div>
            <Switch color="orange" size="md" />
          </Group>
        </Stack>
      </Card>

      <Button color="orange" size="md">Save Changes</Button>
    </Container>
  );
}
