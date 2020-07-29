// Utils
import { MathRandom } from  "../utils";

// Interfaces
import { ICallout } from "../interfaces/callout";

// Callouts
import { NewCallout } from "../callouts/testing";

export class CalloutManager {
  Callouts : ICallout[] = [];
  CalloutStarted : number;

  constructor() {
    this.CalloutStarted = -1;
    this.Callouts.push(new NewCallout());
  }

  StartCallout() : void {
    if (this.CalloutStarted == -1) {
      //const calloutTargeted = Math.floor(Math.random() * this.Callouts.length);
      const calloutTargeted = MathRandom(0, this.Callouts.length - 1);
      this.Callouts[calloutTargeted].Start();
      this.CalloutStarted = calloutTargeted;
    }
  }

  StopCallout() : void {
    if (this.CalloutStarted != -1) {
      this.Callouts[this.CalloutStarted].Stop();
      this.CalloutStarted = -1;
    }
  }
}