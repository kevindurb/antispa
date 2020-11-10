import * as dateFns from 'date-fns';
import { Controller } from 'stimulus';
import assert from 'assert';

const ONE_HOUR = 1000 * 60 * 60;
const setInterval = window.setInterval;
const clearInterval = window.clearInterval;

export default class extends Controller {
  static targets = ['content'];

  contentTarget?: HTMLElement;
  intervalId?: number;

  connect() {
    const value = this.data.get('value');
    const content = this.contentTarget;

    assert(value, 'value to format as date not provided');
    assert(content, 'no content target specified');

    this.intervalId = setInterval(this.update, ONE_HOUR);
    this.update();
  }

  disconnect() {
    clearInterval(this.intervalId);
  }

  update() {
    const value = this.data.get('value')!;
    const content = this.contentTarget!;
    const date = dateFns.parseISO(value);
    const now = new Date();

    if (dateFns.isPast(date)) {
      content.textContent = 'Overdue';
    } else if (dateFns.isToday(date)) {
      content.textContent = 'Today';
    } else if (dateFns.isTomorrow(date)) {
      content.textContent = 'Tomorrow';
    } else if (dateFns.differenceInDays(date, now) <= 6) {
      content.textContent = dateFns.format(date, 'EEEE');
    } else {
      content.textContent = dateFns.format(date, 'PP');
    }
  }
}
