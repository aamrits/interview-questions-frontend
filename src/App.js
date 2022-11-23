import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
import topicsList from "./components/data/TopicsList";
import ReverseArray from "./Pages/Arrays/ReverseArray";
import MoveNegativeToLeft from "./Pages/Arrays/MoveNegativeToLeft";
import MinMaxElement from "./Pages/Arrays/MinMaxElement";
import SortArrayZerosOnesTwos from "./Pages/Arrays/SortArrayZerosOnesTwos";
import RemoveDuplicateChars from "./Pages/Strings/RemoveDuplicateChars";
import BubbleSort from "./Pages/Sorting/BubbleSort";
import InsertionSort from "./Pages/Sorting/InsertionSort";
import MergeSort from "./Pages/Sorting/MergeSort";
import QuickSort from "./Pages/Sorting/QuickSort";
import SelectionSort from "./Pages/Sorting/SelectionSort";
import CheckPalindrome from "./Pages/Misc/CheckPalindrome";
import CheckPrime from "./Pages/Misc/CheckPrime";
import ConstructPyramid from "./Pages/Misc/ConstructPyramid";
import ConvertDecimalToHexadecimal from "./Pages/Misc/ConvertDecimalToHexadecimal";
import CurryingExample from "./Pages/Misc/CurryingExample";
import FindFactorial from "./Pages/Misc/FindFactorial";
import PerimeterSumMatrix from "./Pages/Misc/PerimeterSumMatrix";
import ReconstructObject from "./Pages/Misc/ReconstructObject";

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
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={"#" + topic.topic_id}
                              aria-expanded="false"
                              aria-controls={topic.topic_id}
                            >
                              {topic.topic_name}
                            </button>
                          </h2>
                          <div
                            id={topic.topic_id}
                            className="accordion-collapse collapse"
                            aria-labelledby="headingArray"
                            data-bs-parent="#questions"
                          >
                            <div className="accordion-body">
                              {/* START - Question List for a particular topic */}
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
                              {/* END - Question List for a particular topic */}
                            </div>
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              </div>

              <div className="col-md-7 mb-3">
                <Container>
                  <Routes>
                    <Route exact path="/" />
                    <Route path="/reverse-array" element={<ReverseArray />} />
                    <Route path="/max-min-element-of-array" element={<MinMaxElement />} />
                    <Route path="/move-negative-numbers-to-left" element={<MoveNegativeToLeft />} />
                    <Route path="/sort-array-0s-1s-2s" element={<SortArrayZerosOnesTwos />} />
                    <Route path="/remove-duplicate-characters-of-a-string" element={<RemoveDuplicateChars />} />
                    <Route path="/bubble-sort" element={<BubbleSort />} />
                    <Route path="/insertion-sort" element={<InsertionSort />} />
                    <Route path="/merge-sort" element={<MergeSort />} />
                    <Route path="/quick-sort" element={<QuickSort />} />
                    <Route path="/selection-sort" element={<SelectionSort />} />
                    <Route path="/check-palindrome" element={<CheckPalindrome />} />
                    <Route path="/check-prime" element={<CheckPrime />} />
                    <Route path="/construct-a-pyramid" element={<ConstructPyramid />} />
                    <Route path="/convert-from-decimal-to-hexadecimal" element={<ConvertDecimalToHexadecimal />} />
                    <Route path="/currying-with-example" element={<CurryingExample />} />
                    <Route path="/find-factorial" element={<FindFactorial />} />
                    <Route path="/sum-of-perimeter-of-matrix" element={<PerimeterSumMatrix />} />
                    <Route path="/reconstruct-an-object" element={<ReconstructObject />} />
                  </Routes>
                </Container>
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
