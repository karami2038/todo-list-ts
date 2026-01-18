import * as dotenvx from "@dotenvx/dotenvx"

dotenvx.config({
    path: [
        '../../.env',
        '../../.env.development',
        '../../.env.test',
        '../../.env.production',
    ],
    quiet: true
});


