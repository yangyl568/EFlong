module.exports = {
    title: '逍遥生-前端笔记',
    description: '前端面试 前端面试题 css javascript vue js 前端博客',
    head: [
        ['link', {
            rel: 'icon',
            href: 'favicon.ico'
        }],
        [
            'script', {},
            `var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?ce5b5e7aef70331f91bf3366eeef2b2b";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
            `
        ]
    ],
    base: '/EFlong/',
    host: '127.0.0.1',
    port: '8888',
    extraWatchFiles: [
        // '.vuepress/config.js' // 指定额外的需要被监听的文件。
    ],
    themeConfig: {
        lastUpdated: 'Last Updated', // Last Updated | boolean
        sidebar: 'auto',
        nav: [
            {
                text: '首页', link: '/'
            },
            {
                text: 'CSS 必备知识点', link: '/css'
            },
            {
                text: 'javascript', link: '/javascript'
            },
            {
                text: '前端工程化', link: '/engineering'
            },
            {
                text: '前端框架', link: '/frame'
            },
            // {
            //     text: '前端知识点',
            //     items: [
            //         { text: 'CSS 必备知识点', link: '/css' },
            //         { text: 'javascript', link: '/javascript' },
            //         { text: '前端工程化', link: '/engineering' },
            //         { text: '框架', link: '/frame' },
            //         { text: 'Node', link: '/node' },
            //     ]
            // },
            {
                text: '动动手',
                link: '/bibeiskill'
            },
            // {
            //     text: '扩展',
            //     link: '/kuozhan'
            // },
            {
                text: '问题收集',
                link: '/error'
            },
            {
                text: 'Vue3项目',
                link: '/vue3'
            },
        ],
        sidebarDepth: 4
    },
    plugins: ['@vuepress/back-to-top', '@vuepress/nprogress']
}