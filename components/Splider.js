import { Splide, SplideSlide } from '@splidejs/react-splide';
import('@splidejs/splide/dist/css/themes/splide-skyblue.min.css');

const Splider = () => {
  return(
  <Splide options={ {
    type: 'fade',
    rewind : true,
    height: 150,
    gap    : '1rem',
    arrows: false,
    autoplay: true,
    interval: 5000,
    pauseOnHover : false,
  } }>
    <SplideSlide>
      <img src="Moyen_pearl_home.jfif" alt="Image 1"/>
    </SplideSlide>
    <SplideSlide>
      <img src="Moyen_sparrow_curieux.JPG" alt="Image 2"/>
    </SplideSlide>
  </Splide>
  )
}

export default Splider;