import { IDiscipline } from "./discipline.interface";

export interface IEvent {
  uuid: string;
  discipline: IDiscipline;
  title: string;
  begin_at: string;
  end_at: string;
  description: string;
}
