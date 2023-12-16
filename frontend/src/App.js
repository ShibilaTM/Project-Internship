
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

import Cyber from "./Referencepages/Cyber"
import Datasci from "./Referencepages/Datasci"
import Mobile from "./Referencepages/Mobile"
import Software from "./Referencepages/Software"
import Web from "./Referencepages/Web"
import Uiuix from "./Referencepages/Uiuix"
import Cringe from './protectroutes/Cringe';
import Auth from './protectroutes/Auth';
import Vivavoce1 from './project-pages/vivavoce/Vivavoce1';
import Vivavoce2 from './project-pages/vivavoce/Vivavoce2';
import Vivavoce3 from './project-pages/vivavoce/Vivavoce3';
import Vivavoce4 from './project-pages/vivavoce/Vivavoce4';
import Vivavoce5 from './project-pages/vivavoce/Vivavoce5';
import Vivavoce6 from './project-pages/vivavoce/Vivavoce6';


import Quiz from "./Quiz/Quiz"
import Quiz2 from "./Quiz/Quiz2"
import Quiz4 from "./Quiz/Quiz4"
import Quiz5 from "./Quiz/Quiz5"
import Quiz6 from "./Quiz/Quiz6"
import QuizSE from "./Quiz/QuizSE"
import { Logout } from './protectroutes/Logout';





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

                    <Route path='/viva1' element={<Auth><ProMain><Vivavoce1 /></ProMain></Auth>} />
                    <Route path='/viva2' element={<Auth><ProMain><Vivavoce2 /></ProMain></Auth>} />

                    <Route path='/viva3' element={<Auth><ProMain><Vivavoce3 /></ProMain></Auth>} />

                    <Route path='/viva4' element={<Auth><ProMain><Vivavoce4 /></ProMain></Auth>} />

                    <Route path='/viva5' element={<Auth><ProMain><Vivavoce5 /></ProMain></Auth>} />

                    <Route path='/viva6' element={<Auth><ProMain><Vivavoce6 /></ProMain></Auth>} />


                    <Route path='/quiz' element={<Auth><ProMain><Quiz /></ProMain></Auth>} />
                    <Route path='/Quiz2' element={<Auth><ProMain><Quiz2 /></ProMain></Auth>} />
                    <Route path='/QuizSE' element={<Auth><ProMain><QuizSE /></ProMain></Auth>} />

                    <Route path='/Quiz4' element={<Auth><ProMain><Quiz4 /></ProMain></Auth>} />
                    <Route path='/Quiz5' element={<Auth><ProMain><Quiz5 /></ProMain></Auth>} />
                    <Route path='/Quiz6' element={<Auth><ProMain><Quiz6 /></ProMain></Auth>} />

<Route path='/logout' element={<Logout/> }></Route> 

                </Routes>
                {/* <Internshipdynamicpage>
                    <ProjectReport />
                </Internshipdynamicpage> */}
            </Router>

        </div >
    );
}

export default App;
