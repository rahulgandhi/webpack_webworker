# webpack_webworker

When using a worker-loader in webpack to load the worker, importScripts inside the worker no longer maintain the worker context.
Which it should according to https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers


