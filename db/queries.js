import { eventModel } from '@/models/eventModels';
import { userModel } from '@/models/userModel';
import { removeIdInObj, removeMongoId } from '@/utils/dataUtils';
import mongoose from 'mongoose';

const getAllEvents = async () => {
  const events = await eventModel.find().lean();

  return removeMongoId(events);
};

const getEventById = async (id) => {
  const event = await eventModel.findById(id).lean();

  return removeIdInObj(event);
};

const createUser = async (user) => {
  return await userModel.create(user);
};

const findUserByCredentials = async (credentials) => {
  const user = await userModel.findOne(credentials).lean();

  if (user) return removeIdInObj(user);

  return null;
};

const updateInterest = async (eventId, userId) => {
  const event = await eventModel.findById(eventId);

  if (event) {
    const foundUser = event.interested_ids.find(
      (id) => id.toString() === userId,
    );

    if (foundUser) {
      event.interested_ids.pull(new mongoose.Types.ObjectId(userId));
    } else {
      event.interested_ids.push(new mongoose.Types.ObjectId(userId));
    }

    event.save();
  }
};

const updateGoing = async (eventId, userId) => {
  const event = await eventModel.findById(eventId);
  event.going_ids.push(new mongoose.Types.ObjectId(userId));

  event.save();
};

export {
  createUser,
  findUserByCredentials,
  getAllEvents,
  getEventById,
  updateGoing,
  updateInterest,
};
