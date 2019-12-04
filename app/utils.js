const moment = require('moment')
module.exports = {
    getNowText: () => moment().format("YYYY-MM-DD HH:mm:ss")
}