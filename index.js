import { blue, gray, magenta, red, yellow } from 'kleur/colors';
export class NexLog {
    static nex(...args) {
        console.log(magenta('[NEX]'), ...args);
    }
    static log(...args) {
        console.log(gray('[LOG]'), ...args);
    }
    static info(...args) {
        console.log(blue('[INFO]'), ...args);
    }
    static error(...args) {
        console.log(red('[ERROR]'), ...args);
    }
    static warn(...args) {
        console.log(yellow('[WARN]'), ...args);
    }
}
