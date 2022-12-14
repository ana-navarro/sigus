import React from 'react';

import { useNavigate } from 'react-router-dom';
import {
  Title,
  Card,
  Block,
  Text,
  IconInst,
  IconPop,
  IconAlarm,
} from './styled.style';

export const Maintenance = () => {
  const navigate = useNavigate();
  return (
    <>
      <Title>Manutenção</Title>
      <Block>
        <Card onClick={() => navigate('installations')}>
          <IconInst />
          <Text>Instalações</Text>
        </Card>
        <Card onClick={() => navigate('pop')}>
          <IconPop />
          <Text>POP's</Text>
        </Card>
        {/* <Card onClick={() => navigate('alarmSungrow')}>
          <IconAlarm />
          <Text>Alarmes Sungrow</Text>
        </Card> */}
      </Block>
    </>
  );
};
