"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib = require("@frenchex/npm-project-create-lib");
async function which(bin) {
    return await lib.which(bin);
}
exports.which = which;
function npmProjectCreate(logger) {
    const npmProjectCreateCommand = new lib.NpmProjectCreateCommand(logger);
    return npmProjectCreateCommand;
}
exports.npmProjectCreate = npmProjectCreate;
function gitClone(logger) {
    const gitCloneCommand = new lib.GitCloneCommand(logger);
    return gitCloneCommand;
}
exports.gitClone = gitClone;
//# sourceMappingURL=index.js.map