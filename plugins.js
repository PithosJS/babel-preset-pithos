const plugins = [
  // support for decorator syntax
  require('babel-plugin-syntax-decorators'),
  // support for flow type syntax
  require('babel-plugin-syntax-flow'),
  // transform import statements to commonjs
  require('babel-plugin-transform-es2015-modules-commonjs'),
  // handle the exponent operator
  require('babel-plugin-transform-exponentiation-operator'),
  // handle async/await
  require('babel-plugin-transform-async-to-generator'),
  // handle async generator functions
  require('babel-plugin-transform-async-generator-functions'),
  // support legacy style decorators
  require('babel-plugin-transform-decorators-legacy').default,
  // handle class properties
  require('babel-plugin-transform-class-properties'),
  // support new export extensions
  require('babel-plugin-transform-export-extensions'),
  // support do statements
  require('babel-plugin-transform-do-expressions'),
  // support function bind
  require('babel-plugin-transform-function-bind'),
  // support object rest/spread
  require('babel-plugin-transform-es2015-destructuring'),
  require('babel-plugin-transform-es2015-parameters'),
  require('babel-plugin-transform-object-rest-spread'),
  // run flow type checks and insert runtime checks
  require('babel-plugin-typecheck').default,
  // transform flow types into comments instead of stripping them
  require('babel-plugin-transform-flow-comments'),
];

module.exports = plugins;
