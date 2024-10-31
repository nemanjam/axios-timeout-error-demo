# axios-timeout-error-demo

## Usage

```bash
# install packages
yarn install

# run demo
yarn dev
```

You will get this error:

```
$ ~/Desktop/axios-timeout-error-demo$ yarn dev

yarn run v1.22.22
$ ts-node ./src/main.ts
Stringified error:  {
  "message": "",
  "name": "AggregateError",
  "stack": "AggregateError\n    at Function.AxiosError.from (/home/username/Desktop/axios-timeout-error-demo/node_modules/axios/lib/core/AxiosError.js:92:14)\n    at RedirectableRequest.handleRequestError (/home/username/Desktop/axios-timeout-error-demo/node_modules/axios/lib/adapters/http.js:620:25)\n    at RedirectableRequest.emit (node:events:531:35)\n    at RedirectableRequest.emit (node:domain:488:12)\n    at ClientRequest.eventHandlers.<computed> (/home/username/Desktop/axios-timeout-error-demo/node_modules/follow-redirects/index.js:49:24)\n    at ClientRequest.emit (node:events:519:28)\n    at ClientRequest.emit (node:domain:488:12)\n    at emitErrorEvent (node:_http_client:103:11)\n    at TLSSocket.socketErrorListener (node:_http_client:506:5)\n    at TLSSocket.emit (node:events:519:28)\n    at Axios.request (/home/username/Desktop/axios-timeout-error-demo/node_modules/axios/lib/core/Axios.js:45:41)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)",
  "config": {
    "transitional": {
      "silentJSONParsing": true,
      "forcedJSONParsing": true,
      "clarifyTimeoutError": false
    },
    "adapter": [
      "xhr",
      "http",
      "fetch"
    ],


    // ...

      "maxCachedSessions": 100,
      "_sessionCache": {
        "map": {},
        "list": []
      }
    },
    "method": "get",
    "url": "https://news.ycombinator.com/item?id=41966114"
  },
  "code": "ETIMEDOUT"
}
Axios no response error. Request: [object Object] undefined
/home/username/Desktop/axios-timeout-error-demo/src/axios-instance.ts:52
  return new Error(message);
         ^
Error: Axios no response error. Request: [object Object]
    at handleAxiosError (/home/username/Desktop/axios-timeout-error-demo/src/axios-instance.ts:52:10)
    at /home/username/Desktop/axios-timeout-error-demo/src/axios-demo.ts:28:29
    at Generator.throw (<anonymous>)
    at rejected (/home/username/Desktop/axios-timeout-error-demo/src/axios-demo.ts:6:65)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)
error Command failed with exit code 1.
```
