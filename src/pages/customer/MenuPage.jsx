
import { useState, useEffect } from 'react';
import {
  Container,
  Title,
  TextInput,
  SimpleGrid,
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Alert,
  Loader,
  Center,
  Stack,
} from '@mantine/core';
import { Search, AlertCircle } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { toast, Toaster } from 'sonner';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';

export function MenuPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { addToCart } = useCart();

  // Fetch available dishes from Supabase
  useEffect(() => {
    let isMounted = true;

    async function fetchMenuItems() {
      setLoading(true);
      setError('');

      const { data, error: fetchError } = await supabase
        .from('menu_items')
        .select(
          'id, name, description, category, image_url, price, is_available'
        )
        .eq('is_available', true)
        .order('name', { ascending: true });

      if (!isMounted) return;

      if (fetchError) {
        console.error('Failed to fetch menu:', fetchError.message);
        setError(
          'Unable to load the menu. Please check your connection and try again.'
        );
        setMenuItems([]);
      } else {
        // Adapt Supabase column names to your existing cart item format.
        const formattedItems = (data || []).map((item) => ({
          ...item,
          image: item.image_url,
          available: item.is_available,
          dietary: [],
          prepTime: 15,
        }));

        setMenuItems(formattedItems);
      }

      setLoading(false);
    }

    fetchMenuItems();

    return () => {
      isMounted = false;
    };
  }, []);

  // Generate categories from the actual database records.
  const categories = [
    'All',
    ...new Set(
      menuItems
        .map((item) => item.category)
        .filter((category) => category && category.trim() !== '')
    ),
  ];

  const filteredItems = menuItems.filter((item) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm) ||
      (item.category || '').toLowerCase().includes(searchTerm) ||
      (item.description || '').toLowerCase().includes(searchTerm);

    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const handleAdd = (item) => {
    if (!item.available) {
      toast.error('This item is currently unavailable.');
      return;
    }

    addToCart(item);
    toast.success(`${item.name} added to cart`);
  };

  return (
    <Container size="xl" py="xl">
      <Toaster position="bottom-right" />

      <div style={{ marginBottom: 30 }}>
        <Title order={1} mb="md">
          Menu
        </Title>

        <TextInput
          placeholder="Search for food..."
          size="lg"
          leftSection={<Search size={20} />}
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          radius="md"
          mb="xl"
        />

        <Group
          gap="sm"
          style={{
            overflowX: 'auto',
            flexWrap: 'nowrap',
            paddingBottom: '10px',
          }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'filled' : 'light'}
              color="orange"
              onClick={() => setActiveCategory(category)}
              radius="xl"
            >
              {category}
            </Button>
          ))}
        </Group>
      </div>

      {loading && (
        <Center py={60}>
          <Stack align="center" gap="sm">
            <Loader color="orange" size="lg" />
            <Text c="dimmed">Loading menu from Supabase...</Text>
          </Stack>
        </Center>
      )}

      {!loading && error && (
        <Alert
          icon={<AlertCircle size={18} />}
          title="Menu loading failed"
          color="red"
          variant="light"
        >
          <Stack gap="sm">
            <Text size="sm">{error}</Text>
            <Button
              color="orange"
              variant="light"
              onClick={() => window.location.reload()}
            >
              Retry
            </Button>
          </Stack>
        </Alert>
      )}

      {!loading && !error && (
        <>
          <SimpleGrid
            cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing="lg"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                style={{ height: '100%' }}
              >
                <Card
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Card.Section>
                    <Image
                      src={item.image || undefined}
                      height={160}
                      alt={item.name}
                      fallbackSrc="https://placehold.co/600x400?text=Food"
                    />
                  </Card.Section>

                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={600} size="lg">
                      {item.name}
                    </Text>

                    <Badge color="orange" variant="light">
                      ₹{Number(item.price).toFixed(2)}
                    </Badge>
                  </Group>

                  <Group gap={5} mb="sm">
                    {item.category && (
                      <Badge color="gray" variant="outline">
                        {item.category}
                      </Badge>
                    )}

                    {item.dietary.map((diet) => (
                      <Badge
                        key={diet}
                        color={diet === 'Vegan' ? 'green' : 'gray'}
                        size="xs"
                        variant="outline"
                      >
                        {diet}
                      </Badge>
                    ))}
                  </Group>

                  <Text
                    size="sm"
                    c="dimmed"
                    style={{ flexGrow: 1 }}
                    lineClamp={3}
                  >
                    {item.description || 'Freshly prepared for you.'}
                  </Text>

                  <Text size="xs" c="dimmed" mt="sm">
                    Estimated prep time: ~{item.prepTime} mins
                  </Text>

                  <Button
                    color="orange"
                    fullWidth
                    mt="md"
                    radius="md"
                    disabled={!item.available}
                    onClick={() => handleAdd(item)}
                  >
                    {item.available ? 'Add to cart' : 'Out of stock'}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>

          {filteredItems.length === 0 && (
            <Text ta="center" c="dimmed" mt={50} size="lg">
              {menuItems.length === 0
                ? 'No menu items are available yet.'
                : 'No food items found matching your search.'}
            </Text>
          )}
        </>
      )}
    </Container>
  );
}
