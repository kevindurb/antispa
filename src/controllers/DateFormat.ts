import * as dateFns from 'date-fns';
import { Controller } from 'stimulus';
import assert from 'assert';

export default class extends Controller {
  connect() {
    const value = this.data.get('value');

    assert(value, 'value to format as date not provided');

    this.element.textContent = dateFns.format(dateFns.parseISO(value), 'PP');
  }
}
