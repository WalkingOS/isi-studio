import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'advantage',
  title: 'Advantage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: "Liste der Vorteilen",
      type: "array",
      name: "advantages",
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "string", name: "title" },
            { type: "string", name: "description" }
          ]
        }
      ],
    }),
    defineField({
      name: 'amount',
      title: 'Anzahl der angezeigten vorteile',
      type: 'number',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {},
})
