import { eventModel } from '@/models/eventModels';
import { removeIdInObj, removeMongoId } from '@/utils/dataUtils';

const getAllEvents = async () => {
  const events = await eventModel.find().lean();

  return removeMongoId(events);
};

const getEventById = async (id) => {
  const event = await eventModel.findById(id).lean();

  return removeIdInObj(event);
};

export { getAllEvents, getEventById };
