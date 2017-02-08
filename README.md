# webpack_webworker

When using a worker-loader in webpack to load the worker, importScripts inside the worker no longer maintain the worker context.
Which it should according to https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers

## Steps to reproduce the issue

Follow these steps to reproduce the issue

1. Uncomment line 1 and 2 in example.js
2. Comment line 3 in example.js
3. Run webpack
4. Run ```http-server``` in the root of the repo
5. Observe the console.
