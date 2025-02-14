"use strict";

import gulp from "gulp";
import debug from "gulp-debug";
import { paths } from "../gulpfile.js";

export const images = () => {
  return gulp
    .src(paths.images.src, { encoding: false })
    .pipe(
      debug({
        title: "Images",
      })
    )
    .pipe(gulp.dest(paths.images.dist));
};
