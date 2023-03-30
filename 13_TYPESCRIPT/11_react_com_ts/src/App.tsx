import { createContext } from "react"
import Destructuring, {Category} from "./components/Destructuring"
import FirstComponent from "./components/FirstComponent"
import SecondComponent from "./components/SecondComponent"
import State from "./components/State"
import Context from "./components/Context"

// 8 - type
type textorNull = string | null

// 9 - context
interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  // 1 - variaveis
  const name: string = 'Daniel'
  const age: number = 30
  const isWorking: boolean = false

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  }

  // 8 - type
  const myText:textorNull = 'Tem algum texto aqui'
  let mySecondText:textorNull = null

  type fixed = 'Isso' | 'Ou' | 'Aquilo'

  //mySecondText = 'opa'

  const testandoFixed:fixed = 'Isso'

  // 9 - context
  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'Express',
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <p>Está Trabalhando!</p>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name='Segundo' />
      <Destructuring title="Primeiro post" content="Algum conteúdo" commentsQty={10} tags={['ts', 'js']} category={Category.TS} />
      <Destructuring title="Segundo post" content="Mais algum conteudo" commentsQty={5} tags={['Python']} category={Category.P} />
      <State />
      {myText && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na variável</p>}
      <Context />
    </div>
    </AppContext.Provider>
  );
}

export default App;
