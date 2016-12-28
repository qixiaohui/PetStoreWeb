module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
		'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
		'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
		' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
	  	replace: {
		      dev: {
		        overwrite: true,
		        src: ['./assets/js/service/api.js'],
		        replacements: [{
		          from: 'https://petstoreweb.herokuapp.com',                   // string replacement 
		          to: 'http://localhost:8000'
		        }]
		      },
		      deploy: {
		        overwrite: true,
		        src: ['./assets/js/service/api.js'],
		        replacements: [{
		          from: 'http://localhost:8000',                   // string replacement 
		          to: 'https://petstoreweb.herokuapp.com'
		        }]
		      },
		    }
		});

  grunt.loadNpmTasks('grunt-text-replace');

	  //Switch to dev
  grunt.registerTask('dev', ['replace:dev']);

  //switch to deploy
  grunt.registerTask('deploy', ['replace:deploy']);
}