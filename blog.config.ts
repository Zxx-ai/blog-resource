import defineBlogConfig from "./src/declare/defineBlogConfig";

const site = `https://zxx-ai.github.io`, base = `/blog-resource`

export default defineBlogConfig({
  PageDefaultSettings: {
    background: {
      type: 'fade',
      content: `url(/source/Images/1.jpg)`,
    },
    footer: {
      content: [
        '<div>Powered by Astro & Vue @2019-2023</div>',
        // '<a href="https://github.com/Zxx-ai" target="_blank">Github</a>',
      ]
    }
  },
  UserInfo: {
    name: 'Sunny新',
    introduction: '愿这世间努力奋斗的人，都不会被辜负',
    avatar: '/avatar/avatar2.jpg',
    link: [
      {
        sitename: 'Github',
        link: 'https://github.com/Zxx-ai',
        class: 'iconfont icon-github'
      }
    ]
  },
  WebsiteSettings: {
    title: `Sunny新`,
    description: `Sunny新，用于记录自己学习的知识和踩过的坑`,
    site,
    useIndex: true,
    base,
  },
  SearchConfig: {
    active: true,
    mode: 'static',
  },
  pages: {
    'friends': {
      FriendList: []
    },
    index: {
      header: {
        hidden: true
      },
      background: {
        type: "photo",
        content: "/indexBG.jpg",
        useMaskOnDarkMode: true
      },
      footer: {
        hidden: true
      },
      setMinHeight: "fill"
    },
    blog: {
      PageArticleCount: 5
    },
  }
})