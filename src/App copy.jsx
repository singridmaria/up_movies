import { useState } from "react"

function App() {

  const [titulo, setTitulo] = useState('O Iluminado')
  const [sinopse, setSinopse] = useState('O filme é triste')

  const adicionar = event => {
    //Evita que a página seja recarregada
    event.preventDefault()
    console.log('add', titulo, sinopse);
  
  }

  const atualizaInput = event => {
    console.log('atualizando', event.target.value);
    setTitulo(event.target.titulo)
  }

  const atualizaSinopse = event => {
    console.log('atualizando', event.target.value);
    setSinopse(event.target.sinopse)
  }

  return (
    <>
     <div className="container">
      <h2 className="mt-3 mb-3">Cadastro de Filmes</h2>
     <form className="row g-3">
      <div className="col-md-12">
        <label htmlFor="titulo" className="form-label">Título</label>
        <input id='titulo' type="text" className="form-control" value={titulo} onChange={atualizaInput}/>
      </div>
      <div className="col-md-12">
        <label htmlFor="" className="form-label">Sinopse</label>
        <input id='sinopse' type="text" className="form-control" value={sinopse} onChange={atualizaSinopse}/>
      </div>
      <div className="col-md-12">
        <label htmlFor="" className="form-label">Gênero</label>
        <input type="text" className="form-control" />
      </div>
      <button className="btn btn-primary " onClick={adicionar}>Adicionar</button>
     </form>
     
     </div>

     
    </>
  )
}

export default App
