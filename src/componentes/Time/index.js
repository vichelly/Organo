import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    //reenderização condicional
    //se não tiver nenhum colaborador no array ele não aparece
    return(
        /* se isso for true vai voltar um cartão de time */
        /* ao invés do ? pode colocar && */
        /* (props.colaboradores.length > 0) &&  */
        (props.colaboradores.length > 0) ? <section className='time' style={{backgroundColor: props.corSecundaria}} >
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} /> )}
            </div>
        </section>
        : ''
         /* caso seja menor que 1 retorna vazio se usar o ? */
    )
}

export default Time