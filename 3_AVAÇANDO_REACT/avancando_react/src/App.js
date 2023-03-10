import './App.css';

import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = 'Joaquim'

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Amarelo', newCar: true, km: 0},
    {id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 34343},
    {id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 234}
  ]

  function showMessage() {
    console.log('Evento do componente pai!')
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const person = [
    {
        id: 1,
        nome: 'João',
        idade: 16,
        profissao: 'programador'
    },

    {
        id: 1,
        nome: 'Rodrigo',
        idade: 22,
        profissao: 'Caminhoneiro'
    },

    {
        id: 1,
        nome: 'Adão',
        idade: 30,
        profissao: 'Advogado'
    },
]

  return (
    <div className="App">
      <h1>Avançando no React</h1>

      {/*Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/*imagens em asset*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={name} />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/*reaprovetando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      {/*fragment*/}
      <Fragment propFragment="teste" />
      {/* Children */}
      <Container myValue="testing">
        <p>E este é o conteudo</p>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {person.map((user) => (
        <div>
          <UserDetails key={user.id} name={user.nome} job={user.profissao} age={user.idade}  />
        </div>
      ))}
    </div>
  );
}

export default App;
