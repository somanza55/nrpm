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

class RnD_Management extends React.Component {
    render() {
        const store = configureStore();
        const authUser = JSON.parse(store.getState().auth.authUser);
        console.log("test", store.getState().auth)
        return (
            <Fragment>
                <div className="animated slideInUpTiny animation-duration-3">
                    <div className="app-wrapper">
                        <ContainerHeader match={this.props.match} title={<IntlMessages id="ข้อมูลค่าใช้งจ่าย.ค่าใช้จ่าย" />} />
                        <div className="form-horizontal">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <div className="shadow border-0 card">
                                        <div className="card-header py-2">
                                            <b>
                                                <i class="zmdi zmdi-search"></i>&nbsp;&nbsp;<IntlMessages id="ค้นหาข้อมูลค่าใช้จ่าย.ค้นหา" />
                                            </b>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-3" style={{ textAlign: "right", marginTop: 4 }}>
                                                    <b>ค้นหาช้อมูล</b>
                                                </div>
                                                <div style={{ marginTop: 5, marginLeft: 15 }}>
                                                    <input type="radio"></input>
                                                </div>
                                                <span style={{ marginTop: 4 }}>โครงการวิจัย</span>
                                                &nbsp;&nbsp;&nbsp;
                                                    <div style={{ marginTop: 5 }}>
                                                    <input type="radio"></input>
                                                </div>
                                                <span style={{ marginTop: 4 }}>บุคลากรการวิจัย</span>
                                                &nbsp;&nbsp;&nbsp;
                                                    <div style={{ marginTop: 5 }}>
                                                    <input type="radio"></input>
                                                </div>
                                                <span style={{ marginTop: 4 }}>วิทยานิพนธ์</span>
                                            </div>
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
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                        <b>ชื่อ/รหัสโครงการ</b>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                        <b>ชื่อ/รหัสหัวหน้าโครงการ</b>
                                                    </div>
                                                    <div className="col-lg-4">
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
                                                <div className="row">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 4 }}>
                                                    </div>
                                                    <div style={{ marginTop: 5, marginLeft: 15 }}>
                                                        <input type="checkbox"></input>
                                                    </div>
                                                    <span style={{ marginTop: 4 }}>ค้นหาข้อมูลที่ถูกลบ</span>
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
                                        <div className="card-header py-2">
                                            <b>
                                                <i class="zmdi zmdi-tag"></i>&nbsp;&nbsp;<IntlMessages id="ข้อมูลค่าใช้จ่าย.ข้อมูล" />
                                            </b>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive-material">
                                                <div style={{ textAlign: "right", marginBottom: 10 }}>
                                                    <span>พบข้อมูลทั้งสิ้น 1 รายการ</span>
                                                </div>
                                                <Table bordered>
                                                    <tbody className="card-header">
                                                        <tr>
                                                            <th style={{ textAlign: "center", verticalAlign: "middle" }}>รหัส</th>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle", width: 385 }}><b>ชื่อโครงการ/วิทยานิพนธ์</b></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle", width: 210 }}><b>ผู้รับผิดชอบ</b></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle", width: 195 }}><b>หน่วยงาน	</b></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>งบใช้จ่าย	</b></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>จัดการ</b></td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>103</td>
                                                            <td style={{ textAlign: "left", verticalAlign: "middle" }}>
                                                                <span><b>ชื่อโครงการ :</b></span>
                                                                <span>&nbsp;งานติดตามงบประมาณโครงการวิจัยของหน่วยงานภาครัฐที่ได้รับจัดสรรงบประมาณรายจ่าย ทดสอบ</span><br></br>
                                                                <span><b>ปี:</b></span>
                                                                <span>2562</span>
                                                            </td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>นางสาวแพรวพรรณ เดื่อไธสง</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>สำนักงานการวิจัยแห่งชาติ (กมว.)(หน่วยงานดูแลระบบ)</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}></td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                <i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi zmdi-close-circle zmdi-hc-2x" style={{ color: 'red' }}></i>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                                    <div style={{textAlign:"center"}}>
                                                        <button>1</button>
                                                        <button>2</button>
                                                        <button>3</button>
                                                        <button>4</button>
                                                    </div>
                                                <div className="pageControlLeft">
                                                    <span><b style={{ color: 'blue', marginLeft: 5 }}>จำนวนรายการต่อหน้า :</b></span>
                                                    <br></br>
                                                    <select className="form-control">
                                                        <option selected="selected" value="20">20</option>
                                                        <option value="30">30</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                    </select>
                                                </div>
                                                <div className="pageControlRight">
                                                    <button className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained">Show All Reccord</button>
                                                </div>

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
export default RnD_Management;