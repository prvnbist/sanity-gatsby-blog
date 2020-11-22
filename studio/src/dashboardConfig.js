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
                  buildHookId: '5fba6284f65236e5658835fd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-w66dkawo',
                  apiId: '59734d85-5951-48f3-b8e7-fdafdbe6868f'
                },
                {
                  buildHookId: '5fba6285b3cc31877333153a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gzae31q4',
                  apiId: 'f6aab707-9804-4665-8825-5b5b4112116e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prvnbist/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gzae31q4.netlify.app', category: 'apps' }
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
