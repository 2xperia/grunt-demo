module.exports = function (grunt){
    grunt.initConfig({
        less:{
            compile:{
                file:{'dist/compiled.css':'css/*.less'}
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default',['less:compile']);
};