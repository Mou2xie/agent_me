'use client';

import { Suspense } from 'react';
import ChatContent from './ChatContent';

export default function Chat() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatContent />
    </Suspense>
  );
}