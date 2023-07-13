let globalCounter = 0;

exports.handler = async function () {
  let localCounter = 0;
  return {
    statusCode: 200,
    body: `Global counter: ${globalCounter++} and local counter: ${localCounter++}`
  };
}
