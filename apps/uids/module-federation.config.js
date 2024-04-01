const moduleFederationConfig = {
  name: 'uids',
  exposes: {
    './Module': './src/app/app.tsx'
  }
}

module.exports = moduleFederationConfig;
