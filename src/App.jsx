import React from 'react'
import './App.css'

import './components/ComFilhos'
import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'
import ComFilhos  from './components/ComFilhos'
import ComParametro from './components/ComParametro'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'

export default props => 
<div className="App">
    <Card titulo="Primeiro Componente">
        <Primeiro />
    </Card>

    <Card titulo="Componentes com Filhos">
        <ComFilhos>
            <ul>
                <li>Lucas</li>
                <li>Bia</li>
                <li>Daniel</li>
                <li>Carlos</li>
            </ul>
        </ComFilhos>
    </Card>

    <Card titulo="Componente com Parametro">
        <ComParametro titulo="Esse é o Título" subtitulo="Esse é o subtitulo"></ComParametro>
    </Card>

    <Card titulo="Componente Repetição">
        <Repeticao />
    </Card>

    <Card titulo="Componente Condicional">
        <Condicional numero={11} />
    </Card>
    
</div>