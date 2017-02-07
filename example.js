// var workerScript = require("worker-loader!./a.worker.js");
// var worker = new workerScript;
var worker = new window.Worker("a.worker.js");
worker.postMessage("b");
worker.onmessage = function (event) {
	console.log("in maine");
	var templateB = event.data;
	console.log(templateB);
};