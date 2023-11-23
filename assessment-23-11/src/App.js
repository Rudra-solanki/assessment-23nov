import './App.css';
import AddTodo from './components/AddTodo';
import Cart from './components/Cart';
import Details from './components/Details';
import Todos from './components/Todos';
import { useState } from 'react';
import Weather from './feature/weather/Weather';
import Home from './GameAVG/Home';
import TicToe from './Tic-Toe/TicToe';
import Cursor from './cursor/Cursor';
import FlipGame from './flip_game/FlipGame';
import Assessment from './assessment/Assessment';

function App() {
  const [forEdit, setForEdit] = useState(null);
  return (
    <div className="App bg-gray-700 text-white justify-around sm:flex p-5 ">
      {/* <header className="App-header ">
        <Cart />
        <h1>HeLLO</h1>
        <AddTodo forEdit={forEdit} setForEdit={setForEdit} />
        <Todos editId={(name) => { setForEdit(name) }} />
      <Details />
      </header> */}
      {/* <Weather /> */}
      {/* <Home /> */}
      {/* <TicToe />
      <FlipGame /> */}
      {/* <Cursor /> */}
      <Assessment />
    </div>
  );
}

export default App;