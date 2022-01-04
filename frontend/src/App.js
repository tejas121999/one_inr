import { MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Payments from './pages/Account/Payments';
import AddDoner from './pages/Doner/AddDoner';
import EditDoner from './pages/Doner/EditDoner';
import UpcomingDonerRenewal from './pages/Doner/UpcomingDonerRenewal';
import ViewAllDoner from './pages/Doner/ViewAllDoner';
import ViewRecept from './pages/Doner/ViewRecept';
import AddPartner from './pages/master/partner/AddPartner';
import EditPartner from './pages/master/partner/EditPartner';
import Partner from './pages/master/partner/Partner';
import AddVendor from './pages/master/vendor/AddVendor';
import EditVendor from './pages/master/vendor/EditVendor';
import Vendor from './pages/master/vendor/Vendor';
import AddNgo from './pages/NGO/AddNgo';
import ViewAllNgo from './pages/NGO/ViewAllNgo';
import AddProject from './pages/projects/AddProject';
import ArchivedProject from './pages/projects/ArchivedProject';
import CompleteProject from './pages/projects/CompleteProject';
import ViewAllProjects from './pages/projects/ViewAllProjects';
import Config from './pages/Settings/Config';
import MyProfile from './pages/Settings/MyProfile';
import RazorpayCredentials from './pages/Settings/RazorpayCredentials';
import Roles from './pages/Settings/Roles';
import Users from './pages/Settings/Users';
import Dashboard from './pages/Other/Dashboard';

import './styles/reduction.scss';
import Login from './pages/Login';
import PrivateRoute from './Routing/PrivateRoute';

// import Login from 'src/pages/Login.js';
import Viewdonormodal from './Modals/Donor/ViewDonorModal';
import Forgot from './pages/Forgot';
import store from './Redux/store';
import { LoginAuthData } from './Redux/Actions/authAction';
import OTPScreen from './pages/Other/OTP';
import ChangePassword from './pages/Other/changePassword';
import EditProfile from './pages/Settings/EditProfile';
import EditNgo from './pages/NGO/EditNgo';
import ViewSingleNgo from './pages/NGO/ViewSingleNgo';
import ViewAllDonorTable from './pages/Doner/ViewAllDonorTable';
// import ViewAllDonorTable from './pages/Doner/ViewAllDonorTable';
// import ViewAllDoner from './pages/Doner/ViewAllDoner'
import ProjectDetails from './pages/projects/ProjectDetails';
import EditProject from './pages/projects/EditProject';
import AutoDonate from './pages/projects/AutoDonate';
import Contributors from './pages/projects/Contributors';

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};
const token = localStorage.getItem('Token');

if (token) {
  // setAuthToken(token);
  store.dispatch(LoginAuthData());
}

function App(props) {
  return (
    <BrowserRouter basename={getBasename()}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/forgot_password" component={Forgot} />
        <Route exact path="/otp" component={OTPScreen} />
        <Route exact path="/changePassword" component={ChangePassword} />
        <div>
          <MainLayout breakpoint={props.breakpoint}>
            <React.Suspense fallback={<PageSpinner />}>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />

              {/*master route*/}
              <PrivateRoute exact path="/Vendor" component={Vendor} />
              <PrivateRoute exact path="/addvendor" component={AddVendor} />
              <PrivateRoute exact path="/editvendor" component={EditVendor} />
              <PrivateRoute exact path="/partner" component={Partner} />
              <PrivateRoute exact path="/addpartner" component={AddPartner} />
              <PrivateRoute exact path="/editpartner" component={EditPartner} />
              {/*doner route*/}
              <PrivateRoute exact path="/add_doner" component={AddDoner} />
              <PrivateRoute exact path="/edit_doner" component={EditDoner} />
              <PrivateRoute exact path="/view_recept" component={ViewRecept} />
              <PrivateRoute
                exact
                path="/view_all_doner"
                component={ViewAllDoner}
              />
              <PrivateRoute
                exact
                path="/upcoming_doner_renewal"
                component={UpcomingDonerRenewal}
              />
              <PrivateRoute exact path="/forgot" component={Forgot} />
              {/*NGO route*/}
              <PrivateRoute exact path="/add_ngo" component={AddNgo} />
              <PrivateRoute exact path="/view_all_ngo" component={ViewAllNgo} />
              <PrivateRoute exact path="/edit_ngo" component={EditNgo} />
              <PrivateRoute exact path="/view_single_ngo" component={ViewSingleNgo} />
              {/*project route*/}
              <PrivateRoute
                exact
                path="/complete_project"
                component={CompleteProject}
              />
              <PrivateRoute exact path="/add_project" component={AddProject} />
              <PrivateRoute exact path="/view_all_project" component={ViewAllProjects} />
              <PrivateRoute exact path="/edit_project" component={EditProject} />
              <PrivateRoute exact path="/auto_donate" component={AutoDonate} />
              <PrivateRoute exact path="/Contributors" component={Contributors} />
              <PrivateRoute
                exact
                path="/project_details"
                component={ProjectDetails}
              />
              <PrivateRoute
                exact
                path="/archive_project"
                component={ArchivedProject}
              />

              {/*Account route*/}
              <PrivateRoute exact path="/payments" component={Payments} />
              {/*setting route*/}
              <PrivateRoute exact path="/my_profile" component={MyProfile} />
              <PrivateRoute exact path="/roles" component={Roles} />
              <PrivateRoute exact path="/users" component={Users} />
              <PrivateRoute exact path="/config" component={Config} />
              <PrivateRoute
                exact
                path="/razorpay_credentials"
                component={RazorpayCredentials}
              />
            </React.Suspense>
          </MainLayout>
        </div>
        {/* <Route path="/404" component={Four_Zero_Foure} />
            <Redirect to="/404">{Four_Zero_Foure}</Redirect> */}
      </Switch>
    </BrowserRouter>
  );
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default App;
