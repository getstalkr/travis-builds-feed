export class Commit {

    private sha: string;
    private branch: string;
    private message: string;

    constructor(sha: string, branch: string, message: string) {
        this.sha = sha;
        this.branch = branch;
        this.message = message;
    }

}
