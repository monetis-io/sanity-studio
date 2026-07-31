import { type Brand } from './brand';

export namespace ID {
  export type Customer = Brand<string, 'customer.id'>;
}
