import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: '',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        })
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is ${data.fullname}. ${data.fullname} Mobile Number is ${data.phone}. ${data.fullname} E-mail is ${data.email}.
        ${data.fullname}. want to say ${data.msg}`);
    };

    return (
        <>
           <div className="my-5">
               <h1 className='text-center'>Contact us</h1>
           </div>

           <div className="container contact_div">
               <div className="row">
                   <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label htmlFor="FormControlInput1">Name</label>
                                <input
                                type="text"
                                className="form-control"
                                id="FormControlInput1"
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}
                                placeholder="Enter Your Name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="FormControlInput2">Phone</label>
                                <input
                                type="text"
                                className="form-control"
                                id="FormControlInput2"
                                name="phone"
                                value={data.phone}
                                onChange={InputEvent}
                                placeholder="Enter Your Mobile Number"
                                />
                            </div>
    
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput3">Email address</label>
                                <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput3"
                                name="email"
                                value={data.email}
                                onChange={InputEvent}
                                placeholder="name@example.com"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="FormControlTextarea1">Massage</label>
                                <textarea
                                className="form-control"
                                id="FormControlTextarea1"
                                rows={3}
                                defaultValue={""}
                                name="msg"
                                value={data.msg}
                                onChange={InputEvent}
                                />
                            </div>
                            <div className="col-12">
                                <button className="mt-2 btn btn-outline-primary" type="submit" >
                                    Submit Form                                    
                                </button>        
                            </div>
                        </form>
                   </div>
               </div>
           </div>
           
        </>
    );
};

export default Contact;
