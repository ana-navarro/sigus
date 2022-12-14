import React from 'react';

import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import { Li } from '../styled.style';

export const TableInst = (props) => {
  const { data } = props;

  const navigate = useNavigate();

  if (data) {
    return (
      <Accordion>
        {data.map((item, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>
              Instalação: {item.numberInstallation}
            </Accordion.Header>
            <Accordion.Body style={{ display: 'flex' }}>
              <ul>
                <Li onClick={() => navigate(`checklists/${item._id}`)}>
                  Listar Checklists
                </Li>
                <Li onClick={() => navigate(`checklists/add/${item._id}`)}>
                  Adicionar Checklists
                </Li>
                {/* <Li
                  onClick={() => navigate(`alarms/${item.numberInstallation}`)}
                >
                  Ver Alarmes
                </Li> */}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  } else {
    <p>Nenhum POP adicionado</p>;
  }
};
