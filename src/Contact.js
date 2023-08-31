import React from 'react';
import ReactDOM from 'react-dom/client';

const Contact = () => {
    return (<div className='contact-conteiner'>
        <div>
        <h1>Contact us</h1>
        <div className='contactuss'>
        <div className='names'>
        <label for="firstname"><b></b></label>
        <input className="namescu" type="text" placeholder="Firstname" name="firstname" required/>
        <label for="lastname"><b></b></label>
        <input className="lastcu" type="text" placeholder="Lastname" name="lastname" required/>
        </div>
        <div className='phoneandadress'>
        <label for="phone"><b></b></label>
        <input className="phonecu" type="tel" placeholder="Phone" name="phonenumber" required/>
        <label for="adress"><b></b></label>
        <input className='adresscu' type="text" placeholder="Adress" name="adress" required/>
        </div>
        <div className='emailcontact'>
            <label for="email"><b></b></label>
            <input className='emailw' type="text" placeholder="Email" name="email" required/>
        </div>
        <div className='message'>
        <textarea className='msg' id="message" name="message" rows="4" cols="50"></textarea>
        </div>
        <div>
        <button className='buttons'>Submit</button>
        </div>
    </div>
    </div>
    </div>);
};

export default Contact;