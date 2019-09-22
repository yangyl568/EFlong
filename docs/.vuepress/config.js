module.exports = {
    title: '这是我的记录网站',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '接口定义', link: '/apiword' },
            { text: '接口字段定义', link: '/api' },
            { text: '附录：错误码', link: '/error' }
        ],
        sidebar: {
            '/': [
                "/", //指的是根目录的md文件 也就是 README.md 里面的内容
                // "apiword", 根目录创建 apiword.md文件
                // "api", 根目录创建 api.md文件
                // "error" 根目录创建 error.md文件
            ]
        },
        sidebarDepth: 2
    }
}