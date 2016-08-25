module.exports = function(grunt){
	
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		copy: {
            main: {
                expand: true,
                cwd: 'src/',
                src: ["**", "!css/**/*.scss"],
                dest: 'dist/'
            }
        },
		
		sass: {
			dist: {
				options : {
					style : 'compressed',
					noCache : true,
					sourcemap : 'none'
				},
				files: [{
				expand: true,
				cwd: 'src/css',
				src: ['*.scss'],
				dest: 'dist/css',
				ext: '.css'
				}]
			}
		},
		
		watch: {
            options: {
                nospawn: true,
                livereload: true
            },
			copy: {
                files: ['src/**'],
                tasks: ['copy:main']
            },
            sass: {
                files: ['src/css/**/*.scss'],
                tasks: ['sass']
            }
            
        }
	});
	
	grunt.registerTask('default', ['watch']);
 
};