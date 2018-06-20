var configValues = require('./config')

module.exports = {
  getDbConnectionString: function() {
    return 'mongodb://' + configValues.username + ':' + configValues.pwd + '@ds259210.mlab.com:59210/nodetodosample'
  }
}
