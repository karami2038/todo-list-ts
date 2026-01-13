import {Hono} from "hono";

export const apiController = new Hono();

apiController.get('/', (c) => {
    return c.json({
        status: 'ok',
        version: '0.0.1',
        docs: 'See /openapi.json for full API documentation.'
    });
});

export default {
    port: 3990,
    fetch: apiController.fetch,
};
