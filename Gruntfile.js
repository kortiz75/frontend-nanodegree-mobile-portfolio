module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		htmlmin: {                                      
		    dist: {                                       
		      options: {                                  
		        removeComments: true,
		        collapseWhitespace: true
		      },
		      files: {                                    
		        'index.html': 'index.inline.html'
		      }
		    }
		},
		inlinecss: {
		        main: {
		            files: {
		                'index.inline.html': 'index.unmin.html'
		            }
		        }
		},
		imagemin: { 
			options: {                        
        		optimizationLevel: 3  
        	},                        
		    files: {                          
		      'img/profilepic-min.jpg': 'img/profilepic.jpg', // 'destination': 'source' 
		      'views/images/pizzeria-min.jpg': 'views/images/pizzeria.jpg'
		    }
		}
	});
	
	
	  

	grunt.loadNpmTasks('grunt-inline-css');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['inlinecss', 'htmlmin', 'imagemin']);
};