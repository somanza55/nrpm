import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

class Report extends React.Component {
  render() {
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
              <i class="zmdi zmdi-forward"></i><a href="#" style={{paddingLeft:10}}>รายงานสถานภาพการปิดโครงการ (ทุน วช.)</a><br></br>
              <i class="zmdi zmdi-forward"></i><a href="#" style={{paddingLeft:10}}>รายงานสถานภาพการปิดโครงการ (ทุนวิจัยมุ่งเป้าและทุนท้าทายไทย)</a>
            </div>
            
          </div>
        </div>
        </div>
    );
  }
}

export default Report;