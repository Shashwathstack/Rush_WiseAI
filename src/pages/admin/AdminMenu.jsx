import { useState } from 'react';
import { Container, Title, Card, Text, Group, Button, TextInput, Select, Table, Badge, ActionIcon, Modal, Switch } from '@mantine/core';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';
import { demoMenuItems, categories } from '../../utils/demoData';

export function AdminMenu() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [items, setItems] = useState(demoMenuItems);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredItems = items.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = categoryFilter === 'All' || item.category === categoryFilter;
    return matchSearch && matchCat;
  });

  const toggleAvailability = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, available: !item.available } : item));
  };

  const rows = filteredItems.map(item => (
    <Table.Tr key={item.id}>
      <Table.Td fw={500}>{item.name}</Table.Td>
      <Table.Td>{item.category}</Table.Td>
      <Table.Td>₹{item.price}</Table.Td>
      <Table.Td>{item.prepTime}m</Table.Td>
      <Table.Td>
        <Switch 
          checked={item.available} 
          onChange={() => toggleAvailability(item.id)}
          color="orange"
        />
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ActionIcon variant="light" color="blue"><Edit2 size={16} /></ActionIcon>
          <ActionIcon variant="light" color="red"><Trash2 size={16} /></ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="xl" py="md">
      <Group justify="space-between" mb="xl">
        <Title order={2}>Menu Management</Title>
        <Button color="orange" leftSection={<Plus size={16} />} onClick={() => setModalOpen(true)}>
          Add Item
        </Button>
      </Group>

      <Card shadow="sm" radius="md" withBorder>
        <Group mb="md" grow>
          <TextInput
            placeholder="Search items..."
            leftSection={<Search size={16} />}
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
          <Select
            placeholder="Filter by Category"
            data={['All', ...categories]}
            value={categoryFilter}
            onChange={setCategoryFilter}
          />
        </Group>

        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Category</Table.Th>
              <Table.Th>Price</Table.Th>
              <Table.Th>Prep Time</Table.Th>
              <Table.Th>Available</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows}
          </Table.Tbody>
        </Table>
        {filteredItems.length === 0 && (
          <Text ta="center" c="dimmed" mt="xl">No items found.</Text>
        )}
      </Card>

      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Add Menu Item" centered>
        <TextInput label="Item Name" placeholder="e.g. Chole Bhature" mb="md" />
        <Select label="Category" data={categories} placeholder="Select category" mb="md" />
        <TextInput label="Price (₹)" type="number" placeholder="0" mb="md" />
        <TextInput label="Prep Time (mins)" type="number" placeholder="10" mb="md" />
        <TextInput label="Workload Units" type="number" placeholder="2" mb="xl" />
        <Button fullWidth color="orange" onClick={() => setModalOpen(false)}>Save Item</Button>
      </Modal>
    </Container>
  );
}
