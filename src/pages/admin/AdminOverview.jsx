import { Container, Title, Grid, Card, Text, Group, ThemeIcon, Table, Badge, Button } from '@mantine/core';
import { DollarSign, Clock, Users, Activity, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { demoOrders, demoSlots } from '../../utils/demoData';

export function AdminOverview() {
  return (
    <Container size="xl" py="md">
      <Title order={2} mb="xl">Admin Overview</Title>

      <Grid mb="xl">
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" radius="md" withBorder>
            <Group justify="space-between">
              <div>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>Orders Today</Text>
                <Text fw={700} size="xl">142</Text>
              </div>
              <ThemeIcon color="orange" variant="light" size="xl" radius="md">
                <ShoppingBag size={20} />
              </ThemeIcon>
            </Group>
          </Card>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" radius="md" withBorder>
            <Group justify="space-between">
              <div>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>Revenue (Demo)</Text>
                <Text fw={700} size="xl">₹17,400</Text>
              </div>
              <ThemeIcon color="green" variant="light" size="xl" radius="md">
                <DollarSign size={20} />
              </ThemeIcon>
            </Group>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" radius="md" withBorder>
            <Group justify="space-between">
              <div>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>Avg Prep Time</Text>
                <Text fw={700} size="xl">12 mins</Text>
              </div>
              <ThemeIcon color="blue" variant="light" size="xl" radius="md">
                <Clock size={20} />
              </ThemeIcon>
            </Group>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" radius="md" withBorder>
            <Group justify="space-between">
              <div>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>Peak Workload</Text>
                <Text fw={700} size="xl">95%</Text>
              </div>
              <ThemeIcon color="red" variant="light" size="xl" radius="md">
                <Activity size={20} />
              </ThemeIcon>
            </Group>
          </Card>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" radius="md" withBorder h="100%">
            <Group justify="space-between" mb="md">
              <Title order={3}>DemandPulse Alerts</Title>
              <Button component={Link} to="/admin/demand-pulse" variant="light" color="orange" size="xs">Manage</Button>
            </Group>
            <Card withBorder radius="md" mb="sm" bg="var(--mantine-color-orange-light)">
              <Group justify="space-between">
                <div>
                  <Text fw={500}>High Demand: Masala Dosa</Text>
                  <Text size="sm" c="dimmed">Consider adding a 1:30 PM slot</Text>
                </div>
                <Badge color="orange">Action Needed</Badge>
              </Group>
            </Card>
            <Card withBorder radius="md">
              <Group justify="space-between">
                <div>
                  <Text fw={500}>1:00 PM Slot Approaching Capacity</Text>
                  <Text size="sm" c="dimmed">90% Utilization</Text>
                </div>
                <Badge color="yellow">Warning</Badge>
              </Group>
            </Card>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" radius="md" withBorder h="100%">
            <Group justify="space-between" mb="md">
              <Title order={3}>Quick Actions</Title>
            </Group>
            <Group grow mb="md">
              <Button component={Link} to="/admin/menu" color="orange" leftSection={<ShoppingBag size={16} />}>Manage Menu</Button>
              <Button component={Link} to="/admin/pickup-slots" color="blue" leftSection={<Clock size={16} />}>Manage Slots</Button>
            </Group>
            <Group grow>
              <Button component={Link} to="/admin/analytics" color="green" variant="light" leftSection={<Activity size={16} />}>View Analytics</Button>
              <Button component={Link} to="/admin/settings" color="gray" variant="light" leftSection={<Users size={16} />}>Settings</Button>
            </Group>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
