export const Button = (props) => {
    
  return (
    
    <button 
    type={props.tipo}
    style={{marginRight: '1rem'}}
    className={`btn btn-primary col-md-${props.width}`}
    //onClick={props.click}
    >
        {props.nome}
        </button>
        
  )
}
