import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ReverseArray from "./Pages/Arrays/ReverseArray";
import MoveNegativeToLeft from "./Pages/Arrays/MoveNegativeToLeft";
import MinMaxElement from "./Pages/Arrays/MinMaxElement";
import SortArrayZerosOnesTwos from "./Pages/Arrays/SortArrayZerosOnesTwos";
import topicsList from "./Pages/data/TopicsList";

function App() {
  return (
    <Router>
      <div className="dark">
        <Header />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-5 mb-3">
                <div className="accordion" id="questions">
                  {topicsList
                    ? topicsList.map((topic) => (
                        <div className="accordion-item" key={topic.id}>
                          <h2 className="accordion-header" id="headingArray">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={"#" + topic.topic_id}
                              aria-expanded="true"
                              aria-controls={topic.topic_id}
                            >
                              {topic.topic_name}
                            </button>
                          </h2>
                          <div
                            id={topic.topic_id}
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingArray"
                            data-bs-parent="#questions"
                          >
                            <div className="accordion-body">
                              <ul className="list-group">
                                {topic.questions
                                  ? topic.questions.map((question) => (
                                      <li
                                        className="list-group-item"
                                        key={question.id}
                                      >
                                        <Link to={"/" + question.link}>
                                          <span>
                                            {" "}
                                            {question.title}
                                            <span
                                              className={
                                                question.difficulty === "easy"
                                                  ? "badge bg-custom-badge bg-green"
                                                  : question.difficulty ===
                                                    "medium"
                                                  ? "badge bg-custom-badge bg-orange"
                                                  : "badge bg-custom-badge bg-red"
                                              }
                                            >
                                              {question.difficulty === "easy"
                                                ? "E"
                                                : question.difficulty ===
                                                  "medium"
                                                ? "M"
                                                : "H"}
                                            </span>
                                          </span>
                                        </Link>
                                      </li>
                                    ))
                                  : ""}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))
                    : ""}

                  {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="headingStrings">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Strings
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingStrings" data-bs-parent="#questions">
                      <div className="accordion-body">
                        <ul className="list-group">
                          <li className="list-group-item">
                            <Link to="#">
                              <span> Reverse a String
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="col-md-7 mb-3">
                <Routes>
                  <Route exact path="/" />
                  <Route path="/reverse-array" element={<ReverseArray />} />
                  <Route
                    path="/max-min-element-of-array"
                    element={<MinMaxElement />}
                  />
                  <Route
                    path="/move-negative-numbers-to-left"
                    element={<MoveNegativeToLeft />}
                  />
                  <Route
                    path="/sort-array-0s-1s-2s"
                    element={<SortArrayZerosOnesTwos />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
