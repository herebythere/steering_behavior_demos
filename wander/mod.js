const worker = new Worker("worker.js", { type: "module" });
const canvas = document.querySelector("canvas");
const offscreenCanvas = canvas.transferControlToOffscreen();
console.log("hello wanderer!");
export {};
