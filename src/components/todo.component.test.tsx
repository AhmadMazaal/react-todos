import { render } from '@testing-library/react';
import { TodoItem } from './todo.component';

test('renders todo text', () => {
    const mockTodo = { text: 'Learn Jest' };
    const { getByText } = render(<TodoItem todo={mockTodo} />);
    const todoElement = getByText(/Learn Jest/i);
    expect(todoElement).toBeInTheDocument();
});
