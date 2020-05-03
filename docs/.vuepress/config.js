const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Software',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'AAAIMX Division',
  base: '/software/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#2B5458' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'meta',
      {
        name: 'og:image',
        content: 'https://www.aaaimx.org/software/logo.png'
      }
    ],
    [
      'link',
      {
        href: 'https://www.aaaimx.org/software/logo.png',
        rel: 'shortcut icon'
      }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: 'antdocs',
  themeConfig: {
    repo: 'https://github.com/disoftw',
    logo: 'logo.png',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Resources',
        link: '/resources/'
      },
      {
        text: 'FAQS',
        link: '/faqs/'
      },
      {
        text: 'Facebook',
        link:
          'https://web.facebook.com/AAAI-MX-Software-Division-109685297309422'
      }
      // {
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // }
    ],
    sidebar: {
      '/about/': [
        {
          title: 'About',
          collapsable: false,
          children: ['', ['members', 'Miembros'], ['veteranos', 'Veteranos']]
        }
      ],
      '/resources/': [
        {
          title: 'Resources',
          collapsable: false,
          children: ['', ['video', 'Videos']]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']
}
