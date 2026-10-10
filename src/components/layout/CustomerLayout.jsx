import { Outlet, Link, useLocation } from 'react-router-dom';
import { AppShell, Burger, Group, Button, Badge, UnstyledButton, Text, Drawer, Stack, Menu, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ShoppingCart, UtensilsCrossed, User, Settings, ChefHat } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useCart } from '../../contexts/CartContext';
import classes from './Layout.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/menu', label: 'Menu' },
  { link: '/track-order', label: 'My Orders' },
  { link: '/track-order', label: 'Track Order' },
];

export function CustomerLayout() {
  const [opened, { toggle, close }] = useDisclosure();
  const location = useLocation();
  const { totalItems } = useCart();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={location.pathname === link.link || undefined}
      onClick={close}
    >
      {link.label}
    </Link>
  ));

  return (
    <AppShell
      header={{ height: 70 }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Group gap="xs">
                <UtensilsCrossed size={28} color="var(--rw-orange)" />
                <Text fw={800} size="xl" className={classes.logo}>
                  RushWise
                </Text>
              </Group>
            </Link>
          </Group>

          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>

          <Group>
            <ThemeToggle />
            <Button
              component={Link}
              to="/checkout"
              variant="light"
              color="orange"
              leftSection={<ShoppingCart size={18} />}
              radius="xl"
            >
              Cart
              {totalItems > 0 && (
                <Badge color="orange" size="sm" circle ml="xs">
                  {totalItems}
                </Badge>
              )}
            </Button>
            
            <Menu shadow="md" width={200} position="bottom-end">
              <Menu.Target>
                <ActionIcon variant="light" color="gray" size="lg" radius="xl">
                  <User size={20} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Profiles</Menu.Label>
                <Menu.Item leftSection={<User size={14} />} component={Link} to="/login?role=customer">
                  Customer / User
                </Menu.Item>
                <Menu.Item leftSection={<ChefHat size={14} />} component={Link} to="/staff/login">
                  Kitchen Staff
                </Menu.Item>
                <Menu.Item leftSection={<Settings size={14} />} component={Link} to="/admin/login">
                  Admin
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>

      <Drawer opened={opened} onClose={close} size="sm" title="RushWise" hiddenFrom="sm">
        <Stack gap="md">
          {items}
        </Stack>
      </Drawer>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
