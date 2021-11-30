import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Payments from './pages/Account/Payments';
import AddDoner from './pages/Doner/AddDoner';
import EditDoner from './pages/Doner/EditDoner';
import UpcomingDonerRenewal from './pages/Doner/UpcomingDonerRenewal';
import ViewAllDoner from './pages/Doner/ViewAllDoner';
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
import Login from './pages/Login';
import PrivateRoute from './Routing/PrivateRoute';
import AdminRoutes from './Routing/AdminRoutes';
// import Login from 'src/pages/Login.js';
const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    console.log('APp', this.props);
    return (
      <Router>
        <Route>
          <AdminRoutes />
        </Route>
      </Router>
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

export default App;
