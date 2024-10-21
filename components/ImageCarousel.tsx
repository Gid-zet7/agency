import React from "react";

export default function ImageCarousel() {
  return (
    <>
      <div
        id="carousel-example-generic"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <div className="pic1">
              <div className="carousel-caption">
                <h3>This is the first slide.</h3>
                <p>
                  You can add whatever you want. Even buttons (you will see them
                  in the second slide)
                </p>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="pic2">
              <div className="carousel-caption">
                <h1>Headings can be of any size.</h1>
                <p>
                  We added a button to link to another website. But, again, it
                  is up to you. The third slide does not contain any information
                  (but you can add it)
                </p>
                <a href="http://prestwickcodes.org/">
                  <button type="button" className="btn btn-info">
                    Click for more information
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="pic3">
              <div className="carousel-caption"></div>
            </div>
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
