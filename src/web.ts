import { Application } from 'stimulus';
import TurboLinks from 'turbolinks';
import TodoListItem from './controllers/TodoListItem';
import DateFormat from './controllers/DateFormat';

TurboLinks.start();

const application = Application.start();

application.register('todo-list-item', TodoListItem);
application.register('date-format', DateFormat);
