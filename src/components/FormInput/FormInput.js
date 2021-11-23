import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./FormInput.css";

export const FormInput = () => {
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
  };

  [].forEach.call(
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
  return (
    <form novalidate>
      <div class="row">
        <div class="col-sm">
          <div class="form-field">
            <div class="form-field__control">
              <label for="name" class="form-field__label">
                NAME
              </label>
              <input id="name" type="text" class="form-field__input" />
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="form-field">
            <div class="form-field__control">
              <label for="email" class="form-field__label">
                EMAIL
              </label>
              <input id="email" type="email" class="form-field__input" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <div class="form-field">
            <div class="form-field__control">
              <label for="subject" class="form-field__label">
                SUBJECT
              </label>
              <input id="subject" type="text" class="form-field__input" />
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
              <input id="mobile" type="text" class="form-field__input" />
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="form-field">
            <div class="form-field__control">
              <label for="phone" class="form-field__label">
                Phone
              </label>
              <input id="phone" type="text" class="form-field__input" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
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
      </div>
      <div class="row">
        <div class="col-sm">
          <div class="form-field">
            <div class="form-field__control">
              <label for="message" class="form-field__label">
                Message
              </label>
              <textarea id="message" class="form-field__textarea"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm text-center">
          <CustomButton
            btnClasses="btn-block form-button text-prussian-blue"
            btnText="Submit"
            btnColor="green"
            btnSize="lg"
          />
        </div>
      </div>
    </form>
  );
};
