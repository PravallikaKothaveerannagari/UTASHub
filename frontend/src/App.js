import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseList from "./Pages/CourseList";
import CoursePage from "./Pages/CoursePage";
import ChoseLevel from "./Pages/ChoseLevel";
import Specialization from "./Pages/Specialization";
import SubSpcial from "./Pages/SubSpcial";

function App() {
  return (
    <div className="main-div">
      <Router>
        <Routes>
          <Route element={<Specialization />} path="/" exact />
          <Route
            element={<SubSpcial />}
            path="/specialization/:major_id"
            exact
          />
          <Route element={<CoursePage />} path="/course/:cid" exact />
          {/* <Route element={<ChoseLevel />} path="*" exact /> */}
          <Route
            element={<ChoseLevel />}
            path="/specialization/:major_id/:sub_id"
            exact
          />
          <Route
            element={<CourseList />}
            path="/specialization/:major_id/:sub_id/:level"
            exact
          />
          <Route element={<CourseList />} path="/all-courses/:all" exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
