module.exports = [
  require('postcss-partial-import')(),
  require('postcss-nested')(),
  require('postcss-simple-vars')(),
  require('postcss-selector-matches')(),
  require('autoprefixer')({browsers: 'last 15 versions'}),
  require('postcss-inline-svg')(),
  require('postcss-size')(),
  require('postcss-position')()
];