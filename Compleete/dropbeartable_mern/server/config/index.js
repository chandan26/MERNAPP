
if(process.env.NODE_ENV === 'productin'){
    module.exports = require('./prod.js');
} else {
    module.exports = require('./dev.js');
}