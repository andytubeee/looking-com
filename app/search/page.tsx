import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  searchParams: SearchParams;
};
type SearchParams = {
  url: string;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  checkin: string;
  checkout: string;
};
export default function SearchPage({ searchParams }: Props) {
  if (!searchParams.url) return notFound();
  return <div>SearchPage</div>;
}
