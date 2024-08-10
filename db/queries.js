import { eventModel } from '@/models/eventModels';
import { userModel } from '@/models/userModel';
import { removeIdInObj, removeMongoId } from '@/utils/dataUtils';

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

export { createUser, findUserByCredentials, getAllEvents, getEventById };
