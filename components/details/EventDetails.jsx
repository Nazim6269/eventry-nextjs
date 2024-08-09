import Details from './Details';
import Hero from './Hero';
import Map from './Map';

const EventDetails = ({ event }) => {
  return (
    <main>
      <Hero event={event} />
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <Details details={event?.details} swags={event?.swags} />
          <Map location={event?.location} />
        </div>
      </section>
    </main>
  );
};

export default EventDetails;
