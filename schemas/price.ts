import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'price',
  title: 'Price',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'ab',
      title: 'Ab Preis?',
      initialValue: false,
      type: 'boolean',
    }),
    defineField({
      name: 'price',
      title: 'Preis',
      type: 'number',
    }),
    defineField({
      title: 'Vorteile',
      name: 'services',
      type: 'array',
      description: "hier auf Listen was in dem Preis dabei ist oder andere wichtige Informationen",
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'categories',
      title: 'Kategorien',
      type: 'reference',
      description: "bitte eine Kategorie aussuchen",
      to: {type: 'category'},
      validation: (rule) => rule.required(),
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
})
