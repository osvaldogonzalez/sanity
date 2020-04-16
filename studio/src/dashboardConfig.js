export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e989785011b56ead9025494',
                  title: 'Sanity Studio',
                  name: 'sanity-studio-sskegeix',
                  apiId: 'e6d0d193-67de-4fd6-9ebf-d715c07aae55'
                },
                {
                  buildHookId: '5e989785011b56d9950251d8',
                  title: 'Blog Website',
                  name: 'sanity-web-8wkth3i9',
                  apiId: 'eb65e58f-a071-4900-842c-272eedbe75e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/osvaldogonzalez/sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-web-8wkth3i9.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
