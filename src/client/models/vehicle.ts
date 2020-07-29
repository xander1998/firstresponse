import { IVehicle } from "../interfaces/vehicle"

export class Vehicle implements IVehicle {
  Owner: string;
  Registered: boolean;
  Insured: boolean;
  ExpirationDate: Date;
  Stolen: boolean;

  constructor() {}
}