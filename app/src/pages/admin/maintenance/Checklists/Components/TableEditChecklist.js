import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { Button, Container, Col, Row, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Title } from '../styled.style';
import '../style.css';

export const TableEditChecklist = (props) => {
  const { checklist } = props;
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(checklist);
    console.log(UserObj);
    const result = await axios.put(
      `http://127.0.0.1:5000/api/technical/checklist/update/${checklist._id}`,
      UserObj,
    );
    navigate('/maintenance/installations');
  };

  const [la_absent, setLa_absent] = useState(checklist.la_absent);
  const [la_absent_desc, setLa_absent_desc] = useState(
    checklist.la_absent_desc,
  );
  const [la_absent_sp, setLa_absent_sp] = useState(checklist.la_absent_sp);
  const [la_incorrectfixing, setLa_incorrectfixing] = useState(
    checklist.la_incorrectfixing,
  );
  const [la_incorrectfixing_desc, setLa_incorrectfixing_desc] = useState(
    checklist.la_incorrectfixing_desc,
  );
  const [la_incorrectfixing_sp, setLa_incorrectfixing_sp] = useState(
    checklist.la_incorrectfixing_sp,
  );
  const [la_lackOfInformation, setLa_lackOfInformation] = useState(
    checklist.la_lackOfInformation,
  );
  const [la_lackOfInformation_desc, setLa_lackOfInformation_desc] = useState(
    checklist.la_lackOfInformation_desc,
  );
  const [la_lackOfInformation_sp, setLa_lackOfInformation_sp] = useState(
    checklist.la_lackOfInformation_sp,
  );
  const [ba_delamination, setBa_delamination] = useState(
    checklist.ba_delamination,
  );
  const [ba_delamination_desc, setBa_delamination_desc] = useState(
    checklist.ba_delamination_desc,
  );
  const [ba_delamination_sp, setBa_delamination_sp] = useState(
    checklist.ba_delamination_sp,
  );
  const [ju_electConFailure, setJu_electConFailure] = useState(
    checklist.ju_electConFailure,
  );
  const [ju_electConFailure_desc, setJu_electConFailure_desc] = useState(
    checklist.ju_electConFailure_desc,
  );
  const [ju_electConFailure_sp, setJu_electConFailure_sp] = useState(
    checklist.ju_electConFailure_sp,
  );
  const [ju_brokenPieces, setJu_brokenPieces] = useState(
    checklist.ju_brokenPieces,
  );
  const [ju_brokenPieces_desc, setJu_brokenPieces_desc] = useState(
    checklist.ju_brokenPieces_desc,
  );
  const [ju_brokenPieces_sp, setJu_brokenPieces_sp] = useState(
    checklist.ju_brokenPieces_sp,
  );
  const [ju_sealingFailure, setJu_sealingFailure] = useState(
    checklist.ju_sealingFailure,
  );
  const [ju_sealingFailure_desc, setJu_sealingFailure_desc] = useState(
    checklist.ju_sealingFailure_desc,
  );
  const [ju_sealingFailure_sp, setJu_sealingFailure_sp] = useState(
    checklist.ju_sealingFailure_sp,
  );
  const [ju_electricalPolarity, setJu_electricalPolarity] = useState(
    checklist.ju_electricalPolarity,
  );
  const [ju_electricalPolarity_desc, setJu_electricalPolarity_desc] = useState(
    checklist.ju_electricalPolarity_desc,
  );
  const [ju_electricalPolarity_sp, setJu_electricalPolarity_sp] = useState(
    checklist.ju_electricalPolarity_sp,
  );
  const [ca_incorrectsWires, setCa_incorrectsWires] = useState(
    checklist.ca_incorrectsWires,
  );
  const [ca_incorrectsWires_desc, setCa_incorrectsWires_desc] = useState(
    checklist.ca_incorrectsWires_desc,
  );
  const [ca_incorrectsWires_sp, setCa_incorrectsWires_sp] = useState(
    checklist.ca_incorrectsWires_sp,
  );
  const [ca_stickerFlaws, setCa_stickerFlaws] = useState(
    checklist.ca_stickerFlaws,
  );
  const [ca_stickerFlaws_desc, setCa_stickerFlaws_desc] = useState(
    checklist.ca_stickerFlaws_desc,
  );
  const [ca_stickerFlaws_sp, setCa_stickerFlaws_sp] = useState(
    checklist.ca_stickerFlaws_sp,
  );
  const [ca_shortThin, setCa_shortThin] = useState(checklist.ca_shortThin);
  const [ca_shortThin_desc, setCa_shortThin_desc] = useState(
    checklist.ca_shortThin_desc,
  );
  const [ca_shortThin_sp, setCa_shortThin_sp] = useState(
    checklist.ca_shortThin_sp,
  );
  const [fr_damaged, setFr_damaged] = useState(checklist.fr_damaged);
  const [fr_damaged_desc, setFr_damaged_desc] = useState(
    checklist.fr_damaged_desc,
  );
  const [fr_damaged_sp, setFr_damaged_sp] = useState(checklist.fr_damaged_sp);
  const [fr_sealingFailure, setFr_sealingFailure] = useState(
    checklist.fr_sealingFailure,
  );
  const [fr_sealingFailure_desc, setFr_sealingFailure_desc] = useState(
    checklist.fr_sealingFailure_desc,
  );
  const [fr_sealingFailure_sp, setFr_sealingFailure_sp] = useState(
    checklist.fr_sealingFailure_sp,
  );
  const [fo_broken, setFo_broken] = useState(checklist.fo_broken);
  const [fo_broken_desc, setFo_broken_desc] = useState(
    checklist.fo_broken_desc,
  );
  const [fo_broken_sp, setFo_broken_sp] = useState(checklist.fo_broken_sp);

  const [fo_scratches, setFo_scratches] = useState(checklist.fo_scratches);
  const [fo_scratches_desc, setFo_scratches_desc] = useState(
    checklist.fo_scratches_desc,
  );
  const [fo_scratches_sp, setFo_scratches_sp] = useState(
    checklist.fo_scratches_sp,
  );
  const [so_delamination, setSo_delamination] = useState(
    checklist.so_delamination,
  );
  const [so_delamination_desc, setSo_delamination_desc] = useState(
    checklist.so_delamination_desc,
  );
  const [so_delamination_sp, setSo_delamination_sp] = useState(
    checklist.so_delamination_sp,
  );
  const [so_snailTrail, setSo_snailTrail] = useState(checklist.so_snailTrail);
  const [so_snailTrail_desc, setSo_snailTrail_desc] = useState(
    checklist.so_snailTrail_desc,
  );
  const [so_snailTrail_sp, setSo_snailTrail_sp] = useState(
    checklist.so_snailTrail_sp,
  );
  const [so_microcracks, setSo_microcracks] = useState(
    checklist.so_microcracks,
  );
  const [so_microcracks_desc, setSo_microcracks_desc] = useState(
    checklist.so_microcracks_desc,
  );
  const [so_microcracks_sp, setSo_microcracks_sp] = useState(
    checklist.so_microcracks_sp,
  );
  const [so_darkening, setSo_darkening] = useState(checklist.so_darkening);
  const [so_darkening_desc, setSo_darkening_desc] = useState(
    checklist.so_darkening_desc,
  );
  const [so_darkening_sp, setSo_darkening_sp] = useState(
    checklist.so_darkening_sp,
  );
  // // Checklist 2
  const [fe_absent, setFe_absent] = useState(checklist.fe_absent);
  const [fe_absent_desc, setFe_absent_desc] = useState(
    checklist.fe_absent_desc,
  );
  const [fe_absent_sp, setFe_absent_sp] = useState(checklist.fe_absent_sp);
  const [fe_broken, setFe_broken] = useState(checklist.fe_broken);
  const [fe_broken_desc, setFe_broken_desc] = useState(
    checklist.fe_broken_desc,
  );
  const [fe_broken_sp, setFe_broken_sp] = useState(checklist.fe_broken_sp);
  const [fe_loose, setFe_loose] = useState(checklist.fe_loose);
  const [fe_loose_desc, setFe_loose_desc] = useState(checklist.fe_loose_desc);
  const [fe_loose_sp, setFe_loose_sp] = useState(checklist.fe_loose_sp);
  const [cm_noImages, setCm_noImages] = useState(checklist.cm_noImages);
  const [cm_noImages_desc, setCm_noImages_desc] = useState(
    checklist.cm_noImages_desc,
  );
  const [cm_noImages_sp, setCm_noImages_sp] = useState(
    checklist.cm_noImages_sp,
  );
  const [gr_bush, setGr_bush] = useState(checklist.gr_bush);
  const [gr_bush_desc, setGr_bush_desc] = useState(checklist.gr_bush_desc);
  const [gr_bush_sp, setGr_bush_sp] = useState(checklist.gr_bush_sp);
  const [gr_erosions, setGr_erosions] = useState(checklist.gr_erosions);
  const [gr_erosions_desc, setGr_erosions_desc] = useState(
    checklist.gr_erosions_desc,
  );
  const [gr_erosions_sp, setGr_erosions_sp] = useState(
    checklist.gr_erosions_sp,
  );
  const [gr_holes, setGr_holes] = useState(checklist.gr_holes);
  const [gr_holes_desc, setGr_holes_desc] = useState(checklist.gr_holes_desc);
  const [gr_holes_sp, setGr_holes_sp] = useState(checklist.gr_holes_sp);
  const [in_noConnections, setIn_noConnections] = useState(
    checklist.in_noConnections,
  );
  const [in_noConnections_desc, setIn_noConnections_desc] = useState(
    checklist.in_noConnections_desc,
  );
  const [in_noConnections_sp, setIn_noConnections_sp] = useState(
    checklist.in_noConnections_sp,
  );
  // Checklist 3
  const [iv_num_serie, setIv_num_serie] = useState(checklist.iv_num_serie);
  const [iv_visual_inspection, setIv_visual_inspection] = useState(
    checklist.iv_visual_inspection,
  );
  const [iv_audio_inspection, setIv_audio_inspection] = useState(
    checklist.iv_audio_inspection,
  );
  const [iv_labeling_Idt, setIv_labeling_Idt] = useState(
    checklist.iv_labeling_Idt,
  );
  const [iv_thermographic_inspection, setIv_thermographic_inspection] =
    useState(checklist.iv_thermographic_inspection);
  const [iv_eletrical_inspection, setIv_eletrical_inspection] = useState(
    checklist.iv_eletrical_inspection,
  );
  const [iv_alarm, setIv_alarm] = useState(checklist.iv_alarm);
  const [iv_events, setIv_events] = useState(checklist.iv_events);
  const [iv_grounding, setIv_grounding] = useState(checklist.iv_grounding);

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

  const la_absent_desc_Ref = useRef(null);
  const la_absent_sp_Ref = useRef(null);
  const la_incorrectfixing_desc_Ref = useRef(null);
  const la_incorrectfixing_sp_Ref = useRef(null);
  const la_lackOfInformation_desc_Ref = useRef(null);
  const la_lackOfInformation_sp_Ref = useRef(null);
  const ba_delamination_desc_Ref = useRef(null);
  const ba_delamination_sp_Ref = useRef(null);
  const ju_electConFailure_desc_Ref = useRef(null);
  const ju_electConFailure_sp_Ref = useRef(null);
  const ju_brokenPieces_desc_Ref = useRef(null);
  const ju_brokenPieces_sp_Ref = useRef(null);

  const ju_sealingFailure_desc_Ref = useRef(null);
  const ju_sealingFailure_sp_Ref = useRef(null);

  const ju_electricalPolarity_desc_Ref = useRef(null);
  const ju_electricalPolarity_sp_Ref = useRef(null);

  const ca_incorrectsWires_desc_Ref = useRef(null);
  const ca_incorrectsWires_sp_Ref = useRef(null);

  const ca_stickerFlaws_desc_Ref = useRef(null);
  const ca_stickerFlaws_sp_Ref = useRef(null);

  const ca_shortThin_desc_Ref = useRef(null);
  const ca_shortThin_sp_Ref = useRef(null);

  const fr_damaged_desc_Ref = useRef(null);
  const fr_damaged_sp_Ref = useRef(null);

  const fr_sealingFailure_desc_Ref = useRef(null);
  const fr_sealingFailure_sp_Ref = useRef(null);

  const fo_broken_desc_Ref = useRef(null);
  const fo_broken_sp_Ref = useRef(null);

  const fo_scratches_desc_Ref = useRef(null);
  const fo_scratches_sp_Ref = useRef(null);

  const so_delamination_desc_Ref = useRef(null);
  const so_delamination_sp_Ref = useRef(null);

  const so_snailTrail_desc_Ref = useRef(null);
  const so_snailTrail_sp_Ref = useRef(null);

  const so_microcracks_desc_Ref = useRef(null);
  const so_microcracks_sp_Ref = useRef(null);

  const so_darkening_desc_Ref = useRef(null);
  const so_darkening_sp_Ref = useRef(null);

  const fe_absent_desc_Ref = useRef(null);
  const fe_absent_sp_Ref = useRef(null);

  const fe_broken_desc_Ref = useRef(null);
  const fe_broken_sp_Ref = useRef(null);

  const fe_loose_desc_Ref = useRef(null);
  const fe_loose_sp_Ref = useRef(null);

  const cm_noImages_desc_Ref = useRef(null);
  const cm_noImages_sp_Ref = useRef(null);

  const gr_bush_desc_Ref = useRef(null);
  const gr_bush_sp_Ref = useRef(null);

  const gr_erosions_desc_Ref = useRef(null);
  const gr_erosions_sp_Ref = useRef(null);

  const gr_holes_desc_Ref = useRef(null);
  const gr_holes_sp_Ref = useRef(null);

  const in_noConnections_desc_Ref = useRef(null);
  const in_noConnections_sp_Ref = useRef(null);
  const iv_num_serie_Ref = useRef(null);

  useEffect(() => {
    la_absent_desc_Ref.current.value = la_absent_desc;
  }, [la_absent_desc]);

  useEffect(() => {
    la_absent_sp_Ref.current.value = la_absent_sp;
  }, [la_absent_sp]);

  useEffect(() => {
    la_incorrectfixing_desc_Ref.current.value = la_incorrectfixing_desc;
  }, [la_incorrectfixing_desc]);

  useEffect(() => {
    la_incorrectfixing_sp_Ref.current.value = la_incorrectfixing_sp;
  }, [la_incorrectfixing_sp]);

  useEffect(() => {
    la_lackOfInformation_desc_Ref.current.value = la_lackOfInformation_desc;
  }, [la_lackOfInformation_desc]);

  useEffect(() => {
    la_lackOfInformation_sp_Ref.current.value = la_lackOfInformation_sp;
  }, [la_lackOfInformation_sp]);

  useEffect(() => {
    ba_delamination_desc_Ref.current.value = ba_delamination_desc;
  }, [ba_delamination_desc]);
  useEffect(() => {
    ba_delamination_sp_Ref.current.value = ba_delamination_sp;
  }, [ba_delamination_sp]);

  useEffect(() => {
    ju_electConFailure_desc_Ref.current.value = ju_electConFailure_desc;
  }, [ju_electConFailure_desc]);
  useEffect(() => {
    ju_electConFailure_sp_Ref.current.value = ju_electConFailure_sp;
  }, [ju_electConFailure_sp]);
  useEffect(() => {
    ju_brokenPieces_desc_Ref.current.value = ju_brokenPieces_desc;
  }, [ju_brokenPieces_desc]);
  useEffect(() => {
    ju_brokenPieces_sp_Ref.current.value = ju_brokenPieces_sp;
  }, [ju_brokenPieces_sp]);

  useEffect(() => {
    ju_sealingFailure_desc_Ref.current.value = ju_sealingFailure_desc;
  }, [ju_sealingFailure_desc]);
  useEffect(() => {
    ju_sealingFailure_sp_Ref.current.value = ju_sealingFailure_sp;
  }, [ju_sealingFailure_sp]);

  useEffect(() => {
    ju_electricalPolarity_desc_Ref.current.value = ju_electricalPolarity_desc;
  }, [ju_electricalPolarity_desc]);
  useEffect(() => {
    ju_electricalPolarity_sp_Ref.current.value = ju_electricalPolarity_sp;
  }, [ju_electricalPolarity_sp]);

  useEffect(() => {
    ca_incorrectsWires_desc_Ref.current.value = ca_incorrectsWires_desc;
  }, [ca_incorrectsWires_desc]);
  useEffect(() => {
    ca_incorrectsWires_sp_Ref.current.value = ca_incorrectsWires_sp;
  }, [ca_incorrectsWires_sp]);

  useEffect(() => {
    ca_stickerFlaws_desc_Ref.current.value = ca_stickerFlaws_desc;
  }, [ca_stickerFlaws_desc]);
  useEffect(() => {
    ca_stickerFlaws_sp_Ref.current.value = ca_stickerFlaws_sp;
  }, [ca_stickerFlaws_sp]);

  useEffect(() => {
    ca_shortThin_desc_Ref.current.value = ca_shortThin_desc;
  }, [ca_shortThin_desc]);
  useEffect(() => {
    ca_shortThin_sp_Ref.current.value = ca_shortThin_sp;
  }, [ca_shortThin_sp]);

  useEffect(() => {
    fr_damaged_desc_Ref.current.value = fr_damaged_desc;
  }, [fr_damaged_desc]);
  useEffect(() => {
    fr_damaged_sp_Ref.current.value = fr_damaged_sp;
  }, [fr_damaged_sp]);

  useEffect(() => {
    fr_sealingFailure_desc_Ref.current.value = fr_sealingFailure_desc;
  }, [fr_sealingFailure_desc]);
  useEffect(() => {
    fr_sealingFailure_sp_Ref.current.value = fr_sealingFailure_sp;
  }, [fr_sealingFailure_sp]);

  useEffect(() => {
    fo_broken_desc_Ref.current.value = fo_broken_desc;
  }, [fo_broken_desc]);
  useEffect(() => {
    fo_broken_sp_Ref.current.value = fo_broken_sp;
  }, [fo_broken_sp]);

  useEffect(() => {
    fo_scratches_desc_Ref.current.value = fo_scratches_desc;
  }, [fo_scratches_desc]);
  useEffect(() => {
    fo_scratches_sp_Ref.current.value = fo_scratches_sp;
  }, [fo_scratches_sp]);

  useEffect(() => {
    so_delamination_desc_Ref.current.value = so_delamination_desc;
  }, [so_delamination_desc]);
  useEffect(() => {
    so_delamination_sp_Ref.current.value = so_delamination_sp;
  }, [so_delamination_sp]);

  useEffect(() => {
    so_snailTrail_desc_Ref.current.value = so_snailTrail_desc;
  }, [so_snailTrail_desc]);
  useEffect(() => {
    so_snailTrail_sp_Ref.current.value = so_snailTrail_sp;
  }, [so_snailTrail_sp]);

  useEffect(() => {
    so_microcracks_desc_Ref.current.value = so_microcracks_desc;
  }, [so_microcracks_desc]);
  useEffect(() => {
    so_microcracks_sp_Ref.current.value = so_microcracks_sp;
  }, [so_microcracks_sp]);

  useEffect(() => {
    so_darkening_desc_Ref.current.value = so_darkening_desc;
  }, [so_darkening_desc]);
  useEffect(() => {
    so_darkening_sp_Ref.current.value = so_darkening_sp;
  }, [so_darkening_sp]);

  useEffect(() => {
    fe_absent_desc_Ref.current.value = fe_absent_desc;
  }, [fe_absent_desc]);
  useEffect(() => {
    fe_absent_sp_Ref.current.value = fe_absent_sp;
  }, [fe_absent_sp]);

  useEffect(() => {
    fe_broken_desc_Ref.current.value = fe_broken_desc;
  }, [fe_broken_desc]);
  useEffect(() => {
    fe_broken_sp_Ref.current.value = fe_broken_sp;
  }, [fe_broken_sp]);

  useEffect(() => {
    fe_loose_desc_Ref.current.value = fe_loose_desc;
  }, [fe_loose_desc]);
  useEffect(() => {
    fe_loose_sp_Ref.current.value = fe_loose_sp;
  }, [fe_loose_sp]);

  useEffect(() => {
    cm_noImages_desc_Ref.current.value = cm_noImages_desc;
  }, [cm_noImages_desc]);
  useEffect(() => {
    cm_noImages_sp_Ref.current.value = cm_noImages_sp;
  }, [cm_noImages_sp]);

  useEffect(() => {
    gr_bush_desc_Ref.current.value = gr_bush_desc;
  }, [gr_bush_desc]);
  useEffect(() => {
    gr_bush_sp_Ref.current.value = gr_bush_sp;
  }, [gr_bush_sp]);

  useEffect(() => {
    gr_erosions_desc_Ref.current.value = gr_erosions_desc;
  }, [gr_erosions_desc]);
  useEffect(() => {
    gr_erosions_sp_Ref.current.value = gr_erosions_sp;
  }, [gr_erosions_sp]);

  useEffect(() => {
    gr_holes_desc_Ref.current.value = gr_holes_desc;
  }, [gr_holes_desc]);
  useEffect(() => {
    gr_holes_sp_Ref.current.value = gr_holes_sp;
  }, [gr_holes_sp]);

  useEffect(() => {
    in_noConnections_desc_Ref.current.value = in_noConnections_desc;
  }, [in_noConnections_desc]);
  useEffect(() => {
    in_noConnections_sp_Ref.current.value = in_noConnections_sp;
  }, [in_noConnections_sp]);
  useEffect(() => {
    iv_num_serie_Ref.current.value = iv_num_serie;
  }, [iv_num_serie]);

  if (!checklist) return null;

  if (checklist) {
    return (
      <>
        <Title>CHECKLIST 1 - Ensaios Visuais dos Painéis Fotovoltaicos</Title>
        <div className="wrapper">
          <div className="h-1 bd-color title-header">Componente</div>
          <div className="h-2 bd-color title-header">Não Conformidade</div>
          <div className="h-3 bd-color title-header">
            Não Conformidade Presente
            <div className="wrapper-son">
              <div className="h-4 bd-color">Não</div>
              <div className="h-5 bd-color">Sim</div>
              <div className="h-6 bd-color">Se sim, avalie</div>
              <div className="h-7 bd-color">Problema de Segurança</div>
            </div>
          </div>
          {/* /* Etiquetagem - Ausente  */}
          <div className="b-1-1 bd-color space">Etiquetagem</div>
          <div className="b-1-2 bd-color space">Ausente</div>
          <div className="b-1-3 ">
            <div className="wrapper-son">
              <div className="b-1-4-1 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="ausente"
                  value={'false'}
                  onChange={(e) => {
                    setLa_absent(e.target.value);
                  }}
                  defaultChecked={!la_absent}
                />
              </div>
              <div className="b-1-4-2 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  value={'true'}
                  name="ausente"
                  onChange={(e) => {
                    setLa_absent(e.target.value);
                  }}
                  defaultChecked={la_absent}
                />
              </div>
              <div className="b-1-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setLa_absent_desc(e.target.value)}
                  type="text"
                  value={la_absent_desc}
                  ref={la_absent_desc_Ref}
                />
              </div>
              <div className="b-1-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setLa_absent_sp(e.target.value)}
                  type="text"
                  placeholder="Digite aqui"
                  value={la_absent_sp}
                  ref={la_absent_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* /* Etiquetagem - Fixação Incorreta  */}
          <div className="b-2-1 bd-color"></div>
          <div className="b-2-2 bd-color space">Fixação Incorreta</div>
          <div className="b-2-3">
            <div className="wrapper-son">
              <div className="b-2-4-1 bd-color-2">
                <input
                  onChange={(e) => setLa_incorrectfixing(false)}
                  className="inpt"
                  type="radio"
                  name="fix-incorreta"
                  value={'false'}
                  defaultChecked={!la_incorrectfixing}
                />
              </div>
              <div className="b-2-4-2 bd-color-2">
                <input
                  onChange={(e) => setLa_incorrectfixing(true)}
                  className="inpt"
                  type="radio"
                  name="fix-incorreta"
                  value={'true'}
                  defaultChecked={la_incorrectfixing}
                />
              </div>
              <div className="b-2-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className={'text-area'}
                  onChange={(e) => setLa_incorrectfixing_desc(e.target.value)}
                  type="text"
                  placeholder="Digite aqui"
                  value={la_incorrectfixing_desc}
                  ref={la_incorrectfixing_desc_Ref}
                />
              </div>
              <div className="b-2-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className={'text-area'}
                  onChange={(e) => setLa_incorrectfixing_sp(e.target.value)}
                  type="text"
                  placeholder="Digite aqui"
                  value={la_incorrectfixing_sp}
                  ref={la_incorrectfixing_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* /*Etiquetagem Falta de Informação  */}
          <div className="b-3-1 bd-color"></div>
          <div className="b-3-2 bd-color space">Falta de Informação</div>
          <div className="b-3-3">
            <div className="wrapper-son">
              <div className="b-3-4-1 bd-color-2">
                <input
                  onChange={(e) => setLa_lackOfInformation(false)}
                  className="inpt"
                  type="radio"
                  name="falta-informacao"
                  value={'false'}
                  defaultChecked={!la_lackOfInformation}
                />
              </div>
              <div className="b-3-4-2 bd-color-2">
                <input
                  onChange={(e) => setLa_lackOfInformation(true)}
                  className="inpt"
                  type="radio"
                  name="falta-informacao"
                  value={'true'}
                  defaultChecked={la_lackOfInformation}
                />
              </div>
              <div className="b-3-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setLa_lackOfInformation_desc(e.target.value)}
                  type="text"
                  placeholder="Digite aqui"
                  value={la_lackOfInformation_desc}
                  ref={la_lackOfInformation_desc_Ref}
                />
              </div>
              <div className="b-3-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setLa_lackOfInformation_sp(e.target.value)}
                  type="text"
                  placeholder="Digite aqui"
                  value={la_lackOfInformation_sp}
                  ref={la_lackOfInformation_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Backsheet -  Delamina */}
          <div className="b-4-1 bd-color space">Backsheet</div>
          <div className="b-4-2 bd-color space">Delaminação</div>
          <div className="b-4-3">
            <div className="wrapper-son">
              <div className="b-4-4-1 bd-color-2">
                <input
                  onChange={(e) => setBa_delamination(false)}
                  className="inpt"
                  type="radio"
                  name="delaminacao"
                  value={'false'}
                  defaultChecked={!ba_delamination}
                />
              </div>
              <div className="b-4-4-2 bd-color-2">
                <input
                  onChange={(e) => setBa_delamination(true)}
                  className="inpt"
                  type="radio"
                  name="delaminacao"
                  value={'true'}
                  defaultChecked={ba_delamination}
                />
              </div>
              <div className="b-4-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  className="text-area"
                  maxLength={60}
                  onChange={(e) => setBa_delamination_desc(e.target.value)}
                  type="text"
                  placeholder="Digite aqui"
                  value={ba_delamination_desc}
                  ref={ba_delamination_desc_Ref}
                />
              </div>
              <div className="b-4-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  className="text-area"
                  maxLength={60}
                  onChange={(e) => setBa_delamination_sp(e.target.value)}
                  type="text"
                  placeholder="Digite aqui"
                  value={ba_delamination_sp}
                  ref={ba_delamination_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Caixa de Junção - Falha de conexões elétri */}
          <div className="b-5-1 bd-color space">Caixa de Junção</div>
          <div className="b-5-2 bd-color space">
            Falha de conexões elétricas
          </div>
          <div className="b-5-3">
            <div className="wrapper-son">
              <div className="b-5-4-1 bd-color-2">
                <input
                  onChange={(e) => setJu_electConFailure(e.target.value)}
                  className="inpt"
                  type="radio"
                  value={'false'}
                  name="falha-conexoes"
                  defaultChecked={!ju_electConFailure}
                />
              </div>
              <div className="b-5-4-2 bd-color-2">
                <input
                  onChange={(e) => setJu_electConFailure(e.target.value)}
                  className="inpt"
                  type="radio"
                  value={'true'}
                  name="falha-conexoes"
                  defaultChecked={ju_electConFailure}
                />
              </div>
              <div className="b-5-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setJu_electConFailure_desc(e.target.value)}
                  type="text"
                  placeholder="Digite aqui"
                  value={ju_electConFailure_desc}
                  ref={ju_electConFailure_desc_Ref}
                />
              </div>
              <div className="b-5-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setJu_electConFailure_sp(e.target.value)}
                  type="text"
                  placeholder="Digite aqui"
                  value={ju_electConFailure_sp}
                  ref={ju_electConFailure_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Caixa de Junção - Falha de conexões elétri */}
          <div className="b-6-1 bd-color"></div>
          <div className="b-6-2 bd-color space">
            Rachaduras / quebras / falhas na carcaça
          </div>
          <div className="b-6-3">
            <div className="wrapper-son">
              <div className="b-6-4-1 bd-color-2">
                <input
                  onChange={(e) => setJu_brokenPieces(e.target.value)}
                  className="inpt"
                  type="radio"
                  value={'false'}
                  name="quebrado"
                  defaultChecked={!ju_brokenPieces}
                />
              </div>
              <div className="b-6-4-2 bd-color-2">
                <input
                  onChange={(e) => setJu_brokenPieces(e.target.value)}
                  className="inpt"
                  type="radio"
                  value={'true'}
                  name="quebrado"
                  defaultChecked={ju_brokenPieces}
                />
              </div>
              <div className="b-6-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setJu_brokenPieces_desc(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={ju_brokenPieces_desc}
                  ref={ju_brokenPieces_desc_Ref}
                />
              </div>
              <div className="b-6-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setJu_brokenPieces_sp(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={ju_brokenPieces_sp}
                  ref={ju_brokenPieces_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Caixa de Junção - Falha no veda */}
          <div className="b-7-1 bd-color"></div>
          <div className="b-7-2 bd-color space">Falha no vedador</div>
          <div className="b-7-3">
            <div className="wrapper-son">
              <div className="b-7-4-1 bd-color-2">
                <input
                  onChange={(e) => setJu_sealingFailure(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="falha-carcaca"
                  value={'false'}
                  defaultChecked={!ju_sealingFailure}
                />
              </div>
              <div className="b-7-4-2 bd-color-2">
                <input
                  onChange={(e) => setJu_sealingFailure(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="falha-carcaca"
                  value={'true'}
                  defaultChecked={ju_sealingFailure}
                />
              </div>
              <div className="b-7-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setJu_sealingFailure_desc(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={ju_sealingFailure_desc}
                  ref={ju_sealingFailure_desc_Ref}
                />
              </div>
              <div className="b-7-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setJu_sealingFailure_sp(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={ju_sealingFailure_sp}
                  ref={ju_sealingFailure_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Caixa de Junção - Polaridade elétrica não indic */}
          <div className="b-8-1 bd-color"></div>
          <div className="b-8-2 bd-color space">
            Polaridade elétrica não indicada
          </div>
          <div className="b-8-3">
            <div className="wrapper-son">
              <div className="b-8-4-1 bd-color-2">
                <input
                  onChange={(e) => setJu_electricalPolarity(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="polaridade-eletrica"
                  value={'false'}
                  defaultChecked={!ju_electricalPolarity}
                />
              </div>
              <div className="b-8-4-2 bd-color-2">
                <input
                  onChange={(e) => setJu_electricalPolarity(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="polaridade-eletrica"
                  value={'true'}
                  defaultChecked={ju_electricalPolarity}
                />
              </div>
              <div className="b-8-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) =>
                    setJu_electricalPolarity_desc(e.target.value)
                  }
                  type="text"
                  placeholder={'Digite aqui'}
                  value={ju_electricalPolarity_desc}
                  ref={ju_electricalPolarity_desc_Ref}
                />
              </div>
              <div className="b-8-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setJu_electricalPolarity_sp(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={ju_electricalPolarity_sp}
                  ref={ju_electricalPolarity_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Cabeamento - Fio(s) ausente (s) ou mal conect */}
          <div className="b-9-1 bd-color space">Cabeamento</div>
          <div className="b-9-2 bd-color space">
            Fio(s) ausente (s) ou mal conectado
          </div>
          <div className="b-9-3">
            <div className="wrapper-son">
              <div className="b-9-4-1 bd-color-2">
                <input
                  onChange={(e) => setCa_incorrectsWires(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="fios-ausentes"
                  value={'false'}
                  defaultChecked={!ca_incorrectsWires}
                />
              </div>
              <div className="b-9-4-2 bd-color-2">
                <input
                  onChange={(e) => setCa_incorrectsWires(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="fios-ausentes"
                  value={'true'}
                  defaultChecked={ca_incorrectsWires}
                />
              </div>
              <div className="b-9-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setCa_incorrectsWires_desc(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={ca_incorrectsWires_desc}
                  ref={ca_incorrectsWires_desc_Ref}
                />
              </div>
              <div className="b-9-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setCa_incorrectsWires_sp(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={ca_incorrectsWires_sp}
                  ref={ca_incorrectsWires_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Cabeamento - Falha no adesivo / sela */}
          <div className="b-10-1 bd-color"></div>
          <div className="b-10-2 bd-color space">
            Falha no adesivo / selante
          </div>
          <div className="b-10-3">
            <div className="wrapper-son">
              <div className="b-10-4-1 bd-color-2">
                <input
                  onChange={(e) => setCa_stickerFlaws(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="falha-adesivo"
                  value={'false'}
                  defaultChecked={!ca_stickerFlaws}
                />
              </div>
              <div className="b-10-4-2 bd-color-2">
                <input
                  onChange={(e) => setCa_stickerFlaws(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="falha-adesivo"
                  value={'true'}
                  defaultChecked={ca_stickerFlaws}
                />
              </div>
              <div className="b-10-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setCa_stickerFlaws_desc(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={ca_stickerFlaws_desc}
                  ref={ca_stickerFlaws_desc_Ref}
                />
              </div>
              <div className="b-10-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setCa_stickerFlaws_sp(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={ca_stickerFlaws_sp}
                  ref={ca_stickerFlaws_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Cabeamento - Muito curto e / ou muito f */}
          <div className="b-11-1 bd-color"></div>
          <div className="b-11-2 bd-color space">
            Muito curto e / ou muito fino
          </div>
          <div className="b-11-3">
            <div className="wrapper-son">
              <div className="b-11-4-1 bd-color-2">
                <input
                  onChange={(e) => setCa_shortThin(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="curto-fino"
                  value={'false'}
                  defaultChecked={!ca_shortThin}
                />
              </div>
              <div className="b-11-4-2 bd-color-2">
                <input
                  onChange={(e) => setCa_shortThin(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="curto-fino"
                  value={'true'}
                  defaultChecked={ca_shortThin}
                />
              </div>
              <div className="b-11-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setCa_shortThin_desc(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={ca_shortThin_desc}
                  ref={ca_shortThin_desc_Ref}
                />
              </div>
              <div className="b-11-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setCa_shortThin_sp(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={ca_shortThin_sp}
                  ref={ca_shortThin_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Frame - Danific */}
          <div className="b-12-1 bd-color space">Frame</div>
          <div className="b-12-2 bd-color space">Danificado</div>
          <div className="b-12-3">
            <div className="wrapper-son">
              <div className="b-12-4-1 bd-color-2">
                <input
                  onChange={(e) => setFr_damaged(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="frame-danificado"
                  value={'false'}
                  defaultChecked={!fr_damaged}
                />
              </div>
              <div className="b-12-4-2 bd-color-2">
                <input
                  onChange={(e) => setFr_damaged(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="frame-danificado"
                  value={'true'}
                  defaultChecked={fr_damaged}
                />
              </div>
              <div className="b-12-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setFr_damaged_desc(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={fr_damaged_desc}
                  ref={fr_damaged_desc_Ref}
                />
              </div>
              <div className="b-12-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setFr_damaged_sp(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={fr_damaged_sp}
                  ref={fr_damaged_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Frame - Falha no adesivo / sela */}
          <div className="b-13-1 bd-color"></div>
          <div className="b-13-2 bd-color space">
            Falha no adesivo / selante
          </div>
          <div className="b-13-3">
            <div className="wrapper-son">
              <div className="b-13-4-1 bd-color-2">
                <input
                  onChange={(e) => setFr_sealingFailure(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="frame-adesivo"
                  value={'false'}
                  defaultChecked={!fr_sealingFailure}
                />
              </div>
              <div className="b-13-4-2 bd-color-2">
                <input
                  onChange={(e) => setFr_sealingFailure(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="frame-adesivo"
                  value={'true'}
                  defaultChecked={fr_sealingFailure}
                />
              </div>
              <div className="b-13-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setFr_sealingFailure_desc(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={fr_sealingFailure_desc}
                  ref={fr_sealingFailure_desc_Ref}
                />
              </div>
              <div className="b-13-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setFr_sealingFailure_sp(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={fr_sealingFailure_sp}
                  ref={fr_sealingFailure_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Vidro Frontal - Quebrado */}
          <div className="b-14-1 bd-color space">Vidro Frontal</div>
          <div className="b-14-2 bd-color space">Quebrado</div>
          <div className="b-14-3">
            <div className="wrapper-son">
              <div className="b-14-4-1 bd-color-2">
                <input
                  onChange={(e) => setFo_broken(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="frame-quebrado"
                  value={'false'}
                  defaultChecked={!fo_broken}
                />
              </div>
              <div className="b-14-4-2 bd-color-2">
                <input
                  onChange={(e) => setFo_broken(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="frame-quebrado"
                  value={'true'}
                  defaultChecked={fo_broken}
                />
              </div>
              <div className="b-14-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setFo_broken_desc(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={fo_broken_desc}
                  ref={fo_broken_desc_Ref}
                />
              </div>
              <div className="b-14-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setFo_broken_sp(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={fo_broken_sp}
                  ref={fo_broken_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Vidro Frontal - Arranhões */}
          <div className="b-15-1 bd-color space"></div>
          <div className="b-15-2 bd-color space">Arranhões</div>
          <div className="b-15-3">
            <div className="wrapper-son">
              <div className="b-15-4-1 bd-color-2">
                <input
                  onChange={(e) => setFo_scratches(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="frame-arranhado"
                  value={'false'}
                  defaultChecked={!fo_scratches}
                />
              </div>
              <div className="b-15-4-2 bd-color-2">
                <input
                  onChange={(e) => setFo_scratches(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="frame-arranhado"
                  value={'true'}
                  defaultChecked={fo_scratches}
                />
              </div>
              <div className="b-15-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setFo_scratches_desc(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={fo_scratches_desc}
                  ref={fo_scratches_desc_Ref}
                />
              </div>
              <div className="b-15-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setFo_scratches_sp(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={fo_scratches_sp}
                  ref={fo_scratches_sp_Ref}
                />
              </div>
            </div>
          </div>

          {/* Células Solares - Delaminação */}
          <div className="b-16-1 bd-color space">Células Solares</div>
          <div className="b-16-2 bd-color space">Delaminação</div>
          <div className="b-16-3">
            <div className="wrapper-son">
              <div className="b-16-4-1 bd-color-2">
                <input
                  onChange={(e) => setSo_delamination(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="celulas-delaminacao"
                  value={'false'}
                  defaultChecked={!so_delamination}
                />
              </div>
              <div className="b-16-4-2 bd-color-2">
                <input
                  onChange={(e) => setSo_delamination(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="celulas-delaminacao"
                  value={'true'}
                  defaultChecked={so_delamination}
                />
              </div>
              <div className="b-16-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setSo_delamination_desc(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={so_delamination_desc}
                  ref={so_delamination_desc_Ref}
                />
              </div>
              <div className="b-16-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setSo_delamination_sp(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={so_delamination_sp}
                  ref={so_delamination_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Células Solares - Trilha do caracol */}
          <div className="b-17-1 bd-color"></div>
          <div className="b-17-2 bd-color space">Trilha do caracol</div>
          <div className="b-17-3">
            <div className="wrapper-son">
              <div className="b-17-4-1 bd-color-2">
                <input
                  onChange={(e) => setSo_snailTrail(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="celulas-trilha"
                  value={'false'}
                  defaultChecked={!so_snailTrail}
                />
              </div>
              <div className="b-17-4-2 bd-color-2">
                <input
                  onChange={(e) => setSo_snailTrail(e.target.value)}
                  className="inpt"
                  type="radio"
                  value={'true'}
                  name="celulas-trilha"
                  defaultChecked={so_snailTrail}
                />
              </div>
              <div className="b-17-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setSo_snailTrail_desc(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={so_snailTrail_desc}
                  ref={so_snailTrail_desc_Ref}
                />
              </div>
              <div className="b-17-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setSo_snailTrail_sp(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={so_snailTrail_sp}
                  ref={so_snailTrail_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Células Solares - Microfissuras */}
          <div className="b-18-1 bd-color"></div>
          <div className="b-18-2 bd-color space">Microfissuras</div>
          <div className="b-18-3">
            <div className="wrapper-son">
              <div className="b-18-4-1 bd-color-2">
                <input
                  onChange={(e) => setSo_microcracks(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="celulas-microfissuras"
                  value={'false'}
                  defaultChecked={!so_microcracks}
                />
              </div>
              <div className="b-18-4-2 bd-color-2">
                <input
                  onChange={(e) => setSo_microcracks(e.target.value)}
                  className="inpt"
                  type="radio"
                  value={'true'}
                  name="celulas-microfissuras"
                  defaultChecked={so_microcracks}
                />
              </div>
              <div className="b-18-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setSo_microcracks_desc(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={so_microcracks_desc}
                  ref={so_microcracks_desc_Ref}
                />
              </div>
              <div className="b-18-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setSo_microcracks_sp(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={so_microcracks_sp}
                  ref={so_microcracks_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Células Solares - Amarelecimento ou escurecime */}
          <div className="b-19-1 bd-color"></div>
          <div className="b-19-2 bd-color space">
            Amarelecimento ou escurecimento
          </div>
          <div className="b-19-3">
            <div className="wrapper-son">
              <div className="b-19-4-1 bd-color-2">
                <input
                  onChange={(e) => setSo_darkening(e.target.value)}
                  className="inpt"
                  type="radio"
                  name="celulas-escurecimento"
                  value={'false'}
                  defaultChecked={!so_darkening}
                />
              </div>
              <div className="b-19-4-2 bd-color-2">
                <input
                  onChange={(e) => setSo_darkening(e.target.value)}
                  className="inpt"
                  type="radio"
                  value={true}
                  name="celulas-escurecimento"
                  defaultChecked={so_darkening}
                />
              </div>
              <div className="b-19-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setSo_darkening_desc(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={so_darkening_desc}
                  ref={so_darkening_desc_Ref}
                />
              </div>
              <div className="b-19-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  onChange={(e) => setSo_darkening_sp(e.target.value)}
                  type="text"
                  placeholder={'Digite aqui'}
                  value={so_darkening_sp}
                  ref={so_darkening_sp_Ref}
                />
              </div>
            </div>
          </div>
        </div>

        <Title>CHECKLIST 2 - Ensaios Visuais do perímetro da planta</Title>

        <div className="wrapper">
          <div className="h-1 bd-color title-header">Componente</div>
          <div className="h-2 bd-color title-header">Não Conformidade</div>
          <div className="h-3 bd-color title-header">
            Não Conformidade Presente
            <div className="wrapper-son">
              <div className="h-4 bd-color">Não</div>
              <div className="h-5 bd-color">Sim</div>
              <div className="h-6 bd-color">Se sim, avalie</div>
              <div className="h-7 bd-color">Problema de Segurança</div>
            </div>
          </div>

          {/* /* Cerca - Ausente  */}
          <div className="b-1-1 bd-color space">Cerca</div>
          <div className="b-1-2 bd-color space">Ausente</div>
          <div className="b-1-3">
            <div className="wrapper-son">
              <div className="b-1-4-1 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="etiquetagem-ausente"
                  value={false}
                  onChange={(e) => setFe_absent(e.target.value)}
                  defaultChecked={!fe_absent}
                />
              </div>
              <div className="b-1-4-2 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="etiquetagem-ausente"
                  value={true}
                  onChange={(e) => setFe_absent(e.target.value)}
                  defaultChecked={fe_absent}
                />
              </div>
              <div className="b-1-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  type="text"
                  placeholder={'Digite aqui'}
                  onChange={(e) => setFe_absent_desc(e.target.value)}
                  value={fe_absent_desc}
                  ref={fe_absent_desc_Ref}
                />
              </div>
              <div className="b-1-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  type="text"
                  placeholder={'Digite aqui'}
                  onChange={(e) => setFe_absent_sp(e.target.value)}
                  value={fe_absent_sp}
                  ref={fe_absent_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* /* Cerca - quebrada  */}
          <div className="b-2-1 bd-color"></div>
          <div className="b-2-2 bd-color space">Quebrada</div>
          <div className="b-2-3">
            <div className="wrapper-son">
              <div className="b-2-4-1 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="cerca-quebrada"
                  value={'false'}
                  onChange={(e) => setFe_broken(e.target.value)}
                  defaultChecked={!fe_broken}
                />
              </div>
              <div className="b-2-4-2 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="cerca-quebrada"
                  value={'true'}
                  onChange={(e) => setFe_broken(e.target.value)}
                  defaultChecked={fe_broken}
                />
              </div>
              <div className="b-2-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  type="text"
                  placeholder={'Digite aqui'}
                  onChange={(e) => setFe_broken_desc(e.target.value)}
                  value={fe_broken_desc}
                  ref={fe_broken_desc_Ref}
                />
              </div>
              <div className="b-2-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  type="text"
                  placeholder={'Digite aqui'}
                  onChange={(e) => setFe_broken_sp(e.target.value)}
                  value={fe_broken_sp}
                  ref={fe_broken_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* /*Cerca - frouxa  */}
          <div className="b-3-1 bd-color"></div>
          <div className="b-3-2 bd-color space">Frouxa</div>
          <div className="b-3-3">
            <div className="wrapper-son">
              <div className="b-3-4-1 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="cerca-frouxa"
                  value={'false'}
                  onChange={(e) => setFe_loose(e.target.value)}
                  defaultChecked={!fe_loose}
                />
              </div>
              <div className="b-3-4-2 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="cerca-frouxa"
                  value={'true'}
                  onChange={(e) => setFe_loose(e.target.value)}
                  defaultChecked={fe_loose}
                />
              </div>
              <div className="b-3-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  type="text"
                  placeholder={'Digite aqui'}
                  onChange={(e) => setFe_loose_desc(e.target.value)}
                  value={fe_loose_desc}
                  ref={fe_loose_desc_Ref}
                />
              </div>
              <div className="b-3-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  type="text"
                  placeholder={'Digite aqui'}
                  onChange={(e) => setFe_loose_sp(e.target.value)}
                  value={fe_loose_sp}
                  ref={fe_loose_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Câmeras -  Sem imagem */}
          <div className="b-4-1 bd-color space">Câmeras</div>
          <div className="b-4-2 bd-color space">Sem imagem</div>
          <div className="b-4-3">
            <div className="wrapper-son">
              <div className="b-4-4-1 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="camera-imagem"
                  value={false}
                  onChange={(e) => setCm_noImages(e.target.value)}
                  defaultChecked={!cm_noImages}
                />
              </div>
              <div className="b-4-4-2 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="camera-imagem"
                  value={true}
                  onChange={(e) => setCm_noImages(e.target.value)}
                  defaultChecked={cm_noImages}
                />
              </div>
              <div className="b-4-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  type="text"
                  placeholder={'Digite aqui'}
                  onChange={(e) => setCm_noImages_desc(e.target.value)}
                  value={cm_noImages_desc}
                  ref={cm_noImages_desc_Ref}
                />
              </div>
              <div className="b-4-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  type="text"
                  placeholder={'Digite aqui'}
                  onChange={(e) => setCm_noImages_sp(e.target.value)}
                  value={cm_noImages_sp}
                  ref={cm_noImages_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Solo - Matos */}
          <div className="b-5-1 bd-color space">Solo</div>
          <div className="b-5-2 bd-color space">Matos</div>
          <div className="b-5-3 ">
            <div className="wrapper-son">
              <div className="b-5-4-1 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="solo-mato"
                  value={false}
                  onChange={(e) => setGr_bush(e.target.value)}
                  defaultChecked={!gr_bush}
                />
              </div>
              <div className="b-5-4-2 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="solo-mato"
                  value={true}
                  onChange={(e) => setGr_bush(e.target.value)}
                  defaultChecked={gr_bush}
                />
              </div>
              <div className="b-5-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  type="text"
                  placeholder={'Digite aqui'}
                  onChange={(e) => setGr_bush_desc(e.target.value)}
                  value={gr_bush_desc}
                  ref={gr_bush_desc_Ref}
                />
              </div>
              <div className="b-5-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  type="text"
                  placeholder={'Digite aqui'}
                  onChange={(e) => setGr_bush_sp(e.target.value)}
                  value={gr_bush_sp}
                  ref={gr_bush_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Caixa de Junção - Erosão */}
          <div className="b-6-1 bd-color"></div>
          <div className="b-6-2 bd-color space">Erosões</div>
          <div className="b-6-3">
            <div className="wrapper-son">
              <div className="b-6-4-1 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="solo-erosoes"
                  onChange={(e) => setGr_erosions(e.target.value)}
                  value={false}
                  defaultChecked={!gr_erosions}
                />
              </div>
              <div className="b-6-4-2 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="solo-erosoes"
                  value={true}
                  onChange={(e) => setGr_erosions(e.target.value)}
                  defaultChecked={gr_erosions}
                />
              </div>
              <div className="b-6-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  type="text"
                  placeholder={'Digite aqui'}
                  onChange={(e) => setGr_erosions_desc(e.target.value)}
                  value={gr_erosions_desc}
                  ref={gr_erosions_desc_Ref}
                />
              </div>
              <div className="b-6-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  type="text"
                  placeholder={'Digite aqui'}
                  onChange={(e) => setGr_erosions_sp(e.target.value)}
                  value={gr_erosions_sp}
                  ref={gr_erosions_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Caixa de Junção - Buraco */}
          <div className="b-7-1 bd-color"></div>
          <div className="b-7-2 bd-color space">Buracos</div>
          <div className="b-7-3">
            <div className="wrapper-son">
              <div className="b-7-4-1 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="solo-buraco"
                  value={false}
                  onChange={(e) => setGr_holes(e.target.value)}
                  defaultChecked={!gr_holes}
                />
              </div>
              <div className="b-7-4-2 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="solo-buraco"
                  value={true}
                  onChange={(e) => setGr_holes(e.target.value)}
                  defaultChecked={gr_holes}
                />
              </div>
              <div className="b-7-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  type="text"
                  placeholder={'Digite aqui'}
                  onChange={(e) => setGr_holes_desc(e.target.value)}
                  value={gr_holes_desc}
                  ref={gr_holes_desc_Ref}
                />
              </div>
              <div className="b-7-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  type="text"
                  placeholder={'Digite aqui'}
                  onChange={(e) => setGr_holes_sp(e.target.value)}
                  value={gr_holes_sp}
                  ref={gr_holes_sp_Ref}
                />
              </div>
            </div>
          </div>
          {/* Internet - Sem conexão */}
          <div className="b-8-1 bd-color space">Internet</div>
          <div className="b-8-2 bd-color space">Sem conexão</div>
          <div className="b-8-3">
            <div className="wrapper-son">
              <div className="b-8-4-1 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="internet-conexao"
                  value={false}
                  onChange={(e) => setIn_noConnections(e.target.value)}
                  defaultChecked={!in_noConnections}
                />
              </div>
              <div className="b-8-4-2 bd-color-2">
                <input
                  className="inpt"
                  type="radio"
                  name="internet-conexao"
                  value={true}
                  onChange={(e) => setIn_noConnections(e.target.value)}
                  defaultChecked={in_noConnections}
                />
              </div>
              <div className="b-8-4-3 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  type="text"
                  placeholder={'Digite aqui'}
                  onChange={(e) => setIn_noConnections_desc(e.target.value)}
                  value={in_noConnections_desc}
                  ref={in_noConnections_desc_Ref}
                />
              </div>
              <div className="b-8-4-4 bd-color-2">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={60}
                  className="text-area"
                  type="text"
                  placeholder={'Digite aqui'}
                  onChange={(e) => setIn_noConnections_sp(e.target.value)}
                  value={in_noConnections_sp}
                  ref={in_noConnections_sp_Ref}
                />
              </div>
            </div>
          </div>
        </div>
        <Title>CHECKLIST 3 - Ensaios Visuais dos Inversores</Title>
        <div className="wrapper-checklist3">
          <div className="check-h-1 title-header bd-color space">
            {' '}
            INVERSOR SOLIS
          </div>
          <div className="check-h-2 title-header bd-color space"> INV. 1</div>
          <div className="check-b-1-1 bd-color space">No Série</div>
          <div className="check-b-1-2 bd-color space">
            <input
              className="inpt-text"
              type="text"
              placeholder={'Digite aqui'}
              name="texto"
              id="texto"
              width={'100%'}
              onChange={(e) => setIv_num_serie(e.target.value)}
              value={iv_num_serie}
              ref={iv_num_serie_Ref}
            />
          </div>
          <div className="check-b-2-1 bd-color space">Inspeção Visual</div>
          <div className="check-b-2-2 bd-color space">
            <select
              name="inspecao-audio"
              className={'inpt-select'}
              onChange={(e) => setIv_visual_inspection(e.target.value)}
            >
              <option value={'true'} selected={iv_visual_inspection}>
                Conforme
              </option>
              <option value={'false'} selected={!iv_visual_inspection}>
                Não Conforme
              </option>
            </select>
          </div>
          <div className="check-b-3-1 bd-color space">Inspeção Áudio</div>
          <div className="check-b-3-2 bd-color space">
            <select
              name="inspecao-audio"
              className={'inpt-select'}
              onChange={(e) => setIv_audio_inspection(e.target.value)}
            >
              <option value={'true'} selected={iv_audio_inspection}>
                Conforme
              </option>
              <option value={'false'} selected={!iv_audio_inspection}>
                Não Conforme
              </option>
            </select>
          </div>
          <div className="check-b-4-1 bd-color space">Etiquetagem Idt</div>
          <div className="check-b-4-2 bd-color space">
            <select
              name="etiquetagem-idt"
              className={'inpt-select'}
              onChange={(e) => setIv_labeling_Idt(e.target.value)}
            >
              <option value={'true'} selected={iv_labeling_Idt}>
                Conforme
              </option>
              <option value={'false'} selected={!iv_labeling_Idt}>
                Não Conforme
              </option>
            </select>
          </div>
          <div className="check-b-5-1 bd-color space">
            Inspeção Termográfica Inversores
          </div>
          <div className="check-b-5-2 bd-color space">
            <select
              name="insp-eletrica"
              className={'inpt-select'}
              onChange={(e) => setIv_eletrical_inspection(e.target.value)}
            >
              <option value={'true'} selected={iv_eletrical_inspection}>
                Conforme
              </option>
              <option value={'false'} selected={!iv_eletrical_inspection}>
                Não Conforme
              </option>
            </select>
          </div>
          <div className="check-b-6-1 bd-color space">
            Inspeção Mont. Elétrica
          </div>
          <div className="check-b-6-2 bd-color space">
            <select
              name="insp-eletrica"
              className={'inpt-select'}
              onChange={(e) => setIv_eletrical_inspection(e.target.value)}
            >
              <option value={'true'} selected={iv_eletrical_inspection}>
                Conforme
              </option>
              <option value={'false'} selected={!iv_eletrical_inspection}>
                Não Conforme
              </option>
            </select>
          </div>
          <div className="check-b-7-1 bd-color space">Alarmes</div>
          <div className="check-b-7-2 bd-color space">
            <select
              name="insp-eletrica"
              className={'inpt-select'}
              onChange={(e) => setIv_alarm(e.target.value)}
            >
              <option value={'true'} selected={iv_alarm}>
                YES
              </option>
              <option value={'false'} selected={!iv_alarm}>
                NO
              </option>
            </select>
          </div>
          <div className="check-b-8-1 bd-color space">Eventos</div>
          <div className="check-b-8-2 bd-color space">
            <select
              name="eventos"
              className={'inpt-select'}
              onChange={(e) => setIv_events(e.target.value)}
            >
              <option value={'true'} selected={iv_events}>
                YES
              </option>
              <option value={'false'} selected={!iv_events}>
                NO
              </option>
            </select>
          </div>
          <div className="check-b-9-1 bd-color space">Aterramento Carcaça</div>
          <div className="check-b-9-2 bd-color space">
            <select
              name="aterramento-carcaca"
              className={'inpt-select'}
              onChange={(e) => setIv_grounding(e.target.value)}
            >
              <option value={'true'} selected={iv_grounding}>
                YES
              </option>
              <option value={'false'} selected={!iv_grounding}>
                NO
              </option>
            </select>
          </div>
        </div>
        <Button variant="success" onClick={(e) => handleUpdate(e)}>
          Salvar
        </Button>
      </>
    );
  }
};
