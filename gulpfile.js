"use strict";

import gulp from "gulp";

import { clean } from "./gulp-task/clean.js";
import { serve } from "./gulp-task/serve.js";
import { views } from "./gulp-task/views.js";
import { styles } from "./gulp-task/styles.js";
import { images } from "./gulp-task/images.js";
import { fonts } from "./gulp-task/fonts.js";
import { watch } from "./gulp-task/watch.js";
import { compressGzip as gzip } from "./gulp-task/gzip.js";

export const paths = {
  views: {
    src: ["./src/views/index.pug"],
    dist: "./dist/",
    watch: ["./src/blocks/**/*.pug", "./src/views/**/*.pug"],
  },
  styles: {
    src: "./src/styles/main.{scss,sass}",
    dist: "./dist/styles/",
    watch: ["./src/views/**/*.{scss,sass}", "./src/styles/**/*.{scss,sass}"],
  },
  images: {
    src: "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
    dist: "./dist/img/",
    watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg}",
  },
  fonts: {
    src: "./src/fonts/**/*.{woff,woff2,ttf}",
    dist: "./dist/fonts/",
    watch: "./src/fonts/**/*.{woff,woff2,ttf}",
  },
  gzip: {
    src: "./src/.htaccess",
    dist: "./dist/",
  },
};

export const development = gulp.series(
  clean,
  gulp.parallel(fonts, views, styles, images),
  gulp.parallel(serve, watch)
);

export const prod = gulp.series(
  clean,
  gulp.parallel(fonts, views, styles, images, gzip)
);

export default development;
