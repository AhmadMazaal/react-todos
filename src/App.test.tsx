import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders todo app title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Todo App/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders sample todo text', () => {
  const { getByText } = render(<App />);
  const todoElement = getByText(/Learn React Testing with TypeScript/i);
  expect(todoElement).toBeInTheDocument();
});
