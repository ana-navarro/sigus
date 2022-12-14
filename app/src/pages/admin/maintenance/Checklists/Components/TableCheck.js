import { Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Title } from '../styled.style';

export const TableCheck = (props) => {
  const { data } = props;
  const checklist = data;

  if (!data) return 'Aguardando dados';

  if (checklist) {
    return (
      <>
        <Title>CHECKLIST 1 - Ensaios Visuais dos Painéis Fotovoltaicos</Title>
        <Table bordered>
          <thead>
            <th>COMPONENTE</th>
            <th>NÃO CONFORMIDADE</th>
            <th>NÃO CONFORMIDADE PRESENTE</th>
          </thead>
          <tbody>
            <tr>
              <td>Etiquetagem</td>
              <td>Ausente</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.la_absent
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.la_absent_desc ? (
                    <>Descrição: {checklist.la_absent_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.la_absent_sp ? (
                    <>Problema de Segurança: {checklist.la_absent_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Fixação Incorreta</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.la_incorrectfixing
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.la_incorrectfixing_desc ? (
                    <>Descrição: {checklist.la_incorrectfixing_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.la_incorrectfixing_sp ? (
                    <>
                      Problema de Segurança: {checklist.la_incorrectfixing_sp}
                    </>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Falta de Informação</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.la_lackOfInformation
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.la_lackOfInformation_desc ? (
                    <>Descrição: {checklist.la_lackOfInformation_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.la_lackOfInformation_sp ? (
                    <>
                      Problema de Segurança: {checklist.la_lackOfInformation_sp}
                    </>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td>Backsheet</td>
              <td>Delaminação</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ba_delamination
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ba_delamination_desc ? (
                    <>Descrição: {checklist.ba_delamination_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ba_delamination_sp ? (
                    <>Problema de Segurança: {checklist.ba_delamination_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td>Caixa de Junção</td>
              <td>Falha de conexões elétricas</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ju_electConFailure
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ju_electConFailure_desc ? (
                    <>Descrição: {checklist.ju_electConFailure_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ju_electConFailure_sp ? (
                    <>
                      Problema de Segurança: {checklist.ju_electConFailure_sp}
                    </>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Rachaduras / quebras / falhas na carcaça</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ju_brokenPieces
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ju_brokenPieces_desc ? (
                    <>Descrição: {checklist.ju_brokenPieces_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ju_brokenPieces_sp ? (
                    <>Problema de Segurança: {checklist.ju_brokenPieces_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Falha no vedador</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ju_sealingFailure
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ju_sealingFailure_desc ? (
                    <>Descrição: {checklist.ju_sealingFailure_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ju_sealingFailure_sp ? (
                    <>
                      Problema de Segurança: {checklist.setju_sealingFailure_sp}
                    </>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Polaridade elétrica não indicada</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ju_electricalPolarity
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ju_electricalPolarity_desc ? (
                    <>Descrição: {checklist.ju_electricalPolarity_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ju_electricalPolarity_sp ? (
                    <>
                      Problema de Segurança:{' '}
                      {checklist.ju_electricalPolarity_sp}
                    </>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td>Cabeamento</td>
              <td>Fio(s) ausente (s) ou mal conectado</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ca_incorrectsWires
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ca_incorrectsWires_desc ? (
                    <>Descrição: {checklist.ca_incorrectsWires_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ca_incorrectsWires_sp ? (
                    <>
                      Problema de Segurança: {checklist.ca_incorrectsWires_sp}
                    </>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Falha no adesivo / selante</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ca_stickerFlaws
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ca_stickerFlaws_desc ? (
                    <>Descrição: {checklist.ca_stickerFlaws_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ca_stickerFlaws_sp ? (
                    <>Problema de Segurança: {checklist.ca_stickerFlaws_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Muito curto e / ou muito fino</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ca_shortThin
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ca_shortThin_desc ? (
                    <>Descrição: {checklist.ca_shortThin_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ca_shortThin_sp ? (
                    <>Problema de Segurança: {checklist.ca_shortThin_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Muito curto e / ou muito fino</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ca_shortThin
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ca_shortThin_desc ? (
                    <>Descrição: {checklist.ca_shortThin_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.ca_shortThin_sp ? (
                    <>Problema de Segurança: {checklist.ca_shortThin_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td>Frame</td>
              <td>Danificado</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fr_damaged
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fr_damaged_desc ? (
                    <>Descrição: {checklist.fr_damaged_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fr_damaged_sp ? (
                    <>Problema de Segurança: {checklist.fr_damaged_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Falha no adesivo / selante</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fr_sealingFailure
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fr_sealingFailure_desc ? (
                    <>Descrição: {checklist.fr_sealingFailure_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fr_sealingFailure_sp ? (
                    <>Problema de Segurança: {checklist.fr_sealingFailure_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Falha no adesivo / selante</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fr_sealingFailure
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fr_sealingFailure_desc ? (
                    <>Descrição: {checklist.fr_sealingFailure_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fr_sealingFailure_sp ? (
                    <>Problema de Segurança: {checklist.fr_sealingFailure_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td>Vidro Frontal</td>
              <td>Quebrado</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fo_broken
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fo_broken_desc ? (
                    <>Descrição: {checklist.fo_broken_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fo_broken_sp ? (
                    <>Problema de Segurança: {checklist.fo_broken_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Arranhões</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fo_scratches
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fo_scratches_desc ? (
                    <>Descrição: {checklist.fo_scratches_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fo_scratches_sp ? (
                    <>Problema de Segurança: {checklist.fo_scratches_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td>Células Solares</td>
              <td>Delaminação</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.so_delamination
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.so_delamination_desc ? (
                    <>Descrição: {checklist.so_delamination_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.so_delamination_sp ? (
                    <>Problema de Segurança: {checklist.so_delamination_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Trilha do caracol</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.so_snailTrail
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.so_snailTrail_desc ? (
                    <>Descrição: {checklist.so_snailTrail_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.so_snailTrail_sp ? (
                    <>Problema de Segurança: {checklist.so_snailTrail_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Microfissuras</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.so_microcracks
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.so_microcracks_desc ? (
                    <>Descrição: {checklist.so_microcracks_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.so_microcracks_sp ? (
                    <>Problema de Segurança: {checklist.so_microcracks_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Amarelecimento ou escurecimento</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.so_darkening
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.so_darkening_desc ? (
                    <>Descrição: {checklist.so_darkening_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.so_darkening_sp ? (
                    <>Problema de Segurança: {checklist.so_darkening_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
          </tbody>
        </Table>

        <Title>CHECKLIST 2 - Ensaios Visuais do perímetro da planta</Title>
        <Table bordered>
          <thead>
            <th>COMPONENTE</th>
            <th>NÃO CONFORMIDADE</th>
            <th>NÃO CONFORMIDADE</th>
          </thead>
          <tbody>
            <tr>
              <td>Cerca</td>
              <td>Ausente</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fe_absent
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fe_absent_desc ? (
                    <>Descrição: {checklist.fe_absent_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fe_absent_sp ? (
                    <>Problema de Segurança: {checklist.fe_absent_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Quebrada</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fe_broken
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fe_broken_desc ? (
                    <>Descrição: {checklist.fe_broken_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fe_broken_sp ? (
                    <>Problema de Segurança: {checklist.fe_broken_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Frouxa</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fe_loose
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fe_loose_desc ? (
                    <>Descrição: {checklist.fe_loose_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.fe_loose_sp ? (
                    <>Problema de Segurança: {checklist.fe_loose_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td>Câmeras</td>
              <td>Sem imagem</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.cm_noImages
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.cm_noImages_desc ? (
                    <>Descrição: {checklist.cm_noImages_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.cm_noImages_sp ? (
                    <>Problema de Segurança: {checklist.cm_noImages_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td>Solo</td>
              <td>Matos</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.gr_bush
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.gr_bush_desc ? (
                    <>Descrição: {checklist.gr_bush_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.gr_bush_sp ? (
                    <>Problema de Segurança: {checklist.gr_bush_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Erosões</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.gr_erosions
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.gr_erosions_desc ? (
                    <>Descrição: {checklist.gr_erosions_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.gr_erosions_sp ? (
                    <>Problema de Segurança: {checklist.gr_erosions_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Buracos</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.gr_holes
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.gr_holes_desc ? (
                    <>Descrição: {checklist.gr_holes_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.gr_holes_sp ? (
                    <>Problema de Segurança: {checklist.gr_holes_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
            <tr>
              <td>Internet</td>
              <td>Sem conexão</td>
              <td>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.in_noConnections
                    ? 'Existe uma não conformidade'
                    : 'Tudo nos conformes'}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.in_noConnections_desc ? (
                    <>Descrição: {checklist.in_noConnections_desc}</>
                  ) : (
                    ''
                  )}
                </tr>
                <tr style={{ textAlign: 'left' }}>
                  {checklist.in_noConnections_sp ? (
                    <>Problema de Segurança: {checklist.in_noConnections_sp}</>
                  ) : (
                    ''
                  )}
                </tr>
              </td>
            </tr>
          </tbody>
        </Table>

        <Title>CHECKLIST 3 - Ensaios Visuais dos Inversores</Title>
        <Table bordered>
          <thead>
            <tr>
              <th>Inversor Solis</th>
              <th>INV.1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>N° Série</td>
              <td>{checklist.iv_num_serie}</td>
            </tr>
            <tr>
              <td>Inspeção Visual</td>
              <td>
                {' '}
                {checklist.iv_visual_inspection === true
                  ? 'Conforme'
                  : 'Não conforme'}
              </td>
            </tr>
            <tr>
              <td>Inspeção Áudio</td>
              <td>
                {' '}
                {checklist.iv_audio_inspection === true
                  ? 'Conforme'
                  : 'Não conforme'}
              </td>
            </tr>
            <tr>
              <td>Etiquetagem Idt</td>
              <td>
                {' '}
                {checklist.iv_labeling_Idt === true
                  ? 'Conforme'
                  : 'Não conforme'}
              </td>
            </tr>
            <tr>
              <td>Inspeção Termográfica Inversores</td>
              <td>
                {' '}
                {checklist.iv_thermographic_inspection === true
                  ? 'Conforme'
                  : 'Não conforme'}
              </td>
            </tr>
            <tr>
              <td>Inspeção Mont. Elétrica</td>
              <td>
                {' '}
                {checklist.iv_eletrical_inspection === true
                  ? 'Conforme'
                  : 'Não conforme'}
              </td>
            </tr>
            <tr>
              <td>Alarmes</td>
              <td>
                {' '}
                {checklist.iv_alarm === false ? 'Conforme' : 'Não conforme'}
              </td>
            </tr>
            <tr>
              <td>Eventos</td>
              <td>
                {' '}
                {checklist.iv_events === false ? 'Conforme' : 'Não conforme'}
              </td>
            </tr>
            <tr>
              <td>Aterramento Carcaça</td>
              <td>
                {' '}
                {checklist.iv_grounding === false ? 'Conforme' : 'Não conforme'}
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  } else {
    <h1>Nada a Declarar</h1>;
  }
};
