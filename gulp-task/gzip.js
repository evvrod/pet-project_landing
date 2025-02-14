"use strict";

import gulp from "gulp";
import gulpif from "gulp-if";
import gzip from "gulp-gzip";
import debug from "gulp-debug";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { paths } from "../gulpfile.js";

const argv = yargs(hideBin(process.argv)).parse();
const production = !!argv.production;

export const compressGzip = () => {
  return gulp
    .src(paths.gzip.src)
    .pipe(
      debug({
        title: "GZIP config",
      })
    )
    .pipe(gulpif(production, gzip({ append: true }))) // Сжимаем только в production
    .pipe(gulp.dest(paths.gzip.dist));
};