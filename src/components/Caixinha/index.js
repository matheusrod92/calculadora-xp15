import React from 'react';
import './style.css';
import Display from '../Display';
import Botao from '../Botao';
import calculaExpressao from './utils';

class Caixinha extends React.Component {
  state = {
    valorDoDisplay: '',
  };

  atualizaODisplay = (valorDoBotao) => {
    if (valorDoBotao === '=') {
      const exp = calculaExpressao(this.state.valorDoDisplay);
      this.setState({
        valorDoDisplay: exp,
      });
    } else {
      this.setState({
        valorDoDisplay: this.state.valorDoDisplay + valorDoBotao,
      });
    }

  }
  
  render() {
    const meusBotoes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "="];
    return (
      <div className="caixinha">
        <Display
          valor={this.state.valorDoDisplay}
        />
        {
          meusBotoes.map(botao => <Botao label={botao} atualizaOStateDoPai={this.atualizaODisplay} />)
        }
      </div>
    );
  }
}

export default Caixinha;
