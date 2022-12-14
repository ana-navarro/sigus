import React from 'react'
import { ResponseStripe } from '../admin/credit/styled.style'
import notFound from './imgs/notFound.jpg'

export const NotFound = () => {
  return (
    <>
      <div className='text-center mt-4'><h3 aria-label='Página Não Encontrada!' data-testid='page-not-found'>Página não encontrada</h3></div>
      <img src={notFound} className="img-fluid" alt='Erro 404 - Página Não Encontrada' data-testid='page-not-found-img' />
    </>
  )
}
