import React from 'react';
import './App.css';
import { TodoItem } from './components/todo.component';

const App: React.FC = () => {
    const sampleTodo = {
        text: 'Learn React Testing with TypeScript'
    };

    return <div>
        <h1>Todo App</h1>
        <TodoItem todo={sampleTodo} />
    </div>;
};

export default App;
