import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
  return (
    <div className="wrapper">
      <div className="carousel">
        <div className="inner">
          <div className="slide active">
            <h1>1</h1>
          </div>
          <div className="slide">
            <h1>2</h1>
          </div>
          <div className="slide">
            <h1>3</h1>
          </div>
        </div>
        <div className="arrow arrow-left"></div>
        <div className="arrow arrow-right"></div>
      </div>
    </div>
  );
}
