# AWS CDK template for REST APIs using Lambda functions and API Gateway

The `cdk.json` file tells the CDK Toolkit how to execute your app.
## Install AWS CDK CLI and AWS SAM CLI

### AWS CDK Toolkit Installation
1) Run `npm install -g aws-cdk`
2) Verify the installation <br>
`cdk --version`

see documentation [here](https://docs.aws.amazon.com/cdk/v2/guide/cli.html)

### AWS SAM CLI Installation (Linux)
1) Install Docker 
2) Download the AWS CLI zip file [here](https://github.com/aws/aws-sam-cli/releases/latest/download/aws-sam-cli-linux-x86_64.zip)
3) Unzip the installation files into `sam-installation/` subdirectory <br>
`unzip aws-sam-cli-linux-x86_64.zip -d sam-installation`
4) Install the AWS SAM CLI <br>
`sudo ./sam-installation/install`
5) Verify the installation <br>
`sam --version`

if using another OS, see full documentation [here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npm run local`   run lambda functions locally with AWS SAM
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
