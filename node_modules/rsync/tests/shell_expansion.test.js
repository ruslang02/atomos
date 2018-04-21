var fsHelper = require('./helpers/fs_helper');
var Rsync = require('../rsync');

describe('shell expansion', function () {

    var testCases = [

        {
            fsSetup: function (fs) {
                var tree = {
                    'test.txt': 'test',
                    'test2.txt': 'test2',
                    'README.md': 'Readme'
                };

                return tree;
            },
            build: function () {
                var cmd = Rsync.build({
                    'source': '${vfs}/**/*.txt',
                    'destination': '${vfs}/tmp'
                });
            },
            expect: function (command, echo) {

            }

        }



    ];

    it('should expand globs', function (done) {

        var tmpDir = fsHelper.getTempDirectory();
        fsHelper.prepareFS(tmpDir, [
            'file.txt',
            'file2.txt'
        ]);

        var cmd = Rsync.build({
            'executable': fsHelper.echoScript,
            'executableShell': fsHelper.shell('zsh'),
            'source': tmpDir.join('/**/*.txt'),
            'destination': '/tmp'
        });

        cmd.execute(function () {
            console.log(arguments);
            done();
        }, function (data) {
            console.log(data.toString());
        });

    });

});
