importScripts('longTimeFunc.js');
onmessage = (e) => {
  longTimeFunc(e.data);
  postMessage(`${e.data} finish`);
}
