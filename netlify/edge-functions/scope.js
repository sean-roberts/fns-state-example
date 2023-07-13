
let globalCounter = 0;

export default () => {

  let localCounter = 0;

  return new Response(`Global counter: ${globalCounter++} and local counter: ${localCounter++}`)
};

export const config = {
  path: "/scope"
}
