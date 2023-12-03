const {src,dest, watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber")

function css(done){

    src('src/scss/**/*.scss') //identidicar el archivo sass
    .pipe(plumber())
    .pipe(sass()) //compilarlo
    .pipe(dest("build/css")); //alamcenar en el disco duro

    done();
}

function dev(done){
    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;
exports.dev = dev;
