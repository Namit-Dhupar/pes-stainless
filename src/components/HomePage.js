import React, {Fragment} from 'react';
import Carousel from './UI/Carousel/Carousel';
import ClientCarousel from './UI/Carousel/CarouselClient'
import {Grid, Button} from '@material-ui/core';
import '../styles/homepage.scss';

const HomePage = () => {
    return (
          <Fragment >
            <Carousel/>
            <Grid container>
            <Grid item lg={6} xs={12}>      
            <h1>About Us</h1>
            <h3>PES STAINLESS EQUIPMENTS PRIVATE LIMITED</h3>
              <p></p>
              <p><strong>Pes Stainless Equipment Pvt. Ltd.</strong> is involved in <strong>Service Provider, Manufacturer, Wholesaler, Distributor and Supplier</strong> their product business of
               <strong>Valves , Other, Pumps Pumping Equipment , Ball Valves and Heat Exchangers</strong> and related products for more than 10 years . Our Organization, established in 2011, Which 
                is a Well-known name in our business category. The Organization listed its broad range of products on Make In India Trade</p>
                </Grid>
                <Grid item lg={6} xs={12}>   
                <img className="AboutImage" src="/Images/home.jpg" alt="Pump Sample" />
                </Grid>
                </Grid>
                <br />
                <div className="heading">
                <h1>OUR CLIENTS</h1>
                <p className="title">We are providing our products and services to some of the very esteemed clients in 
                the industry who are satisfied with our products and after sales service. Here are the few:</p>
                <Grid container>
                  <Grid item xs={12}>
                <ClientCarousel />
                </Grid>
                </Grid>
               </div>
               <br />
               <div className="Download">
                 <br />
                 <h2>CREATE OWN BUSINESS WITH OUR IDEAS</h2>
                 <br />
                 <a style={{textDecoration:'none'}} href='/Catalogue.PDF' download='PES Brochure'>
                <Button variant="contained" size="large" style={{backgroundColor:"#1F487C", color:"#ffffff", marginBottom:"2%"}}>
                 Download PES Product Brochure
                 </Button></a>
               </div>
            </Fragment>   
    )
}

export default HomePage