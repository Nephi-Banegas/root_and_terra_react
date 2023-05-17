import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const HomeCard = ({ item }) => {
  const { image, title, description } = item;

  return (
    <Card className="h-100">
      <CardImg src={image} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardBody className="d-none d-md-block">{description}</CardBody>
      </CardBody>
    </Card>
  );
};

export default HomeCard;
