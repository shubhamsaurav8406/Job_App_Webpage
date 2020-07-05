import React, { Component } from "react";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = (formerrors) => {
  let valid = true;

  Object.values(formerrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

export default class JobApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      line1: null,
      line2: null,
      city: null,
      state: null,
      zipcode: null,
      country: null,
      phoneNumber: null,
      companyName: null,
      jobTitle: null,
      currentCompanyExperience: null,
      totalExperience: null,
      formerrors: {
        firstname: "",
        lastname: "",
        email: "",
        line1: "",
        line2: "",
        city: "",
        state: "",
        country: "",
        zipcode: "",
        phoneNumber: "",
        companyName: "",
        jobTitle: "",
        currentCompanyExperience: "",
        totalExperience: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state.formerrors)) {
      console.log(
        `
            --SUBMITTING--
            First Name: ` +
          this.state.firstname +
          "\n" +
          `
            Last Name: ` +
          this.state.lastname +
          "\n" +
          `
            email: ` +
          this.state.email +
          "\n" +
          `
            addressLine1: ` +
          this.state.line1 +
          "\n" +
          `
          addressLine2: ` +
          this.state.line2 +
          "\n" +
          `
            city: ` +
          this.state.city +
          "\n" +
          `
            state: ` +
          this.state.state +
          "\n" +
          `
            zipcode: ` +
          this.state.zipcode +
          "\n" +
          `
            Phone Number: ` +
          this.state.phoneNumber +
          "\n" +
          `
            company name: ` +
          this.state.companyName +
          "\n" +
          `
            job title: ` +
          this.state.jobTitle +
          "\n" +
          `
            Current Company Experience: ` +
          this.state.currentCompanyExperience +
          "\n" +
          `
            Total Experience: ` +
          this.state.totalExperience
      );
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formerrors = this.state.formerrors;

    switch (name) {
      case "firstname":
        formerrors.firstname =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "lastname":
        formerrors.lastname =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "email":
        formerrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "line1":
        formerrors.line1 =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "line2":
        formerrors.line2 =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "state":
        formerrors.state =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "city":
        formerrors.city =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "zipcode":
        formerrors.zipcode =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "companyName":
        formerrors.companyName =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "jobTitle":
        formerrors.jobTitle =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "phoneNumber":
        formerrors.phoneNumber =
          value.length < 10 ? "minimum 10 characters required" : "";
        break;
      case "currentCompanyExperience":
        formerrors.currentCompanyExperience =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "totalExperience":
        formerrors.totalExperience =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      default:
        break;
    }

    // this.setState({ formerrors, [name]: value }, () => console.log(this.state));
    this.setState({ formerrors, [name]: value });
  };

  render() {
    const { formerrors } = this.state;
    return (
      <>
        <div className="container">
          <form className="form" onSubmit={this.handleSubmit}>
            <h1>Job Application Form</h1>
            <h3>Personal Information</h3>

            <div className="personal-info">
              <div className="firstname">
                <label htmlFor="firstname">First Name: </label>

                <input
                  type="text"
                  className=""
                  name="firstname"
                  placeholder="firstname"
                  formNoValidate
                  onChange={this.handleChange}
                />
                {formerrors.firstname.length > 0 && (
                  <span className="errorMessage">{formerrors.firstname}</span>
                )}
              </div>
              <div className="lastname">
                <label htmlFor="lastname">Last Name: </label>
                <input
                  type="text"
                  className=""
                  name="lastname"
                  placeholder="lastname"
                  formNoValidate
                  onChange={this.handleChange}
                />
                {formerrors.lastname.length > 0 && (
                  <span className="errorMessage">{formerrors.lastname}</span>
                )}
              </div>

              <div className="email">
                <label htmlFor="email">Email: </label>
                <input
                  type="text"
                  className=""
                  name="email"
                  placeholder="user@example.com"
                  formNoValidate
                  onChange={this.handleChange}
                />
                {formerrors.email.length > 0 && (
                  <span className="errorMessage">{formerrors.email}</span>
                )}
              </div>
              <div className="education">
                <label htmlFor="education">Education: </label>
                <select name="education" id="education">
                  <option value="selecteducation">select degree</option>
                  <option value="btech">B.Tech.</option>
                  <option value="mtech">M.Tech</option>
                  <option value="mba">MBA</option>
                  <option value="phd">P.H.D</option>
                </select>
              </div>
              <div className="resume">
                <label htmlFor="resume">Resume: </label>
                <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename" />
                </form>
              </div>

              <div className="address">
                <label htmlFor="address">Address: </label>
                <input
                  type="text"
                  className="line1"
                  name="line1"
                  placeholder="line1"
                  formNoValidate
                  onChange={this.handleChange}
                />
                {formerrors.line1.length > 0 && (
                  <span className="errorMessage">{formerrors.line1}</span>
                )}

                <input
                  type="text"
                  className="line2"
                  name="line2"
                  placeholder="line2"
                  formNoValidate
                  onChange={this.handleChange}
                />
                {formerrors.line2.length > 0 && (
                  <span className="errorMessage">{formerrors.line2}</span>
                )}
                <select name="country" id="education">
                  <option value="btech">Select a Country</option>
                  <option value="india">India</option>
                  <option value="israel">Israel</option>
                  <option value="russia">Russia</option>
                  <option value="usa">USA</option>
                  <option value="england">England</option>
                  <option value="russia">Russia</option>
                </select>
              </div>
              <div className="city">
                <input
                  type="text"
                  className=""
                  name="city"
                  placeholder="city"
                  formNoValidate
                  onChange={this.handleChange}
                />
                {formerrors.city.length > 0 && (
                  <span className="errorMessage">{formerrors.city}</span>
                )}
              </div>
              <div className="state">
                <input
                  type="text"
                  className=""
                  name="state"
                  placeholder="state"
                  onChange={this.handleChange}
                  formNoValidate
                />
                {formerrors.state.length > 0 && (
                  <span className="errorMessage">{formerrors.state}</span>
                )}
              </div>
              <div className="zipcode">
                <input
                  type="text"
                  className=""
                  name="zipcode"
                  placeholder="zipcode"
                  onChange={this.handleChange}
                  formNoValidate
                />
                {formerrors.zipcode.length > 0 && (
                  <span className="errorMessage">{formerrors.zipcode}</span>
                )}
              </div>

              <div id="phone">
                <input
                  type="text"
                  className=""
                  name="phoneNumber"
                  placeholder="phone number"
                  onChange={this.handleChange}
                  formNoValidate
                />
                {formerrors.phoneNumber.length > 0 && (
                  <span className="errorMessage">{formerrors.phoneNumber}</span>
                )}
              </div>
            </div>

            <div className="current-employment-details">
              <h3>Current Employment Details</h3>

              <div className="companyName">
                <label htmlFor="companyName">Company Name: </label>
                <input
                  type="text"
                  className=""
                  name="companyName"
                  placeholder="company name"
                  onChange={this.handleChange}
                  formNoValidate
                />
                {formerrors.companyName.length > 0 && (
                  <span className="errorMessage">{formerrors.companyName}</span>
                )}
              </div>
              <div className="jobTitle">
                <label htmlFor="jobTitle">Job Title: </label>
                <input
                  type="text"
                  className=""
                  name="jobTitle"
                  placeholder="job title"
                  onChange={this.handleChange}
                  formNoValidate
                />
                {formerrors.jobTitle.length > 0 && (
                  <span className="errorMessage">{formerrors.jobTitle}</span>
                )}
              </div>
              <div className="currentCompanyExperience">
                <label htmlFor="currentCompanyExperience">
                  Current Company Experience:{" "}
                </label>
                <input
                  type="text"
                  className=""
                  name="currentCompanyExperience"
                  placeholder="current company experience"
                  onChange={this.handleChange}
                  formNoValidate
                />
                {formerrors.currentCompanyExperience.length > 0 && (
                  <span className="errorMessage">
                    {formerrors.currentCompanyExperience}
                  </span>
                )}
              </div>
              <div className="totalExperience">
                <label htmlFor="email">Total Experience: </label>
                <input
                  type="text"
                  className=""
                  name="totalExperience"
                  placeholder="total experience"
                  onChange={this.handleChange}
                  formNoValidate
                />
                {formerrors.totalExperience.length > 0 && (
                  <span className="errorMessage">
                    {formerrors.totalExperience}
                  </span>
                )}
              </div>
              <div className="submit">
                <input type="submit" />
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
