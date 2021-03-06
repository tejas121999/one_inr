import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import React from 'react';
import {
  MdDashboard,
  MdExtension,
  MdKeyboardArrowDown,
  MdVolunteerActivism,
  MdOutlineAdminPanelSettings,
  MdOutlineInsertEmoticon,
  MdAccountBalanceWallet,
  MdAccountBalance,
  MdOutlineSettings,
  MdOutlineEmail,
  MdOutlineLogout,
  MdOutlineNavigateNext,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';
const dashboardItems = [
  {
    to: '/dashboard',
    name: 'Dashboard',
    exact: true,
    Icon: MdDashboard,
  },
];

const masterItems = [
  {
    to: '/Vendor',
    name: 'Vendor',
    exact: false,
    Icon: MdOutlineNavigateNext,
  },
  {
    to: '/partner',
    name: 'Partner',
    exact: false,
    Icon: MdOutlineNavigateNext,
  },
];

const donorItems = [
  {
    to: '/add_doner',
    name: 'Add Donor',
    exact: false,
    Icon: MdOutlineNavigateNext,
  },
  {
    to: '/view_all_doner',
    name: `View All Donor's`,
    exact: true,
    Icon: MdOutlineNavigateNext,
  },
  {
    to: '/upcoming_doner_renewal',
    name: 'Upcoming Donor Renewal',
    exact: false,
    Icon: MdOutlineNavigateNext,
  },
  {
    to: '/view_recept',
    name: 'View Receipts',
    exact: false,
    Icon: MdOutlineNavigateNext,
  },
];

const NGO_Item = [
  {
    to: '/add_ngo',
    name: 'Add NGO',
    exact: false,
    Icon: MdOutlineNavigateNext,
  },
  {
    to: '/view_all_ngo',
    name: `View All NGO`,
    exact: false,
    Icon: MdOutlineNavigateNext,
  },
];

const ProjectItems = [
  {
    to: '/add_project',
    name: 'Add Project',
    exact: false,
    Icon: MdOutlineNavigateNext,
  },
  {
    to: '/view_all_project',
    name: 'View All Projects',
    exact: false,
    Icon: MdOutlineNavigateNext,
  },
  {
    to: '/complete_project',
    name: 'Completed Projects',
    exact: false,
    Icon: MdOutlineNavigateNext,
  },
  {
    to: '/archive_project',
    name: 'Archived Projects',
    exact: false,
    Icon: MdOutlineNavigateNext,
  },
];
const accountsItems = [
  {
    to: '/payments',
    name: 'Payments',
    exact: true,
    Icon: MdOutlineNavigateNext,
  },
];

const SettingItems = [
  {
    to: '/my_profile',
    name: 'My Profile',
    exact: true,
    Icon: MdOutlineNavigateNext,
  },
  { to: '/roles', name: 'Roles', exact: true, Icon: MdOutlineNavigateNext },
  { to: '/users', name: 'Users', exact: true, Icon: MdOutlineNavigateNext },
  { to: '/config', name: 'Config', exact: true, Icon: MdOutlineNavigateNext },
  {
    to: '/razorpay_credentials',
    name: 'Razorpay Credentials',
    exact: true,
    Icon: MdOutlineNavigateNext,
  },
];

const DonorEmailItem = [
  {
    to: '/donor_email',
    name: 'Donor Email',
    exact: true,
    Icon: MdOutlineEmail,
  },
];
const LogoutItems = [
  { to: '/', name: 'Log out', exact: true, Icon: MdOutlineLogout },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMaster: false,
      isOpenDonor: false,
      isOpenNgo: false,
      isOpenProjects: false,
      isOpenAccounts: false,
      isOpenSettings: false,
    };
  }
  handleLogout = props => {
    localStorage.removeItem('Token');
    window.location.replace('/');
  };

  handleClick = name => () => {
    console.log('NAmes', name);

    if (name == 'Master') {
      this.setState({
        isOpenMaster: !this.state.isOpenMaster,
        isOpenDonor: false,
        isOpenNgo: false,
        isOpenProjects: false,
        isOpenAccounts: false,
        isOpenSettings: false,
      });
    } else if (name == 'Donor') {
      this.setState({
        isOpenMaster: false,
        isOpenDonor: !this.state.isOpenDonor,
        isOpenNgo: false,
        isOpenProjects: false,
        isOpenAccounts: false,
        isOpenSettings: false,
      });
    } else if (name == 'Ngo') {
      this.setState({
        isOpenMaster: false,
        isOpenDonor: false,
        isOpenNgo: !this.state.isOpenNgo,
        isOpenProjects: false,
        isOpenAccounts: false,
        isOpenSettings: false,
      });
    } else if (name == 'Projects') {
      this.setState({
        isOpenMaster: false,
        isOpenDonor: false,
        isOpenNgo: false,
        isOpenProjects: !this.state.isOpenProjects,
        isOpenAccounts: false,
        isOpenSettings: false,
      });
    } else if (name == 'Accounts') {
      this.setState({
        isOpenMaster: false,
        isOpenDonor: false,
        isOpenNgo: false,
        isOpenProjects: false,
        isOpenAccounts: !this.state.isOpenAccounts,
        isOpenSettings: false,
      });
    } else if (name == 'Settings') {
      this.setState({
        isOpenMaster: false,
        isOpenDonor: false,
        isOpenNgo: false,
        isOpenProjects: false,
        isOpenAccounts: false,
        isOpenSettings: !this.state.isOpenSettings,
      });
    }
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} />
        <div className={bem.e('content')}>
          <Nav vertical>
            {dashboardItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem
                key={index}
                className={bem.e('nav-item myNestedListItems')}
              >
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span style={{ fontSize: '1rem' }}>{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Master')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdOutlineAdminPanelSettings
                    className={bem.e('nav-item-icon')}
                  />
                  <span className=" align-self-start">Master</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenMaster
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>

            <Collapse isOpen={this.state.isOpenMaster}>
              {masterItems.map(({ to, name, exact, Icon }, index) => (
                <NavItem
                  key={index}
                  className={bem.e('nav-item myNestedListItems')}
                >
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Donor')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdVolunteerActivism className={bem.e('nav-item-icon')} />
                  <span className="">Donor</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenDonor
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenDonor}>
              {donorItems.map(({ to, name, exact, Icon }, index) => (
                <NavItem
                  key={index}
                  className={bem.e('nav-item myNestedListItems')}
                >
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Ngo')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdOutlineInsertEmoticon className={bem.e('nav-item-icon')} />
                  <span className="">NGO</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenNgo
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenNgo}>
              {NGO_Item.map(({ to, name, exact, Icon }, index) => (
                <NavItem
                  key={index}
                  className={bem.e('nav-item myNestedListItems')}
                >
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Projects')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExtension className={bem.e('nav-item-icon')} />
                  <span className="align-self-start">Projects</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenProjects
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>

            <Collapse isOpen={this.state.isOpenProjects}>
              {ProjectItems.map(({ to, name, exact, Icon }, index) => (
                <NavItem
                  key={index}
                  className={bem.e('nav-item myNestedListItems')}
                >
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Accounts')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdAccountBalanceWallet className={bem.e('nav-item-icon')} />
                  <span className="align-self-start">Accounts</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenAccounts
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenAccounts}>
              {accountsItems.map(({ to, name, exact, Icon }, index) => (
                <NavItem
                  key={index}
                  className={bem.e('nav-item myNestedListItems')}
                >
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Settings')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdOutlineSettings className={bem.e('nav-item-icon')} />
                  <span className="align-self-start">Setting</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenSettings
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>

            <Collapse isOpen={this.state.isOpenSettings}>
              {SettingItems.map(({ to, name, exact, Icon }, index) => (
                <NavItem
                  key={index}
                  className={bem.e('nav-item myNestedListItems')}
                >
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            {DonorEmailItem.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
            {LogoutItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                  onClick={this.handleLogout}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
