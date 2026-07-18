import { join } from 'node:path';

import { defineCliConfig } from 'sanity/cli';

import { ENVIRONMENT, PROJECT_ID, DATASET } from '@project/env';

export default defineCliConfig({
  api: {
    projectId: PROJECT_ID,
    dataset: DATASET,
  },
  deployment: {
    autoUpdates: true,
    appId: 'c1nqmmuyyb404v8uqd2vvv2i',
  },
  server: {
    port: 8000,
  },
  reactStrictMode: true,
  vite: {
    resolve: {
      alias: {
        '@project': join(__dirname, 'src'),
      },
    },
    define: {
      'import.meta.env.ENVIRONMENT': JSON.stringify(ENVIRONMENT),
      'import.meta.env.PROJECT_ID': JSON.stringify(PROJECT_ID),
      'import.meta.env.DATASET': JSON.stringify(DATASET),
    },
  },
});
