export interface IOffer {
  uuid: string;
  title: string;
  description: string;
  price: number;
  ntickets: number;
  disable: boolean;
  count?: number;
}
