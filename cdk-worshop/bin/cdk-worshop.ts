#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorshopStack } from '../lib/cdk-worshop-stack';

const app = new cdk.App();
new CdkWorshopStack(app, 'CdkWorshopStack');
