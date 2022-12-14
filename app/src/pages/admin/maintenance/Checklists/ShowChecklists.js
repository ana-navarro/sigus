import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TableCheck } from './Components/TableCheck';

export const ShowChecklists = (props) => {
  const { idChecklist } = useParams();
  const [checklist, setChecklist] = useState();
  console.log(idChecklist);
  const getChecklist = async () => {
    try {
      const result = await axios.get(
        `http://127.0.0.1:5000/api/technical/checklist/${idChecklist}`,
      );
      console.log(result.data);
      setChecklist(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChecklist();
  }, []);

  if (checklist) {
    return (
      <div>
        <TableCheck data={checklist} />
      </div>
    );
  } else {
    return 'Nenhum Checklist adicionado';
  }
};
