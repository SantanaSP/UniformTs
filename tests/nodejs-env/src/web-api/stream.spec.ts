import {
  ReadableStream,
  WritableStream,
} from "@sparklink/uniform-ts/stream-web";
import { setInterval as every } from "node:timers/promises";

import { performance } from "node:perf_hooks";

describe("stream-web module", function () {
  it("should function well under nodejs.", async function () {
    const SECOND = 100;

    const stream = new ReadableStream({
      async start(controller) {
        let counter = 0;
        for await (const _ of every(SECOND)) {
          controller.enqueue(performance.now());
          counter++;
          if (counter >= 3) controller.close();
        }
      },
    });

    await new Promise<void>((resolve, reject) => {
      stream.pipeTo(
        new WritableStream({
          write(chunk) {
            console.log(chunk);
          },
          close() {
            resolve();
          },
        })
      );
    });
  });
});
