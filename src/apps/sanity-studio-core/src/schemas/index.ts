import { type SchemaPluginOptions } from 'sanity';

import customer from './customer';
import customerRegistry from './customer-registry';

export default {
  customer,
  customerRegistry,
} satisfies Record<string, SchemaPluginOptions>;
