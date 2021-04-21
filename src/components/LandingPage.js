import { Link } from 'react-router-dom';
export default function LandingPage() {
  return (
    <>
      <section className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="display-4 text-center mb-3">Not sure about which Holiday is when? We can Help!</h1>
        <div className="d-flex justify-content-center ">
          <Link class="btn btn-primary btn-lg mr-3" to="/holidays" role="button">
            Get Holiday List
          </Link>
          <a class="btn btn-outline-primary btn-lg" href="#how-it-works" role="button">
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
    </>
  );
}
