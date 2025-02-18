"use strict";

import { paths } from "../gulpfile.js";
import gulp from "gulp";
import debug from "gulp-debug";

export const fonts = () => {
  return gulp
    .src(paths.fonts.src, { encoding: false })
    .pipe(gulp.dest(paths.fonts.dist))
    .pipe(
      debug({
        title: "Fonts",
      })
    );
};
