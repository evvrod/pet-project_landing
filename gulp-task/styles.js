"use strict";

import gulp from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import gulpif from "gulp-if";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import sourcemaps from "gulp-sourcemaps";
import rename from "gulp-rename";
import browsersync from "browser-sync";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { paths } from "../gulpfile.js";

const argv = yargs(hideBin(process.argv)).parse();
const production = !!argv.production;
const sass = gulpSass(dartSass);

const globalUse = '@use "abstracts/variables" as *;\n';

export const styles = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(gulpif(!production, sourcemaps.init())) // Включаем sourcemaps в dev-режиме
    .pipe(sass({ includePaths: ["src/styles"] }).on("error", sass.logError)) // Компилируем SCSS/SASS в CSS
    .pipe(autoprefixer()) // Добавляем вендорные префиксы
    .pipe(gulpif(production, cleanCSS())) // Минифицируем CSS в production
    .pipe(gulpif(production, rename({ suffix: ".min" }))) // Добавляем `.min` в названии файлов
    .pipe(gulpif(!production, sourcemaps.write())) // Записываем sourcemaps в dev-режиме
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(browsersync.stream());
};
