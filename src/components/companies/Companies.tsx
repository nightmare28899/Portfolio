import Flickity from "react-flickity-component";
/* styles flickity */
import "./companies.css";

export default function companies() {
  const LOGOS = [
    "https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/logos%2Flogo-loclog.png?alt=media&token=09570659-ba54-4708-957e-1af292b2ed26",
    "https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/logos%2Flogo-lavoz.jpg?alt=media&token=c7d4b8cd-7e40-47a3-a007-4a0685ddf3ac",
    "https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/logos%2Flogo-scio.png?alt=media&token=40f30a6e-dbdc-4b17-9307-7c7ea83be4a2",
    "https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/logos%2Flogo-anmex.png?alt=media&token=31be427c-2be4-4d81-b412-ba630fc305c5",
    "https://firebasestorage.googleapis.com/v0/b/portfolio-15cc6.appspot.com/o/logos%2Flogo-ceconexpo.jpg?alt=media&token=362a59f1-f1d3-45df-803d-920e60e21ce7",
  ];

  const flickityOptions = {
    initialIndex: 1,
    prevNextButtons: false,
    pageDots: false,
    groupCells: true,
    wrapAround: true,
    autoPlay: 2000,
    pauseAutoPlayOnHover: false,
  };

  function Carousel() {
    return (
      <Flickity
        className={"carousel"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {LOGOS.map((logo, index) => (
          <div className="container_carousel_cell" key={index} >
            <img src={logo} alt="logo" />
          </div>
        ))}
      </Flickity>
    );
  }

  return (
    <section id="companies" className="animate__animated animate__backInUp">
      <h5>
        Some companies i have worked with.
      </h5>
      <h2>Companies</h2>
      <div className="container_flickity">
        <Carousel />
      </div>
    </section>
  );
}
