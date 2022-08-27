const baseConfig = require('@jupyterlab/galata/lib/playwright-config');
const { devices: replayDevices } = require('@replayio/playwright');

module.exports = {
  ...baseConfig,
  timeout: 240000,
  reporter: [[process.env.CI ? 'dot' : 'list'], ['html']],
  use: {
    appPath: '',
    baseURL: 'http://localhost:8000',
    autoGoto: false,
    video: 'retain-on-failure',
    acceptDownloads: true,
  },
  projects: [
    {
      name: 'replay-firefox',
      use: { ...replayDevices['Replay Firefox'] },
    },
    {
      name: 'replay-chromium',
      use: { ...replayDevices['Replay Chromium'] },
    },
  ],
  retries: 1,
};
