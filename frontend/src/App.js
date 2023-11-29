
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './ui-components/Login';
import Signup from './ui-components/Signup';
import Home from './elements/Home';
import Main from './ui-components/Main';
import Alltheroutes from "./studentdashboard/studentdashboard/Alltheroutes"
import Studentdashboard from './studentdashboard/studentdashboard/Studentdashboard';
import Internshipdynamicpage from './studentdashboard/studentdashboard/Internshippages/Internshipdynamicpage';
import Theinternshipdetails from './studentdashboard/Resource/Theinternshipdetails';

import ProMain from './project-dashboard/ProMain';
import Dashboard from './project-pages/Dashboard';
import Submissions from './project-pages/Submissions';
import ProjectReport from './project-pages/ProjectReport';
import Vivavoce from './project-pages/Vivavoce';
import DiscussionForum from './project-pages/DiscussionForum';
import Grades from './project-pages/Grades';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Main child={<Home />} />} />
                    <Route path="/studentdashboard" element={< Studentdashboard />} />
                    <Route path="/internshippage1" element={< Internshipdynamicpage heading={Theinternshipdetails[0].heading} content={Theinternshipdetails[0].content} image={Theinternshipdetails[0].image} morecontent={Theinternshipdetails[0].morecontent} />} />
                    <Route path="/internshippage2" element={< Internshipdynamicpage heading={Theinternshipdetails[1].heading} content={Theinternshipdetails[1].content} image={Theinternshipdetails[1].image} morecontent={Theinternshipdetails[1].morecontent} />} />
                    <Route path="/internshippage3" element={< Internshipdynamicpage heading={Theinternshipdetails[2].heading} content={Theinternshipdetails[2].content} image={Theinternshipdetails[2].image} morecontent={Theinternshipdetails[2].morecontent} />} />
                    <Route path="/internshippage4" element={< Internshipdynamicpage heading={Theinternshipdetails[3].heading} content={Theinternshipdetails[3].content} image={Theinternshipdetails[3].image} morecontent={Theinternshipdetails[3].morecontent} />} />
                    <Route path="/internshippage5" element={< Internshipdynamicpage heading={Theinternshipdetails[4].heading} content={Theinternshipdetails[4].content} image={Theinternshipdetails[4].image} morecontent={Theinternshipdetails[4].morecontent} />} />
                    <Route path="/internshippage6" element={< Internshipdynamicpage heading={Theinternshipdetails[5].heading} content={Theinternshipdetails[5].content} image={Theinternshipdetails[5].image} morecontent={Theinternshipdetails[5].morecontent} />} />
                    <Route path="/alltheroutes" element={<Main child={<Alltheroutes />} />} />
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/signup' element={<Signup />}></Route>

                    <Route path='/dash' element={<ProMain><Dashboard /></ProMain>} />
                    <Route path='/submissions' element={<ProMain><Submissions/></ProMain>} />
                    <Route path='/projectreport' element={<ProMain><ProjectReport /></ProMain>} />
                    <Route path='/viva' element={<ProMain><Vivavoce /></ProMain>} />
                    <Route path='/discussion' element={<ProMain><DiscussionForum/></ProMain>} />
                    <Route path='/grades' element={<ProMain><Grades/></ProMain>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;