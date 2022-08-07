import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReverseArray from './Pages/Arrays/ReverseArray';
import MoveNegativeToLeft from './Pages/Arrays/MoveNegativeToLeft';
import MinMaxElement from './Pages/Arrays/MinMaxElement';
import SortArrayZerosOnesTwos from './Pages/Arrays/SortArrayZerosOnesTwos';

function App() {
  return (
    <Router>
      <div className="dark">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-header">
          <div class="container-fluid">
            <Link to="/" className='navbar-brand m-auto'>
              Frontend Interview Questions
            </Link>
          </div>
        </nav>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-5 mb-3">
                <div className="accordion" id="questions">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingArray">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Arrays
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingArray" data-bs-parent="#questions">
                      <div className="accordion-body">
                        <ul className="list-group">
                          <li className="list-group-item">
                            <Link to="/reverse-array">
                              <span> Reverse an array
                              {/* <span className="badge bg-custom-badge">Easy</span> 
                              <i className="bi bi-box-arrow-up-right"></i> */}
                              </span>
                            </Link>
                          </li>
                          <li className="list-group-item">
                            <Link to="/max-min-element-of-array">
                              <span> Find the maximum and minimum element in an array.
                              </span>
                            </Link>
                          </li>
                          <li className="list-group-item">
                            <Link to="/move-negative-numbers-to-left">
                              <span> Move all negative numbers to beginning and positive to end. 
                              </span>
                            </Link>
                          </li>
                          <li className="list-group-item">
                            <Link to="/sort-array-0s-1s-2s">
                              <span> Sort an array of 0s, 1s and 2s.
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

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
                  <Route exact path='/' />
                  <Route path='/reverse-array' element={<ReverseArray />} />
                  <Route path='/max-min-element-of-array' element={<MinMaxElement />} />
                  <Route path='/move-negative-numbers-to-left' element={<MoveNegativeToLeft />} />
                  <Route path='/sort-array-0s-1s-2s' element={<SortArrayZerosOnesTwos />} />
                </Routes>
              </div>
            </div>
          </div>
        </section>

        <footer>
          This website is developed by <a href="https://github.com/aamrits" target="_blank" rel="noreferrer">Amrit</a>. &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </Router>
  );
}

export default App;
