import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { TableEditChecklist } from './Components/TableEditChecklist';

export const EditChecklist = () => {
  const { idChecklist } = useParams();
  const [checklist, setChecklist] = useState();

  const getChecklist = async () => {
    try {
      const result = await axios.get(
        `http://127.0.0.1:5000/api/technical/checklist/${idChecklist}`,
      );
      setChecklist(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChecklist();
  }, []);

  if (!checklist) return 'Aguardando dados';

  return <TableEditChecklist checklist={checklist} />;
};
