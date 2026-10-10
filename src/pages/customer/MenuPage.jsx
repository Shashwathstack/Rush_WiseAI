import { useState } from 'react';
import { Container, Title, TextInput, SimpleGrid, Card, Image, Text, Badge, Button, Group, ActionIcon } from '@mantine/core';
import { Search, Plus, Minus } from 'lucide-react';
import { demoMenuItems, categories } from '../../utils/demoData';
import { useCart } from '../../contexts/CartContext';
import { toast, Toaster } from 'sonner';
import { motion } from 'framer-motion';

export function MenuPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useCart();

  const filteredItems = demoMenuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAdd = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart`);
  };

  return (
    <Container size="xl" py="xl">
      <Toaster position="bottom-right" />
      <div style={{ marginBottom: 30 }}>
        <Title order={1} mb="md">Menu</Title>
        <TextInput
          placeholder="Search for food..."
          size="lg"
          leftSection={<Search size={20} />}
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          radius="md"
          mb="xl"
        />
        
        <Group gap="sm" style={{ overflowX: 'auto', flexWrap: 'nowrap', paddingBottom: '10px' }}>
          <Button 
            variant={activeCategory === 'All' ? 'filled' : 'light'} 
            color="orange" 
            onClick={() => setActiveCategory('All')}
            radius="xl"
          >
            All
          </Button>
          {categories.map(cat => (
            <Button 
              key={cat}
              variant={activeCategory === cat ? 'filled' : 'light'} 
              color="orange" 
              onClick={() => setActiveCategory(cat)}
              radius="xl"
            >
              {cat}
            </Button>
          ))}
        </Group>
      </div>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card shadow="sm" padding="lg" radius="md" withBorder style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Card.Section>
                <Image
                  src={item.image}
                  height={160}
                  alt={item.name}
                  fallbackSrc="https://placehold.co/600x400?text=Food"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={600} size="lg">{item.name}</Text>
                <Badge color="orange" variant="light">
                  ₹{item.price}
                </Badge>
              </Group>

              <Group gap={5} mb="sm">
                {item.dietary.map((d) => (
                  <Badge key={d} color={d === 'Vegan' ? 'green' : 'gray'} size="xs" variant="outline">
                    {d}
                  </Badge>
                ))}
              </Group>

              <Text size="sm" c="dimmed" style={{ flexGrow: 1 }} lineClamp={3}>
                {item.description}
              </Text>
              
              <Text size="xs" c="dimmed" mt="sm">
                Prep time: ~{item.prepTime} mins
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
          No food items found matching your search.
        </Text>
      )}
    </Container>
  );
}
