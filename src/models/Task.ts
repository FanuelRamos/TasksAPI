import { v4 as uuidV4 } from 'uuid';

export class Task {
  public readonly id: string;
  public name: string;
  public description: string;
  public start: Date;
  public finish: Date;

  constructor(props: Omit<Task, 'id'>, id?: string) {
    Object.assign(this, props)ç

    if (!id) {
      this.id = uuidV4();
    }
  }
}