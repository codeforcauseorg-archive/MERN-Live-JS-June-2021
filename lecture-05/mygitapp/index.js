const simpleGit = require('simple-git');

const options = {
    baseDir: process.cwd(),
    binary: 'git',
    maxConcurrentProcesses: 6,
 };
 

const git = simpleGit(options);

git.init();

