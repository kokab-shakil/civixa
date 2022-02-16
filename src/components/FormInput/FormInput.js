import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./FormInput.css";
import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
const axios = require("axios");
export const FormInput = () => {
  const history = useHistory();
  const [form, setForm] = React.useState({ name: '', email: '',sub: '',mobile:'' , phone: '', msg: '' , });
  

  const setActive = (el, active) => {
    const formField = el.parentNode.parentNode;
    if (active) {
      formField.classList.add("form-field--is-active");
    } else {
      formField.classList.remove("form-field--is-active");
      el.value === ""
        ? formField.classList.remove("form-field--is-filled")
        : formField.classList.add("form-field--is-filled");
    }
  };[].forEach.call(
    document.querySelectorAll(".form-field__input, .form-field__textarea"),
    (el) => {
      el.onblur = () => {
        setActive(el, false);
      };
      el.onfocus = () => {
        setActive(el, true);
      };
    }
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ name: form.name, email: form.email, sub: form.sub, mobile: form.mobile, phone: form.phone, msg: form.msg })
    // let email = form.email
    axios
		.post("https://civixa-backened.herokuapp.com/contact",{ name: form.name, email: form.email, sub: form.sub, mobile: form.mobile, phone: form.phone, msg: form.msg })
      .then(function (response) {
        setForm({name: '', email: '',sub: '',mobile:'' , phone: '', msg: '' , })
        history.push("/");
        // window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
	

  }
  return (
    <form novalidate onSubmit={handleSubmit}>
      <div class="row jhkj">
        <div class="col-sm">
          <div class="form-field">
            <div class="form-field__control">
              <label for="name" class="form-field__label">
                Name
              </label>
              <input id="name" type="text" value={form.name}  onChange={(e)=>setForm({...form, name : e.target.value })} class="form-field__input" />
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="form-field">
            <div class="form-field__control">
              <label for="email" class="form-field__label">
                Email
              </label>
              <input id="email" type="email"  value={form.email}  onChange={(e)=>setForm({...form, email : e.target.value })} class="form-field__input" />
            </div>
          </div>
        </div>
      </div>
      <div class="row ">
        <div class="col-sm">
          <div class="form-field">
            <div class="form-field__control">
              <label for="subject" class="form-field__label">
                Subject
              </label>
              <input id="subject" type="text"  value={form.sub}  onChange={(e)=>setForm({...form, sub : e.target.value })} class="form-field__input" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <div class="form-field">
            <div class="form-field__control">
              <label for="mobile" class="form-field__label">
                Mobile
              </label>
              <input id="mobile" type="text"  value={form.mobile}  onChange={(e)=>setForm({...form, mobile : e.target.value })}  class="form-field__input" />
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="form-field">
            <div class="form-field__control">
              <label for="phone" class="form-field__label">
                Phone
              </label>
              <input id="phone" type="text"  value={form.phone}  onChange={(e)=>setForm({...form, phone : e.target.value })} class="form-field__input" />
            </div>
          </div>
        </div>
      </div>
      {/* <div class="row">
        <div class="col-sm">
          <div class="form-field">
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input checkbox"
                id="exampleCheck1"
              />
              <label class="form-check-label pl-2" for="exampleCheck1">
                Are you a registered company?
              </label>
            </div>
          </div>
        </div>
      </div> */}
      <div class="row">
        <div class="col-sm">
          <div class="form-field">
            <div class="form-field__control">
              <label for="message" class="form-field__label">
                Message
              </label>
              <textarea id="message" value={form.msg}  onChange={(e)=>setForm({...form, msg: e.target.value })} class="form-field__textarea"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm d-grid gap-2 text-center">
        <Button variant='green' type='submit' className="customButton w-100 form-button text-prussian-blue text-uppercase font-weight-900"> Submit</Button>

        </div>
         {/* <CustomButton
            btnClasses=" form-button text-prussian-blue"
            btnText="Submit"
            btnColor="green"
            // btnSize="fill"
          /> */}
      </div>
    </form>
  );
};
