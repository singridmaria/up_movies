import { useState } from "react"
import { InputForm } from "./components/inputForm"
import { Button } from './components/Button';

function App() {

  const [fields, setFields] = useState({
    titulo: '',
    genero: '',
    diretor: '',
    sinopse:'',
    votos:''
  })

 const adicionar = event =>{
  event.preventDefault()
  console.log('add',fields)
 }

 const atualizaInput = event =>{
  console.log(event.target.id)
  setFields({...fields,[event.target.id]: event.target.value })//Desustruturação
 }

const enviar = () =>{
  event.preventDefault()
  console.log('enviar', fields)
}
  const limpar = () =>{
    event.preventDefault()
    console.log('limpar')
}


  return (
    <>
     <div className="container">
      <h2 className="mt-3 mb-3">Cadastro de Filmes</h2>
     <form className="row g-3" onSubmit={enviar}>
      <InputForm
       nome='Título' 
       width={10} 
       value={fields.titulo}
       change={atualizaInput}
       />
      <InputForm
      nome='Gênero'
      width={2}
      value={fields.genero}
       change={atualizaInput}/>
      <InputForm
      nome='Diretor'
      width={6}
      value={fields.diretor}
       change={atualizaInput}
       />
      
      <InputForm
      nome='Sinopse'
      width={2}
      value={fields.sinopse}
       change={atualizaInput}/>
      <InputForm
      nome='Votos'
      width={1}
      value={fields.votos}
       change={atualizaInput}/>

      <div className="row mt-3">
      <Button 
      tipo={'submit'}
      nome='Enviar' 
      width={1}
      click={enviar}
      />
      <Button 
      tipo={'reset'}
      nome='Limpar' 
      width={1}
      click={limpar}
      />
      </div>
      
      
      
      
     </form>
     
     </div>

     
    </>
  )
}

export default App
