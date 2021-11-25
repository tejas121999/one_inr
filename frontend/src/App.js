import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Payments from './pages/Account/Payments';
import AddDoner from './pages/Doner/AddDoner';
import EditDoner from './pages/Doner/EditDoner';
import UpcomingDonerRenewal from './pages/Doner/UpcomingDonerRenewal';
import ViewAllDoner from './pages/Donor/Donors';
import ViewRecept from './pages/Doner/ViewRecept';
import Four_Zero_Foure from './pages/Four_Zero_Foure';
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
import Tabel from './pages/Tabel';
import './styles/reduction.scss';

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            {/* <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            /> */}

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={Tabel} />
                {/*master route*/}
                <Route exact path="/Vendor" component={Vendor} />
                <Route exact path="/addvendor" component={AddVendor} />
                <Route exact path="/editvendor" component={EditVendor} />
                <Route exact path="/partner" component={Partner} />
                <Route exact path="/addpartner" component={AddPartner} />
                <Route exact path="/editpartner" component={EditPartner} />
                {/*doner route*/}
                <Route exact path="/add_doner" component={AddDoner} />
                <Route exact path="/edit_doner" component={EditDoner} />
                <Route exact path="/view_recept" component={ViewRecept} />
                <Route exact path="/view_all_doner" component={ViewAllDoner} />
                <Route
                  exact
                  path="/upcoming_doner_renewal"
                  component={UpcomingDonerRenewal}
                />
                {/*NGO route*/}
                <Route exact path="/add_ngo" component={AddNgo} />
                <Route exact path="/view_all_ngo" component={ViewAllNgo} />
                {/*project route*/}
                <Route
                  exact
                  path="/complete_project"
                  component={CompleteProject}
                />
                <Route exact path="/add_project" component={AddProject} />
                <Route
                  exact
                  path="/view_all_project"
                  component={ViewAllProjects}
                />
                <Route
                  exact
                  path="/archive_project"
                  component={ArchivedProject}
                />
                {/*Account route*/}
                <Route exact path="/payments" component={Payments} />
                {/*setting route*/}
                <Route exact path="/my_profile" component={MyProfile} />
                <Route exact path="/roles" component={Roles} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/config" component={Config} />
                <Route
                  exact
                  path="/razorpay_credentials"
                  component={RazorpayCredentials}
                />
              </React.Suspense>
            </MainLayout>
            {/* <Route path="/404" component={Four_Zero_Foure} />
            <Redirect to="/404">{Four_Zero_Foure}</Redirect> */}
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
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

export default componentQueries(query)(App);
