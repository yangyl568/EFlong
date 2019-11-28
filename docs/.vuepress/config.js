module.exports = {
    title: '这是我的记录网站',
    description: 'Just playing around',
    head: [
        ['link', {
            rel: 'icon',
            href: './../public/imgs/read.jpeg'
        }]
    ],
    host: '127.0.0.1',
    port: '8888',
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        sidebar: 'auto',
        nav: [{
                text: '知识点',
                items: [
                    { text: 'vue性能优化', link: '/vueyouhua' }
                ]
            },
            {
                text: '必备技能~',
                link: '/bibeiskill'
            },
            {
                text: '扩展',
                link: '/kuozhan'
            },
            {
                text: '报错信息',
                link: '/error'
            },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'Japanese', link: '/language/japanese' }
                ]
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