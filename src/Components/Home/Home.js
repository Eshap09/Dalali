import React, { useState } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Carousel from 'react-bootstrap/Carousel'

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div class="home">
        <div class="home__heading">
          <Navbar />
          <div class="home__btns">
            <div class="xxx">
            <button type="button" class="btn btn-success mx-2 xxx" onClick={handleShow}>
              List Your Property
            </button>

            </div>
            
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Vendor's Detail</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <div class="row mb-3">
                    <label for="Name" class="col-sm-2 col-form-label">
                      Name
                    </label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="Name" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="Mobile No." class="col-sm-2 col-form-label">
                      Mobile No.
                    </label>
                    <div class="col-sm-5">
                      <input
                        type="number"
                        class="form-control"
                        id="Mobile No."
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label
                      for="Alternate Mobile No."
                      class="col-sm-2 col-form-label"
                    >
                      Alternate Mobile No.
                    </label>
                    <div class="col-sm-5">
                      <input
                        type="number"
                        class="form-control"
                        id="Alternate Mobile No."
                      />
                    </div>
                  </div>
                  <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                    <div class="col-sm-10 radio-btm">
                      <div class="form-check mx-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios1"
                          value="option1"
                          checked
                        />
                        <label class="form-check-label" for="gridRadios1">
                          Hostel
                        </label>
                      </div>
                      <div class="form-check mx-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios2"
                          value="option2"
                        />
                        <label class="form-check-label" for="gridRadios2">
                          PG/Flat
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div class="row mb-3">
                    <label for="room" class="col-sm-2 col-form-label">
                      No. of room in building
                    </label>
                    <div class="col-sm-5">
                      <input type="number" class="form-control" id="rooms" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="aadhar" class="col-sm-2 col-form-label">
                      Aadhar No.
                    </label>
                    <div class="col-sm-5">
                      <input type="number" class="form-control" id="aadhar" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="Address" class="col-sm-2 col-form-label">
                      Address of the property
                    </label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="Address" />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="formFileMultiple" class="form-label">
                      Photos and videos of property
                    </label>
                    <input
                      class="form-control"
                      type="file"
                      id="formFileMultiple"
                      multiple
                    />
                  </div>

                  {/* 
                  <button type="submit" class="btn btn-primary d-flex">
                    Submit
                  </button> */}
                  <div class="s_btn container">
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Submit
                    </Button>
                  </div>
                </form>
              </Modal.Body>
            </Modal>
            <Link to="/signup">
            <button type="button" class="btn btn-warning mx-2">
              SignUp
            </button>
            </Link>
            <Link to="/login">
            <button type="button" class="btn btn-warning mx-2">
              Login
            </button>
            </Link>
          </div>
        </div>
        <div class="home__carousel">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-90 xx"
                src="https://c0.wallpaperflare.com/preview/664/1019/721/apartment-bed-bedroom-chair.jpg"
                alt="First slide"
              />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-90 xx"
                src="https://www.jagrutidesigns.com/media/cache/bedroom-interior-designers-pune6_1200x800.jpg"
                alt="Second slide"
              />

              {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-90 xx"
                src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="Third slide"
              />

              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;
