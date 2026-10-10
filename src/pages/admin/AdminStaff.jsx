import { Container, Title, Card, Text, Group, Button, Table, Badge, ActionIcon, Modal, TextInput, Select } from '@mantine/core';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { useState } from 'react';

export function AdminStaff() {
  const [modalOpen, setModalOpen] = useState(false);
  const staff = [
    { id: 1, name: 'Alice Smith', email: 'alice@rushwise.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob Johnson', email: 'bob@rushwise.com', role: 'Kitchen Manager', status: 'Active' },
    { id: 3, name: 'Charlie Davis', email: 'charlie@rushwise.com', role: 'Kitchen Staff', status: 'Inactive' },
  ];

  return (
    <Container size="xl" py="md">
      <Group justify="space-between" mb="xl">
        <Title order={2}>Staff Management</Title>
        <Button color="orange" leftSection={<Plus size={16} />} onClick={() => setModalOpen(true)}>
          Add Staff
        </Button>
      </Group>

      <Card shadow="sm" radius="md" withBorder>
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {staff.map((member) => (
              <Table.Tr key={member.id}>
                <Table.Td fw={500}>{member.name}</Table.Td>
                <Table.Td>{member.email}</Table.Td>
                <Table.Td>{member.role}</Table.Td>
                <Table.Td>
                  <Badge color={member.status === 'Active' ? 'green' : 'gray'}>{member.status}</Badge>
                </Table.Td>
                <Table.Td>
                  <Group gap="xs">
                    <ActionIcon variant="light" color="blue"><Edit2 size={16} /></ActionIcon>
                    <ActionIcon variant="light" color="red"><Trash2 size={16} /></ActionIcon>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Card>

      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Add Staff Member" centered>
        <TextInput label="Name" placeholder="e.g. John Doe" mb="md" />
        <TextInput label="Email" placeholder="e.g. john@rushwise.com" mb="md" />
        <Select label="Role" data={['Admin', 'Kitchen Manager', 'Kitchen Staff']} placeholder="Select role" mb="xl" />
        <Button fullWidth color="orange" onClick={() => setModalOpen(false)}>Invite Staff</Button>
      </Modal>
    </Container>
  );
}
