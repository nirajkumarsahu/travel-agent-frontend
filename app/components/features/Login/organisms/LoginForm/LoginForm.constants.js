export const loginFormFields = {
  phoneCode: {
    value: "",
    placeholder: "code",
    isTouched: false,
    isError: false
  },
  phoneNo: {
    value: "",
    placeholder: "Enter the phone No",
    isTouched: false,
    isError: false
  },
  otp: {
    value: "",
    placeholder: "Enter the OTP",
    isTouched: false,
    isError: false
  },
  password: {
    value: "",
    placeholder: "Enter the password",
    isTouched: false,
    isError: false
  }
};

export const loginValidateConfig = {
  phoneNo: "phone",
  phoneCode: "phoneCode",
  otp: "otp",
  password: "password"
};
