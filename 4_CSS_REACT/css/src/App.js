import { useState } from 'react';
import './App.css';
import MyComponents from './components/MyComponents';
import Title from './components/Title';

function App() {
  const n = 15
  const [name] = useState("Daniel")
  const redTitle = false

  return (
    <div className="App">
      {/* CSS globa */}
      <h1>React com CSS</h1>
      {/* CSS do componente */}
      <MyComponents />
      <p>Este paragrafo é do app.js</p>
      {/* inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={name === 'Daniel' ? ({color: "purple", backgroundColor: '#000'}) : null}>Teste nome</h2>
      {/* classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinâmica</h2>
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
