import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Button,
  Col,
} from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";

const NewsLetterForm = () => {
  const [newsLetterModalOpen, setNewsLeterModalOpen] = useState(false);

  return (
    <>
      <Col >
      <Button
        color="success"
        type="submit"
        onClick={() => setNewsLeterModalOpen(true)}
        className="btn-lg"
      >
        Join News Letter
      </Button>
      </Col>

      <Modal isOpen={newsLetterModalOpen}>
        <ModalHeader toggle={() => setNewsLeterModalOpen(false)}>
          Join News Letter
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              email: "",
              frequency: "Weekly",
            }}
          >
            <Form>
              <FormGroup row>
                <Col md="10">
                  <Field
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    class="form-control"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label>Email Frequency:</Label>
                <Col xs="2">
                  <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <Field type="radio" name="frequency" value="Weekly" />
                    Weekly
                  </label>
                </Col>
                <Col xs="2">
                  <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <Field type="radio" name="frequency" value="Monthly" />
                    Monthly
                  </label>
                </Col>
                <Col xs="2">
                  <label style={{ display: "flex", alignItems: "center", gap: "5px" }} className="mx-2">
                    <Field type="radio" name="frequency" value="Quarterly" />
                    Quarterly
                  </label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col xs="2">
                    <Button>Cancel</Button>
                </Col>
                <Col xs="3">
                    <Button color="success">Join</Button>
                </Col>
              </FormGroup>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default NewsLetterForm;
