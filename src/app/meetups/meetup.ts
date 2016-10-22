export class Meetup {
  title: string;
  date: number;
  isOpen: boolean;

  constructor(title: string, date: number, isOpen: boolean) {
    this.title = title;
    this.date = date;
    this.isOpen = isOpen;
  }
}
