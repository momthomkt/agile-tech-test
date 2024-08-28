// import './TestimonialsSection.scss'
// import { ReactComponent as HeroSectionImg } from '../../resources/images/heroSection.svg'
// const TestimonialsSection = () => {
//   return (
//     <section className="testimonials-section">
//       <div className="hbox">
//         alo
//       </div>
//     </section>
//   )
// }

// export default TestimonialsSection


// TestimonialsSection.tsx
// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { ReactComponent as ArrowPrev } from '../../resources/images/arrowPrev.svg'
// import './TestimonialsSection.scss'; // Custom SCSS file

// // Custom arrow components
// function NextArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       // style={{ ...style, display: "block", right: "25px" , color: 'red', backgroundColor: 'red'}}
//       onClick={onClick}
//     >
//       <span style={{ fontSize: '24px', color: 'red', backgroundColor: 'red' }}>→</span>
//     </div>
//   );
// }

// function PrevArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", left: "25px", zIndex: 1 }}
//       onClick={onClick}
//     >
//       <span style={{ fontSize: '24px' , position}}>←</span>
//     </div>
//   );
// }



// const TestimonialsSection = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     // appendDots: (dots: any) => (
//     //   <div
//     //     style={{
//     //       position: 'absolute',
//     //       bottom: '-30px',
//     //     }}
//     //   >
//     //     <ul style={{ margin: '0px' }}> {dots} </ul>
//     //   </div>
//     // ),
//     // customPaging: (i: number) => (
//     //   <div
//     //     style={{
//     //       width: "10px",
//     //       height: "10px",
//     //       backgroundColor: i === 0 ? '#FF0080' : '#D3D3D3',
//     //       borderRadius: '50%',
//     //     }}
//     //   />
//     // ),
//   };



//   return (
//     <section className="testimonials-section">
//       <div className="hbox">
//         <div className="carousel-wrapper">
//           <h2 className="carousel-title">Testimonials</h2>
        
//           <Slider {...settings}>
//             <div className="carousel-card">
//               <div className="card-content">
//                 <img src="https://via.placeholder.com/100" alt="John Fang" className="card-image" />
//                 <div className="card-text">
//                   <h3>John Fang</h3>
//                   <p>wordfaang.com</p>
//                   <p>
//                     Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="carousel-card">
//               <div className="card-content">
//                 <img src="https://via.placeholder.com/100" alt="Jane Doe" className="card-image" />
//                 <div className="card-text">
//                   <h3>Jane Doe</h3>
//                   <p>janedoe.com</p>
//                   <p>
//                     Arcu pulvinar aenean nam laoreet nulla. Suspendisse ultrices at diam lectus nullam ultricies massa turpis.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

import { useRef, useState, useEffect } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as ArrowPrev } from '../../resources/images/arrowPrev.svg'
import './TestimonialsSection.scss';

import GalleriesService from "../../services/galleriesService"


interface Gallery {
  id: string
  desctiption: string
  imageUrl: string
}


const TestimonialsSection = () => {

  const [galleries, setGalleries] = useState<Gallery[]>([])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect( () => {
    const handleGetGalleries = async () => {
      try {
        const res = await GalleriesService.getAll()

        setGalleries(res.data)
      } catch (error) {

      }
    }
    handleGetGalleries();
  }, [])

  return (
    <section className="testimonials-section">
      <div className="hbox">
        <div className="carousel-wrapper">
          <h2 className="carousel-title">Testimonials</h2>
        
          <Slider {...settings}>
            {galleries.map((value: Gallery, index: number) => {
              return (
                <div className="carousel-card" key={index}>
                  <div className="card-content">
                    <div className="card-image-container">
                      <img src={value.imageUrl} alt={value.id} className="card-image" />
                    </div>
                    
                    <div className="card-text">
                      <div className='name'>John Fang 23</div>
                      <div className='url-web'>wordfaang.com</div>
                      <p>
                        {value.desctiption}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
            {/* <div className="carousel-card" key={1}>
              <div className="card-content">
                <div className="card-image-container">
                  <img src="https://via.placeholder.com/100" alt="John Fang" className="card-image" />
                </div>
                
                <div className="card-text">
                  <div className='name'>John Fang 23</div>
                  <div className='url-web'>wordfaang.com</div>
                  <p>
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div className="carousel-card" key={2}>
              <div className="card-content">
                <div className="card-image-container">
                  <img src="https://via.placeholder.com/100" alt="John Fang" className="card-image" />
                </div>
                <div className="card-text">
                  <h3>Jane Doe</h3>
                  <p>janedoe.com</p>
                  <p>
                    Arcu pulvinar aenean nam laoreet nulla. Suspendisse ultrices at diam lectus nullam ultricies massa turpis.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-card" key={3}>
              <div className="card-content">
                <div className="card-image-container">
                  <img src="https://via.placeholder.com/100" alt="John Fang" className="card-image" />
                </div>
                <div className="card-text">
                  <h3>Jane Doe</h3>
                  <p>janedoe.com</p>
                  <p>
                    Arcu pulvinar aenean nam laoreet nulla. Suspendisse ultrices at diam lectus nullam ultricies massa turpis.
                  </p>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
