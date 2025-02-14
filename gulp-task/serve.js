"use strict";

import browsersync from "browser-sync";

export const serve = (done) => {
  browsersync.init({
    server: "./dist/",
    port: 4000,
    notify: true,
  });
  done();
};
