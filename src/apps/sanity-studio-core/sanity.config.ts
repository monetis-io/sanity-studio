import { defineConfig } from 'sanity';

import { PROJECT_ID as projectId, DATASET as dataset } from '@project/env';
import plugins from '@project/plugins';
import schema from '@project/schema';

export default defineConfig({
  name: 'core',
  title: 'Core',
  projectId,
  dataset,
  plugins,
  schema,
});
