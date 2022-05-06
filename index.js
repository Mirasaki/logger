const chalk = require('chalk');
const moment = require('moment');

const tagList = {
  SYSLOG: chalk.grey('[SYSLOG]'),
  SYSERR: chalk.red('[SYSERR]'),
  SUCCESS: chalk.green('[SUCCESS]'),
  INFO: chalk.blue('[INFO]'),
  DEBUG: chalk.magenta('[DEBUG]'),
  DATABASE: chalk.yellow('[DATABASE]'),
  COMMAND: chalk.white('[CMD]')
};

const longestTagLength = Math.max(...Object.values(tagList).map(t => t.length));
const getTag = (tag) => `${tagList[tag]}${' '.repeat(longestTagLength - tagList[tag].length)}:`;
const timestamp = () => `${chalk.cyan.bold(`[${moment.utc().format('HH:mm:ss')}]`)}`;

module.exports = {
  syslog: (str) => console.info(`${timestamp()} ${getTag('SYSLOG')} ${str}`),
  syserr: (str) => console.error(`${timestamp()} ${getTag('SYSERR')} ${str}`),
  success: (str) => console.log(`${timestamp()} ${getTag('SUCCESS')} ${str}`),
  info: (str) => console.info(`${timestamp()} ${getTag('INFO')} ${str}`),
  debug: (str) => console.log(`${timestamp()} ${getTag('DEBUG')} ${str}`),
  database: (str) => console.log(`${timestamp()} ${getTag('DATABASE')} ${str}`),

  startLog: (identifier) => console.log(`${timestamp()} ${getTag('DEBUG')} ${chalk.greenBright('[START]')} ${identifier}`),
  endLog: (identifier) => console.log(`${timestamp()} ${getTag('DEBUG')} ${chalk.redBright('[ END ]')} ${identifier}`),

  timestamp,
  getExecutionTime: (startHr) => {
    const executionTimeInMS = (
      process.hrtime(startHr)[0] * 1000
      + startHr[1] / 1000000
    ).toFixed(2);
    return `${chalk.greenBright(
      (executionTimeInMS / 1000).toFixed(2))
    } seconds (${chalk.greenBright(executionTimeInMS)} ms)`;
  }
};
