export class Build {

    private number: number;
    private status: boolean;
    private statusMessage: boolean;
    private startedAt: Date;
    private finishedAt: Date;
    private authorName: string;

    constructor( number: number,
                 status: boolean,
                 statusMessage: boolean,
                 startedAt: Date,
                 finishedAt: Date,
                 authorName: string) {
        this.number = number;
        this.status = status;
        this.statusMessage = statusMessage;
        this.startedAt = startedAt;
        this.finishedAt = finishedAt;
        this.authorName = authorName;
    }

}
