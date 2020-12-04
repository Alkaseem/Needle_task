import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="Personal-card">
      <div className="Form-title">
        <span className="span1">1.</span>
        <span>Personal Information</span>
      </div>
      <div className="Form-inputs">
        <div className="text-title">Upload your profile picture</div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="inputPassword2" class="sr-only">
                Image
              </label>
              <input
                type="text"
                class="form-control"
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
              <label id="Lable" for="file">
                <i class="far fa-image"></i>
                Add image
              </label>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputCity">First Name</label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                placeholder="Khalifa"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputCity">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                placeholder="Ofenyi"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputZip">Other Name</label>
              <input
                type="text"
                class="form-control"
                id="inputZip"
                placeholder="Alkaseem"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputState">Gender</label>
              <select id="inputState" class="form-control">
                <option selected>Male</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div class="form-group col-md-8">
              <label for="inputCity">Address</label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                placeholder="18 Hughes road, Idiroko Estate, Lagos"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Lagos</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Kano</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">LGA</label>
              <select id="inputState" class="form-control">
                <option selected>Surelere</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">Marital Status</label>
              <select id="inputState" class="form-control">
                <option selected>Single</option>
                <option>Single</option>
                <option>Married</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputCity">Date of Birth</label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                placeholder="02/12/1995"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputCity">Phone</label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                placeholder="+234 8117283293"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputZip">Type of disablity</label>
              <input
                type="text"
                class="form-control"
                id="inputZip"
                placeholder="Nil"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-success">
            Save & Continue
          </button>
          <span id="Cancel" onClick="">
            Cancel
          </span>
        </form>
        {/* <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only">
              Passwordssss
            </label>
            <input
              type="text"
              class="form-control"
              id="inputPassword2"
              placeholder="Click to add image"
            />
          </div>
          <button type="submit" class="btn btn-success mb-2">
            Add Image
          </button>
          <div class="row">
            <div class="col-7">
              <input type="text" class="form-control" placeholder="City" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="State" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Zip" />
            </div>
          </div>
          <i class="far fa-image"></i>
        </form> */}
      </div>
    </div>
  );
}

export default Form;
