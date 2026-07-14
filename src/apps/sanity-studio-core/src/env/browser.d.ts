import { type Environment } from '.';

declare global {
  interface ImportMetaEnv extends Partial<Environment> {}
}
