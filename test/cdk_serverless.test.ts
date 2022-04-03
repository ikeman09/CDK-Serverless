import * as cdk from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import * as CdkServerless from '../lib/cdk_serverless-stack';

// Test Lambda Functions and Lambda Layers
describe('Lambda and Lambda Layers', () => {
  const app = new cdk.App()
  const stack = new CdkServerless.CdkServerlessStack(app, 'LambdaStack')
  const template = Template.fromStack(stack)

  test('Lambda Layer count', () => {
    template.resourceCountIs("AWS::Lambda::LayerVersion", 1)
  })

  test('Lambda Function count', () => {
    template.resourceCountIs("AWS::Lambda::Function", 2)
  })

  test('Lambda Layer Created', () => {
    template.hasResourceProperties('AWS::Lambda::LayerVersion', {
      CompatibleRuntimes: ['nodejs14.x']
    });
  });

  test('getUser Lambda Function Created', () => {
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'getUser.handler',
      Runtime: 'nodejs14.x'
    })
  })

  test('postUser Lambda Function Created', () => {
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'postUser.handler',
      Runtime: 'nodejs14.x'
    })
  })
})

// Test Api Gateway
describe('Api Gateway', () => {
  const app = new cdk.App()
  const stack = new CdkServerless.CdkServerlessStack(app, 'ApiGatewayStack')
  const template = Template.fromStack(stack)

  test('ApiGateway RestApi count', () => {
    template.resourceCountIs("AWS::ApiGateway::RestApi", 1)
  })

  test('ApiGateway Resource count', () => {
    template.resourceCountIs("AWS::ApiGateway::Resource", 2)
  })

  test('ApiGateway Method count', () => {
    template.resourceCountIs("AWS::ApiGateway::Method", 3)
  })

  test('API Gateway for Lambda Functions created', () => {
    template.hasResource("AWS::ApiGateway::RestApi", {
      Properties: Match.anyValue()
    })
  })

  describe('hello API Gateway resources and methods', () => {
    test('hello API Gateway Resources Created', () => {
      template.hasResourceProperties("AWS::ApiGateway::Resource", {
        PathPart: 'hello'
      })
    })

    test('GET hello method added', () => {
      template.hasResource("AWS::ApiGateway::Method", {
        Properties: {
          HttpMethod: 'GET',
          ResourceId: {
            Ref: 'sampleapihello268B92B8'
          },
        }
      })
    })
  })

  describe('functiontwo API Gateway resources and methods', () => {
    test('functiontwo API Gateway Resources Created', () => {
      template.hasResourceProperties("AWS::ApiGateway::Resource", {
        PathPart: 'functiontwo'
      })
    })

    test('POST functiontwo method added', () => {
      template.hasResource("AWS::ApiGateway::Method", {
        Properties: {
          HttpMethod: 'POST',
          ResourceId: {
            Ref: 'sampleapifunctiontwo92AAF164'
          },
        }
      })
    })

    test('GET functiontwo method added', () => {
      template.hasResource("AWS::ApiGateway::Method", {
        Properties: {
          HttpMethod: 'GET',
          ResourceId: {
            Ref: 'sampleapifunctiontwo92AAF164'
          },
        }
      })
    })
  })
})