'use server';

import {
  createUser,
  findUserByCredentials,
  updateInterest,
} from '@/db/queries';
import { revalidatePath } from 'next/cache';
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

export const addInterestEvent = async (authId, userId) => {
  try {
    await updateInterest(authId, userId);
  } catch (error) {
    throw error;
  }
  revalidatePath('/');
};
