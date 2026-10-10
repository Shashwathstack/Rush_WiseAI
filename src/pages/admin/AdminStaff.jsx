
import { useCallback, useEffect, useState } from 'react';
import {
  Alert,
  Badge,
  Button,
  Card,
  Container,
  Group,
  Loader,
  Modal,
  Select,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
  ActionIcon,
  Switch,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { Plus, Edit2, Trash2, AlertCircle, RefreshCw } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const ROLE_OPTIONS = [
  { value: 'admin', label: 'Admin' },
  { value: 'kitchen_manager', label: 'Kitchen Manager' },
  { value: 'staff', label: 'Kitchen Staff' },
];

const ROLE_LABELS = {
  admin: 'Admin',
  kitchen_manager: 'Kitchen Manager',
  staff: 'Kitchen Staff',
};

export function AdminStaff() {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const [form, setForm] = useState({
    full_name: '',
    email: '',
    role: 'staff',
    is_active: true,
  });

  const [search, setSearch] = useState('');

  const loadStaff = useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
        throw new Error('Please sign in before accessing Staff Management.');
      }

      const { data: adminProfile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .maybeSingle();

      if (profileError) throw profileError;

      if (adminProfile?.role !== 'admin') {
        throw new Error('Access denied. An administrator account is required.');
      }

      const { data, error: fetchError } = await supabase
        .from('profiles')
        .select('id, full_name, role, is_active, created_at')
        .in('role', ['admin', 'staff', 'kitchen_manager'])
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;

      setStaff(data ?? []);
    } catch (err) {
      setError(err.message || 'Unable to load staff profiles.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStaff();
  }, [loadStaff]);

  function openAddModal() {
    setEditingMember(null);
    setForm({
      full_name: '',
      email: '',
      role: 'staff',
      is_active: true,
    });
    setModalOpen(true);
  }

  function openEditModal(member) {
    setEditingMember(member);
    setForm({
      full_name: member.full_name || '',
      email: '',
      role: member.role || 'staff',
      is_active: member.is_active ?? true,
    });
    setModalOpen(true);
  }

  async function handleSave(event) {
    event.preventDefault();
    setSaving(true);
    setError('');

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;
      if (!user) throw new Error('Please sign in again.');

      // Verify the current user's admin role.
      const { data: currentProfile, error: checkError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (checkError) throw checkError;

      if (currentProfile.role !== 'admin') {
        throw new Error('Only administrators can manage staff.');
      }

      if (!form.full_name.trim()) {
        throw new Error('Please enter the staff member name.');
      }

      if (editingMember) {
        // Update an existing profile.
        const { error: updateError } = await supabase
          .from('profiles')
          .update({
            full_name: form.full_name.trim(),
            role: form.role,
            is_active: form.is_active,
          })
          .eq('id', editingMember.id);

        if (updateError) throw updateError;

        notifications.show({
          title: 'Staff updated',
          message: 'The profile was updated successfully.',
          color: 'green',
        });
      } else {
        // Auth accounts must be created by a trusted backend.
        // Never insert a profile without a real Auth user ID.
        throw new Error(
          'Staff creation requires a secure backend endpoint that creates the Supabase Auth account and profile. Editing existing profiles is available.'
        );
      }

      setModalOpen(false);
      await loadStaff();
    } catch (err) {
      notifications.show({
        title: 'Action failed',
        message: err.message || 'Could not save staff details.',
        color: 'red',
      });
    } finally {
      setSaving(false);
    }
  }

  async function handleToggleActive(member, checked) {
    try {
      const { data: { user }, error: authError } =
        await supabase.auth.getUser();

      if (authError) throw authError;
      if (!user) throw new Error('Please sign in again.');

      const { data: currentProfile, error: checkError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (checkError) throw checkError;

      if (currentProfile.role !== 'admin') {
        throw new Error('Only administrators can change staff status.');
      }

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ is_active: checked })
        .eq('id', member.id);

      if (updateError) throw updateError;

      notifications.show({
        title: 'Status updated',
        message: `${member.full_name || 'Staff member'} is now ${
          checked ? 'active' : 'inactive'
        }.`,
        color: 'green',
      });

      await loadStaff();
    } catch (err) {
      notifications.show({
        title: 'Action failed',
        message: err.message || 'Could not update staff status.',
        color: 'red',
      });
    }
  }

  async function handleDelete(member) {
    notifications.show({
      title: 'Account deletion requires backend support',
      message:
        'Deleting a profile alone does not delete its Supabase Auth account. Add a secure admin-only backend endpoint before implementing account deletion.',
      color: 'yellow',
    });
  }

  const filteredStaff = staff.filter((member) =>
    (member.full_name || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container size="xl" py="md">
      <Group justify="space-between" mb="xl">
        <Title order={2}>Staff Management</Title>

        <Group>
          <Button
            variant="light"
            color="gray"
            leftSection={<RefreshCw size={16} />}
            onClick={loadStaff}
            loading={loading}
          >
            Refresh
          </Button>

          <Button
            color="orange"
            leftSection={<Plus size={16} />}
            onClick={openAddModal}
          >
            Add Staff
          </Button>
        </Group>
      </Group>

      {error && (
        <Alert
          color="red"
          icon={<AlertCircle size={18} />}
          title="Could not load staff"
          mb="md"
        >
          {error}
        </Alert>
      )}

      <Card shadow="sm" radius="md" withBorder>
        <TextInput
          placeholder="Search staff by name..."
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          mb="md"
        />

        {loading ? (
          <Group justify="center" py="xl">
            <Loader color="orange" />
            <Text c="dimmed">Loading staff profiles...</Text>
          </Group>
        ) : (
          <Table.ScrollContainer minWidth={650}>
            <Table striped highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Profile ID</Table.Th>
                  <Table.Th>Role</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Actions</Table.Th>
                </Table.Tr>
              </Table.Thead>

              <Table.Tbody>
                {filteredStaff.map((member) => (
                  <Table.Tr key={member.id}>
                    <Table.Td fw={500}>
                      {member.full_name || 'Unnamed user'}
                    </Table.Td>

                    <Table.Td>
                      <Text size="xs" c="dimmed">
                        {member.id}
                      </Text>
                    </Table.Td>

                    <Table.Td>
                      {ROLE_LABELS[member.role] || member.role}
                    </Table.Td>

                    <Table.Td>
                      <Group gap="xs">
                        <Badge
                          color={member.is_active ? 'green' : 'gray'}
                        >
                          {member.is_active ? 'ACTIVE' : 'INACTIVE'}
                        </Badge>

                        <Switch
                          size="sm"
                          color="orange"
                          checked={member.is_active ?? true}
                          onChange={(event) =>
                            handleToggleActive(
                              member,
                              event.currentTarget.checked
                            )
                          }
                          aria-label={`Toggle active status for ${member.full_name}`}
                        />
                      </Group>
                    </Table.Td>

                    <Table.Td>
                      <Group gap="xs">
                        <ActionIcon
                          variant="light"
                          color="blue"
                          aria-label="Edit staff"
                          onClick={() => openEditModal(member)}
                        >
                          <Edit2 size={16} />
                        </ActionIcon>

                        <ActionIcon
                          variant="light"
                          color="red"
                          aria-label="Delete staff"
                          onClick={() => handleDelete(member)}
                        >
                          <Trash2 size={16} />
                        </ActionIcon>
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))}

                {filteredStaff.length === 0 && (
                  <Table.Tr>
                    <Table.Td colSpan={5}>
                      <Text ta="center" c="dimmed" py="xl">
                        {error
                          ? 'Staff could not be loaded.'
                          : 'No staff profiles found.'}
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                )}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        )}
      </Card>

      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingMember ? 'Edit Staff Member' : 'Add Staff Member'}
        centered
      >
        <form onSubmit={handleSave}>
          <Stack gap="md">
            <TextInput
              label="Full Name"
              placeholder="e.g. Rahul Kumar"
              value={form.full_name}
              onChange={(event) =>
                setForm({
                  ...form,
                  full_name: event.currentTarget.value,
                })
              }
              required
            />

            {!editingMember && (
              <TextInput
                label="Email"
                type="email"
                placeholder="e.g. rahul@example.com"
                value={form.email}
                onChange={(event) =>
                  setForm({
                    ...form,
                    email: event.currentTarget.value,
                  })
                }
                required
              />
            )}

            <Select
              label="Role"
              data={ROLE_OPTIONS}
              value={form.role}
              onChange={(value) =>
                setForm({
                  ...form,
                  role: value || 'staff',
                })
              }
              allowDeselect={false}
              required
            />

            {editingMember && (
              <Switch
                label="Active staff member"
                color="orange"
                checked={form.is_active}
                onChange={(event) =>
                  setForm({
                    ...form,
                    is_active: event.currentTarget.checked,
                  })
                }
              />
            )}

            {!editingMember && (
              <Alert color="blue" title="Account setup required">
                Creating a staff login requires a secure backend that
                creates the Supabase Auth user and profile. This form
                cannot create that account by itself.
              </Alert>
            )}

            <Button
              type="submit"
              fullWidth
              color="orange"
              loading={saving}
            >
              {editingMember ? 'Save Changes' : 'Create Staff Account'}
            </Button>
          </Stack>
        </form>
      </Modal>
    </Container>
  );
}
