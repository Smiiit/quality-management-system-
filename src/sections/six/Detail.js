import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';

export default function Details() {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/'); // Assuming './sections/two/view' is the correct path to your destination component
  // };
  return (
    <div>
      <Box
        sx={{
          mt: 2,
          mx:2,
          width: 1,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.20),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        <section >
          <div className="container my-auto py-3">

            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      src="/assets/icons/navbar/smit-image.jpg"
                      // src="/assets/icons/navbar/krishna-image.jpg"
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: '150px' }}
                    />
                    <h5 className="my-3"> Mr. Smit K Panchal</h5>
                    <p className="text-muted mb-1">Full Stack Developer</p>
                    <p className="text-muted mb-1">Anand, Gujarat, IN</p>
                    <p className="text-muted mb-4"> <b>Asst. Supervisor, TEPL </b> </p>
                    <div className="d-flex justify-content-center mb-2">
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-primary"
                      >
                        Edit
                      </button>
                      {/* <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-outline-primary ms-1"
                      >
                        Allow
                      </button> */}
                    </div>
                  </div>
                </div>

                
                <div className="card mb-4 mb-lg-0">
                  <div className="card-body p-0">
                    <ul className="list-group list-group-flush rounded-3">
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fas fa-globe fa-lg text-warning" />
                        <a href='https://in.linkedin.com/in/smit-panchal-404857268' className="mb-0">LinkedIn</a>
                      </li>

                      <li className="list-group-item d-flex justify-content-between   p-3">
                        {/* <i className="fab fa-github fa-lg" style={{ color: '#333333' }} /> */}
                        <a href='https://github.com/smitkp03' className="mb-0 text-center">GitHub</a>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }} />
                        <a href='https://instagram.com/s.m.i.tt' className="mb-0">www.skpanchal.in</a>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">Smit Krushnakant Panchal</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">skpanchal@gmail.com</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Phone</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">(+91) 942-819-2357</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Mobile</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">(+91) 988-765-4321</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">Anand, Gujarat, IN</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card mb-4 mb-md-0">
                      <div className="card-body">
                        <p className="mb-4">
                          <span className="text-primary font-italic me-1">Status</span> Web App Dev <b>Interns</b>
                        </p>
                        <p className="mb-1" style={{ fontSize: '.77rem' }}>
                          Quality Manegement System
                        </p>
                        <div className="progress rounded" style={{ height: '5px' }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '80%' }}
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          Gate Pass Manegement Systdem
                        </p>
                        <div className="progress rounded" style={{ height: '5px' }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '72%' }}
                            aria-valuenow="72"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          Visitor Manegement System
                        </p>
                        <div className="progress rounded" style={{ height: '5px' }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '89%' }}
                            aria-valuenow="89"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          Cafeteria
                        </p>
                        <div className="progress rounded" style={{ height: '5px' }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '55%' }}
                            aria-valuenow="55"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          Project Manegement System
                        </p>
                        <div className="progress rounded mb-2" style={{ height: '5px' }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '66%' }}
                            aria-valuenow="66"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card mb-4 mb-md-0">
                      <div className="card-body">
                        <p className="mb-4">
                          <span className="text-primary font-italic me-1">Status</span> Company Tech
                        </p>
                        <p className="mb-1" style={{ fontSize: '.77rem' }}>
                          MHE
                        </p>
                        <div className="progress rounded" style={{ height: '5px' }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '80%' }}
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          HR
                        </p>
                        <div className="progress rounded" style={{ height: '5px' }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '77%' }}
                            aria-valuenow="72"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          TEPL
                        </p>
                        <div className="progress rounded" style={{ height: '5px' }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '89%' }}
                            aria-valuenow="89"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          Rolcon
                        </p>
                        <div className="progress rounded" style={{ height: '5px' }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '55%' }}
                            aria-valuenow="55"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          Sales Deparment
                        </p>
                        <div className="progress rounded mb-2" style={{ height: '5px' }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '66%' }}
                            aria-valuenow="66"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Box>
    </div>
  );
}



















// {/* <div className="d-flex flex-column w-auto justify-content-center align-item-center m-3 p-3">
//   <TextField required id="standard-required" label="Project Title" variant="standard" />
//   <TextField required id="standard-required" label="Project Name" variant="standard" />
//   <TextField
//     required
//     id="standard-required"
//     label="Project Description"
//     variant="standard"
//   />
//   <TextField required id="standard-required" label="Developer Name" variant="standard" />
//   <TextField required id="standard-required" label="Company Name" variant="standard" />
//   <TextField required id="standard-required" label="Mobile Number" variant="standard" />
//   <TextField required id="standard-required" label="DOB" variant="standard" />
//   <TextField required id="standard-required" label="Email" variant="standard" />
//   <TextField required id="standard-required" label="Required" variant="standard" />
//   <Button className="mt-2" variant="contained" color="success" onClick={handleClick}>
//     Submit !!
//   </Button>

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   Name: Smit Panchal <br /> <br />
//   Email: smitkpanchal03@gmail.com <br /> <br />
//   Password: demo1234 <br /> <br />
//   PhoneNumber: +40 777666555, <br /> <br />
//   Country: United States, <br /> <br />
//   Address: 90210 Broadway Blvd, <br /> <br />
//   State: California, <br /> <br />
//   City: San Francisco, <br /> <br />
//   ZipCode: 94116, <br /> <br />
//   About: Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.{' '}
//   <br /> <br />
//   Role: Admin
// </div> */}
