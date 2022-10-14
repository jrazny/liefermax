import { Carousel, CarouselItem } from "react-bootstrap";
import Image from "next/image";

export default function Slider() {
  return (
    <div>
      <Carousel controls={false} fade={true}>
        <CarouselItem>
            <Image 
              className='d-block w-100 rounded-3' 
              src='/images/essen/burger.jpg' 
              alt='burger' 
              width={3000} 
              height={1000} 
            />
        </CarouselItem>
        <CarouselItem>
            <Image 
              className='d-block w-100 rounded-3' 
              src='/images/essen/pizza.jpg' 
              alt='pizza' 
              width={3000} 
              height={1000} 
            />
        </CarouselItem>
        <CarouselItem>
            <Image 
              className='d-block w-100 rounded-3' 
              src='/images/essen/burrito.jpg' 
              alt='burrito' 
              width={3000} 
              height={1000} 
            />
        </CarouselItem>
      </Carousel>
    </div>
  );
}
