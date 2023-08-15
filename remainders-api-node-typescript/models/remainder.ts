export default class Remainder {
  id: number;
  isComplete: boolean;
  constructor(public title: string) {
    this.id = Date.now();
    this.isComplete = false;
  }
}
