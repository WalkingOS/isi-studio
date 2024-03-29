import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'descriptionTitle',
      title: 'Beschreibungstitel',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'body',
      title: 'Inahlt',
      type: 'array',
      of: [{type:"block"}]
    }),
  ],

  preview: {
    select: {
      title: 'title',
      price: 'price.title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {price} = selection
      return {...selection, subtitle: price && `by ${price}`}
    },
  },
})
