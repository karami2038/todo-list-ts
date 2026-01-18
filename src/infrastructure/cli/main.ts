#!/usr/bin/env bun

import { defineCli, defineCommand } from "boune";

const greet = defineCommand({
    name: "greet",
    arguments: {
        name: { type: "string", required: true },
    },
    options: {
        loud: { type: "boolean", short: "l", default: false },
    },
    description: "Greets a user by name.",
    action: ({ args, options }) => {
        const greeting = `Hello, ${args.name}!`;
        if (options.loud) {
            console.log(greeting.toUpperCase());
        } else {
            console.log(greeting);
        }
    }
})

const cli = defineCli({
    name: "todolist-cli",
    version: "0.0.1",
    commands: {greet},
})

await cli.run()