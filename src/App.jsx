import './App.css';
import React from "react";

import Primeiro from './Components/basicos/Primeiro';
import ComParametro from './Components/basicos/ComParametro';
import Fragmento from './Components/basicos/Fragmento';
import Aleatorio from "./Components/basicos/Aleatorio";
import Card from "./Components/layout/Card";
import Familia from './Components/basicos/Familia';
import FamiliaMembro from './Components/basicos/FamiliaMembro';
import ListaAlunos from './Components/repeticao/ListaAlunos';
import TabelaProdutos from './Components/repeticao/TabelaProdutos';
import ParOuImpar from './Components/condicional/ParOuImpar';
import UsuarioInfo from './Components/condicional/UsuarioInfo';
import DiretaPai from './Components/comunicacao/DiretaPai';
import IndiretaPai from './Components/comunicacao/IndiretaPai';

export default () =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#9 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#8 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Fernando'}} />
                <UsuarioInfo usuario={{email: 'fer@nando.com'}} />
            </Card>
            <Card titulo="#7 - Repetição Produtos" color="#20B2AA">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#6 - Repetição Alunos" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#5 - Desafio Aleatório" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Aana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>
            <Card titulo="#4 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="#3 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#2 - Com Paramêtro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno:"
                    aluno="Pedrinho"
                    nota={7.5} />
            </Card>
            <Card titulo="#1 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>