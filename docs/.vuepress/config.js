module.exports = {
    title: '逍遥生-笔记o-o',
    description: '前端知识点、前端面试整理、前端积累',
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
                text: '动动手~',
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
    },
    plugins: ['@vuepress/back-to-top', '@vuepress/nprogress']
}