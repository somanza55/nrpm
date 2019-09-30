import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';
import configureStore from 'store';


class Reportproposal extends React.Component {

  render() {
    const store = configureStore();
    const authUser = JSON.parse(store.getState().auth.authUser);
    console.log("test", store.getState().auth)

    return (
      <div className="animated slideInUpTiny animation-duration-3">
        <div className="app-wrapper">
          <ContainerHeader match={this.props.match} title={<IntlMessages id="sidebar.reportprop" />} />
          <div className="shadow border-0 card">
            <div className="card-header py-0">
              <div style={{ marginTop: 6 }}>
                <div className="row">
                  <h4><span class="zmdi zmdi-format-list-bulleted zmdi-hc-2x"></span></h4>
                  <div style={{ marginTop: 5 }}><h4><b style={{ paddingLeft: 7 }}><IntlMessages id="sidebar.reportprop" /></b></h4></div>
                </div>
              </div>
              </div>
              <div className="card-body">
              <i class="zmdi zmdi-forward"></i><a href="#" style={{paddingLeft:10}}>รายงานสรุปการเสนอขอทุนวิจัย จำแนกตามทุนวิจัย</a><br></br>
              <i class="zmdi zmdi-forward"></i><a href="#" style={{paddingLeft:10}}>รายงานสรุปการเสนอขอทุนวิจัย จำแนกตามหน่วยงานนักวิจัย</a>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Reportproposal;