import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'info',
  title: 'Unterseiten',
  icon: DocumentIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Titel',
      description: "für die Unterseite",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'subTitle',
      title: 'Unterüberschrift',
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