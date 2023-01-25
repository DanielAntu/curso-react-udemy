import './App.css';
import MyComponents from './components/MyComponents';

function App() {
  return (
    <div className="App">
      {/* CSS globa */}
      <h1>React com CSS</h1>
      {/* CSS do componente */}
      <MyComponents />
      <p>Este paragrafo é do app.js</p>
      {/* inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
    </div>
  );
}

export default App;
