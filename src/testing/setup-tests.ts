import '@testing-library/jest-dom/extend-expect';

import { queryClient } from '@/lib/react-query';
import { seedDb } from '@/testing/mocks/seed-db';
import { setup } from '@/testing/mocks/server';

const server = setup();

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
  seedDb();
});

afterAll(() => server.close());

afterEach(async () => {
  queryClient.clear();
  server.resetHandlers();
});
