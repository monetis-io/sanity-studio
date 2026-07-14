import { z } from 'zod';

const schema = z.object({
  ENVIRONMENT: z.enum(['production', 'development']),
  PROJECT_ID: z.string().trim().length(8),
  DATASET: z.string().trim().min(1),
});

export type Environment = z.infer<typeof schema>;

export const { ENVIRONMENT, PROJECT_ID, DATASET } = schema.parse({
  ENVIRONMENT: import.meta.env.ENVIRONMENT ?? 'production',
  PROJECT_ID: import.meta.env.PROJECT_ID ?? 'xxxxxxxx',
  DATASET: import.meta.env.DATASET ?? 'x',
});
