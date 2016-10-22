export class Meetup {
  title: string;
  date: number;
  endDate: number;
  isOpen: boolean;
  inProgress: boolean;

  constructor(title: string, date: number, endDate: number, isOpen: boolean, inProgress: boolean) {
    this.title = title;
    this.date = date;
    this.endDate = endDate;
    this.isOpen = isOpen;
    this.inProgress = inProgress;
  }
}
