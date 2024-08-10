'use server';

import { createUser, findUserByCredentials } from '@/db/queries';
import { redirect } from 'next/navigation';

export const registerUser = async (formData) => {
  const user = Object.fromEntries(formData);
  await createUser(user);

  redirect('/login');
};

export const loginUser = async (formData) => {
  const credentials = {};
  credentials.email = formData.get('email');
  credentials.password = formData.get('password');

  const result = await findUserByCredentials(credentials);
  if (result) {
    redirect('/');
  } else {
    throw new Error(`User not found with this email${formData.get('email')}`);
  }
};
