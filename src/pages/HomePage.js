import HomeCardsList from "../features/display/HomeCardsList";
import { Row, Col } from "reactstrap";
import NewsLetterForm from "../components/NewsLetterForm";

const HomePage = () => {
  return (
    <div>
      
      <Row className="row-content">
        <Col md="8">
          <h3 className="ms-5">Welcome To root&terra Mushroom Farm</h3>
          <p className="mx-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
        
      </Row>

      <Row className="row-content">
        <HomeCardsList />
      </Row>

      <Row className="m-5">
        <h3>Stay Up To Date on News and Events!</h3>
      </Row>
      <Row className="m-5">
        <NewsLetterForm />
      </Row>

      
    </div>
  );
};

export default HomePage;
