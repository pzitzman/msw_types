"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const msw_1 = require("msw");
const node_1 = require("msw/node");
const handlers = [
    msw_1.http.get("/locales/*", async ({}) => {
        return msw_1.HttpResponse.json([]);
    })
];
const server = (0, node_1.setupServer)(...handlers);
exports.default = server;
