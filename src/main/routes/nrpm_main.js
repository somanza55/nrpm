import React, { Fragment } from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';
import configureStore from 'store';
import CardBox from 'components/CardBox/index';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { textAlign } from '@material-ui/system';
import { Table } from 'reactstrap';
import axios from 'axios';


class nrpm_main extends React.Component {
    state={
        prop: null
      }
      componentDidMount() {
        this.getdata();
      }
      getdata = () => {
        const store = configureStore();
        const token = store.getState().auth.token;
          axios.get(`http://localhost:5025/v1/Search/ProposalList`,
          { headers: { 
            Authorization: 'Bearer'+" "+token+''   } 
                })
          .then(res => {
            this.setState({prop : res.data });;
            console.log("data",test);
          })
      }
    render() {
        const store = configureStore();
        const authUser = JSON.parse(store.getState().auth.authUser);
        console.log("test", store.getState().auth)
        return (
            <Fragment>
                <div className="animated slideInUpTiny animation-duration-3">
                    <div className="app-wrapper">
                        <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage" />} />
                        <div className="form-horizontal">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <div className="shadow border-0 card">
                                        <div className="card-header">
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <div className="row">
                                                    <div style={{ marginLeft: 15, marginTop: 7 }}>
                                                        <b>ปี :</b>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <select className="form-control" id="ficalyear" name="ficalyear">
                                                            <option selected="selected" value="2562">2562</option>
                                                            <option value="2561">2561</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="table-responsive-material">
                                                <Table bordered>
                                                    <tbody>
                                                        <tr>
                                                            <th rowspan="2" scope="col" style={{ textAlign: "center", verticalAlign: "middle" }}>ลำดับ</th>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>กระทรวง</b></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>ประเภทหน่วยงาน</b></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>หน่วยงาน</b></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>จำนวนโครงการวิจัย</b></td>
                                                            <td align="center" colspan="3" style={{ textAlign: "center", verticalAlign: "middle" }}><b>งบประมาณ (บาท)</b></td>
                                                            <td align="center" colspan="4" style={{ textAlign: "center", verticalAlign: "middle" }}><b>จำนวน (คน)</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}><b>ทุนเงินงบประมาณแผ่นดิน</b></td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}><b>ทุนเงินไม่ใช่งบประมาณแผ่นดิน</b></td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}><b>คชจ.R&amp;D</b></td><td align="center"><b>บุคลากร</b></td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}><b>นักวิจัย</b></td><td align="center"><b>ผู้ช่วยนักวิจัย</b></td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}><b>ผู้ทำงานสนับสนุนการวิจัย</b></td>
                                                        </tr>
                                                        <tr>
                                                        <td>1</td>
                                                            <td>บริษัท/อื่นๆ</td>
                                                            <td>ภาคเอกชน</td>
                                                            <td>กองประเมินผลจัดการความรู้การวิจัย (กปจ.)</td>
                                                            <td>14</td>
                                                            <td></td>
                                                            <td>5,400,000</td>
                                                            <td>5,400,000</td>
                                                            <td>18</td>
                                                            <td>18</td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }
}
export default nrpm_main;





