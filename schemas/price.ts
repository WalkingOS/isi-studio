import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'price',
  title: 'Price',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ab',
      title: 'Ab',
      type: 'boolean',
    }),
    defineField({
      name: 'terminlink',
      title: 'Terminlink',
      type: 'object',
      fields: [
        {
          name: 'href',
          type: 'url',
          title: 'URL'
        },
        {
          title: 'Open in new tab',
          name: 'blank',
          description: 'Termine für die Leistung',
          type: 'boolean'
        }
      ]
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
