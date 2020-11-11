import { renderView } from '../../test/utils';

describe('todoList.pug', () => {
  it('should render', () => {
    const $ = renderView('todoList', {
      todoItems: [
        {
          id: 1,
          label: 'an item',
          done: false,
          due: null,
        },
      ],
    });
    expect($('[testID="todoItem"]')).toHaveLength(1);
    expect($('[testID="todoItem"]').text()).toBe('an item');
  });
});
