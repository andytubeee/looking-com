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
      rooms: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {};
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg'
      >
        <div className='grid w-full lg:max-w-sm items-center gap-1.5'>
          <FormField
            control={form.control}
            name='location'
            render={({ field }) => (
              <FormItem>
                <FormLabel className=' text-white flex'>
                  Location
                  <BedDoubleIcon className='w-5 h-5 ml-2 text-white' />
                </FormLabel>
                <FormMessage />
                <FormControl>
                  <Input placeholder='Toronto, CA' {...field} />
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
                          'w-[300px] justify-start text-left font-normal',
                          !field.value.from && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className='mr-3 h4 w-4 opacity-50' />
                        {field.value?.from ? (
                          field.value?.to ? (
                            <>
                              {format(field.value?.from, 'LLL dd, y')} -{' '}
                              {format(field.value?.to, 'LLL dd, y')}
                            </>
                          ) : (
                            <>{format(field.value?.from, 'LLL dd, y')}</>
                          )
                        ) : (
                          <span>Select your dates</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                </Popover>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}

export default SearchForm;
