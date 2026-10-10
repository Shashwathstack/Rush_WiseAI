import { Container, Title, Grid, Card, Text, Group, Select } from '@mantine/core';
import { AreaChart, BarChart, DonutChart } from '@mantine/charts';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

export function AdminAnalytics() {
  const revenueData = [
    { time: '10:00', Revenue: 1200 },
    { time: '11:00', Revenue: 1900 },
    { time: '12:00', Revenue: 4500 },
    { time: '13:00', Revenue: 5200 },
    { time: '14:00', Revenue: 3100 },
    { time: '15:00', Revenue: 1500 },
  ];

  const popularItems = [
    { name: 'Masala Dosa', value: 45, color: 'orange.6' },
    { name: 'Cold Coffee', value: 30, color: 'blue.6' },
    { name: 'Veg Fried Rice', value: 15, color: 'green.6' },
    { name: 'Paneer Sandwich', value: 10, color: 'yellow.6' },
  ];

  return (
    <Container size="xl" py="md">
      <Group justify="space-between" mb="xl">
        <Title order={2}>Analytics Dashboard</Title>
        <Select
          defaultValue="today"
          data={[
            { value: 'today', label: 'Today' },
            { value: 'week', label: 'This Week' },
            { value: 'month', label: 'This Month' },
          ]}
        />
      </Group>

      <Grid mb="xl">
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" radius="md" withBorder>
            <Group justify="space-between">
              <div>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>Total Orders</Text>
                <Text fw={700} size="xl">142</Text>
              </div>
              <TrendingUp size={24} color="var(--mantine-color-blue-6)" />
            </Group>
          </Card>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" radius="md" withBorder>
            <Group justify="space-between">
              <div>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>Revenue</Text>
                <Text fw={700} size="xl">₹17,400</Text>
              </div>
              <DollarSign size={24} color="var(--mantine-color-green-6)" />
            </Group>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" radius="md" withBorder>
            <Group justify="space-between">
              <div>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>Unique Customers</Text>
                <Text fw={700} size="xl">89</Text>
              </div>
              <Users size={24} color="var(--mantine-color-orange-6)" />
            </Group>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" radius="md" withBorder>
            <Group justify="space-between">
              <div>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>Avg. Wait Time</Text>
                <Text fw={700} size="xl">8 mins</Text>
              </div>
              <Clock size={24} color="var(--mantine-color-red-6)" />
            </Group>
          </Card>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Card shadow="sm" radius="md" withBorder h="100%">
            <Title order={3} mb="md">Revenue Trend</Title>
            <AreaChart
              h={300}
              data={revenueData}
              dataKey="time"
              series={[
                { name: 'Revenue', color: 'orange.6' }
              ]}
              curveType="natural"
            />
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card shadow="sm" radius="md" withBorder h="100%">
            <Title order={3} mb="xl">Popular Items</Title>
            <Group justify="center">
              <DonutChart 
                data={popularItems} 
                size={200}
                thickness={30}
                withLabels
              />
            </Group>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
