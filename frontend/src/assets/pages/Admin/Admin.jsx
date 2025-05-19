import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  getProducts,
  removeProduct,
} from "../../features/Products";
import Table from "react-bootstrap/Table";
import { useFormik } from "formik";
import { removeBasket } from "../../features/Basket";
import productSchema from "../../yup/schema";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Admin = () => {
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      price: "",
      description: "",
    },
    validationSchema: productSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(createProduct(values));
      resetForm();
    },
  });

  return (
    <div className="container">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            name="image"
            placeholder="Enter Image"
            value={formik.values.image}
            onChange={formik.handleChange}
          />
          <span style={{ color: "red" }}>{formik.errors.description}</span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter Nmae"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <span style={{ color: "red" }}>{formik.errors.name}</span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Enter Description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          <span style={{ color: "red" }}>{formik.errors.description}</span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            placeholder="Enter Price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          <span style={{ color: "red" }}>{formik.errors.price}</span>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>fnctions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr>
              <td>{(index += 1)}</td>
              <td>
                <img src={item.image} alt="" />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(removeProduct(item._id));
                  }}
                >
                  remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
