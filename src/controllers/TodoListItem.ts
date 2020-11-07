import { Controller } from 'stimulus';
import TurboLinks from 'turbolinks';

import assert from 'assert';
import { postJson } from '../lib/fetch';

export default class extends Controller {
  private id?: string;

  connect() {
    const id = this.data.get('id');

    assert(id, 'id data attribute not found for todo list item');

    this.id = id;
  }

  async markDone(event: MouseEvent) {
    event.preventDefault();
    await postJson(`/todos/${this.id}/done`);
    TurboLinks.visit('/');
  }
}
