import React from "react";
import "./Form.css";

function Form({ user }) {
  const {
    firstName,
    lastName,
    middleName,
    date_Of_Birth,
    gender,
    address,
    marital_Status,
    phoneNumber,
  } = user;
  return (
    <div className="Personal-card">
      <div className="Form-title">
        <span className="span1">1.</span>
        <span>Personal Information</span>
      </div>
      <div className="Form-inputs">
        <div className="text-title">Upload your profile picture</div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword2" className="sr-only">
                Image
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword2"
                placeholder="Click to add image"
              />
            </div>
            <div className="form-group col-md-4">
              <input
                type="file"
                className="Upload-file"
                id="file"
                accept="image/*"
              />
              <label id="Lable" htmlFor="file">
                <i className="far fa-image"></i>
                Add image
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputCity">First Name</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Khalifa"
                value={firstName}
                readOnly="readonly"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputCity">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Ofenyi"
                value={lastName}
                readOnly="readonly"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputZip">Other Name</label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                placeholder="Alkaseem"
                value={middleName}
                readOnly="readonly"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Gender</label>
              <select disabled id="inputState" className="form-control">
                <option value="" selected>
                  {gender}
                </option>
                {/* <option>Male</option>
                <option>Female</option> */}
              </select>
            </div>
            <div className="form-group col-md-8">
              <label htmlFor="inputCity">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="18 Hughes road, Idiroko Estate, Lagos"
                value={address}
                readOnly="readonly"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select id="inputState" className="form-control">
                <option selected>Lagos</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Kano</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">LGA</label>
              <select id="inputState" class="form-control">
                <option selected>Surelere</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Marital Status</label>
              <select id="inputState" className="form-control">
                <option selected>{marital_Status}</option>
                <option>Single</option>
                <option>Married</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputCity">Date of Birth</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="02/12/1995"
                value={date_Of_Birth}
                readOnly="readonly"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputCity">Phone</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="+234 8117283293"
                value={phoneNumber}
                readOnly="readonly"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputZip">Type of disablity</label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                placeholder="Nil"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success">
            Save & Continue
          </button>
          <span id="Cancel">Cancel</span>
        </form>
      </div>
    </div>
  );
}

export default Form;
