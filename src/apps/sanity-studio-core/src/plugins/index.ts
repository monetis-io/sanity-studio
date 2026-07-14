import { type PluginOptions } from 'sanity';

import structure from './structure';
import vision from './vision';

export default [structure(), vision()] satisfies PluginOptions[];
