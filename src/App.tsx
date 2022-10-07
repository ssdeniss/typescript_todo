
import TodoForm from './components/Form/TodoForm';
import Navigation from './components/Navigation/Navigation';
import './styles/Style.scss';

function App() {
  return (
    <>
      <Navigation />
      <div className="app">
        <TodoForm />
      </div>
    </>
  );
}

export default App;
