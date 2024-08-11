import CardList from '@/components/landing/CardList';
import Header from '@/components/landing/Header';
import Loading from '@/components/Loading';
import { Suspense } from 'react';

export default function Home({ searchParams: { query } }) {
  return (
    <section className="container">
      <Header />
      <Suspense key={query} fallback={<Loading />}>
        <CardList query={query} />
      </Suspense>
    </section>
  );
}
