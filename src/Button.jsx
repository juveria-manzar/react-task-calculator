let Button=(props)=>{
    return(
        <button onClick={
            ()=>{
                {props.handleButton(props.label)}
            }
        }>{props.label}</button>
    )
}

export default Button