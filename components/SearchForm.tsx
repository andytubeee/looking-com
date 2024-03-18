'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { BedDoubleIcon, CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar } from './ui/calendar';

export const formSchema = z.object({
  location: z.string().min(2).max(50),
  dates: z.object({
    from: z.date(),
    to: z.date(),
  }),
  adults: z
    .string()
    .min(1, { message: 'Please enter at least 1 adult' })
    .max(12, { message: 'Please enter no more than 12 adults' }),
  children: z
    .string()
    .min(0)
    .max(12, { message: 'Please enter no more than 12 children' }),
  rooms: z.string().min(1, { message: 'Please enter at least 1 room' }),
});

function SearchForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: '',
      dates: {
        from: undefined,
        to: undefined,
      },
      adults: '1',
      children: '0',
      rooms: '1',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {};
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto items-end justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg'
      >
        <div className='grid w-full lg:max-w-sm items-center gap-1.5'>
          <FormField
            control={form.control}
            name='location'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-white flex'>
                  Location
                  <BedDoubleIcon className='ml-2 h-4 w-4 text-white' />
                </FormLabel>

                <FormMessage />

                <FormControl>
                  <Input
                    placeholder='Toronto, CA'
                    className='shadow-md'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className='grid w-full lg:max-w-sm flex-1 items-center gap-1.5'>
          <FormField
            control={form.control}
            name='dates'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='text-white'>Dates</FormLabel>
                <FormMessage />

                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        id='date'
                        name='dates'
                        variant={'outline'}
                        className={cn(
                          'w-full lg:w-[300px] justify-start text-left font-normal shadow-md',
                          !field.value.from && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className='mr-3 h-4 w-4 opacity-50' />
                        {field.value?.from ? (
                          field.value?.to ? (
                            <>
                              {format(field.value?.from, 'LLL dd, y')} -{' '}
                              {format(field.value?.to, 'LLL dd, y')}
                            </>
                          ) : (
                            format(field.value?.from, 'LLL dd, y')
                          )
                        ) : (
                          <span>Select your dates</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      initialFocus
                      mode='range'
                      selected={field.value}
                      defaultMonth={field.value.from}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
        </div>

        <div className='flex w-full items-center space-x-2'>
          <div className='grid items-center flex-1'>
            <FormField
              control={form.control}
              name='adults'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel className='text-white'>Adults</FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      type='number'
                      className='shadow-md'
                      min={1}
                      max={12}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className='grid items-center flex-1'>
            <FormField
              control={form.control}
              name='children'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel className='text-white'>Children</FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      type='number'
                      className='shadow-md'
                      min={0}
                      max={12}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className='grid items-center flex-1'>
            <FormField
              control={form.control}
              name='rooms'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel className='text-white'># of Rooms</FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      type='number'
                      className='shadow-md'
                      min={1}
                      max={12}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className='mt-auto'>
          <Button
            type='submit'
            className='bg-white text-myGreen shadow-lg text-base'
          >
            Search
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default SearchForm;
