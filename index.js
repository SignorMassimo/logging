export class NexLog {
    log(...args) {
        console.log('[LOG]', ...args);
    }
    warn(...args) {
        console.log('[WARN]', ...args);
    }
    error(...args) {
        console.log('[ERROR]', ...args);
    }
}
