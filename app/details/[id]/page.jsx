import EventDetails from '@/components/details/EventDetails';
import { getEventById } from '@/db/queries';

export const generateMetadata = async ({ params: { id } }) => {
  const eventInfo = await getEventById(id);

  return {
    title: `Eventry - ${eventInfo?.name}`,
    description: eventInfo?.details,
    openGraph: { images: [eventInfo?.imageUrl] },
  };
};

const EventDetailsPage = async ({ params: { id } }) => {
  const event = await getEventById(id);
  return <EventDetails event={event} />;
};

export default EventDetailsPage;
