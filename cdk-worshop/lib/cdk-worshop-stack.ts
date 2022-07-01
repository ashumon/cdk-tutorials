import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigw from "aws-cdk-lib/aws-apigateway";

export class CdkWorshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps){
    super(scope, id, props);

    // define an aws lambda resource
    const hello = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "hello.handler",
    })

    // define an api-gateway resource
    const api = new apigw.LambdaRestApi(this, "Endpoint", {handler: hello})
  }
}
