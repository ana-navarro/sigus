import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Col, Row, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Title } from './styled.style'; //
import './style.css';

export const AddChecklists = () => {
  const { idInstallations } = useParams();
  const navigate = useNavigate();

  // Checklist 1
  const [la_absent, setLa_absent] = useState(false);
  const [la_absent_desc, setLa_absent_desc] = useState();
  const [la_absent_sp, setLa_absent_sp] = useState();
  const [la_incorrectfixing, setLa_incorrectfixing] = useState(false);
  const [la_incorrectfixing_desc, setLa_incorrectfixing_desc] = useState();
  const [la_incorrectfixing_sp, setLa_incorrectfixing_sp] = useState();
  const [la_lackOfInformation, setLa_lackOfInformation] = useState(false);
  const [la_lackOfInformation_desc, setLa_lackOfInformation_desc] = useState();
  const [la_lackOfInformation_sp, setLa_lackOfInformation_sp] = useState();
  const [ba_delamination, setBa_delamination] = useState(false);
  const [ba_delamination_desc, setBa_delamination_desc] = useState();
  const [ba_delamination_sp, setBa_delamination_sp] = useState();
  const [ju_electConFailure, setJu_electConFailure] = useState(false);
  const [ju_electConFailure_desc, setJu_electConFailure_desc] = useState();
  const [ju_electConFailure_sp, setJu_electConFailure_sp] = useState();
  const [ju_brokenPieces, setJu_brokenPieces] = useState(false);
  const [ju_brokenPieces_desc, setJu_brokenPieces_desc] = useState();
  const [ju_brokenPieces_sp, setJu_brokenPieces_sp] = useState();
  const [ju_sealingFailure, setJu_sealingFailure] = useState(false);
  const [ju_sealingFailure_desc, setJu_sealingFailure_desc] = useState();
  const [ju_sealingFailure_sp, setJu_sealingFailure_sp] = useState();
  const [ju_electricalPolarity, setJu_electricalPolarity] = useState(false);
  const [ju_electricalPolarity_desc, setJu_electricalPolarity_desc] =
    useState();
  const [ju_electricalPolarity_sp, setJu_electricalPolarity_sp] = useState();
  const [ca_incorrectsWires, setCa_incorrectsWires] = useState(false);
  const [ca_incorrectsWires_desc, setCa_incorrectsWires_desc] = useState();
  const [ca_incorrectsWires_sp, setCa_incorrectsWires_sp] = useState();
  const [ca_stickerFlaws, setCa_stickerFlaws] = useState(false);
  const [ca_stickerFlaws_desc, setCa_stickerFlaws_desc] = useState();
  const [ca_stickerFlaws_sp, setCa_stickerFlaws_sp] = useState();
  const [ca_shortThin, setCa_shortThin] = useState(false);
  const [ca_shortThin_desc, setCa_shortThin_desc] = useState();
  const [ca_shortThin_sp, setCa_shortThin_sp] = useState();
  const [fr_damaged, setFr_damaged] = useState(false);
  const [fr_damaged_desc, setFr_damaged_desc] = useState();
  const [fr_damaged_sp, setFr_damaged_sp] = useState();
  const [fr_sealingFailure, setFr_sealingFailure] = useState(false);
  const [fr_sealingFailure_desc, setFr_sealingFailure_desc] = useState();
  const [fr_sealingFailure_sp, setFr_sealingFailure_sp] = useState();
  const [fo_broken, setFo_broken] = useState(false);
  const [fo_broken_desc, setFo_broken_desc] = useState();
  const [fo_broken_sp, setFo_broken_sp] = useState();
  const [fo_scratches, setFo_scratches] = useState(false);
  const [fo_scratches_desc, setFo_scratches_desc] = useState();
  const [fo_scratches_sp, setFo_scratches_sp] = useState();
  const [so_delamination, setSo_delamination] = useState(false);
  const [so_delamination_desc, setSo_delamination_desc] = useState();
  const [so_delamination_sp, setSo_delamination_sp] = useState();
  const [so_snailTrail, setSo_snailTrail] = useState(false);
  const [so_snailTrail_desc, setSo_snailTrail_desc] = useState();
  const [so_snailTrail_sp, setSo_snailTrail_sp] = useState();
  const [so_microcracks, setSo_microcracks] = useState(false);
  const [so_microcracks_desc, setSo_microcracks_desc] = useState();
  const [so_microcracks_sp, setSo_microcracks_sp] = useState();
  const [so_darkening, setSo_darkening] = useState(false);
  const [so_darkening_desc, setSo_darkening_desc] = useState();
  const [so_darkening_sp, setSo_darkening_sp] = useState();
  // Checklist 2
  const [fe_absent, setFe_absent] = useState(false);
  const [fe_absent_desc, setFe_absent_desc] = useState();
  const [fe_absent_sp, setFe_absent_sp] = useState();
  const [fe_broken, setFe_broken] = useState(false);
  const [fe_broken_desc, setFe_broken_desc] = useState();
  const [fe_broken_sp, setFe_broken_sp] = useState();
  const [fe_loose, setFe_loose] = useState(false);
  const [fe_loose_desc, setFe_loose_desc] = useState();
  const [fe_loose_sp, setFe_loose_sp] = useState();
  const [cm_noImages, setCm_noImages] = useState(false);
  const [cm_noImages_desc, setCm_noImages_desc] = useState();
  const [cm_noImages_sp, setCm_noImages_sp] = useState();
  const [gr_bush, setGr_bush] = useState(false);
  const [gr_bush_desc, setGr_bush_desc] = useState();
  const [gr_bush_sp, setGr_bush_sp] = useState();
  const [gr_erosions, setGr_erosions] = useState(false);
  const [gr_erosions_desc, setGr_erosions_desc] = useState();
  const [gr_erosions_sp, setGr_erosions_sp] = useState();
  const [gr_holes, setGr_holes] = useState(false);
  const [gr_holes_desc, setGr_holes_desc] = useState();
  const [gr_holes_sp, setGr_holes_sp] = useState();
  const [in_noConnections, setIn_noConnections] = useState(false);
  const [in_noConnections_desc, setIn_noConnections_desc] = useState();
  const [in_noConnections_sp, setIn_noConnections_sp] = useState();
  // Checklist 3
  const [iv_num_serie, setIv_num_serie] = useState();
  const [iv_visual_inspection, setIv_visual_inspection] = useState(true);
  const [iv_audio_inspection, setIv_audio_inspection] = useState(true);
  const [iv_labeling_Idt, setIv_labeling_Idt] = useState(true);
  const [iv_thermographic_inspection, setIv_thermographic_inspection] =
    useState(true);
  const [iv_eletrical_inspection, setIv_eletrical_inspection] = useState(true);
  const [iv_alarm, setIv_alarm] = useState(false);
  const [iv_events, setIv_events] = useState(false);
  const [iv_grounding, setIv_grounding] = useState(false);

  const handleSubmit = async (e) => {
    console.log(UserObj);
    const result = await axios.post(
      `http://127.0.0.1:5000/api/technical/checklist/add/${idInstallations}`,
      UserObj,
    );
    navigate('/maintenance');
  };

  const UserObj = {
    la_absent,
    la_absent_desc,
    la_absent_sp,
    la_incorrectfixing,
    la_incorrectfixing_desc,
    la_incorrectfixing_sp,
    la_lackOfInformation,
    la_lackOfInformation_sp,
    la_lackOfInformation_desc,
    ba_delamination,
    ba_delamination_desc,
    ba_delamination_sp,
    ju_electConFailure,
    ju_electConFailure_desc,
    ju_electConFailure_sp,
    ju_brokenPieces,
    ju_brokenPieces_desc,
    ju_brokenPieces_sp,
    ju_sealingFailure,
    ju_sealingFailure_desc,
    ju_sealingFailure_sp,
    ju_electricalPolarity,
    ju_electricalPolarity_desc,
    ju_electricalPolarity_sp,
    ca_incorrectsWires,
    ca_incorrectsWires_desc,
    ca_incorrectsWires_sp,
    ca_stickerFlaws,
    ca_stickerFlaws_desc,
    ca_stickerFlaws_sp,
    ca_shortThin,
    ca_shortThin_desc,
    ca_shortThin_sp,
    fr_damaged,
    fr_damaged_desc,
    fr_damaged_sp,
    fr_sealingFailure,
    fr_sealingFailure_desc,
    fr_sealingFailure_sp,
    fo_broken,
    fo_broken_desc,
    fo_broken_sp,
    fo_scratches,
    fo_scratches_desc,
    fo_scratches_sp,
    so_delamination,
    so_delamination_desc,
    so_delamination_sp,
    so_snailTrail,
    so_snailTrail_desc,
    so_snailTrail_sp,
    so_microcracks,
    so_microcracks_desc,
    so_microcracks_sp,
    so_darkening,
    so_darkening_desc,
    so_darkening_sp,
    // Checklist 2
    fe_absent,
    fe_absent_desc,
    fe_absent_sp,
    fe_broken,
    fe_broken_desc,
    fe_broken_sp,
    fe_loose,
    fe_loose_desc,
    fe_loose_sp,
    cm_noImages,
    cm_noImages_desc,
    cm_noImages_sp,
    gr_bush,
    gr_bush_desc,
    gr_bush_sp,
    gr_erosions,
    gr_erosions_desc,
    gr_erosions_sp,
    gr_holes,
    gr_holes_desc,
    gr_holes_sp,
    in_noConnections,
    in_noConnections_desc,
    in_noConnections_sp,
    iv_num_serie,
    iv_visual_inspection,
    iv_audio_inspection,
    iv_labeling_Idt,
    iv_thermographic_inspection,
    iv_eletrical_inspection,
    iv_alarm,
    iv_events,
    iv_grounding,
  };

  return (
    <>
      <Title>CHECKLIST 1 - Ensaios Visuais dos Painéis Fotovoltaicos</Title>
      <div class="wrapper">
        <div class="h-1 bd-color title-header">Componente</div>
        <div class="h-2 bd-color title-header">Não Conformidade</div>
        <div class="h-3 bd-color title-header">
          Não Conformidade Presente
          <div class="wrapper-son">
            <div class="h-4 bd-color">Não</div>
            <div class="h-5 bd-color">Sim</div>
            <div class="h-6 bd-color">Se sim, avalie</div>
            <div class="h-7 bd-color">Problema de Segurança</div>
          </div>
        </div>
        {/* /* Etiquetagem - Ausente  */}
        <div class="b-1-1 bd-color space">Etiquetagem</div>
        <div class="b-1-2 bd-color space">Ausente</div>
        <div class="b-1-3 ">
          <div class="wrapper-son">
            <div class="b-1-4-1 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="ausente"
                value={'false'}
                onChange={(e) => {
                  setLa_absent(e.target.value);
                }}
              />
            </div>
            <div class="b-1-4-2 bd-color-2">
              <input
                className="inpt"
                type="radio"
                value={'true'}
                name="ausente"
                onChange={(e) => {
                  setLa_absent(e.target.value);
                }}
              />
            </div>
            <div class="b-1-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setLa_absent_desc(e.target.value)}
                type="text"
                placeholder="Digite aqui"
              />
            </div>
            <div class="b-1-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setLa_absent_sp(e.target.value)}
                type="text"
                placeholder="Digite aqui"
              />
            </div>
          </div>
        </div>
        {/* /* Etiquetagem - Fixação Incorreta  */}
        <div class="b-2-1 bd-color"></div>
        <div class="b-2-2 bd-color space">Fixação Incorreta</div>
        <div class="b-2-3">
          <div class="wrapper-son">
            <div class="b-2-4-1 bd-color-2">
              <input
                onChange={(e) => setLa_incorrectfixing(false)}
                className="inpt"
                type="radio"
                name="fix-incorreta"
                value={'false'}
              />
            </div>
            <div class="b-2-4-2 bd-color-2">
              <input
                onChange={(e) => setLa_incorrectfixing(true)}
                className="inpt"
                type="radio"
                name="fix-incorreta"
                value={'true'}
              />
            </div>
            <div class="b-2-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className={'text-area'}
                onChange={(e) => setLa_incorrectfixing_desc(e.target.value)}
                type="text"
                placeholder="Digite aqui"
              />
            </div>
            <div class="b-2-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className={'text-area'}
                onChange={(e) => setLa_incorrectfixing_sp(e.target.value)}
                type="text"
                placeholder="Digite aqui"
              />
            </div>
          </div>
        </div>
        {/* /*Etiquetagem Falta de Informação  */}
        <div class="b-3-1 bd-color"></div>
        <div class="b-3-2 bd-color space">Falta de Informação</div>
        <div class="b-3-3">
          <div class="wrapper-son">
            <div class="b-3-4-1 bd-color-2">
              <input
                onChange={(e) => setLa_lackOfInformation(false)}
                className="inpt"
                type="radio"
                name="falta-informacao"
                value={'false'}
              />
            </div>
            <div class="b-3-4-2 bd-color-2">
              <input
                onChange={(e) => setLa_lackOfInformation(true)}
                className="inpt"
                type="radio"
                name="falta-informacao"
                value={'true'}
              />
            </div>
            <div class="b-3-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setLa_lackOfInformation_desc(e.target.value)}
                type="text"
                placeholder="Digite aqui"
              />
            </div>
            <div class="b-3-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setLa_lackOfInformation_sp(e.target.value)}
                type="text"
                placeholder="Digite aqui"
              />
            </div>
          </div>
        </div>
        {/* Backsheet -  Delamina */}
        <div class="b-4-1 bd-color space">Backsheet</div>
        <div class="b-4-2 bd-color space">Delaminação</div>
        <div class="b-4-3">
          <div class="wrapper-son">
            <div class="b-4-4-1 bd-color-2">
              <input
                onChange={(e) => setBa_delamination(false)}
                className="inpt"
                type="radio"
                name="delaminacao"
                value={'false'}
              />
            </div>
            <div class="b-4-4-2 bd-color-2">
              <input
                onChange={(e) => setBa_delamination(true)}
                className="inpt"
                type="radio"
                name="delaminacao"
                value={'true'}
              />
            </div>
            <div class="b-4-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                className="text-area"
                maxLength={60}
                onChange={(e) => setBa_delamination_desc(e.target.value)}
                type="text"
                placeholder="Digite aqui"
              />
            </div>
            <div class="b-4-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                className="text-area"
                maxLength={60}
                onChange={(e) => setBa_delamination_sp(e.target.value)}
                type="text"
                placeholder="Digite aqui"
              />
            </div>
          </div>
        </div>
        {/* Caixa de Junção - Falha de conexões elétri */}
        <div class="b-5-1 bd-color space">Caixa de Junção</div>
        <div class="b-5-2 bd-color space">Falha de conexões elétricas</div>
        <div class="b-5-3">
          <div class="wrapper-son">
            <div class="b-5-4-1 bd-color-2">
              <input
                onChange={(e) => setJu_electConFailure(e.target.value)}
                className="inpt"
                type="radio"
                value={'false'}
                name="falha-conexoes"
              />
            </div>
            <div class="b-5-4-2 bd-color-2">
              <input
                onChange={(e) => setJu_electConFailure(e.target.value)}
                className="inpt"
                type="radio"
                value={'true'}
                name="falha-conexoes"
              />
            </div>
            <div class="b-5-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setJu_electConFailure_desc(e.target.value)}
                type="text"
                placeholder="Digite aqui"
              />
            </div>
            <div class="b-5-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setJu_electConFailure_sp(e.target.value)}
                type="text"
                placeholder="Digite aqui"
              />
            </div>
          </div>
        </div>
        {/* Caixa de Junção - Falha de conexões elétri */}
        <div class="b-6-1 bd-color"></div>
        <div class="b-6-2 bd-color space">
          Rachaduras / quebras / falhas na carcaça
        </div>
        <div class="b-6-3">
          <div class="wrapper-son">
            <div class="b-6-4-1 bd-color-2">
              <input
                onChange={(e) => setJu_brokenPieces(e.target.value)}
                className="inpt"
                type="radio"
                value={'false'}
                name="quebrado"
              />
            </div>
            <div class="b-6-4-2 bd-color-2">
              <input
                onChange={(e) => setJu_brokenPieces(e.target.value)}
                className="inpt"
                type="radio"
                value={'true'}
                name="quebrado"
              />
            </div>
            <div class="b-6-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setJu_brokenPieces_desc(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
            <div class="b-6-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setJu_brokenPieces_sp(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
          </div>
        </div>
        {/* Caixa de Junção - Falha no veda */}
        <div class="b-7-1 bd-color"></div>
        <div class="b-7-2 bd-color space">Falha no vedador</div>
        <div class="b-7-3">
          <div class="wrapper-son">
            <div class="b-7-4-1 bd-color-2">
              <input
                onChange={(e) => setJu_sealingFailure(e.target.value)}
                className="inpt"
                type="radio"
                name="falha-carcaca"
                value={'false'}
              />
            </div>
            <div class="b-7-4-2 bd-color-2">
              <input
                onChange={(e) => setJu_sealingFailure(e.target.value)}
                className="inpt"
                type="radio"
                name="falha-carcaca"
                value={'true'}
              />
            </div>
            <div class="b-7-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setJu_sealingFailure_desc(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
            <div class="b-7-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setJu_sealingFailure_sp(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
          </div>
        </div>
        {/* Caixa de Junção - Polaridade elétrica não indic */}
        <div class="b-8-1 bd-color"></div>
        <div class="b-8-2 bd-color space">Polaridade elétrica não indicada</div>
        <div class="b-8-3">
          <div class="wrapper-son">
            <div class="b-8-4-1 bd-color-2">
              <input
                onChange={(e) => setJu_electricalPolarity(e.target.value)}
                className="inpt"
                type="radio"
                name="polaridade-eletrica"
                value={'false'}
              />
            </div>
            <div class="b-8-4-2 bd-color-2">
              <input
                onChange={(e) => setJu_electricalPolarity(e.target.value)}
                className="inpt"
                type="radio"
                name="polaridade-eletrica"
                value={'true'}
              />
            </div>
            <div class="b-8-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setJu_electricalPolarity_desc(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
            <div class="b-8-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setJu_electricalPolarity_sp(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
          </div>
        </div>
        {/* Cabeamento - Fio(s) ausente (s) ou mal conect */}
        <div class="b-9-1 bd-color space">Cabeamento</div>
        <div class="b-9-2 bd-color space">
          Fio(s) ausente (s) ou mal conectado
        </div>
        <div class="b-9-3">
          <div class="wrapper-son">
            <div class="b-9-4-1 bd-color-2">
              <input
                onChange={(e) => setCa_incorrectsWires(e.target.value)}
                className="inpt"
                type="radio"
                name="fios-ausentes"
                value={'false'}
              />
            </div>
            <div class="b-9-4-2 bd-color-2">
              <input
                onChange={(e) => setCa_incorrectsWires(e.target.value)}
                className="inpt"
                type="radio"
                name="fios-ausentes"
                value={'true'}
              />
            </div>
            <div class="b-9-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setCa_incorrectsWires_desc(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
            <div class="b-9-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setCa_incorrectsWires_sp(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
          </div>
        </div>
        {/* Cabeamento - Falha no adesivo / sela */}
        <div class="b-10-1 bd-color"></div>
        <div class="b-10-2 bd-color space">Falha no adesivo / selante</div>
        <div class="b-10-3">
          <div class="wrapper-son">
            <div class="b-10-4-1 bd-color-2">
              <input
                onChange={(e) => setCa_stickerFlaws(e.target.value)}
                className="inpt"
                type="radio"
                name="falha-adesivo"
                value={'false'}
              />
            </div>
            <div class="b-10-4-2 bd-color-2">
              <input
                onChange={(e) => setCa_stickerFlaws(e.target.value)}
                className="inpt"
                type="radio"
                name="falha-adesivo"
                value={'true'}
              />
            </div>
            <div class="b-10-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setCa_stickerFlaws_desc(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
            <div class="b-10-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setCa_stickerFlaws_sp(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
          </div>
        </div>
        {/* Cabeamento - Muito curto e / ou muito f */}
        <div class="b-11-1 bd-color"></div>
        <div class="b-11-2 bd-color space">Muito curto e / ou muito fino</div>
        <div class="b-11-3">
          <div class="wrapper-son">
            <div class="b-11-4-1 bd-color-2">
              <input
                onChange={(e) => setCa_shortThin(e.target.value)}
                className="inpt"
                type="radio"
                name="curto-fino"
                value={'false'}
              />
            </div>
            <div class="b-11-4-2 bd-color-2">
              <input
                onChange={(e) => setCa_shortThin(e.target.value)}
                className="inpt"
                type="radio"
                name="curto-fino"
                value={'true'}
              />
            </div>
            <div class="b-11-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setCa_shortThin_desc(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
            <div class="b-11-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setCa_shortThin_sp(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
          </div>
        </div>
        {/* Frame - Danific */}
        <div class="b-12-1 bd-color space">Frame</div>
        <div class="b-12-2 bd-color space">Danificado</div>
        <div class="b-12-3">
          <div class="wrapper-son">
            <div class="b-12-4-1 bd-color-2">
              <input
                onChange={(e) => setFr_damaged(e.target.value)}
                className="inpt"
                type="radio"
                name="frame-danificado"
                value={'false'}
              />
            </div>
            <div class="b-12-4-2 bd-color-2">
              <input
                onChange={(e) => setFr_damaged(e.target.value)}
                className="inpt"
                type="radio"
                name="frame-danificado"
                value={'true'}
              />
            </div>
            <div class="b-12-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setFr_damaged_desc(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
            <div class="b-12-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setFr_damaged_sp(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
          </div>
        </div>
        {/* Frame - Falha no adesivo / sela */}
        <div class="b-13-1 bd-color"></div>
        <div class="b-13-2 bd-color space">Falha no adesivo / selante</div>
        <div class="b-13-3">
          <div class="wrapper-son">
            <div class="b-13-4-1 bd-color-2">
              <input
                onChange={(e) => setFr_sealingFailure(e.target.value)}
                className="inpt"
                type="radio"
                name="frame-adesivo"
                value={'false'}
              />
            </div>
            <div class="b-13-4-2 bd-color-2">
              <input
                onChange={(e) => setFr_sealingFailure(e.target.value)}
                className="inpt"
                type="radio"
                name="frame-adesivo"
                value={'true'}
              />
            </div>
            <div class="b-13-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setFr_sealingFailure_desc(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
            <div class="b-13-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setFr_sealingFailure_sp(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
          </div>
        </div>
        {/* Vidro Frontal - Quebrado */}
        <div class="b-14-1 bd-color space">Vidro Frontal</div>
        <div class="b-14-2 bd-color space">Quebrado</div>
        <div class="b-14-3">
          <div class="wrapper-son">
            <div class="b-14-4-1 bd-color-2">
              <input
                onChange={(e) => setFo_broken(e.target.value)}
                className="inpt"
                type="radio"
                name="frame-quebrado"
                value={'false'}
              />
            </div>
            <div class="b-14-4-2 bd-color-2">
              <input
                onChange={(e) => setFo_broken(e.target.value)}
                className="inpt"
                type="radio"
                name="frame-quebrado"
                value={'true'}
              />
            </div>
            <div class="b-14-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setFo_broken_desc(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
            <div class="b-14-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setFo_broken_sp(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
          </div>
        </div>
        {/* Vidro Frontal - Arranhões */}
        <div class="b-15-1 bd-color space"></div>
        <div class="b-15-2 bd-color space">Arranhões</div>
        <div class="b-15-3">
          <div class="wrapper-son">
            <div class="b-15-4-1 bd-color-2">
              <input
                onChange={(e) => setFo_scratches(e.target.value)}
                className="inpt"
                type="radio"
                name="frame-arranhado"
                value={'false'}
              />
            </div>
            <div class="b-15-4-2 bd-color-2">
              <input
                onChange={(e) => setFo_scratches(e.target.value)}
                className="inpt"
                type="radio"
                name="frame-arranhado"
                value={'true'}
              />
            </div>
            <div class="b-15-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setFo_scratches_desc(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
            <div class="b-15-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setFo_scratches_sp(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
          </div>
        </div>

        {/* Células Solares - Delaminação */}
        <div class="b-16-1 bd-color space">Células Solares</div>
        <div class="b-16-2 bd-color space">Delaminação</div>
        <div class="b-16-3">
          <div class="wrapper-son">
            <div class="b-16-4-1 bd-color-2">
              <input
                onChange={(e) => setSo_delamination(e.target.value)}
                className="inpt"
                type="radio"
                name="celulas-delaminacao"
                value={'false'}
              />
            </div>
            <div class="b-16-4-2 bd-color-2">
              <input
                onChange={(e) => setSo_delamination(e.target.value)}
                className="inpt"
                type="radio"
                name="celulas-delaminacao"
                value={'true'}
              />
            </div>
            <div class="b-16-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setSo_delamination_desc(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
            <div class="b-16-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setSo_delamination_sp(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
          </div>
        </div>
        {/* Células Solares - Trilha do caracol */}
        <div class="b-17-1 bd-color"></div>
        <div class="b-17-2 bd-color space">Trilha do caracol</div>
        <div class="b-17-3">
          <div class="wrapper-son">
            <div class="b-17-4-1 bd-color-2">
              <input
                onChange={(e) => setSo_snailTrail(e.target.value)}
                className="inpt"
                type="radio"
                name="celulas-trilha"
                value={false}
              />
            </div>
            <div class="b-17-4-2 bd-color-2">
              <input
                onChange={(e) => setSo_snailTrail(e.target.value)}
                className="inpt"
                type="radio"
                value={true}
                name="celulas-trilha"
              />
            </div>
            <div class="b-17-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setSo_snailTrail_desc(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
            <div class="b-17-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setSo_snailTrail_sp(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
          </div>
        </div>
        {/* Células Solares - Microfissuras */}
        <div class="b-18-1 bd-color"></div>
        <div class="b-18-2 bd-color space">Microfissuras</div>
        <div class="b-18-3">
          <div class="wrapper-son">
            <div class="b-18-4-1 bd-color-2">
              <input
                onChange={(e) => setSo_microcracks(e.target.value)}
                className="inpt"
                type="radio"
                name="celulas-microfissuras"
                value={false}
              />
            </div>
            <div class="b-18-4-2 bd-color-2">
              <input
                onChange={(e) => setSo_microcracks(e.target.value)}
                className="inpt"
                type="radio"
                value={true}
                name="celulas-microfissuras"
              />
            </div>
            <div class="b-18-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setSo_microcracks_desc(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
            <div class="b-18-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setSo_microcracks_sp(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
          </div>
        </div>
        {/* Células Solares - Amarelecimento ou escurecime */}
        <div class="b-19-1 bd-color"></div>
        <div class="b-19-2 bd-color space">Amarelecimento ou escurecimento</div>
        <div class="b-19-3">
          <div class="wrapper-son">
            <div class="b-19-4-1 bd-color-2">
              <input
                onChange={(e) => setSo_darkening(e.target.value)}
                className="inpt"
                type="radio"
                name="celulas-escurecimento"
                value={false}
              />
            </div>
            <div class="b-19-4-2 bd-color-2">
              <input
                onChange={(e) => setSo_darkening(e.target.value)}
                className="inpt"
                type="radio"
                value={true}
                name="celulas-escurecimento"
              />
            </div>
            <div class="b-19-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setSo_darkening_desc(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
            <div class="b-19-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                onChange={(e) => setSo_darkening_sp(e.target.value)}
                type="text"
                placeholder={'Digite aqui'}
              />
            </div>
          </div>
        </div>
      </div>

      <Title>CHECKLIST 1 - Ensaios Visuais dos Painéis Fotovoltaicos</Title>

      <div class="wrapper">
        <div class="h-1 bd-color title-header">Componente</div>
        <div class="h-2 bd-color title-header">Não Conformidade</div>
        <div class="h-3 bd-color title-header">
          Não Conformidade Presente
          <div class="wrapper-son">
            <div class="h-4 bd-color">Não</div>
            <div class="h-5 bd-color">Sim</div>
            <div class="h-6 bd-color">Se sim, avalie</div>
            <div class="h-7 bd-color">Problema de Segurança</div>
          </div>
        </div>

        {/* /* Cerca - Ausente  */}
        <div class="b-1-1 bd-color space">Cerca</div>
        <div class="b-1-2 bd-color space">Ausente</div>
        <div class="b-1-3">
          <div class="wrapper-son">
            <div class="b-1-4-1 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="etiquetagem-ausente"
                value={false}
                onChange={(e) => setFe_absent(e.target.value)}
              />
            </div>
            <div class="b-1-4-2 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="etiquetagem-ausente"
                value={true}
                onChange={(e) => setFe_absent(e.target.value)}
              />
            </div>
            <div class="b-1-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                type="text"
                placeholder={'Digite aqui'}
                onChange={(e) => setFe_absent_desc(e.target.value)}
              />
            </div>
            <div class="b-1-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                type="text"
                placeholder={'Digite aqui'}
                onChange={(e) => setFe_absent_sp(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* /* Cerca - quebrada  */}
        <div class="b-2-1 bd-color"></div>
        <div class="b-2-2 bd-color space">Quebrada</div>
        <div class="b-2-3">
          <div class="wrapper-son">
            <div class="b-2-4-1 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="cerca-quebrada"
                value={'false'}
                onChange={(e) => setFe_broken(e.target.value)}
              />
            </div>
            <div class="b-2-4-2 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="cerca-quebrada"
                value={'true'}
                onChange={(e) => setFe_broken(e.target.value)}
              />
            </div>
            <div class="b-2-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                type="text"
                placeholder={'Digite aqui'}
                onChange={(e) => setFe_broken_desc(e.target.value)}
              />
            </div>
            <div class="b-2-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                type="text"
                placeholder={'Digite aqui'}
                onChange={(e) => setFe_broken_sp(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* /*Cerca - frouxa  */}
        <div class="b-3-1 bd-color"></div>
        <div class="b-3-2 bd-color space">Frouxa</div>
        <div class="b-3-3">
          <div class="wrapper-son">
            <div class="b-3-4-1 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="cerca-frouxa"
                value={'false'}
                onChange={(e) => setFe_loose(e.target.value)}
              />
            </div>
            <div class="b-3-4-2 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="cerca-frouxa"
                value={'true'}
                onChange={(e) => setFe_loose(e.target.value)}
              />
            </div>
            <div class="b-3-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                type="text"
                placeholder={'Digite aqui'}
                onChange={(e) => setFe_loose_desc(e.target.value)}
              />
            </div>
            <div class="b-3-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                type="text"
                placeholder={'Digite aqui'}
                onChange={(e) => setFe_loose_sp(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Câmeras -  Sem imagem */}
        <div class="b-4-1 bd-color space">Câmeras</div>
        <div class="b-4-2 bd-color space">Sem imagem</div>
        <div class="b-4-3">
          <div class="wrapper-son">
            <div class="b-4-4-1 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="camera-imagem"
                value={false}
                onChange={(e) => setCm_noImages(e.target.value)}
              />
            </div>
            <div class="b-4-4-2 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="camera-imagem"
                value={true}
                onChange={(e) => setCm_noImages(e.target.value)}
              />
            </div>
            <div class="b-4-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                type="text"
                placeholder={'Digite aqui'}
                onChange={(e) => setCm_noImages_desc(e.target.value)}
              />
            </div>
            <div class="b-4-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                type="text"
                placeholder={'Digite aqui'}
                onChange={(e) => setCm_noImages_sp(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Solo - Matos */}
        <div class="b-5-1 bd-color space">Solo</div>
        <div class="b-5-2 bd-color space">Matos</div>
        <div class="b-5-3 ">
          <div class="wrapper-son">
            <div class="b-5-4-1 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="solo-mato"
                value={false}
                onChange={(e) => setGr_bush(e.target.value)}
              />
            </div>
            <div class="b-5-4-2 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="solo-mato"
                value={true}
                onChange={(e) => setGr_bush(e.target.value)}
              />
            </div>
            <div class="b-5-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                type="text"
                placeholder={'Digite aqui'}
                onChange={(e) => setGr_bush_desc(e.target.value)}
              />
            </div>
            <div class="b-5-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                type="text"
                placeholder={'Digite aqui'}
                onChange={(e) => setGr_bush_sp(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Caixa de Junção - Erosão */}
        <div class="b-6-1 bd-color"></div>
        <div class="b-6-2 bd-color space">Erosões</div>
        <div class="b-6-3">
          <div class="wrapper-son">
            <div class="b-6-4-1 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="solo-erosoes"
                onChange={(e) => setGr_erosions(e.target.value)}
                value={false}
              />
            </div>
            <div class="b-6-4-2 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="solo-erosoes"
                value={true}
                onChange={(e) => setGr_erosions(e.target.value)}
              />
            </div>
            <div class="b-6-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                type="text"
                placeholder={'Digite aqui'}
                onChange={(e) => setGr_erosions_desc(e.target.value)}
              />
            </div>
            <div class="b-6-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                type="text"
                placeholder={'Digite aqui'}
                onChange={(e) => setGr_erosions_sp(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Caixa de Junção - Buraco */}
        <div class="b-7-1 bd-color"></div>
        <div class="b-7-2 bd-color space">Buracos</div>
        <div class="b-7-3">
          <div class="wrapper-son">
            <div class="b-7-4-1 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="solo-buraco"
                value={false}
                onChange={(e) => setGr_holes(e.target.value)}
              />
            </div>
            <div class="b-7-4-2 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="solo-buraco"
                value={true}
                onChange={(e) => setGr_holes(e.target.value)}
              />
            </div>
            <div class="b-7-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                type="text"
                placeholder={'Digite aqui'}
                onChange={(e) => setGr_holes_desc(e.target.value)}
              />
            </div>
            <div class="b-7-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                type="text"
                placeholder={'Digite aqui'}
                onChange={(e) => setGr_holes_sp(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Internet - Sem conexão */}
        <div class="b-8-1 bd-color space">Internet</div>
        <div class="b-8-2 bd-color space">Sem conexão</div>
        <div class="b-8-3">
          <div class="wrapper-son">
            <div class="b-8-4-1 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="internet-conexao"
                value={false}
                onChange={(e) => setIn_noConnections(e.target.value)}
              />
            </div>
            <div class="b-8-4-2 bd-color-2">
              <input
                className="inpt"
                type="radio"
                name="internet-conexao"
                value={true}
                onChange={(e) => setIn_noConnections(e.target.value)}
              />
            </div>
            <div class="b-8-4-3 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                type="text"
                placeholder={'Digite aqui'}
                onChange={(e) => setIn_noConnections_desc(e.target.value)}
              />
            </div>
            <div class="b-8-4-4 bd-color-2">
              <textarea
                rows={3}
                cols={10}
                maxLength={60}
                className="text-area"
                type="text"
                placeholder={'Digite aqui'}
                onChange={(e) => setIn_noConnections_sp(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <Title>CHECKLIST 3 - Ensaios Visuais dos Inversores</Title>
      <div class="wrapper-checklist3">
        <div class="check-h-1 title-header bd-color space"> INVERSOR SOLIS</div>
        <div class="check-h-2 title-header bd-color space"> INV. 1</div>
        <div class="check-b-1-1 bd-color space">No Série</div>
        <div class="check-b-1-2 bd-color space">
          <input
            className="inpt-text"
            type="text"
            placeholder={'Digite aqui'}
            name="texto"
            id="texto"
            width={'100%'}
            onChange={(e) => setIv_num_serie(e.target.value)}
          />
        </div>
        <div class="check-b-2-1 bd-color space">Inspeção Visual</div>
        <div class="check-b-2-2 bd-color space">
          <select
            className={'inpt-select'}
            name="inspecao-audio"
            onChange={(e) => setIv_visual_inspection(e.target.value)}
            defaultValue={'true'}
          >
            <option value={'true'} selected>
              Conforme
            </option>
            <option value={'false'}>Não Conforme</option>
          </select>
        </div>
        <div class="check-b-3-1 bd-color space">Inspeção Áudio</div>
        <div class="check-b-3-2 bd-color space">
          <select
            className={'inpt-select'}
            name="inspecao-audio"
            onChange={(e) => setIv_audio_inspection(e.target.value)}
            defaultValue={'true'}
          >
            <option value={'true'}>Conforme</option>
            <option value={'false'} selected>
              Não Conforme
            </option>
          </select>
        </div>
        <div class="check-b-4-1 bd-color space">Etiquetagem Idt</div>
        <div class="check-b-4-2 bd-color space">
          <select
            className={'inpt-select'}
            name="etiquetagem-idt"
            onChange={(e) => setIv_labeling_Idt(e.target.value)}
            defaultValue={'true'}
          >
            <option value={'true'}>Conforme</option>
            <option value={'false'} selected>
              Não Conforme
            </option>
          </select>
        </div>
        <div class="check-b-5-1 bd-color space">
          Inspeção Termográfica Inversores
        </div>
        <div class="check-b-5-2 bd-color space">
          <select
            className={'inpt-select'}
            name="insp-inversores"
            onChange={(e) => setIv_thermographic_inspection(e.target.value)}
          >
            <option value={true} selected>
              Conforme
            </option>
            <option value={false}>Não Conforme</option>
          </select>
        </div>
        <div class="check-b-6-1 bd-color space">Inspeção Mont. Elétrica</div>
        <div class="check-b-6-2 bd-color space">
          <select
            className={'inpt-select'}
            name="insp-eletrica"
            onChange={(e) => setIv_eletrical_inspection(e.target.value)}
            defaultValue={'true'}
          >
            <option value={'true'} selected>
              Conforme
            </option>
            <option value={'false'}>Não Conforme</option>
          </select>
        </div>
        <div class="check-b-7-1 bd-color space">Alarmes</div>
        <div class="check-b-7-2 bd-color space">
          <select
            className={'inpt-select'}
            name="insp-eletrica"
            onChange={(e) => setIv_alarm(e.target.value)}
            defaultValue={false}
          >
            <option value={true}>YES</option>
            <option value={false} selected>
              NO
            </option>
          </select>
        </div>
        <div class="check-b-8-1 bd-color space">Eventos</div>
        <div class="check-b-8-2 bd-color space">
          <select
            className={'inpt-select'}
            name="eventos"
            onChange={(e) => setIv_events(e.target.value)}
            defaultValue={false}
          >
            <option value={true}>YES</option>
            <option value={false} selected>
              NO
            </option>
          </select>
        </div>
        <div class="check-b-9-1 bd-color space">Aterramento Carcaça</div>
        <div class="check-b-9-2 bd-color space">
          <select
            className={'inpt-select'}
            name="aterramento-carcaca"
            onChange={(e) => setIv_grounding(e.target.value)}
            defaultValue={false}
          >
            <option value={true}>YES</option>
            <option value={false} selected>
              NO
            </option>
          </select>
        </div>
      </div>
      <Button
        variant={'success'}
        className={'text-center'}
        onClick={handleSubmit}
        type="submit"
      >
        Salvar
      </Button>
    </>
  );
};
