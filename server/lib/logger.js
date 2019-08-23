import { createLogger, transports } from 'winston';

export { logger };

const logger = createLogger({
  transports: [new transports.Console()]
});
