export class Meetup {
  title: string;
  date: Date;
  isOpen: boolean;

  constructor(title: string, date: Date, isOpen: boolean) {
    this.title = title;
    this.date = date;
    this.isOpen = isOpen;
  }
}
