import Head from 'next/head';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Results from '../components/Results';
import requests from '../utils/requests';

export default function Home({ results }) {

  return (
    <div>
      <Head>
        <title>Bull 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        {/* Header */}
        <Header />

        {/* Navbar */}
        <Nav />
        {/* Result */}
        <Results results={results} />

    </div>
  );

}
// console.log(Results);

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
      `https://api.themoviedb.org/3${
        requests[genre]?.url || requests.fetchTrending.url 
    }`
  ).then((res) => res.json());
  // console.log(request);

  return {
    props: {
      results: request.results,
    },
  }

}

