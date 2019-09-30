import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';
import configureStore from 'store';
import CardBox from 'components/CardBox/index';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { textAlign } from '@material-ui/system';


class Reporting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    }
  }
  toggleHidden () {
    this.setState({
      isHidden:  !this.state.isHidden,
    })
  }
  render() {
    const store = configureStore();
    const authUser = JSON.parse(store.getState().auth.authUser);
    console.log("test", store.getState().auth)
    
    return (
      <div className="animated slideInUpTiny animation-duration-3">
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={<IntlMessages id="title.reporting"/>}/>
        <div className="form-group">
          <div className="row">
            <div className="col-lg-4">
              <div style={{textAlign:"right",marginTop:10}}><h5><strong>ปีงบประมาณ :</strong></h5></div>
            </div>
            <div>
              <select className="form-control" style={{width:150}}>
                  <option selected="selected" value="2563">2563</option>
                  <option value="2562">2562</option>
                  <option value="2561">2561</option>
                  <option value="2560">2560</option>
                  <option value="2559">2559</option>
                  <option value="2558">2558</option>
              </select>
            </div>
          </div>
        </div>
        <div className="shadow border-0 card">
            <div className="card-header py-0">
              <div style={{ marginTop: 6 }}>
                <div className="row">
                  <h4><span class="zmdi zmdi-tag zmdi-hc-2x"></span></h4>
                  <div style={{ marginTop: 5 }}><h4><b style={{ paddingLeft: 7 }}><IntlMessages id="hd.report1" /></b></h4></div>
                  <div className="form-btnright">
                  <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden()} ></i>
                  </div>
                </div>
              </div>
            </div>
            {!this.state.isHidden &&<p>
            <CardBox styleName="col-12" cardStyle="p-0">
                  <div className="table-responsive-material">
                    <Table>
                      <TableHead className="card-header py-1">
                        <TableRow>
                          <TableCell align="center" rowSpan='2'>แหล่งทุน</TableCell>
                          <TableCell align="center" rowSpan='2'>โครงการ</TableCell>
                          <TableCell align="center" rowSpan='2'>งบจัดสรร</TableCell>
                          <TableCell align="center" colSpan='4'>รายงานการเบิกจ่าย
                          <TableCell align="center">เดือน</TableCell>
                          <TableCell align="center">ใช้จ่ายแล้ว</TableCell>
                          <TableCell align="center">คิดเป็นร้อยละ	</TableCell>
                          <TableCell align="center">วันที่รายงาน</TableCell>
                          </TableCell>
                          <TableCell align="right" rowSpan='2'></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell align="left" style={{textAlign:"left",width:400,height:50}} >การคมนาคมขนส่งระบบราง</TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"> </TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"><a href="./ReportingUI" className="zmdi zmdi-book" style={{color:'black'}}></a></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left" style={{textAlign:"left",width:400,height:50}} >การบริหารจัดการการท่องเที่ยว</TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"> </TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"><a href="./ReportingUI" className="zmdi zmdi-book" style={{color:'black'}}></a></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left" style={{textAlign:"left",width:400,height:50}} >การเปลี่ยนแปลงสภาพภูมิอากาศ</TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"> </TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"><a href="./ReportingUI" className="zmdi zmdi-book" style={{color:'black'}}></a></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left" style={{textAlign:"left",width:400,height:50}} >การพัฒนาศักยภาพผู้สูงอายุและคนพิการ</TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"> </TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"><a href="./ReportingUI" className="zmdi zmdi-book" style={{color:'black'}}></a></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left" style={{textAlign:"left",width:400,height:50}} >ทุนวิจัยมุ่งเป้า ปีงบประมาณ 2563 คลัสเตอร์ ข้าว</TableCell>
                          <TableCell align="center">2</TableCell>
                          <TableCell align="center">425,000</TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"><a href="./ReportingUI" className="zmdi zmdi-book" style={{color:'black'}}></a></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left" style={{textAlign:"left",width:400,height:50}} ></TableCell>
                          <TableCell align="center">2</TableCell>
                          <TableCell align="center">425,000</TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>  
                  </div>
                  </CardBox>
              </p>}
          </div>
      </div>
      </div>
    );
  }
}

export default Reporting;