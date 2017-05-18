import { Build, Commit } from "./Travis";

export class Event {

    private build: Build;
    private commit: Commit;

    constructor(from: Build, content: Commit) {
        this.build = from;
        this.commit = content;
    }
}
