import Pino, { Logger } from 'pino';

const logger: Logger = Pino({
    level: 'info',
    useLevelLabels: true,
});

export default logger;
