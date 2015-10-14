require('babel/register')({
  stage : 0,
});

var program = require('commander');

require('./commands/webpack-dev-server')(program);
require('./commands/web')(program);

program.parse(process.argv);

if (! process.argv.slice(2).length) {
  program.outputHelp();
  process.exit(1);
}
