import { Link } from 'react-router-dom';

import logoReact from '../images/reactjs-ar21.svg';
import logoNode from '../images/nodejs-horizontal.svg';
import img1 from '../images/1588952743049.jpeg';
import img2 from '../images/linkedIN.png';

export default function LandingPage() {
  return (
    <>
      <section className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="display-4 text-center mb-3">Not sure about which Holiday is when? We can Help!</h1>
        <div className="d-flex justify-content-center ">
          <Link className="btn btn-primary btn-lg mr-3" to="/holidays" role="button">
            Get Holiday List
          </Link>
          <a className="btn btn-outline-primary btn-lg" href="#how-it-works" role="button">
            How it Works
          </a>
        </div>
      </section>
      <section id="how-it-works" className="vh-100 container">
        <h1 className="text-center mb-3">How It Works</h1>
        <h4 className="text-center mt-4">
          We use Stepzen and call 2 RESTful API's their response is combined into a single GraphQL Endpoint where the client in our Case React can
          query for Data as if it was queried from a GraphQL API.
        </h4>
      </section>
      <section className="vh-100 container">
        <h1 className="text-center mb-3">Technologies Used</h1>
        <div className="d-flex w-75 justify-content-center align-items-center">
          <img src={logoReact} alt="react" className="w-100" />
          <img src={logoNode} alt="react" className="w-100" />
        </div>
      </section>
      <section className="vh-100 container">
        <h1 className="text-center mb-3">Meet The Engineers</h1>
        <div className="d-flex justify-content-around align-items-center mt-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src={img1} alt="" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Erica Melo de Carvalho</h5>
              <p className="card-text">I like pizza and javascript. Give me a job so I can buy more pizza.</p>
              <a href="" className="btn btn-primary">
                Go Some Where
              </a>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <img src={img2} alt="" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Aamir Bakhtiar</h5>
              <p className="card-text">Likes Programming and Peanuts, and is all out of Peanuts.</p>
              <a href="" className="btn btn-primary">
                Go Some Where
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="container mt-5">
        <p className="small text-center">Erica Melo de Carvalho and Aamir Bakhtiar | 2021</p>
      </footer>
    </>
  );
}
