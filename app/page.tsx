import Image from 'next/image';
import { trending_data } from '@/data/trending';
export default function Home() {
  return (
    <>
      <main className='bg-myGreen'>
        <section className='max-w-7xl mx-auto p-6'>
          <h2 className='font-bold text-5xl text-white'>Find your Next Stay</h2>
          <h3 className=' text-white py-5 text-xl'>
            Search for hotels, flights, and more...
          </h3>
        </section>
        <section className='m-4 mt-0-mb-14 px-2 lg:px-3'>
          {/* SearchForm */}
        </section>

        <section className='mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg'>
          <div className='pt-5'>
            <h3 className='text-xl font-bold'>Trending Destinations</h3>
            <p className='font-light'>
              Most popular choices for travelers from around the world
            </p>
          </div>

          <div className='flex space-x-4 py-5 overflow-x-scroll'>
            {trending_data.map((trending) => (
              <div
                key={trending.id}
                className='space-y-1 shrink-0 cursor-pointer'
              >
                <img
                  src={trending.src}
                  alt=''
                  className='rounded-lg w-80 h-72 object-cover pb-3'
                  key={trending.id}
                />
                <p className='font-bold'>{trending.title}</p>
                <p>{trending.location}</p>
                <p className=' font-light text-sm'>{trending.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
