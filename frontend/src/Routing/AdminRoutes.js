import React, { lazy } from 'react';
import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { MainLayout } from '../components/Layout';
import PageSpinner from '../components/PageSpinner';
const LoginPage = lazy(() => import('../pages/Login'));
const Tabel = lazy(() => import('../pages/Tabel'));
const AddDoner = lazy(() => import('../pages/Doner/AddDoner'));
const EditDoner = lazy(() => import('../pages/Doner/EditDoner'));
const ViewRecept = lazy(() => import('../pages/Doner/ViewRecept'));
const ViewAllDoner = lazy(() => import('../pages/Doner/ViewAllDoner'));
const UpcomingDonerRenewal = lazy(() =>
  import('../pages/Doner/UpcomingDonerRenewal'),
);

const AdminRoutes = withRouter(({ location }) => {
  return (
    <Suspense
      fallback={
        <div>
          <PageSpinner />
        </div>
      }
    >
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <MainLayout>
          <PrivateRoute exact path="/dashboard" component={Tabel} />
          {/*doner route*/}
          <PrivateRoute exact path="/add_doner" component={AddDoner} />
          <PrivateRoute exact path="/edit_doner" component={EditDoner} />
          <PrivateRoute exact path="/view_recept" component={ViewRecept} />
          <PrivateRoute exact path="/view_all_doner" component={ViewAllDoner} />
          <PrivateRoute
            exact
            path="/upcoming_doner_renewal"
            component={UpcomingDonerRenewal}
          />
        </MainLayout>
        <Redirect to="/404"></Redirect>
      </Switch>
    </Suspense>
  );
});

export default AdminRoutes;
