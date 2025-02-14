import gulp from "gulp";

import { paths } from "../gulpfile.js";

import { views } from "./views.js";
import { styles } from "./styles.js";
import { images } from "./images.js";
import { fonts } from "./fonts.js";

export const watch = () => {
  gulp.watch(paths.views.watch, views);
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.images.watch, images);
  gulp.watch(paths.fonts.watch, fonts);
};

