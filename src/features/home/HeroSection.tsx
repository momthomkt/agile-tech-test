import './HeroSection.scss'
import { ReactComponent as HeroSectionImg } from '../../resources/images/heroSection.svg'
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hbox">
        <div className="hero-content">
          <h1>Save your data storage here.</h1>
          <p>Data Warehouse is a data storage area that has been
            tested for security, so you can store your data here
            safely but not be afraid of being stolen by others.</p>
          <button className="btn learn-more">Learn More</button>
        </div>
        <div className="hero-img-container">
          <HeroSectionImg className="hero-img"/>
        </div>
        {/* <img src="path/to/illustration.png" alt="Illustration" /> */}
      </div>
    </section>
  )
}

export default HeroSection

// import './HeroSection.scss'
// import { ReactComponent as HeroSectionImg } from '../../resources/images/heroSection.svg'

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       <div className="container">
//         <div className="hero-content">
//           <h1>Save your data storage here.</h1>
//           <p>
//             Data Warehouse is a data storage area that has been tested for security, 
//             so you can store your data here safely but not be afraid of being stolen by others.
//           </p>
//           <button className="btn learn-more">Learn more</button>
//         </div>
//         <div className="hero-img-container">
//           <HeroSectionImg className="hero-img" />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HeroSection
