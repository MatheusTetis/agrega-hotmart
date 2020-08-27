import React from 'react';
import Link from 'next/link'
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>


      <Link href="/">
        <a>Ir para home</a>
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;