import * as dateFns from 'date-fns';
import { Controller } from 'stimulus';
import assert from 'assert';

export default class extends Controller {
  static targets = ['content'];

  contentTarget?: HTMLElement;

  connect() {
    const value = this.data.get('value');
    const content = this.contentTarget;

    assert(value, 'value to format as date not provided');
    assert(content, 'no content target specified');

    content.textContent = dateFns.format(dateFns.parseISO(value), 'PP');
  }
}
