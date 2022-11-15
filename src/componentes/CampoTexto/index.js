// normalmente usa-se const 
import './CampoTexto.css'

const CampoTexto = (props) => {

    /* um para ler e outro para escrever */
    /* const [valor, setValor] = useState('') */

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto" >
            {/* para utilizar a variavel de JS use as {} */}
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto