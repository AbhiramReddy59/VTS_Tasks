import { createContext } from 'react';

const initialTasks = [
  { id: 0, text: 'Visit Taj Mahal', done: true },
  { id: 1, text: 'Explore Jaipur Palace', done: false },
  { id: 2, text: 'Shop at Local Bazaar', done: false }
];

export const TasksContext = createContext(initialTasks);
export const TasksDispatchContext = createContext(null);
