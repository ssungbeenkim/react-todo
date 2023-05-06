import './App.css';
import TodoList from './component/TodoList';
import Header from './component/Header/Header';
import { useState } from 'react';
import { DarkModeProvider } from './context/DarkModeContext';
const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
