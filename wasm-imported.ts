// from https://deno.land/manual/webassembly/using_streaming_wasm#using-the-streaming-webassembly-apis

// const { instance, module } = await WebAssembly.instantiateStreaming(
//   fetch("https://wpt.live/wasm/incrementer.wasm"),
// );

// const increment = instance.exports.increment as (input: number) => number;

// export default async () => new Response(`Hello ${increment(41)}`);



// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import init from "../../pkg/hello_world.js";

export default async () => {
  // Instantiate our wasm module
  const helloWorld = await init("./pkg/hello_world_bg.wasm");

  // Call the Add function export from wasm, save the result
  const addResult = helloWorld.add(24, 24);

  return new Response(` add result ${addResult}`)

};
