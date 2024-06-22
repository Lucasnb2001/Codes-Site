import './App.css';
import { Cover } from './components/Cover';
import { TopBar } from './components/TopBar';
import { Sobre } from './components/Sobre';

function App() {
  return (
    <div className="App bg-black h-screen pt-10 text-white">
      <TopBar/>
      <Cover/>
      <Sobre/> 
    </div>
  );
}

export default App;
