'use server';

import { createUser, findUserByCredentials } from '@/db/queries';
import { redirect } from 'next/navigation';

export const registerUser = async (formData) => {
  const user = Object.fromEntries(formData);
  await createUser(user);

  redirect('/login');
};

export const loginUser = async (formData) => {
  try {
    const credentials = {};
    credentials.email = formData.get('email');
    credentials.password = formData.get('password');
    const result = await findUserByCredentials(credentials);

    return result;
  } catch (error) {
    throw error;
  }
};
