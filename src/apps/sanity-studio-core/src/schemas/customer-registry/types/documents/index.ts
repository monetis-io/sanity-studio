import { type SchemaPluginOptions } from 'sanity';

import customer from './customer';

export default [customer] satisfies SchemaPluginOptions['types'];
