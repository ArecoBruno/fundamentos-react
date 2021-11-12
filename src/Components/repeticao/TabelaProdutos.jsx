import './TabelaProdutos.css';
import React from "react";
import produtos from "../../data/produtos";

export default props => {
    const produtoTd = produtos.map((produto, i) => {
        return (
            <tr className={i % 2 == 0 ? 'Par' : 'Impar'} key={produto.id}>
               <td>{produto.id}</td>
               <td>{produto.nome}</td>
               <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        );
    });
    return (
        <div className="TabelaProdutos">
            <table width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtoTd}
                </tbody>
            </table>
        </div>
    );
}