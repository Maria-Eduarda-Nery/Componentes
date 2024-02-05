import React, {useState} from "react" //importanto o hook useState

function Contador () {

    const {numero, setNumero} = useState (0) // esse 0, é o valor inicial

    return(
        <>
        <h1> {numero} </h1>
        <button> + </button>
        <button> - </button>
        <button> C </button>
        </>
    )
}

export default Contador