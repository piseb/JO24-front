import { IDiscipline } from "./discipline.interface";
import { Signal } from "@angular/core";

export interface IEvent {
  id: string;
  discipline: string // UUID of the foreign key
  discipline$: Signal<IDiscipline>; // for getting the discipline values
  title: string;
  begin_at: string;
  end_at: string;
  description: string;
}
