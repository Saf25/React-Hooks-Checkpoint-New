import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export const AddMovie = ({ getData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({});
  const handleInput = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData({ ...newMovie, id: uuidv4() });
    handleClose();
  };

  return (
    <div id="addBtnContainer">
      <Modal show={show} onHide={handleClose} animation={false}>
        <div id="modalBody">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="movieName"
              placeholder="Movie title"
              onChange={handleInput}
            />
            <br />
            <input
              type="text"
              name="movieImg"
              placeholder="Movie image"
              onChange={handleInput}
            />
            <br />
            <input
              type="text"
              name="movieRating"
              placeholder="Movie rating"
              onChange={handleInput}
            />
            <br />
            <button type="submit" onClick={handleSubmit}>
              Add movie
            </button>
            <br />
          </form>
        </div>
      </Modal>
      <Button id="addBtn" onClick={handleShow}>
        Add your favourite movie ... Click below
        <img
          style={{ maxWidth: "200px" }}
          src="https://cdn-icons-png.flaticon.com/512/114/114888.png"
        />
      </Button>
    </div>
  );
};
