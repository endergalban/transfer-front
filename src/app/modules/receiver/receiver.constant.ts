export const RECEIVERCONSTANT = {
  regex: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    number: /^[0-9]+$/,
    rut: /^0*(\d{1,3}(\d{3})*)?([\dkK])$/,
    phone: /^\+[0-9]{11}$/,
    code: /^[a-zA-Z0-9_-]*$/,
    text: /^[0-9a-zA-Z\u00C0-\u017F,.\s-_]+$/,
  },
};
