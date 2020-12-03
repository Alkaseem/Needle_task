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
              <div className="col">
                <button type="submit" class="btn btn-success mb-2">
                  Add Image
                </button>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
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
