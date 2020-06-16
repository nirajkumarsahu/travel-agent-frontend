export const loginFormFields = {
  phoneCode: {
    value: "",
    isoCode: ""
  },
  phoneNo: {
    value: "",
    placeholder: "Enter Mobile Number",
    isTouched: false,
    isError: false
  },
  name: {
    value: "",
    placeholder: "Name",
    isTouched: false,
    isError: false
  },
  email: {
    value: "",
    placeholder: "Email",
    isTouched: false,
    isError: false
  }
};

export const secondFormFields = {
  companyType: {
    value: ""
  },
  companyName: {
    value: "",
    placeholder: "Your company name",
    isTouched: false,
    isError: false
  },
  companyCity: {
    value: "",
    placeholder: "Your company city",
    isTouched: false,
    isError: false
  }
};

export const loginValidateConfig = {
  phoneNo: "phone",
  phoneCode: "phoneCode",
  name: "name",
  email: "email",
  companyName: "companyName",
  companyCity: "companyCity"
};

export const companyTypeList = [
  {
    value: "I am a Travel Agent"
  }
];
