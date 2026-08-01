import { defineConfig } from 'sanity';

import { PROJECT_ID, DATASET } from '@project/env';
import plugins from '@project/plugins';
import schemas from '@project/schemas';
import { getCustomers } from '@project/utils';

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
  ...(await getCustomers()).map(
    ({ title, sanityProject: { id: projectId, dataset } }) => ({
      name: projectId,
      title,
      basePath: `/${projectId}`,
      projectId,
      dataset,
      plugins,
      schema: schemas.customer,
    })
  ),
]);
