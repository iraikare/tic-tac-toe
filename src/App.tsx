import { useState } from "react";

const Square = ({value}) => {
  const [valor, MudarValor] = useState(value ?? "-");
  const EscutarClique = (evento) => {
    console.info("evento")
    MudarValor("x");
  };


  return (<button className="square" onClick= {EscutarClique}>
  {valor}
  </button>);
};

const Board = () => {
  return (
    <>
    <div className="board-row">
      <Square value="1"/>
      <Square value="2"/>
      <Square value="3"/>
    </div>
    <div className="board-row">
      <Square value="4"/>
      <Square value="5"/>
      <Square value="6"/>
    </div>
    <div className="board-row">
      <Square value="7"/>
      <Square value="8"/>
      <Square value="9"/>
    </div>
    </>
  );
};

const App = () => {
  return <Board/>
}

export default App;