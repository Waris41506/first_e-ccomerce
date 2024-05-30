import React from 'react';
import style from "./Contact.module.css"

const Contact = () => {
    return ( 
        <div className={style.contanier}>
            <div className={style.right}>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Subject' />
                <textarea name="msg" id="msg" cols="30" rows="15" placeholder='Say Somthing!'></textarea>
                <button>Submit</button>
                <h3>Nice to hear from you 🥰</h3>
            </div>
            <div className={style.left}>
                <div className={style["contact-text"]}>
                <h2>Our Contact Information</h2>
                <p>Fill the form or contact us via other channels listed below</p>
                <br />
                <h4>+234 805 108 5595</h4>
                <h4>Support@classickingstore.com</h4>
                <h4>Ibadan Nigeria</h4>
                </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507365.3245583991!2d3.0037633095566476!3d6.547977480168733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1665708397426!5m2!1sen!2sng" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
     );
}
 
export default Contact;