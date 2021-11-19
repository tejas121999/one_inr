import { STATE_LOGIN, STATE_SIGNUP } from "components/AuthForm";
import GAListener from "components/GAListener";
import { EmptyLayout, LayoutRoute, MainLayout } from "components/Layout";
import PageSpinner from "components/PageSpinner";
import AuthPage from "pages/AuthPage";
import React from "react";
import componentQueries from "react-component-queries";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Tabel from "./pages/Tabel";
import "./styles/reduction.scss";

const AlertPage = React.lazy(() => import("pages/AlertPage"));
const AuthModalPage = React.lazy(() => import("pages/AuthModalPage"));
const BadgePage = React.lazy(() => import("pages/BadgePage"));
const ButtonGroupPage = React.lazy(() => import("pages/ButtonGroupPage"));
const ButtonPage = React.lazy(() => import("pages/ButtonPage"));
const CardPage = React.lazy(() => import("pages/CardPage"));
// const ChartPage = React.lazy(() => import('pages/ChartPage'));
const DropdownPage = React.lazy(() => import("pages/DropdownPage"));
const FormPage = React.lazy(() => import("pages/FormPage"));
const InputGroupPage = React.lazy(() => import("pages/InputGroupPage"));
const ModalPage = React.lazy(() => import("pages/ModalPage"));
const ProgressPage = React.lazy(() => import("pages/ProgressPage"));
const TablePage = React.lazy(() => import("pages/TablePage"));
const TypographyPage = React.lazy(() => import("pages/TypographyPage"));
const WidgetPage = React.lazy(() => import("pages/WidgetPage"));
const Adddonor = React.lazy(() => import("./pages/Donor/AddDonor"));
const AllDonors = React.lazy(() => import("./pages/Donor/Donors"));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
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
              component={(props) => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={(props) => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={Tabel} />
                <Route exact path="/login-modal" component={AuthModalPage} />
                <Route exact path="Vendor" component={ButtonPage} />
                <Route exact path="/cards" component={CardPage} />
                <Route exact path="/Partner" component={ButtonGroupPage} />
                <Route exact path="/dropdowns" component={DropdownPage} />
                <Route exact path="/progress" component={ProgressPage} />
                <Route exact path="/modals" component={ModalPage} />
                <Route exact path="/forms" component={FormPage} />
                <Route exact path="/input-groups" component={InputGroupPage} />
                <Route exact path="/add_donnor" component={Adddonor} />
                <Route exact path="/view_all_donnor" component={AllDonors} />
                {/* <Route exact path="/charts" component={ChartPage} /> */}
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

export default App;
