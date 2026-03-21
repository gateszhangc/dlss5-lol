import { defineConfig, devices } from "@playwright/test";

const port = 3310;
const baseURL = `http://127.0.0.1:${port}`;
const projectRoot = __dirname;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  webServer: {
    command: `sh -c 'set -a; . ./.env.production; set +a; HOSTNAME=127.0.0.1 PORT=${port} npm run start'`,
    cwd: projectRoot,
    url: baseURL,
    reuseExistingServer: false,
    timeout: 120_000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
