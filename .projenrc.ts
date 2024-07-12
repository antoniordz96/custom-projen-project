import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Antonio Rodriguez',
  authorAddress: 'antoniordz675@outlook.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'custom-projen-project',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:antoniordz96/custom-projen-project.git',
  release: false,
  publishDryRun: true,
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
});
project.synth();