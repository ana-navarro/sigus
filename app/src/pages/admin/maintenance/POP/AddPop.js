import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddPop = () => {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(e) {
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append('file', file, file.name);
    console.log(dataForm);
    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/api/pops/add/',
        dataForm,
      );
      console.log(response);
      toast.success('POP adicionado com sucesso');
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  }

  function inputFile(e) {
    if (e.type === 'application/pdf' || e.type === 'application/msword') {
      setFile(e);
    } else {
      alert('Arquivo não suportado!');
      setFile(null);
      handleClose();
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Adicionar POP
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar POP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="post" onSubmit={(e) => handleSubmit(e)}>
            <input
              type={'file'}
              accept="application/pdf, .pdf, application/msword, .docx"
              onChange={(item) => inputFile(item.target.files[0])}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              handleSubmit(e);
              handleClose();
            }}
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
