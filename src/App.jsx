import Hashtaurante from './assets/hashtaurante.webp';
import './App.css';
import { Navegacao } from './Navegacao.jsx';
import { ItemCardapio } from './ItemCardapio.jsx';
import { pratosPrincipais, sobremesas, bebidas }  from './cardapio.js';
import { useState } from 'react';

export function App() {
    const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
    const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0)

    return <>
        <img src={Hashtaurante} alt="" className='capa'/>
        <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
        <div className='menu'>
            {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} imagem={item.imagem}
                descricao={item.descricao} preco={item.preco} />
            )}
        </div>
    </>
}