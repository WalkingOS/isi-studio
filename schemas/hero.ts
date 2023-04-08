import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
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
      name: 'calltoaction',
      title: 'Calltoaction',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    /*defineField({
      name: 'videoAnimation',
      title: 'Video animation',
      type: 'object',
      fields: [
        {
          name: 'webm',
          title: 'WebM format',
          type: 'file',
          options: {
            accept: 'video/webm'
          }
        },
        {
          name: 'fallback',
          title: 'Fallback format',
          type: 'file',
          options: {
            accept: 'video/mp4'
          }
        },
        {
          name: 'aspectratio',
          title: 'Aspect Ratio',
          type: 'number',
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          options: {
            isHighlighted: true
          }
        },
        {
          name: 'alt',
          title: 'Alternative text (for screen readers)',
          type: 'string',
          options: {
            isHighlighted: true
          }
        }
      ]
    }),*/
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
