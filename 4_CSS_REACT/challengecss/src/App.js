import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    {
      marca: 'Fiat',
      age: 2000,
      km: 23000
    },

    {
      marca: 'Ford',
      age: 2000,
      km: 23000
    },

    {
      marca: 'VW',
      age: 2000,
      km: 23000
    },
  ]

  return (
    <div className="App">
      <h1>Detalhes do Carro</h1>
      {cars.map((car) => (
        <CarDetails marca={car.marca} age={car.age} km={car.km} />
      ))}
    </div>
  );
}

export default App;
