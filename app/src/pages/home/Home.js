import React from 'react'
import { AboutText, MineraImage } from './styled.style'
import logo from './img/logo.png'

export const Home = () => {
    return (
        <>
            <div className='text-center mt-4'>
                <h3 data-testid='about-minera'>Sobre a Minera Engenharia</h3>
                <MineraImage data-testid='about-minera-logo' alt='minera-logo' src={logo} />
            </div>

            <AboutText data-testid='about-minera-text'>
                <p aria-label='A Minera Engenharia, fundada em 2014, fornece diversas soluções em geração de Energia Solar e Eficiência Energética, apresentando em seu DNA a inovação e a sustentabilidade.'>
                    A Minera Engenharia, fundada em 2014, fornece diversas soluções em geração de Energia Solar e Eficiência Energética,
                    apresentando em seu DNA a inovação e a sustentabilidade.
                </p>
                <p aria-label='Desde a sua fundação, a empresa se diferencia prestando serviços de Engenharia de alto nível técnico na Construção,
                        Manutenção e Comissionamento de Usinas e Parques Solares e Projetos de Eficiência Energética, visando à harmonização entre
                        tecnologia e o meio ambiente, sem esquecer-se do ser humano.'>
                    Desde a sua fundação, a empresa se diferencia prestando serviços de Engenharia de alto nível técnico na Construção,
                    Manutenção e Comissionamento de Usinas e Parques Solares e Projetos de Eficiência Energética, visando à harmonização entre
                    tecnologia e o meio ambiente, sem esquecer-se do ser humano.
                </p>
                <p aria-label='Com o auxílio de equipamentos de última geração operando dentro dos padrões e normas interacionais e nacionais e com corpo
                    técnico altamente qualificado, a Minera Engenharia oferece soluções em Eficiência Energética e serviços para Usinas Fotovoltaicas, tais como:'>
                    Com o auxílio de equipamentos de última geração operando dentro dos padrões e normas interacionais e nacionais e com corpo
                    técnico altamente qualificado, a Minera Engenharia oferece soluções em Eficiência Energética e serviços para Usinas Fotovoltaicas, tais como:
                </p>
                <ul data-testid='about-minera-functions'>
                    <li aria-label='Projeto'>Projeto;</li>
                    <li aria-label='Implantação'>Implantação;</li>
                    <li aria-label='Comercialização'>Comercialização;</li>
                    <li aria-label='Consultoria e Inspeção'>Consultoria e Inspeção;</li>
                    <li aria-label='Comissionamento'>Comissionamento;</li>
                    <li aria-label='Operação e Manutenção (O&M).'>Operação e Manutenção (O&M).</li>
                </ul>
                <p>
                    Apesar de ser jovem, a empresa atualmente possui um portfólio bem extenso de obras executadas em Usinas de Energia Solar, com quase 15MW instalados.
                </p>
            </AboutText>

            <div className='text-center mt-4' data-testid='about-sigus-header'>
                <h3>Sobre o SIGUS</h3>
            </div>

            <AboutText data-testid='about-sigus'>
                <p aria-label='Um dos segmentos que mais cresce atualmente é sobre energia renovável, sendo uma delas, a geração de energia solar. Com o crescimento deste ramo, é necessário a criação de um sistema eficiente para a manutenção dos painéis e inversores e também para geração de relatórios técnicos e financeiros. Atualmente não existe um sistema capaz de gerenciar todos os módulos de uma empresa que provê este tipo de serviço. Assim sendo, as empresas que oferecem os serviços de energia solar, sofrem com o uso de vários aplicativos distintos, e com registros de dados espalhados pelos os aplicativos. Diante desta situação, e com o crescimento do mercado, visto que o mundo está procurando uma abordagem mais saudável para o meio ambiente, foi-se necessário procurar uma metodologia para unificar os registros de dados em somente uma plataforma. Através desta metodologia e com o uso de tecnologias usadas por grandes empresas de desenvolvimento, é possível facilitar e agilizar ainda mais os processos de produção de energia solar. A vista disto, foi-se elaborado o projeto SIGUS,  que foi dividido em três módulos, o módulo de manutenção, responsável pela a parte de relatórios de manutenção, módulo de captação de dados, responsável por captar os dados e guardar em um sistema de banco de dados, e o último módulo seria a geração de relatórios técnicos e financeiros. Neste documento será mostrado o módulo responsável pela criação de relatórios técnicos e financeiros. '>
                    Um dos segmentos que mais cresce atualmente é sobre energia
                    renovável, sendo uma delas, a geração de energia solar.
                    Com o crescimento deste ramo, é necessário a criação de um
                    sistema eficiente para a manutenção dos painéis e inversores
                    e também para geração de relatórios técnicos e financeiros.
                    Atualmente não existe um sistema capaz de gerenciar todos
                    os módulos de uma empresa que provê este tipo de serviço.
                    Assim sendo, as empresas que oferecem os serviços de
                    energia solar, sofrem com o uso de vários aplicativos
                    distintos, e com registros de dados espalhados pelos os
                    aplicativos. Diante desta situação, e com o crescimento
                    do mercado, visto que o mundo está procurando uma abordagem
                    mais saudável para o meio ambiente, foi-se necessário
                    procurar uma metodologia para unificar os registros de
                    dados em somente uma plataforma. Através desta metodologia e
                    com o uso de tecnologias usadas por grandes empresas de
                    desenvolvimento, é possível facilitar e agilizar ainda
                    mais os processos de produção de energia solar. A vista disto,
                    foi-se elaborado o projeto SIGUS,  que foi dividido em três
                    módulos, o módulo de manutenção, responsável pela a parte de
                    relatórios de manutenção, módulo de captação de dados,
                    responsável por captar os dados e guardar em um sistema de
                    banco de dados, e o último módulo seria a geração de relatórios
                    técnicos e financeiros. Neste documento será mostrado o módulo
                    responsável pela criação de relatórios técnicos e financeiros.
                </p>
            </AboutText>

        </>
    )
}
