// page.tsx
'use client';

import { FavouriteProvidersProvider } from '@/src/context/FavouriteProviderContext';
import FavouritePageContent from './FavouritepageContent';

export default function FavouritePage({ userId }: { userId: string }) {
  return (
    <FavouriteProvidersProvider>
      <FavouritePageContent userId={userId} />
    </FavouriteProvidersProvider>
  );
}