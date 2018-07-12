const exec = require('child_process').exec;

exports.run = function(name) {
    exec('midir'+name, function() {
        console.log('king init命令已执行')
    })
}