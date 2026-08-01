import { type ClientConfig, createClient } from '@sanity/client';
import groq from 'groq';

import { PROJECT_ID, DATASET } from '@project/env';
import { type Sanity } from '@project/types';

import { isBrowser } from '../common';

export const getCustomers = async (): Promise<Sanity.Document.Customer[]> => {
  const configuration = {
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: '2026-07-17',
    perspective: 'published',
  } satisfies ClientConfig;

  const query = groq`*[_type == 'customer']`;

  if (isBrowser())
    return createClient({
      ...configuration,
      withCredentials: true,
    }).fetch<Sanity.Document.Customer[]>(query);

  return (await import('sanity/cli'))
    .getCliClient(configuration)
    .fetch<Sanity.Document.Customer[]>(query);
};
