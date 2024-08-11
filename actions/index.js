'use server';

import EmailTemplate from '@/components/EmailTemplate';
import {
  createUser,
  findUserByCredentials,
  getEventById,
  updateGoing,
  updateInterest,
} from '@/db/queries';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Resend } from 'resend';

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

export const addGoingEvent = async (eventId, user) => {
  try {
    await updateGoing(eventId, user?.id);
    await sendMailWithResend(eventId, user);
  } catch (error) {
    throw error;
  }

  revalidatePath('/');
  redirect('/');
};

export const sendMailWithResend = async (eventId, user) => {
  try {
    //TODO: Email not sent successfully
    const event = await getEventById(eventId);
    const resend = new Resend(process.env.SEND_MAIL);

    const message = `Dear ${user?.name}, you have been successfully registered ${event?.name}`;
    const sent = await resend.emails.send({
      from: '',
      to: user?.email,
      subject: 'successfully sent email',
      react: EmailTemplate({ message }),
    });
  } catch (error) {
    throw error;
  }
};
