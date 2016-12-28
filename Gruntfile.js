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
		        src: ['./assets/js/service/api.js', './assets/js/pages/posts/posts.jsx'],
		        replacements: [{
		          from: 'https://petstoreweb.herokuapp.com',                   // string replacement 
		          to: 'http://localhost:8000'
		        }, {
		          from: 'http://petstorez.herokuapp.com/#/post/',
		          to: 'http://localhost:8080/#/post/'
		        }]
		      },
		      deploy: {
		        overwrite: true,
		        src: ['./assets/js/service/api.js', './assets/js/pages/posts/posts.jsx'],
		        replacements: [{
		          from: 'http://localhost:8000',                   // string replacement 
		          to: 'https://petstoreweb.herokuapp.com'
		        }, {
		          from: 'http://localhost:8080/#/post/',
		          to: 'http://petstorez.herokuapp.com/#/post/'
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