exports.env = {
  AWS_REGION: process.env.AWS_REGION || 'us-east-1',
  ENV: 'test'
};

Object.assign(process.env, exports.env);
