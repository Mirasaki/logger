# logger

## Require the package
```js
const logger = require('@mirasaki/logger');
```

## Example Usage
```js
logger.syslog('Start initializing...');
logger.syserr('Encountered error while trying to connect to database');
logger.success(`Client initialized after ${logger.getExecutionTime(process.hrtime())}`);
logger.info('Fetching data from API...');
logger.debug(`Execution time: ${logger.getExecutionTime(process.hrtime())}`);
logger.startLog('Application Command Data');
console.table(
  [
    {
      name: 'help',
      description: 'Display general information'
    },
    {
      name: 'start',
      description: 'Start task'
    }
  ]
);
logger.endLog('Application Command Data');
```

### Outputs:
![](https://i.postimg.cc/BZLdKP0N/Windows-Terminal-5-KQj-Dfpp-KR.png "Preview unavailable")

## Functions
- `syslog`
- `syserr`
- `success`
- `info`
- `debug`
- `database`
- `startLog` & `endLog`
- `timestamp` -> returns the formatted timestamp for consistency
- `getExecutionTime` -> pass `process.hrtime()` to get precise, formatted `timeSince` output