'use client';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  ChatBubbleLeftIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
function Header() {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);
  const products = [
    {
      name: 'Book a Stay',
      description: 'Find a hotel to stay',
      href: '#',
      icon: HomeIcon,
    },
    {
      name: 'Book a Flight',
      description: 'Find a flight to take',
      href: '#',
      icon: PaperAirplaneIcon,
    },
    {
      name: 'Contact our Support Team',
      description: 'Your customers data will be safe an secure.',
      href: '#',
      icon: ChatBubbleLeftIcon,
    },
  ];

  const callToAction = [
    { name: 'See Demo Booking', href: '#', icon: PlayCircleIcon },
    { name: 'Contact Support', href: '#', icon: PhoneIcon },
  ];

  return (
    <header className='bg-myGreen'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            {/* <span className=''>className</span> */}
            <Image
              src={'/assets/logo.png'}
              alt={'Logo'}
              width='200'
              height='100'
              draggable={false}
            />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
            onClick={() => setMobMenuOpen(true)}
          >
            <span className='sr-only'>Open menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>

        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Popover className={'relative'}>
            <Popover.Button
              className={
                'flex items-center gap-x-1 text-sm font-semibold leading-6 text-white'
              }
            >
              Stays
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-white'
                aria-hidden='true'
              ></ChevronDownIcon>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray900/5'>
                <div className='p-4'>
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200'>
                        <item.icon className='h-6 w-6 text-gray-500 group-hover:text-myGreen' />
                      </div>
                      <div className='flex-auto'>
                        <a
                          href={item.href}
                          className='block font-semibold text-myGreen'
                        >
                          {item.name}
                          <span className='absolute inset-0'></span>
                        </a>
                        <p className='mt-1 text-myGreen'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                  {callToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-myGreen hover:bg-gray-100'
                    >
                      <item.icon
                        className='h-6 w-6 flex-none text-myGreen'
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a
            href='#'
            className='text-sm font-semibold leading-6 text-white hover:text-myLightGreen'
          >
            Flights
          </a>
          <a
            href='#'
            className='text-sm font-semibold leading-6 text-white hover:text-myLightGreen'
          >
            Car Rentals
          </a>
          <a
            href='#'
            className='text-sm font-semibold leading-6 text-white hover:text-myLightGreen'
          >
            Attractions
          </a>
          <a
            href='#'
            className='text-sm font-semibold leading-6 text-white hover:text-myLightGreen'
          >
            Flight + Hotel
          </a>
        </Popover.Group>

        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a
            href='#'
            className='text-sm font-semibold leading-6 text-white hover:text-myLightGreen'
          >
            Log in <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as='div'
        className={'lg:hidden'}
        open={mobMenuOpen}
        onClose={setMobMenuOpen}
      >
        <div className='fixed inset-0 z-10'></div>
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-myGreen px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Looking.com</span>
              <Image
                src={'/assets/logo.png'}
                alt={'Logo'}
                width='200'
                height='100'
                draggable={false}
              />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-white hover:text-myLightGreen'
              onClick={() => setMobMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>

          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Header;