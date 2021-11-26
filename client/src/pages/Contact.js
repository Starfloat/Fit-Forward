import React from "react";
import { Layout } from "../UI/Layout";
import styled from "styled-components";
import { Jumbotron } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Mail from "../assets/Mail.png";
import Location from "../assets/Location.png";
import Phone from "../assets/Phone.png";
import Maps from "../assets/Maps.JPG"

const Styles = styled.div`

background-image :

}
.jumbotron {
  /* color: white; */
  text-align: center;
  background-color: transparent;
  max-width: 100%;
  height: auto;
  padding-bottom: 0em;
}
.text-3 {
    text-align: center;
    max-width: 100%;
    height: auto;
    font-size :70px;
  }
  
  .description {
    text-align: center;
    max-width: 100%;
    height: auto;
    font-size : 20px;
  }

 .Contact-Description {

     margin-top: 6em;
    text-align : center;
    line-height: 5;
 }
.Phone {
    height: 50px;
    width: 50px;
}

.Phonenumber {
    display: inline-block;
    margin-left: 30px; 
    font-size:20px;
}

.Mail {
    height: 50px;
    width: 50px;
}

.Email {
    display: inline-block;
    margin-left: 30px; 
    font-size:20px;
}

.Location {
    height: 70px;
    width: 50px;
}

.Address {
    display: inline-block;
    margin-left: 30px; 
    font-size:20px;
}


}`;

const Contact = () => {
    return (
        <Layout>
            <Styles>
                <Jumbotron>
                        <h1 className = "text-3">Contact Us</h1>
                        <p className = "description ">If you have any questions please free to 
                        contact us.</p>
                        <div className = "Contact-Description">
                            <div className = "Contact">
                                <Image fluid src={Phone} className ="Phone"/>
                                <p className = "Phonenumber">213-432-3232</p>
                            </div>
                            <div className = "Contact-1">
                                <Image fluid src={Mail} className = "Mail"/>
                                <p className = "Email">fitforward@southernct.edu</p>
                            </div>
                            <div className = "Contact-2">
                                <Image fluid src={Location} className = "Location"/>
                                <p className = "Address">501 Crescent St, New Haven, CT 06515, United States</p>
                            </div>
                        </div>
                </Jumbotron>
            </Styles>
        </Layout>
    
       
    );

};


export default Contact;