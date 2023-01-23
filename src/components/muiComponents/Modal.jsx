import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./modal.css"
import { Link } from 'react-router-dom';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    height: '100vh',
    bgcolor: 'rgba(255, 255, 255, 0.233)',
    backdropFilter: "blur(10px)",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,


};

export default function BasicModal({ modalOpen, handleModalClose }) {



    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2"
                        style={{
                            color: "white",
                            padding: "20px",
                            fontSize: "30px",
                            marginTop:"50px"
                        }}
                    >
                        Event Location
                    </Typography>



                    <a className='getLocationBtn' href="https://goo.gl/maps/gcqwSDAa8ks625e66">Get Exact Location</a>

                    <a style={{marginLeft:"20px"}} onClick={handleModalClose}>Back</a>

                    <div className="location">
                        <div className='map-wrapper'
                            dangerouslySetInnerHTML={{
                                __html: `
                        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1134.9538253369353!2d88.07833956273545!3d26.5632761597283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1674470231626!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        ` }}

                        />
                       
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
