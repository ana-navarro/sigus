import styled from 'styled-components';
import {
  AiFillFileText,
  AiFillAlert,
  AiFillPushpin,
  AiOutlineCheck,
  AiFillFilePdf,
  AiFillEdit,
  AiFillDelete,
} from 'react-icons/ai';

import { Link } from 'react-router-dom';

export const Title = styled.h1`
  font-size: 25pt;
  font-family: arial, helvetica;
  font-weight: 100;
  color: #003a62;
  text-align: center;
  margin: 20px 0 30px 0px;

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 5px;
    background: #003a62;
    margin: 5px auto auto auto;
  }
`;

export const IconInst = styled(AiFillPushpin)`
  width: 50%;
  height: 50%;
  margin: auto;
`;

export const IconPop = styled(AiFillFileText)`
  width: 50%;
  height: 50%;
  margin: auto;
`;

export const IconAlarm = styled(AiFillAlert)`
  width: 50%;
  height: 50%;
  margin: auto;
`;

export const Text = styled.h2`
  font-size: 1.5em;
  text-align: center;
`;

export const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-basis: 20px;
`;

export const Card = styled.div`
  color: #003a62;
  width: 300px;
  height: 120px;
  padding: 10px;
  border-radius: 20px;
  background: linear-gradient(to right, #4facfe, #00f2fe);
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export const CardComp = styled.table`
  color: #003a62;
  width: 200px;
  /* height: 120px; */
  padding: 10px;
  border-radius: 20px;
  background: linear-gradient(to right, #4facfe, #00f2fe);
  margin-bottom: 30px;
`;

export const Row = styled.tr`
  &:hover {
    cursor: pointer;
  }
`;

export const CardInst = styled.div`
  display: inline-block;
  box-shadow: 0px 2px 2px #333;
  width: 150px;
  height: 50px;
  border-radius: 15px;
  background: #6552ad;
  color: #fff;
  text-align: center;
  margin: 10px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    background: #8177d1;
  }
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 10px rgba(200, 200, 200, 0.5);
`;

export const IconChecklist = styled(AiOutlineCheck)`
  width: 50px;
  height: 50px;
  display: block;
  margin: auto;
  background: rgba(200, 200, 200, 0.5);
  border-radius: 50%;
`;

export const Li = styled.li`
  padding: 10px 0;

  &:hover {
    cursor: pointer;
    color: blue;
  }
`;

export const IconDelete = styled(AiFillDelete)`
  width: 40px;
  height: 40px;
  color: #5c5c5c;

  &:hover {
    cursor: pointer;
    color: #3c3c3c;
  }
`;

export const IconOpen = styled(AiFillFilePdf)`
  width: 40px;
  height: 40px;
  color: #3c3c3c;

  &:hover {
    cursor: pointer;
    color: #5c5c5c;
  }
`;

export const IconEdit = styled(AiFillEdit)`
  width: 40px;
  height: 40px;
  color: #5c5c5c;

  &:hover {
    cursor: pointer;
    color: #3c3c3c;
  }
`;

export const Td = styled.td`
  color: #5c5c5c;
  &:hover {
    cursor: pointer;
    color: #3c3c3c;
  }
`;
