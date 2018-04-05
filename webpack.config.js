const devConfig = require('./webpack.dev.config.js');
const prodConfig = require('./webpack.prod.config.js');
let config = '';

switch (process.env.npm_lifecycle_event) {
    case 'start':
        config = devConfig;
        break;

    case 'build':
        config = prodConfig;
        break;

    default:
        config = devConfig;
        break;
}

module.exports = config;
