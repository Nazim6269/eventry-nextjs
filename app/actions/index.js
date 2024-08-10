'use server';

import { createUser } from '@/db/queries';
import { redirect } from 'next/navigation';

export const registerUser = async (formData) => {
  const user = Object.fromEntries(formData);
  await createUser(user);

  redirect('/login');
};
