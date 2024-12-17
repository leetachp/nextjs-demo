// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://5be8d0c02c2c4e13f46badca418d54a5@o4508471180787712.ingest.us.sentry.io/4508471183147008",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});

module.exports = {
  sentry: {
    dsn: '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',
    authToken: process.env.SENTRY_AUTH_TOKEN, // ใช้ตัวแปรสภาพแวดล้อม
  },
}


