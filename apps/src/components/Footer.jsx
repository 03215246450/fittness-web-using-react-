import React from 'react';

const Footer = () => {
  return (
    <footer className="footerr bg-disabled text-white my-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3">
            <p><b>COMPANY</b></p>
            <ul className="list-unstyled">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div className="col-md-3">
            <p><b>OPEN HOUR</b></p>
            <ul className="list-unstyled">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div className="col-md-3">
            <p><b>RESORCES</b></p>
            <ul className="list-unstyled">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5><img src="https://preview.colorlib.com/theme/fitnessclub/assets/img/logo/logo.png" className="" alt="..."/></h5>
            <ul className="list-unstyled">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
