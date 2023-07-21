export const InputForm = (props) => {

    let nomeLabel = props.nome
                                .normalize('NFD').replace(/[\u0300-\u036f]/g, "")//Remove acentos
                                .toLowerCase()//Transforma em minusculo


    console.log(props)

  return (
    <div className={`col-md-${props.width}`}>
        <label htmlFor={nomeLabel} className="form-label">{props.nome}</label>
        <input 
        id={nomeLabel}
        type="text" 
        className="form-control" 
       //value={fields.genero} 
        //onChange={atualizaInput}
        />
      </div>
  )
}
