import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'start',
  title: 'Startseite',
  icon: DocumentIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      initialValue:"Startseite",
      description: "Titel - nur für die Redaktion"
    }),
    defineField({
      name: 'hero',
      type: 'reference',
      to: {type: 'hero'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'advantage',
      name: 'advantage',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})