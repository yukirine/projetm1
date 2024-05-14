const navigation = () => {
  return [
    {
      title: 'Home',
      action: 'read',
      subject: 'home',
      path: '/home',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Access Control',
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      icon: 'tabler:shield'
    },
    {
      sectionTitle: 'Compagnon Santé'
    },
    {
      title: 'Calendar',
      path: '/calendar',
      action: 'read',
      subject: 'calendar',
      icon: 'tabler:calendar-month'
    },
    {
      title: 'ChatBot',
      path: '/chat',
      action: 'read',
      subject: 'chat',
      icon: 'carbon:chat-bot'
    },
    {
      sectionTitle: 'SmartWatch'
    },
    {
      title: 'Mes données de santé',
      path: '/smartwatch',
      action: 'read',
      subject: 'smartwatch',
      icon: 'fluent-mdl2:health-solid'
    },
    {
      sectionTitle: 'Autres'
    },
    {
      title: 'Outils',
      icon: 'tabler:dots',
      badgeContent: 'New',
      badgeColor: 'error',
      children: [
        {
          title: 'Typographie',
          path: '/outils/typographie',
          icon: 'tabler:typography'
        },
        {
          title: 'Icons',
          icon: 'fluent-emoji-flat:chicken',
          externalLink: true,
          openInNewTab: true,
          path: 'https://icon-sets.iconify.design/'
        },
        {
          title: 'Graphes',
          path: '/outils/graphes',
          icon: 'tabler:chart-pie'
        },
        {
          title: 'Composants',
          icon: 'iconamoon:component-fill',
          badgeContent: '1',
          badgeColor: 'primary',
          children: [
            {
              title: 'Buttons',
              path: '/outils/composants/buttons'
            }
          ]
        },
        {
          sectionTitle: 'menu'
        },
        {
          title: 'Niveaux de menu',
          children: [
            {
              title: 'Sous menu 2.1'
            },
            {
              title: 'Sous menu 2.2',
              children: [
                {
                  title: 'Sous menu 3.1'
                },
                {
                  title: 'Sous menu 3.2'
                }
              ]
            }
          ]
        },
        {
          title: 'Menu désactivé',
          disabled: true
        },
        {
          title: 'Lien externe',
          externalLink: true,
          openInNewTab: true,
          path: 'https://www.google.fr'
        }
      ]
    }
  ]
}

export default navigation
