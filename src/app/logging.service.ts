export class LoggingService {
    logToConsole(message) {
        console.log('A server status changed, new status: ' + message);
    }
}