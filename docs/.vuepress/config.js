module.exports = {
    title: '这是我的记录网站',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '知识点', link: '/' },
            { text: '面试~', link: '/mianshi' },
            { text: '扩展', link: '/kuozhan' },
            { text: '报错信息', link: '/error' }
        ],
        sidebar: {
            '/': [
                "/", //指的是根目录的md文件 也就是 README.md 里面的内容
                "mianshi", //根目录创建 mianshi.md文件
                "kuozhan", //根目录创建 kuozhan.md文件
                "error" //根目录创建 error.md文件
            ]
        },
        sidebarDepth: 2
    }
}