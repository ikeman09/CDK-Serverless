import {aws_apigateway, Stack, StackProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigateway from 'aws-cdk-lib/aws-apigateway'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkServerlessStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const lambdaLayer = new lambda.LayerVersion(this, "lamdaLayer", {
      code: lambda.Code.fromAsset('layers'),
      compatibleRuntimes: [lambda.Runtime.NODEJS_14_X]
    })

    // const getUser = new lambda.Function(this, "getUser", {
    //   runtime: lambda.Runtime.NODEJS_14_X,
    //   code: lambda.Code.fromAsset("functions"),
    //   handler: "getUser.handler",
    //   layers: [lambdaLayer]
    // });

    const getUser = new lambda.Function(this, "getUser", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("functions"),
      handler: "getUser.handler",
      layers: [lambdaLayer]
    })

    const postUser = new lambda.Function(this, "postUser", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("functions"),
      handler: "postUser.handler",
      layers: [lambdaLayer]
    });

    const api = new apigateway.RestApi(this, "sample-api", {
      restApiName: "AWS CDK template"
    })

    const getUserIntegration = new apigateway.LambdaIntegration(getUser)
    const postUserIntegration = new apigateway.LambdaIntegration(postUser)

    const hello = api.root.addResource('hello')
    hello.addMethod('GET', getUserIntegration)

    const functiontwo = api.root.addResource('functiontwo')
    functiontwo.addMethod('POST', postUserIntegration)
    functiontwo.addMethod('GET', postUserIntegration)

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkServerlessQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
