import { Build, Commit } from "./Travis";
export declare class Event {
    private build;
    private commit;
    constructor(from: Build, content: Commit);
}
