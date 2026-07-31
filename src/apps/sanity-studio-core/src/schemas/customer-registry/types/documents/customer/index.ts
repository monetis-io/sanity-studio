import { defineType, defineField } from 'sanity';

export default defineType({
  type: 'document',
  name: 'customer',
  title: 'Customer',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'object',
      name: 'sanityProject',
      title: 'Sanity project',
      fields: [
        defineField({
          type: 'string',
          name: 'id',
          title: 'Project ID',
          validation: rule => [rule.required()],
        }),
        defineField({
          type: 'string',
          name: 'dataset',
          title: 'Dataset name',
          initialValue: 'production',
          validation: rule => [rule.required()],
        }),
      ],
      validation: rule => [rule.required()],
    }),
  ],
});
