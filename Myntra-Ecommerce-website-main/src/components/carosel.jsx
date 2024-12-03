import "./footer.css"
import Carousel from 'react-bootstrap/Carousel'
import photo3 from "../photo/photo3.png"
import photo4 from "../photo/photo4.png"
import photo5 from "../photo/photo5.png"
function UncontrolledExample() {
  return (
    <Carousel className="container1">
      <Carousel.Item className="container">
        
        <img src={photo3} className="images"></img>
        
      </Carousel.Item>
      <Carousel.Item className="container">
      <img src={photo4} className="images"></img>
      </Carousel.Item>
      <Carousel.Item className="container">  
      <img src={photo5} className="images"></img>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;