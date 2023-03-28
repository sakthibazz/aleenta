import React from "react";
import { Switch, Route, BrowserRouter} from "react-router-dom";

// import PrivateRoute from "./PrivateRoute";
// import './assets/css/main.css';
// import './assets/js/main.js'
import Layout from "./Layout";
import Footer from "./components/footer";

// import Header from "./headerBar";

import Welcome from "./components/Welcome";
import TearmsAndConditions from "./components/TearmsAndConditions";
import About from "./components/about/About";
import AboutDetails from "./components/about/aboutDetails"
import Program from "./components/program/Program";
import Contact from "./components/Contact/Contact"
import CorporatePrograms from "./components/program/corporatePrograms"
import IndividualPrograms from "./components/program/individualPrograms"
import GroupPrograms from "./components/program/GroupPrograms"


// ------------------Blogs----------------------------------
import BlogsDropDown from "./components/Blogs/BlogsDropDown";
import BlogsPage1 from "./components/Blogs/BlogsPage1";
import BlogPage2 from "./components/Blogs/BlogPage2"

//------------------ Addition Services--------------------------
import AdditionalServices from "./components/AdditionalServices/AdditionalServices";
import AdditionMeditation from "./components/AdditionalServices/meditation";
import AdditionArtTherapy from "./components/AdditionalServices/ArtTherapy";
import AdditionSelfHealing from "./components/AdditionalServices/SelfHealing";
import AdditionCounseling from "./components/AdditionalServices/counseling"

// import Explore from "./components/SignIn_SignUp/Explore";
// import SignIn from "./components/SignIn_SignUp/SignIn";
// import SignUp from "./components/SignIn_SignUp/SignUp";
// import Program from "./components/program/program";
// import ForgotPassword from "./components/SignIn_SignUp/ForgotPassword";
// import PasswordReset from "./components/SignIn_SignUp/PasswordReset";

// import PaymentProcess from "./components/PaymentProcess/paymentProcess";

// import Dashboard from "./components/Dashboard/Dashboard";

// Admin Routes
// import AdminRoutes from "./AdminRoutes";

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      {/**---- Admin Main Route ----**/}
      {/* <PrivateRoute path="/admin" component={AdminRoutes} /> */}
      <Layout>
      {/* <Header> */}
        {/* --------------------Drop downs------------------ */}
        <Route exact path="/" component={Welcome} />
        <Route path="/about-us" component={About} />
        <Route path="/aboutDetails" component={AboutDetails} />
        <Route path="/blogsDropDown" component={BlogsDropDown} />
        <Route path="/blogsPage1" component={BlogsPage1} />
        <Route path="/blogPage2" component={BlogPage2} />
        <Route path="/program" component={Program} />
        <Route path="/contact" component={Contact} />
        <Route path="/additionalServices" component={AdditionalServices} />

        {/* --------------------Programs------------------ */}
        <Route path="/corporatePrograms" component={CorporatePrograms} />
        <Route path="/individualPrograms" component={IndividualPrograms} />
        <Route path="/groupPrograms" component={GroupPrograms} />

        {/* --------------------Addition Services-------------------------- */}
        <Route path="/meditation" component={AdditionMeditation} />
        <Route path="/artTherapy" component={AdditionArtTherapy} />
        <Route path="/selfHealing" component={AdditionSelfHealing} />
        <Route path="/counseling" component={AdditionCounseling} />



        {/* ------------------Footer---------------------------------------- */}
        <Route path="/footer" component={Footer} />
        <Route path="/termsAndConditions" component={TearmsAndConditions} />


        {/*<Route path="/paymentProcess/:programId" component={PaymentProcess} /> */}
      </Layout>
      {/* </Header> */}
    </Switch>
    </BrowserRouter>
  );
};

export default App;
