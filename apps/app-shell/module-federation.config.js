// @ts-check

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'app-shell',
  remotes: ['intro', 'uids'],
};

module.exports = moduleFederationConfig;
