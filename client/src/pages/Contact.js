import React from "react";
import { Layout } from "../UI/Layout";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import Mail from "../assets/Mail.png";
import Location from "../assets/Location.png";
import Phone from "../assets/Phone.png";

const Styles = styled.div`


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
    text-align : center;
    line-height: 4;
    
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

.Mail-1 {
    height: 50px;
    width: 50px;
}

.Email-2 {
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


.input[type=text], select, textarea {
    width: 70%;
    padding: 12px;
    border: 3px solid #ccc;
    border-radius: 20px;
    box-sizing: border-box;
    margin-bottom: 16px;
    resize: vertical;
    margin-left :80px;
  }

.container1 {
    text-align:center;
    float: right;
    margin-left : 40px;    
}

 label {
    padding: 20px 20px 20px 0;
    display: inline-block;
  }

.title1 {
    margin-left: 50px;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 90px;
 
}

.grid-container {
   display: grid;
   grid-template-columns 1fr 1fr;

}

}`;

const Contact = () => {
  return (
    <Layout>
      <Styles>
        <h1 className="text-3">Contact Us</h1>
        <p className="description ">
          If you have any questions please free to contact us.
        </p>

        <div className="grid-container">
          <div className="Contact-Description">
            <div className="Contact">
              <Image fluid src={Phone} className="Phone" />
              <p className="Phonenumber">213-432-3232</p>
            </div>
            <div className="Contact-1">
              <Image fluid src={Mail} className="Mail-1" />
              <p className="Email-2">fitforward@southernct.edu</p>
            </div>
            <div className="Contact-2">
              <Image fluid src={Location} className="Location" />
              <p className="Address">
                501 Crescent St, New Haven, CT 06515, United States
              </p>
            </div>
          </div>

          <div className="container1">
            <form>
              <div className="FirstName">
                <label for="fname">First Name </label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                ></input>
              </div>

              <div className="LastName">
                <label for="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                ></input>
              </div>

              <div className="Email">
                <label for="lname"> Email</label>
                <input
                  type="text"
                  id="Email"
                  placeholder="Enter your Email"
                ></input>
              </div>

              <div className="title1">
                <label for="subject">Subject</label>
              </div>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </Styles>
    </Layout>
  );
};

export default Contact;
