//import { Wait } from  "../utils";
import { ICallout } from "../interfaces/callout";
import { Person } from "../models/person";
import * as Cfx from "fivem-js";

export class NewCallout implements ICallout {

  // Required Values
  Name = "Suspicious Person";
  ResponseCode = 1;
  Chance = 100;
  TickHandle : number;

  // Custom Values

  Suspect : Person;

  async Start() : Promise<void> {
    this.Suspect = new Person("Xander Cross", "male", 21, "mp_m_freemode_01", new Cfx.Vector3(119.83, -1070.22, 29.19));
    await this.Suspect.Spawn();
    this.Suspect.Ped.attachBlip();
    //this.TickHandle = setTick(this.Tick);
  }

  Stop() : void {
    this.Suspect.Delete();
    //clearTick(this.TickHandle);
  }

  // async Tick() : Promise<void> {
  //   await Wait(1000);

  //   const suspectPos = this.Suspect.Ped.Position;
  //   const playerPos = Cfx.Game.PlayerPed.Position;
  // }
}