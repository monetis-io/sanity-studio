import { type ClientConfig, createClient } from '@sanity/client';
import groq from 'groq';
import { getCliClient } from 'sanity/cli';

import { PROJECT_ID, DATASET } from '@project/env';
import { type Sanity } from '@project/types';

import { isBrowser } from '../common';

export const getCustomers = async (): Promise<Sanity.Document.Customer[]> => {
  const configuration = {
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: '2026-07-17',
    perspective: 'published',
    withCredentials: true,
  } satisfies ClientConfig;

  const query = groq`*[_type == 'customer']`;

  if (isBrowser())
    return createClient(configuration).fetch<Sanity.Document.Customer[]>(query);

  return getCliClient(configuration).fetch<Sanity.Document.Customer[]>(query);
};
