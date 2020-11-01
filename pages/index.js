import Head from 'next/head';
import { useRouter } from 'next/router';
// components
import Button from '../components/atoms/Button';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen">
      <Head>
        <title>Welcome to Scalapay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-gray-50">
          <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Welcome to Scalapay
              <br />
              <span className="text-blue-700">Buy now and pay later ~~</span>
            </h2>
            <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0 lg:ml-16">
              <div className="mr-4 inline-flex rounded-md shadow"
                onClick={() => router.push('/configurations')}>
                <Button type="button" classes="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-white hover:text-blue-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  Configurations
                </Button>
              </div>
              <div className="inline-flex rounded-md shadow"
                onClick={() => router.push('/orders')}>
                <Button type="button" classes="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  Create a order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
