import { blue, gray, magenta, red, yellow } from 'kleur/colors'

export class NexLog {
    static nex(...args: any[]) {
        console.log(magenta('[NEX]'), ...args)
    }

    static log(...args: any[]) {
        console.log(gray('[LOG]'), ...args)
    }

    static info(...args: any[]) {
        console.log(blue('[INFO]'), ...args)
    }

    static warn(...args: any[]) {
        console.log(yellow('[WARN]'), ...args)
    }

    static error(...args: any[]) {
        console.log(red('[ERROR]'), ...args)
    }
}
