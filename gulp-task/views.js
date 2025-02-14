"use strict";

import { paths } from "../gulpfile.js";
import gulp from "gulp";
import pug from "gulp-pug";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv)).argv;
const production = !!argv.production;

export const views = () => {
  return gulp
    .src(paths.views.src)
    .pipe(
      pug({
        pretty: !production,
      })
    )
    .pipe(gulpif(production, replace(".css", ".min.css")))
    .pipe(gulpif(production, replace(".js", ".min.js")))
    .pipe(gulp.dest(paths.views.dist))
    .pipe(browsersync.stream());
};

export default views;
