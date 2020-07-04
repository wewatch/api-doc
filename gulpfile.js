const gulp = require("gulp");
const exec = require("child_process").exec;
const browserSync = require("browser-sync").create();

const DIST_DIR = "dist";

gulp.task("build", function(next) {
  exec("yarn build", function(err, stdout, stderr) {
    console.log(stderr);
    next(err);
  });
});

gulp.task(
  "reload",
  gulp.series("build", async function() {
    browserSync.reload();
  })
);

gulp.task(
  "serve",
  gulp.series("build", async function() {
    browserSync.init({
      server: {
        baseDir: DIST_DIR
      },
      open: false
    });

    gulp.watch(["openapi/**/*", "web/**/*"], gulp.series("reload"));
  })
);
