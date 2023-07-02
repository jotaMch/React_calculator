import React from "react";
/*

        type='text'  //conteudo input
        onChange={(event) => {
            this.setState({
                text: event.target.value,
                changed: true
            });
        }}

        
*/

        
const Input = (props) => {
    return<input type="text" onChange={props.onChange} />
}

export default Input;