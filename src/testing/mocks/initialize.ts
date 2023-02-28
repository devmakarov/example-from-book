import { IS_SERVER } from '@/config/constants';

import { setup as setupWorker } from './browser';
import { seedDb } from './seed-db';
import { setup as setupServer } from './server';

const initializeMocks = () => {
  if (IS_SERVER) {
    const server = setupServer();
    server.listen();
  } else {
    const worker = setupWorker();
    worker.start();
  }
  seedDb();
};

initializeMocks();
