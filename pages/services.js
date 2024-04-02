import Head from 'next/head';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - My Website</title>
        <meta name="description" content="Description of my services" />
      </Head>
      <main className="p-4">
        <h1 className="text-4xl font-bold">Services We Offer</h1>
        <p className="mt-2 text-lg">
          Here's an overview of the professional services we provide.
        </p>
        {/* Add more content and components related to your services here */}
      </main>
    </>
  );
}
