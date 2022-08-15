import React, { useState } from 'react'

const Contact = () => {

  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  // console.warn("data.fullname");

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is  ${data.fullname}. 
      My mobile number is ${data.phone}.
      and email is ${data.email}.
      Here is what I want to say ${data.msg}
      `);
  };

  return (
    <>

      <h2 className='text-center'>
        Contact US
      </h2>

      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>

              <div className="mb-3">
                <label for="exampleFormControlInput1"
                  className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name='fullname'
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1"
                  className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name='phone'
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your Mobile number"
                />

                <div className="mb-3">
                  <label for="exampleFormControlTextarea1"
                    className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name='email'
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="example@gmail.com"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlTextarea1"
                    className="form-label">
                    Message
                  </label>
                  <textarea className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name='msg'
                    value={data.msg}
                    onChange={InputEvent}
                  >
                  </textarea>
                </div>

                <div class="col-12">
                  <button class="btn btn-outline-primary" type="submit">
                    Submit
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact
