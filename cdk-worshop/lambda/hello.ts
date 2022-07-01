// hello.ts

exports.handler = async function(event: any) {
  console.log("request:", JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    headers: {"Content-Type": "application/json"},
    body: `Hello CDK dev! you've hit ${event.path}\n`
  };
};
