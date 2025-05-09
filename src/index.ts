import { http, HttpResponse, RequestHandler } from "msw";
import { setupServer } from "msw/node";

const handlers: RequestHandler[] = [
     http.get<{}, undefined, undefined>("/locales/*", async ({}) => {
        return HttpResponse.json([]);
    })
]

const server = setupServer(...handlers );

export default server;
