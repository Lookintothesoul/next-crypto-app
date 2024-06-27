const validatePassword = (
  password: string,
): { isValid: boolean; message: string } => {
  let isValid = false;
  let message = "";

  if (!password.trim()) {
    message = "Please enter your password";
  } else if (password.length < 8) {
    message = "Password must contain at least 8 characters";
  } else if (password.search(/[a-z]/) === -1) {
    message = "The password must contain at least one lowercase character";
  } else if (password.search(/[A-Z]/) === -1) {
    message = "The password must contain at least one uppercase character";
  } else if (password.search(/[0-9]/) === -1) {
    message = "The password must contain at least one number";
  } else if (password.search(/[@#$%^&*,.()\-_=+]/) === -1) {
    message = "The password must contain at least one special character";
  } else {
    isValid = true;
  }

  return {
    isValid,
    message,
  };
};

export default validatePassword;
