import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import '../css/WhyChooseUs.css'
import destination from '../assets/img/Rectangle 23.png'
import hastleFree from '../assets/img/Rectangle 24.png'
import videoCall from '../assets/img/Rectangle 25.png'
import askQueries from '../assets/img/Rectangle 26.png'

export default function WhyChooseUs(){
    return(
     <Container fluid={'md'} varient={'dark'} id='why-choose-us'>
         <h1 className='text-center'><span class='orange' >Why Choose Us?</span></h1>
         <Row className=''>
             <Col className='d-flex flex-column align-items-center justify-content-center'>
                <img className='d-block' src={destination} alt='destination'></img>
                <p className='d-block'><span class='orange' >O</span>ne Destination For All Guidance</p>
             </Col>
             <Col className='d-flex flex-column align-items-center justify-content-center'>
                <img src={hastleFree} alt='hastle free'></img>
                <p><span class='orange' >H</span>assle Free</p>
             </Col>
             <Col className='d-flex flex-column align-items-center justify-content-center'>
                <img src={videoCall} alt='video call'></img>
                <p><span class='orange' >V</span>ideo Call Professionals</p>
             </Col>
             <Col className='d-flex flex-column align-items-center justify-content-center'>
                <img src={askQueries} alt='ask queries'></img>
                <p><span class='orange' >A</span>sk Your Queries</p>
             </Col>
         </Row>
         <a href='#'><span class='orange' >S</span>peak <span class='orange' >T</span>o <span class='orange' >U</span>s</a>
     </Container>
        
    )
}