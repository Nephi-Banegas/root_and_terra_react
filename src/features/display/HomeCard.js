import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const HomeCard = ({ item }) => {
  const { image, title, description } = item;

  return (
    <Card>
      <CardImg src={image} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardBody>{description}</CardBody>
      </CardBody>
    </Card>
  );
};

export default HomeCard;
