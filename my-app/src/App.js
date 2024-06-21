import './App.css';
import { Cover } from './components/Cover';
import { TopBar } from './components/TopBar';

function App() {
  return (
    <div className="App bg-black h-screen pt-10 text-white">
      <TopBar/>
      <Cover/>
    </div>
  );
}

export default App;
