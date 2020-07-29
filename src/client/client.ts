import { CalloutManager } from "./managers/callouts";

// Managers
const calloutManager = new CalloutManager();

RegisterCommand("start", () => { calloutManager.StartCallout(); }, false);
RegisterCommand("stop", () => { calloutManager.StopCallout(); }, false);