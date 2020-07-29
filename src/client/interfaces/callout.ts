export interface ICallout {
  Name : string;
  ResponseCode : number;
  Chance : number;

  Start();
  Stop();
}