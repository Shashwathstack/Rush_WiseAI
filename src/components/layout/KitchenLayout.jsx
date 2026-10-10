import { Outlet, Link, useLocation } from 'react-router-dom';
import { AppShell, Burger, Group, Text, NavLink, ScrollArea, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { 
  LayoutDashboard, 
  ListOrdered, 
  ChefHat, 
  Timer, 
  MenuSquare, 
  Settings, 
  LogOut,
  UtensilsCrossed
} from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import classes from './Layout.module.css';

const kitchenLinks = [
  { icon: LayoutDashboard, label: 'Overview', link: '/kitchen' },
  { icon: ListOrdered, label: 'Live Orders', link: '/kitchen/orders' },
  { icon: ChefHat, label: 'Kitchen Queue', link: '/kitchen/queue' },
  { icon: Timer, label: 'Capacity Management', link: '/kitchen/capacity' },
  { icon: MenuSquare, label: 'Batch Preparation', link: '/kitchen/batch-prep' },
];

export function KitchenLayout() {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();

  const links = kitchenLinks.map((item) => (
    <NavLink
      key={item.label}
      component={Link}
      to={item.link}
      label={item.label}
      leftSection={<item.icon size={20} strokeWidth={1.5} />}
      active={location.pathname === item.link}
      color="orange"
      variant="filled"
      style={{ borderRadius: 'var(--rw-radius)', marginBottom: 4 }}
    />
  ));

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 280,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Group gap="xs">
              <UtensilsCrossed size={24} color="var(--rw-orange)" />
              <Text fw={800} size="lg" className={classes.logo}>
                RushWise <Text component="span" c="dimmed" size="sm" fw={500}>Kitchen</Text>
              </Text>
            </Group>
          </Group>
          <Group>
            <ThemeToggle />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section grow component={ScrollArea}>
          {links}
        </AppShell.Section>
        <AppShell.Section>
          <Button
            component={Link}
            to="/staff/login"
            variant="light"
            color="red"
            fullWidth
            leftSection={<LogOut size={18} />}
          >
            Logout
          </Button>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main bg="var(--rw-bg)">
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
