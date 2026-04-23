import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('GioCrete Content')
    .items([
      // Global Settings
      S.listItem()
        .title('Global Settings')
        .id('settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
        ),
      S.divider(),
      
      // All Individual Pages (Singletons)
      S.listItem()
        .title('Website Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home Page')
                .child(S.document().schemaType('home').documentId('home')),
              S.listItem()
                .title('About Page')
                .child(S.document().schemaType('about').documentId('about')),
              S.listItem()
                .title('Safety Page')
                .child(S.document().schemaType('safety').documentId('safety')),
              S.listItem()
                .title('Careers Page')
                .child(S.document().schemaType('careers').documentId('careers')),
            ])
        ),
      S.divider(),
      
      // Projects (Collection)
      S.listItem()
        .title('Projects')
        .child(
          S.documentTypeList('project')
            .title('All Projects')
        ),
        
      // Filter out types that are manually included above
      ...S.documentTypeListItems().filter(
        (item) => !['settings', 'home', 'about', 'safety', 'careers', 'project'].includes(item.getId()!)
      ),
    ])
