/*
	Tasks:

	$ gulp 					: Runs "css" and "js" tasks
	$ gulp watch			: Starts a watch on "css" and "js" tasks
*/


var gulp 			= require( 'gulp' ),
	sass 			= require( 'gulp-sass' ),
	autoprefixer 	= require( 'gulp-autoprefixer' ),
	cleancss		= require( 'gulp-clean-css' ),
	uglify 			= require( 'gulp-uglify' ),
	umd				= require( 'gulp-umd' ),
	typescript		= require( 'gulp-typescript' ),
	concat 			= require( 'gulp-concat' );


var inputDir 		= 'src',
	outputDir 		= 'dist';


function sanitizeNamespaceForUmd( file ) {
	path = file.path.split( '\\' ).join( '/' ).split( '/' );
	path = path[ path.length - 1 ];
	return path.split( '.' ).join( '_' );
}




/*
	$ gulp
*/

gulp.task( 'default', function() {
	gulp.start( [ 'js', 'css' ] );
});



/*
	$ gulp watch
*/

gulp.task( 'watch', function() {
	gulp.watch( inputDir + '/**/*.scss'	, [ 'css' ] );
	gulp.watch( inputDir + '/**/*.ts'	, [ 'js'  ] );
});



/*
	$ gulp css
*/
gulp.task( 'css', [ 'css-compile' ] );

//	1)	Concatenate variables
gulp.task( 'css-variables', function() {

	return gulp.src([ 
			inputDir + '/**/_variables.scss'
		])
		.pipe( concat( '_variables.concat.scss' ) )
		.pipe( gulp.dest( inputDir ) );
});

//	2)	Compile CSS
gulp.task( 'css-compile', [ 'css-variables' ], function() {

	return gulp.src( inputDir + '/*.scss' )
    	.pipe( sass().on( 'error', sass.logError ) )
    	.pipe( autoprefixer( [ '> 5%', 'last 5 versions' ] ) )
    	.pipe( cleancss() )
		.pipe( gulp.dest( outputDir ) );
});





/*
	$ gulp js
*/
gulp.task( 'js', [ 'js-compile' ] );

gulp.task( 'js-compile', function() {

	return gulp.src([
			inputDir + '/*.ts',
			inputDir + '/**/*.ts'
		])
		.pipe( concat( 'jquery.dmenu.ts' ) )
		.pipe( typescript() )
		.pipe( uglify({ preserveComments: 'license' }) )
		.pipe( umd({
			dependencies: function() { return [ {
				name 	: 'jquery',
				global 	: 'jQuery',
				param 	: 'jQuery'
			} ]; },
			exports: function() { return true; },
			namespace: sanitizeNamespaceForUmd
		}))
		.pipe( gulp.dest( outputDir ) );
});

