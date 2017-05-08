const path = require('path')


const EVENT = process.env.npm_lifecycle_event || ''

// Helper functions
const ROOT = path.resolve(__dirname, '../..')

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1
}

function hasNpmFlag(flag) {
  return EVENT.includes(flag)
}

function isWebpackDevServer() {
  return process.argv[1] && !! (/webpack-dev-server$/.exec(process.argv[1]))
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0)
  return path.join.apply(path, [ROOT].concat(args))
}

function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request)
    return
  }
  cb()
}


// exports.hasProcessFlag = hasProcessFlag
// exports.isWebpackDevServer = isWebpackDevServer
// exports.root = root
// exports.checkNodeImport = checkNodeImport

function getHost() {
  return location.host
}

export const helpers = {
  hasProcessFlag,
  hasNpmFlag,
  isWebpackDevServer,
  root,
  checkNodeImport,
  getHost
}
