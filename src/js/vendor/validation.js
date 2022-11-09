// FOOTER-VALIDATION

const validation = new JustValidate('#form');

validation.addField("#email", [
  {
    rule: "required",
    value: true,
    errorMessage: "Enter Email!",
  },
  {
    rule: "email",
    value: true,
    errorMessage: "Incorrect Email!",
  },
])
