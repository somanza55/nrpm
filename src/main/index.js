import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from 'components/Header/index';
import Sidebar from 'containers/SideNav/index';
import Footer from 'components/Footer';
import Tour from '../components/Tour/index';
import {
  ABOVE_THE_HEADER,
  BELOW_THE_HEADER,
  COLLAPSED_DRAWER,
  FIXED_DRAWER,
  HORIZONTAL_NAVIGATION,
} from 'constants/ActionTypes';
import {isIOS, isMobile} from 'react-device-detect';
import asyncComponent from '../util/asyncComponent';
import TopNav from 'components/TopNav';

class App extends React.Component {

  render() {
    const {match, drawerType, navigationStyle, horizontalNavPosition} = this.props;
    const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'fixed-drawer' : drawerType.includes(COLLAPSED_DRAWER) ? 'collapsible-drawer' : 'mini-drawer';

    //set default height and overflow for iOS mobile Safari 10+ support.
    if (isIOS && isMobile) {
      document.body.classList.add('ios-mobile-view-height')
    }
    else if (document.body.classList.contains('ios-mobile-view-height')) {
      document.body.classList.remove('ios-mobile-view-height')
    }

    return (
      <div className={`app-container ${drawerStyle}`}>

        <Sidebar/>
        <div className="app-main-container">
          <div
            className={`app-header ${navigationStyle === HORIZONTAL_NAVIGATION ? 'app-header-horizontal' : ''}`}>
            {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === ABOVE_THE_HEADER) &&
            <TopNav styleName="app-top-header"/>}
            <Header/>
            {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === BELOW_THE_HEADER) &&
            <TopNav/>}
          </div>

          <main className="app-main-content-wrapper">
            <div className="app-main-content">
              <Switch>
                <Route path={`${match.url}/sample-page`} component={asyncComponent(() => import('./routes/SamplePage'))}/>
                <Route path={`${match.url}/nrpm_main`} component={asyncComponent(() => import('./routes/nrpm_main'))}/>
                <Route path={`${match.url}/RND_Manageimport`} component={asyncComponent(() => import('./routes/RND_Manageimport'))}/>
                <Route path={`${match.url}/RND_Summaryimport`} component={asyncComponent(() => import('./routes/RND_Summaryimport'))}/>
                <Route path={`${match.url}/RnD_Management`} component={asyncComponent(() => import('./routes/RnD_Management'))}/>
                <Route path={`${match.url}/RnDposition`} component={asyncComponent(() => import('./routes/RnDposition'))}/>
                <Route path={`${match.url}/RnDAllowance`} component={asyncComponent(() => import('./routes/RnDAllowance'))}/>
                <Route path={`${match.url}/RnDPeriodAge`} component={asyncComponent(() => import('./routes/RnDPeriodAge'))}/>
                <Route path={`${match.url}/RnD_ManageSalary`} component={asyncComponent(() => import('./routes/RnD_ManageSalary'))}/>
                <Route path={`${match.url}/RnD_ManageFTE`} component={asyncComponent(() => import('./routes/RnD_ManageFTE'))}/>
                <Route path={`${match.url}/RnDThesisPrivateBG`} component={asyncComponent(() => import('./routes/RnDThesisPrivateBG'))}/>
                <Route path={`${match.url}/RnD_Department`} component={asyncComponent(() => import('./routes/RnD_Department'))}/>
                <Route path={`${match.url}/RnD_Faculty`} component={asyncComponent(() => import('./routes/RnD_Faculty'))}/>
                <Route path={`${match.url}/Department_Coordinator`} component={asyncComponent(() => import('./routes/Department_Coordinator'))}/>
                <Route path={`${match.url}/Department_CoordinatorUI`} component={asyncComponent(() => import('./routes/Department_CoordinatorUI'))}/>
                <Route path={`${match.url}/RnD_ReportList`} component={asyncComponent(() => import('./routes/Report/RnD_ReportList'))}/>
                <Route component={asyncComponent(() => import('components/Error404'))}/>
              </Switch>
            </div>
            <Footer/>
          </main>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({settings}) => {
  const {drawerType, navigationStyle, horizontalNavPosition} = settings;
  return {drawerType, navigationStyle, horizontalNavPosition}
};
export default withRouter(connect(mapStateToProps)(App));