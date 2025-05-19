import * as yup from "yup";

let productSchema = yup.object({
  name: yup.string().required(),
  image: yup.string().required(),
  name: yup.string().required(),
  name: yup.string().required(),
});

export default productSchema;
