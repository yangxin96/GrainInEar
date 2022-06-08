module.exports = {
    port: 8989,
    // 网站的一些基本配置
    // base:配置部署站点的基础路径，后续再介绍
    title: '小巷', // 网站的标题
    //base: 'GrainInEar', //部署到github需要
    description: '文档网站', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    sidebar: 'auto',
    head:[['link',{rel:'icon',href:'/log.png'}]], //浏览器标签页图标
    plugins: [['vuepress-plugin-code-copy',{
        align: 'top' //复制按钮垂直位置，top和bottom
    }]], //添加代码块复制按钮  https://github.com/znicholasbrown/vuepress-plugin-code-copy
    themeConfig: {

        logo: '/A1.png', //网站标题旁边导航栏的log图片
        nav: [
            { text: 'Home', link: '/' },
            // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
            { text: 'MyBlog', link: 'http://www.heibaixx.cn',target:'_blank' },
            // 支持嵌套,形成下拉式的导航菜单
            // {text: '语言',  //网站不需要多语言，所以注释掉
            //     ariaLabel: 'Language Menu',
            //     items: [
            //         { text: '中文', link: '/language/chinese/' },
            //         { text: '英文', link: '/language/english/' }
            //     ]
            // },
            {text: '文档',
                ariaLabel: 'Language Menu',
                items: [
                   // { text: '技术文档', link: '/blog/course/' ,target: '_blank'},
                    { text: '技术文档', link: '/blog/course/'},
                    { text: '插件文档', link: '/blog/plugin/'},
                    { text: 'Markdown 拓展' , link: '/blog/MarkdownStay/'}
                ]

            },
        ],
        sidebar:{ //教程文档侧边栏配置
            '/blog/course/':[
                '', //README.md文件
                'nome',//nome文件
                'devops',//部署文档
                'Docker'//docker 仓库文档
            ],
            //插件文档侧边栏配置
            '/blog/plugin/':[
                '', //README.md文件
                'idea'//idea插件
            ],
            //Markdown 拓展文档侧边栏配置
            '/blog/MarkdownStay/':[
                '', //README.md文件
                ['stay','Markdown 拓展']

            ]
        },
        sidebarDepth: 2
//图片位置在 /images/CoursePhoto 切换CoursePhoto 目录
    }
}
