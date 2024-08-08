import Details from './Details';
import Hero from './Hero';
import Map from './Map';

const EventDetails = () => {
  return (
    <main>
      <Hero />
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <Details />
          <Map />
        </div>
      </section>
    </main>
  );
};

export default EventDetails;
