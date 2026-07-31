import { type Identifiable } from '../common';
import { type ID } from '../id';

export namespace Sanity {
  export interface Document<
    Identifier extends string = string,
    Type extends Document.Type = unknown,
  > extends Identifiable<Identifier> {
    _id: Identifier;
    _type: Type;
    _rev: string;
    _createdAt: string;
    _updatedAt: string;
  }

  export namespace Document {
    export type Type = 'customer';

    export interface Customer extends Document<ID.Customer, 'customer'> {
      title: string;
      sanityProject: {
        id: string;
        dataset: string;
      };
    }
  }
}
