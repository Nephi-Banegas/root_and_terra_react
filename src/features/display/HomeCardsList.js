import HomeCard from "./HomeCard";
import { HOMECARDS } from "../../app/shared/HOMECARDS";
import { Col, Row } from "reactstrap";

const HomeCardsList = () => {
  return (
    <Row className="ms-auto">
      {HOMECARDS.map((hc, index) => (
        <Col md="4"  className="m-4" key={HomeCard.id}>
          <HomeCard item={hc} key={index} />
        </Col>
      ))}
    </Row>
  );
};

export default HomeCardsList;
