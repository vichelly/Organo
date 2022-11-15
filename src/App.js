import { useState } from 'react';
import React from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
// se nomear o .js do componente como index.js não precisa apontar para ele, apenas apenas para a pasta em que se encontra 

function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Design',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Agilidade',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome:'RH',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'Mobile',
      corPrimaria:"#57C278",
      corSecundaria:'#D9F7E9'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time=>time.nome)} aoColaboradorCadastrado= { colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {/* aprender a usar corretamente o map */}
      {/* key controla a reenderização */}
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} /> )}
      <Rodape />
    </div>
  );
}

export default App;
