import { IPerson } from "../interfaces/person";
import * as Cfx from "fivem-js";

export class Person implements IPerson {
  Name : string;
  Gender : string;
  Age : number;
  Model : string
  Position : Cfx.Vector3;
  Ped : Cfx.Ped;
  
  constructor(Name : string, Gender : string, Age : number, Model : string, Position : Cfx.Vector3) {
    this.Name = Name;
    this.Gender = Gender;
    this.Age = Age;
    this.Model = Model;
    this.Position = Position;
  }

  async Spawn() : Promise<void> {
    this.Ped = await Cfx.World.createPed(new Cfx.Model(this.Model), this.Position, 0);
  }

  Delete() : void {
    this.Ped.delete();
  }
}