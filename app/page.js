import CardList from '@/components/landing/CardList';
import Header from '@/components/landing/Header';

export default function Home({ searchParams: { query } }) {
  return (
    <section className="container">
      <Header />
      <CardList query={query} />
    </section>
  );
}
