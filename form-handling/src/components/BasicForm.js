import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: fNameValue,
    hasError: fNameHasError,
    isValid: fNameIsValid,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: resetFName,
  } = useInput((name) => {
    return name.trim() !== "";
  });
  const {
    value: lNameValue,
    hasError: lNameHasError,
    isValid: lNameIsValid,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: resetLName,
  } = useInput((name) => {
    return name.trim() !== "";
  });
  const {
    value: emailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((email) => {
    return email.includes("@");
  });
  let formIsValid = false;
  if (fNameIsValid && lNameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!emailIsValid) return;
    console.log(emailValue, fNameValue, lNameValue);
    resetFName();
    resetLName();
    resetEmail();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={`form-control ${fNameHasError && "invalid"}`}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
            value={fNameValue}
          />
          {fNameHasError && (
            <p className="error-text">First Name is required.</p>
          )}
        </div>
        <div className={`form-control ${lNameHasError && "invalid"}`}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
            value={lNameValue}
          />
          {lNameHasError && (
            <p className="error-text">Last Name is required.</p>
          )}
        </div>
      </div>
      <div className={`form-control ${emailHasError && "invalid"}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && <p className="error-text">Email is required.</p>}
      </div>
      <div className={`form-actions`}>
        <button className={formIsValid ? "" : "disabled"}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
