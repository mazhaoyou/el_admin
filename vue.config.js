module.exports = {
    baseUrl: '/', // 根路径
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
    lintOnSave: false, // 是否开启eslint保存检测, 有效值: true || false || 'error'
    devServer: {
        open: true, //自动启动浏览器
        host: 'localhost',
        port: 8081,
        https: false, //启动https 协议
        hotOnly: false,
        proxy: {
            // 配置跨域
            '/api': {
                target: 'http//localhost:5000/api/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before(app) {
            // http://localhost:8081/api/goods
            app.get('/api/goods', (req, res) => {
                res.json(goods);
            });

            app.get('/api/ratings', (req, res) => {
                res.json(ratings);
            });

            app.get('/api/seller', (req, res) => {
                res.json(seller);
            });
        }
    }

}
