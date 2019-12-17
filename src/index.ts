import * as lib from "@frenchex/npm-project-create-lib";

export async function which(bin: string): Promise<string> {
    return await lib.which(bin);
}

export function npmProjectCreate(logger: lib.Logger) {

    const npmProjectCreateCommand = new lib.NpmProjectCreateCommand(logger);

    return npmProjectCreateCommand;
}

export function gitClone(logger: lib.Logger) {
    const gitCloneCommand = new lib.GitCloneCommand(logger);

    return gitCloneCommand;
}
