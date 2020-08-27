import React from 'react';
import Link from 'next/link'
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <Link href="/cadastro/categoria">
        <a>Cadastrar Categoria</a>
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo;