export class Util {
  public static randomize(beginning: number, end: number): number {
    return beginning + Math.random() * (end - beginning);
  }
}
