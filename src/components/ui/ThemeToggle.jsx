import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      variant="subtle"
      color={isDark ? 'yellow' : 'blue'}
      size="lg"
      aria-label="Toggle color scheme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </ActionIcon>
  );
}
