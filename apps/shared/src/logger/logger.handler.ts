import logger from '.';

class LoggerHandler {
    static log({
        message,
        consumer = 'Unknown',
        level = 'info',
        err = null,
        logObject = null,
        proxyRevision = null,
        reqId = null,
        version = null,
    }) {
        if (err) {
            return logger[level](
                {
                    consumer,
                    err,
                    obj: logObject,
                    proxyRevision,
                    reqId,
                    version,
                },
                message
            );
        }

        return logger[level](
            {
                consumer,
                obj: logObject,
                proxyRevision,
                reqId,
                version,
            },
            message
        );
    }
}

export default LoggerHandler;
