const validate = (values: any) => {
  const errors: any = {};

  if (!values.firstname) {
    errors.firstname = "First name is required";
  }

  if (!values.lastname) {
    errors.lastname = "Last name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phonenumber) {
    errors.phonenumber = "Phone number is required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};

export default validate;
