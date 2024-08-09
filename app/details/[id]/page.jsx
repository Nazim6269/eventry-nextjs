import EventDetails from '@/components/details/EventDetails';
import { getEventById } from '@/db/queries';

const EventDetailsPage = async ({ params: { id } }) => {
  const event = await getEventById(id);
  return <EventDetails event={event} />;
};

export default EventDetailsPage;
