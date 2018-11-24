import React from 'react'

const Botao = ({ label, atualizaOStateDoPai }) => {
  const clicaBotao = () => {
    atualizaOStateDoPai(label);
  }

  return (
    <button
      className="botao"
      onClick={clicaBotao}
    >
      {label}
    </button>
  )
}

export default Botao
