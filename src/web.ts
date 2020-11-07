import { Application } from 'stimulus';
import TurboLinks from 'turbolinks';
import TodoListItem from './controllers/TodoListItem';

TurboLinks.start();

const application = Application.start();

application.register('todo-list-item', TodoListItem);
