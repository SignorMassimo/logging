export class NexLog {
    log(...args: any[]) {
        console.log('[LOG]', ...args)
    }

    warn(...args: any[]) {
        console.log('[WARN]', ...args)
    }

    error(...args: any[]) {
        console.log('[ERROR]', ...args)
    }
}
