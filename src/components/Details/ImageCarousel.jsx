import Carousel from "nuka-carousel";
import { Image } from "@chakra-ui/image";
import NoImg from "../../styles/no-photos.png";

const ImageCarousel = (props) => {
  if(props.photos.length === 0){
    return (
      <Carousel>
        <Image src={NoImg} alt="No picture" boxSize="300px" fit="contain" />
      </Carousel>
    )
  }


  return (
    <Carousel>
      {props.photos.map((photo, index) => {
        return <Image src={photo} alt={`Pic ${index}`} boxSize="300px" fit="contain"/>
      })}
    </Carousel>
  )
};

export default ImageCarousel;