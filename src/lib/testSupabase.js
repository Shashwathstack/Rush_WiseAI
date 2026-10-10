
import { supabase } from './supabase';

export async function testSupabaseConnection() {
  const { data, error } = await supabase
    .from('menu_items')
    .select('id, name, price')
    .limit(5);

  if (error) {
    console.error('Supabase connection failed:', error.message);
    return;
  }

  console.log('Supabase connection successful!');
  console.log('Menu items:', data);
}
