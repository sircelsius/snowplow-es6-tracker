import path from 'path';
import cors from 'cors'
import express from 'express';
import bodyParser from 'body-parser'

const dev = process.env.NODE_ENV !== 'prod';
const port = dev ? (process.env.PORT ? process.env.PORT : 3000) : process.env.PORT;
const app = express();
app.use( cors() )

console.info(`==> Running app in environment ${dev} on port ${port}`);

if(dev) {
    let webpack = require('webpack');
    let webpackMiddleware = require('webpack-dev-middleware');
    let webpackHotMiddleware = require('webpack-hot-middleware');
    let config = require('./webpack.config');

    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        noInfo: true,
        quiet: false,
        lazy: false,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },
        stats: {
            colors: true
        }
    });

    const bundlePath = path.join(__dirname, './public/build/index.html');

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.use( bodyParser.urlencoded( {
        extended: true
    } ))
    
    app.use( bodyParser.json() )

    app.all('/*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      next();
    });

    app.get('', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(bundlePath));
        res.end();
    })

    app.post('/tp2', ( req, res ) => {
        console.log( req.body )
        res.json( req.body )
    })
} else {
    const staticPath = path.join(__dirname, 'public/build');
    app.use(express.static(staticPath));
}

app.listen(port, '0.0.0.0', err => {
    if(err) {
        console.log(err);
    }
    console.info('==> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});