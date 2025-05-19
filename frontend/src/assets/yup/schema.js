import * as yup from "yup";

let productSchema = yup.object({
  name: yup.string().required(),
  image: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
});

export default productSchema;
