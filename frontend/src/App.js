
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
import ProMain from "./project-dashboard/ProMain"
import Vivavoce from "./project-pages/Vivavoce"
import Dashboard from "./project-pages/Dashboard"
import Grades from "./project-pages/Grades"

import DiscussionForum from "./project-pages/DiscussionForum"
import ReferenceHome from "./project-pages/ReferenceHome"
import Referencematerial from "./project-pages/Referencematerial"
import Submissions from "./project-pages/Submissions"
import ProjectReport from "./project-pages/ProjectReport"
import Quiz from "./Quiz/Quiz"

import Cyber from "./Referencepages/Cyber"
import Datasci from "./Referencepages/Datasci"
import Mobile from "./Referencepages/Mobile"
import Software from "./Referencepages/Software"
import Web from "./Referencepages/Web"
import Uiuix from "./Referencepages/Uiuix"
import Cringe from './protectroutes/Cringe';
import Auth from './protectroutes/Auth';







function App() {

    return (
        <div>
            <Router>

                <Routes>
                    <Route path="/" element={<Main child={<Home />} />} />
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/signup' element={<Signup />}></Route>

                    <Route path='/studentdashboard' element={<Auth > <Studentdashboard /></Auth>} />



                    <Route path="/internshippage1" element={<Auth>  < Internshipdynamicpage heading={Theinternshipdetails[0].heading} content={Theinternshipdetails[0].content} image={Theinternshipdetails[0].image} morecontent={Theinternshipdetails[0].morecontent} /></Auth>} />
                    <Route path="/internshippage2" element={<Auth>  < Internshipdynamicpage heading={Theinternshipdetails[1].heading} content={Theinternshipdetails[1].content} image={Theinternshipdetails[1].image} morecontent={Theinternshipdetails[1].morecontent} /></Auth>} />
                    <Route path="/internshippage3" element={<Auth>  < Internshipdynamicpage heading={Theinternshipdetails[2].heading} content={Theinternshipdetails[2].content} image={Theinternshipdetails[2].image} morecontent={Theinternshipdetails[2].morecontent} /></Auth>} />
                    <Route path="/internshippage4" element={<Auth>  < Internshipdynamicpage heading={Theinternshipdetails[3].heading} content={Theinternshipdetails[3].content} image={Theinternshipdetails[3].image} morecontent={Theinternshipdetails[3].morecontent} /></Auth>} />
                    <Route path="/internshippage5" element={<Auth>  < Internshipdynamicpage heading={Theinternshipdetails[4].heading} content={Theinternshipdetails[4].content} image={Theinternshipdetails[4].image} morecontent={Theinternshipdetails[4].morecontent} /></Auth>} />
                    <Route path="/internshippage6" element={<Auth>   < Internshipdynamicpage heading={Theinternshipdetails[5].heading} content={Theinternshipdetails[5].content} image={Theinternshipdetails[5].image} morecontent={Theinternshipdetails[5].morecontent} /></Auth>} />

                    {/* <Route path="/alltheroutes" element={<Main child={<Alltheroutes />} />} /> */}

                    <Route path='/quiz' element={<Auth><ProMain><Quiz /></ProMain></Auth>} />
                    <Route path='/dash' element={<Auth><ProMain><ReferenceHome /></ProMain></Auth>} />
                    <Route path='/submissions' element={<Auth><ProMain><Submissions /></ProMain></Auth>} />
                    <Route path='/referencehome' element={<Auth><ProMain><ReferenceHome /></ProMain></Auth>} />
                    <Route path='/projectreport' element={<Auth><ProMain><ProjectReport /></ProMain></Auth>} />
                    <Route path='/referencematerials' element={<Auth><ProMain><Referencematerial /></ProMain></Auth>} />
                    <Route path='/viva' element={<Auth><ProMain><Vivavoce /></ProMain></Auth>} />
                    <Route path='/discussion' element={<Auth><ProMain><DiscussionForum /></ProMain></Auth>} />
                    <Route path='/grades' element={<Auth><ProMain><Grades /></ProMain></Auth>} />
                    <Route path='/cyber' element={<Auth><ProMain><Cyber /></ProMain></Auth>} />
                    <Route path='/software' element={<Auth><ProMain><Software /></ProMain></Auth>} />
                    <Route path='/web' element={<Auth><ProMain><Web /></ProMain></Auth>} />
                    <Route path='/datasci' element={<Auth><ProMain><Datasci /></ProMain></Auth>} />
                    <Route path='/mobile' element={<Auth><ProMain><Mobile /></ProMain></Auth>} />
                    <Route path='/uiuix' element={<Auth><ProMain><Uiuix /></ProMain></Auth>} />




                </Routes>
                {/* <Internshipdynamicpage>
                    <ProjectReport />
                </Internshipdynamicpage> */}
            </Router>

        </div >
    );
}

export default App;
