#!/usr/bin/env node

/**
 * Module dependencies.
 */

const program = require('commander');
const execSync = require('child_process').execSync;

program
  .version('0.0.1', '-v, --version')

program
  .command('init [template]')
  .description('Please select a template to use')
  .action((template) => {
    execSync(`git clone -b template/${template} git@github.com:giginc/frontend-templates.git`);
  })

program.parse(process.argv)
