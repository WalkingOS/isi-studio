import {defineType} from 'sanity'

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  title: 'Video animation',
  name: 'videoAnimation',
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
})
