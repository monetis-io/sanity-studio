import { createClient } from '@sanity/client';
import groq from 'groq';
import { defineConfig } from 'sanity';

import { PROJECT_ID, DATASET } from '@project/env';
import plugins from '@project/plugins';
import schemas from '@project/schemas';
import { type Sanity } from '@project/types';

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  useCdn: true,
  apiVersion: '2026-07-17',
  perspective: 'published',
  withCredentials: true,
});

const customers = await client.fetch<Sanity.Document.Customer[]>(
  groq`*[_type == 'customer']`
);

export default defineConfig([
  {
    name: 'customer-registry',
    title: 'Customer registry',
    basePath: '/customer-registry',
    projectId: PROJECT_ID,
    dataset: DATASET,
    plugins,
    schema: schemas.customerRegistry,
  },
  ...customers.map(({ title, sanityProject: { id: projectId, dataset } }) => ({
    name: projectId,
    title,
    basePath: `/${projectId}`,
    projectId,
    dataset,
    plugins,
    schema: schemas.customer,
  })),
]);
