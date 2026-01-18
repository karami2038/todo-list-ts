import {Hono} from "hono";

export const api = new Hono();

api.get('/', (c) => {
    return c.json({
        status: 'ok',
        version: '0.0.1',
        docs: 'See /openapi.json for full API documentation.'
    });
});


// TEMP: Temporary implementation, will separate concerns later
export default {
    port: 3990,
    fetch: api.fetch,
};
