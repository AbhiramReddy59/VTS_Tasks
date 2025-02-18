import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksProvider } from './TasksProvider.js';

export default function IndianTripPlanner() {
  return (
    <TasksProvider>
      <div className="task-app">
        <h2>Indian Adventure Itinerary</h2>
        <AddTask />
        <TaskList />
      </div>
    </TasksProvider>
  );
}
