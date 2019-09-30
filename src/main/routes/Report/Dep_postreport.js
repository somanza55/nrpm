import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';
import configureStore from 'store';


class Deppostreport extends React.Component {

  render() {
    const store = configureStore();
    const authUser = JSON.parse(store.getState().auth.authUser);
    console.log("test", store.getState().auth)
    
    return (
      <div className="animated slideInUpTiny animation-duration-3">
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={<IntlMessages id="title.Report"/>}/>
        <div className="shadow border-0 card">
            <div className="card-header py-0">
              <div style={{ marginTop: 6 }}>
                <div className="row">
                  <h4><span class="zmdi zmdi-format-list-bulleted zmdi-hc-2x"></span></h4>
                  <div style={{ marginTop: 5 }}><h4><b style={{ paddingLeft: 7 }}><IntlMessages id="hd.report" /></b></h4></div>
                </div>
              </div>
              </div>
              <div className="card-body">
              <i class="zmdi zmdi-forward"></i><a href="./Report/Report_EOOdep" style={{paddingLeft:10}}>รายงานผลการนำเข้าข้อมูล Expected Output/Outcome (EOO) จำแนกรายโครงการ ภายใต้หน่วยงานระดับกรม</a><br></br>
              <i class="zmdi zmdi-forward"></i><a href="#" style={{paddingLeft:10}}>รายงานแบบเลือกคอลัมน์</a>
            </div>
            
          </div>
        </div>
        </div>
    );
  }
}

export default Deppostreport;