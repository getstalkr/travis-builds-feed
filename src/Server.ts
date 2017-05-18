import { IncomingMessage, ServerResponse } from "http";
import micro, { json, send } from "micro";
import { PusherClient } from "./Services/Pusher";
import { Event } from "./Models/Event/";
import { Build, Commit } from "./Models/Event/Travis";

export class Server {

    public static readonly PORT = 3000;
    private pusherClient: PusherClient;
    private server: micro;

    constructor() {
      this.pusherClient = new PusherClient();
      this.server = micro(
        async (req, res) => {

          const {
            number,
            status,
            status_message,
            started_at,
            finished_at,
            author_name
          } = await json(req);

          const {
            branch,
            commit,
            message
          } = await json(req);

          const event = new Event(
            new Build(number, status, status_message, started_at, finished_at, author_name),
            new Commit(commit, branch, message),
          );

          this.pusherClient.publish(event)
            .then((details) => {
              send(res, 200, { received: details });
            })
            .catch((err) => {
              send(res, 500, { error: err });
            });
        },
      );
    }

    public listen(): void {
      this.server.listen(process.env.PORT || Server.PORT, () => console.log("Listening..."));
    }
}
