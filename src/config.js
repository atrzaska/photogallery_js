const os = require('os')

module.exports = {
  picturesPath: process.env.GALLERY_PATH || `${os.homedir()}/Pictures`,
}
