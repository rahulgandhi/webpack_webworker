onmessage = function(event) {
	console.log("in worker");
    var template = event.data;
    require(["./templates/" + event.data], function(tmpl) {
        postMessage(tmpl());
    });
}

var x = x || {};
importScripts("b.js")
console.log(x.name);