export function MathRandom(min : number, max : number) : number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function Wait(ms : number) : Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}