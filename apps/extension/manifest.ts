import packageJson from './package.json'

const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: 'DRIP3',
  version: packageJson.version,
  description: packageJson.description,
  options_page: 'src/pages/options/index.html',
  background: { service_worker: 'src/pages/background/index.js' },
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_icon: 'icon-34.png',
  },
  permissions: ['tabs'],
  // chrome_url_overrides: {
  //   newtab: 'src/pages/newtab/index.html',
  // },
  icons: {
    '128': 'icon-128.png',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/pages/content/index.js'],
    },
  ],
  devtools_page: 'src/pages/devtools/index.html',
  web_accessible_resources: [
    {
      resources: [
        'src/pages/contentEmbed/index.js',
        'assets/js/*.js',
        'assets/css/*.css',
        'icon-128.png',
        'icon-34.png',
      ],
      matches: ['*://*/*'],
    },
  ],
}

export default manifest
