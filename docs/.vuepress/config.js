module.exports = {
    title: '逍遥生-笔记o-o',
    description: '前端知识点、前端面试整理、前端积累',
    head: [
        ['link', {
            rel: 'icon',
            href: '/imgs/favicon.ico'
        }]
    ],
    base: '/EFlong.github.io',
    host: '127.0.0.1',
    port: '8888',
    extraWatchFiles: [
        // '.vuepress/config.js' // 指定额外的需要被监听的文件。
    ],
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        sidebar: 'auto',
        nav: [
            {
                text: '首页', link: '/'
            },
            {
                text: '前端知识点',
                items: [
                    { text: 'css 关键', link: '/css' },
                    { text: 'javascript', link: '/javascript' },
                    { text: '前端工程化', link: '/engineering' },
                    { text: '框架', link: '/frame' },
                    { text: 'Node', link: '/node' },
                ]
            },
            {
                text: '笔试题~',
                link: '/bibeiskill'
            },
            {
                text: '扩展',
                link: '/kuozhan'
            },
            {
                text: '问题收集',
                link: '/error'
            }
        ],
        // sidebar: [
        //     "/", //指的是根目录的md文件 也就是 README.md 里面的内容
        //     "/bibeiskill", //根目录创建 mianshi.md文件
        //     "/kuozhan", //根目录创建 kuozhan.md文件
        //     "/error" //根目录创建 error.md文件
        // ],
        sidebarDepth: 2
    }
}