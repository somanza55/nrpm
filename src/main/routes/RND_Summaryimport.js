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

class RND_Summaryimport extends React.Component {
    render() {
        const store = configureStore();
        const authUser = JSON.parse(store.getState().auth.authUser);
        console.log("test", store.getState().auth)
        return (
            <Fragment>
                <div className="animated slideInUpTiny animation-duration-3">
                    <div className="app-wrapper">
                        <ContainerHeader match={this.props.match} title={<IntlMessages id="เมนู.สรุปการนำเข้า" />} />
                        <div className="form-horizontal">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <div className="shadow border-0 card">
                                        <div className="card-header">
                                            <b>
                                                <i class="zmdi zmdi-search"></i>&nbsp;&nbsp;<IntlMessages id="ค้นหา.สรุปการนำเข้า" />
                                            </b>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                        <b>ปี</b>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <select className="form-control">
                                                            <option selected="selected" value="">--= ไม่ระบุ </option>
                                                            <option value="2562">2562</option>
                                                            <option value="2561">2561</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 4 }}>
                                                        <select className="form-control">
                                                            <option value="1">รหัสหน่วยงาน</option>
                                                            <option value="2">ชื่อหน่วยงาน</option>
                                                            <option value="3">ประเภทหน่วยงาน</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-4" style={{ marginTop: 4 }}>
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 4 }}>
                                                        <b>สถานะงาน</b>
                                                    </div>
                                                    <div style={{ marginTop: 5, marginLeft: 15 }}>
                                                        <input type="checkbox"></input>
                                                    </div>
                                                    <span style={{ marginTop: 4 }}>ส่ง วช.แล้ว</span>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <div style={{ marginTop: 5 }}>
                                                        <input type="checkbox"></input>
                                                    </div>
                                                    <span style={{ marginTop: 4 }}>ยังไม่ส่ง วช.</span>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-Default text-black MuiButton-contained">ค้นหา</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="shadow border-0 card">
                                        <div className="card-header">
                                            <b>
                                                <i class="zmdi zmdi-tag"></i>&nbsp;&nbsp;<IntlMessages id="เมนู.สรุปการนำเข้า" />
                                            </b>
                                            <div className="form-btnright" style={{ marginTop: 3 }}>
                                                <b>พบข้อมูลทั้งสิ้น 2 รายการ</b>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive-material">
                                                <Table bordered>
                                                    <tbody>
                                                        <tr>
                                                            <th rowspan="2" scope="col" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">หน่วยงาน</a></th>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>จำนวนโครงการ</b></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>งบประมาณใช้จ่าย</b></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>จำนวนบุคลากร	</b></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>จำนวนวิทยานิพนธ์	</b></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>งบวิทยานิพนธ์</b></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>รวมงบ</b></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>สถานะ</b></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>รายงานส่ง วช.</b></td>      
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>สำนักงานการวิจัยแห่งชาติ (กมว.)(หน่วยงานดูแลระบบ)</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>18</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>14,907,500</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>14</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>5</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>300,500</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>14,907,500</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>ส่ง วช.แล้ว</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>1 | 2 | 3</td>
                                                            
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
export default RND_Summaryimport;