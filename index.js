import { blue, gray, magenta, red, yellow } from 'kleur';
export class NexLog {
    static nex(...args) {
        console.log(magenta('[NEX]'), ...args);
    }
    static log(...args) {
        console.log(gray('[LOG]'), ...args);
    }
    static info(...args) {
        console.log(blue('[LOG]'), ...args);
    }
    static warn(...args) {
        console.log(yellow('[WARN]'), ...args);
    }
    static error(...args) {
        console.log(red('[ERROR]'), ...args);
    }
}
