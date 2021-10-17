import { useForm } from "react-hook-form";
import { useState } from "react";
import GuessDisplay from "./GuessDisplay";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import Alert from "react-bootstrap/Alert";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

export const GuesserForm = () => {
  const defaultValues = {
    firstName: "",
    lastName: "",
    domain: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues });

  const [guesses, setGuesses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const resp = await axios.post(
        `${process.env.REACT_APP_EMAIL_GUESSER_API}/guesser`,
        data
      );
      const newData = [...guesses, resp.data];
      setGuesses(newData);
      reset();
      setLoading(false);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        setError(error.response.data.error);
        setTimeout(() => setError(null), 3000);
        setLoading(false);
      } else {
        setError("Network error");
        setTimeout(() => setError(null), 3000);
        setLoading(false);
      }
    }
  };

  return (
    <Container>
      <Col>
        <Row>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-5 mb-3 d-flex flex-column align-items-center "
          >
            {loading ? (
              <Spinner animation="border" variant="primary" className="mb-3" />
            ) : null}
            <Row>{error && <Alert variant="danger">{error}</Alert>}</Row>
            <Row>
              <Form.Group
                className="mb-3 d-flex flex-column align-items-center"
                controlId="firstName"
              >
                <Form.Label>First Name</Form.Label>
                <OverlayTrigger
                  key="right"
                  placement="right"
                  overlay={
                    <Tooltip id="tooltip-right">
                      First name is required and must contain between 2 and 30
                      letters
                    </Tooltip>
                  }
                >
                  <Form.Control
                    type="firstName"
                    placeholder="First Name"
                    {...register("lastName", {
                      required: true,
                      minLength: 2,
                      maxLength: 30,
                      pattern: {
                        value: /[a-zA-Z]+/,
                        message: "Invalid domain",
                      },
                    })}
                  />
                </OverlayTrigger>
                {errors.firstName && (
                  <Alert variant="danger" className="alert-input">
                    Invalid input
                  </Alert>
                )}
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                className="mb-3 d-flex flex-column align-items-center"
                controlId="lastName"
              >
                <Form.Label>Last Name</Form.Label>
                <OverlayTrigger
                  key="right"
                  placement="right"
                  overlay={
                    <Tooltip id="tooltip-right">
                      Last name is required and must contain between 2 and 30
                      letters
                    </Tooltip>
                  }
                >
                  <Form.Control
                    type="lastName"
                    placeholder="First Name"
                    {...register("lastName", {
                      required: true,
                      minLength: 2,
                      maxLength: 30,
                      pattern: {
                        value: /[a-zA-Z]+/,
                        message: "Invalid domain",
                      },
                    })}
                  />
                </OverlayTrigger>
                {errors.lastName && (
                  <Alert variant="danger" className="alert-input">
                    Invalid input
                  </Alert>
                )}
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                className="mb-5 d-flex flex-column align-items-center"
                controlId="domain"
              >
                <Form.Label>Domain</Form.Label>
                <OverlayTrigger
                  key="right"
                  placement="right"
                  overlay={
                    <Tooltip id="tooltip-right">
                      Domain is required and must be of the form "example.com"
                    </Tooltip>
                  }
                >
                  <Form.Control
                    type="domain"
                    placeholder="Domain"
                    {...register("domain", {
                      required: "Domain is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/,
                        message: "Invalid domain",
                      },
                    })}
                  />
                </OverlayTrigger>
                {errors.domain && (
                  <Alert variant="danger" className="alert-input">
                    {errors.domain.message}
                  </Alert>
                )}
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
        <Row>
          <GuessDisplay guesses={guesses} setGuesses={setGuesses} />
        </Row>
      </Col>
    </Container>
  );
};

export default GuesserForm;
