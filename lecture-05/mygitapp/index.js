const simpleGit = require('simple-git');

const options = {
    baseDir: process.cwd(),
    binary: 'git'
 };
 
const git = simpleGit(options);

git.pull("origin", "main");

