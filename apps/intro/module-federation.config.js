const moduleFederationConfig = {
  name: 'intro',
  exposes: {
    './Module': './src/app/app.tsx'
  }
}

module.exports = moduleFederationConfig;
