const Square = ({value}) => {
  const valor = value ?? "-";

  return (<button className="square">
  {valor}
  </button>);
};

const App = () => {
  return (
    <>
    <div className="board-row">
      <Square value="x"/>
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    </>
  );
};

export default App