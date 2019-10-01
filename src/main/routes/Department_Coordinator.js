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

class Department_Coordinator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            isHidden3: true
        }
    };
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden,
        })
    }
    toggleHidden2() {
        this.setState({
            isHidden2: !this.state.isHidden2,
            isHidden: true
        })
    }
    toggleHidden3() {
        this.setState({
            isHidden3: !this.state.isHidden3,
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
                        <ContainerHeader match={this.props.match} title={<IntlMessages id="เจ้าหน้าที่.ในหน่วยงาน" />} />
                        <div className="form-horizontal">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <div className="shadow border-0 card">
                                        <div className="card-header py-2">
                                            <div style={{ marginTop: 6 }}>
                                                <div className="row">
                                                    <span class="zmdi zmdi-format-list-bulleted zmdi-hc-2x"></span>
                                                    <div style={{ marginTop: 5 }}><b style={{ paddingLeft: 7 }}><IntlMessages id="เจ้าหน้าที่.ในหน่วยงาน" /></b></div>
                                                </div>
                                            </div>
                                            <div className="txtfrm">
                                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-Default text-black MuiButton-contained"><i class="zmdi zmdi-plus-circle" ></i>&nbsp;<a href="./Department_CoordinatorUI" style={{color:'black'}}>เพิ่ม</a></button>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 5 }}>
                                                        <select className="form-control">
                                                            <option selected="selected" value="1">ชื่อ</option>
                                                            <option value="4">Username</option>
                                                            <option value="2">เลขหมายบัตรประจำตัวประชาชน</option>
                                                            <option value="5">e-mail</option>
                                                            <option value="3">ID</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-6" style={{marginTop:3}}>
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 5 }}>
                                                        <b>กลุ่มผู้ใช้งาน</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <select className="form-control">
                                                            <option value="">--= ไม่ระบุ </option>
                                                            <option selected="selected" value="95">เจ้าหน้าที่ ดัชนีค่าใช้จ่าย (กปจ.)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-Default text-black MuiButton-contained" onClick={() => this.toggleHidden3()}>ค้นหา</button>
                                                    </div>
                                                </div>
                                                    <div style={{ textAlign: "right" }}>
                                                        พบข้อมูลทั้งสิ้น 0 รายการ
                                                    </div>
                                                    {/* <div className="table-responsive-material">
                                                        <Table bordered>
                                                            <tbody>
                                                                <tr className="card-header">
                                                                    <th rowspan="2" scope="col" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">จัดการ</a></th>
                                                                    <th rowspan="2" scope="col" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">ช่วง</a></th>
                                                                    <th rowspan="2" scope="col" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">ระดับ</a></th>
                                                                    <th rowspan="2" scope="col" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">หน่วยงาน	</a></th>
                                                                    <th rowspan="2" scope="col" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">ปี</a></th>
                                                                    <th rowspan="2" scope="col" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">เงินเดือน</a></th>
                                                                </tr>
                                                            </tbody>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}><i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi zmdi-close-circle zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>ช่วง 1 (อายุ ต่ำกว่า 25 ปี)</td>
                                                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>ปริญญาตรี</td>
                                                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>หน่วยงานภาครัฐ</td>
                                                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>2562</td>
                                                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>13,810.00</td>
                                                                </tr>

                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                <hr></hr>
                                                {!this.state.isHidden &&
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 6 }}>
                                                                <b>ปีงบประมาณ</b>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input type="text" className="form-control"></input>
                                                            </div>
                                                        </div>
                                                        <div className="row py-1">
                                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 5 }}>
                                                                <b>ประเภทหน่วยงาน</b>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <select className="form-control">
                                                                    <option value="-1">--= กรุณาเลือก </option>
                                                                    <option value="1">หน่วยงานภาครัฐ</option>
                                                                    <option value="2">หน่วยงานภาคเอกชน</option>
                                                                    <option value="3">หน่วยงานรัฐวิสาหกิจ</option>
                                                                    <option value="4">หน่วยงานภาคอุดมศึกษา</option>
                                                                    <option value="5">หน่วยงานเอกชนไม่ค้ากำไร (มูลนิธิ สมาคม)</option>
                                                                    <option value="6">ทุนส่วนตัว</option>
                                                                    <option value="7">ทุนต่างประเทศ</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row py-1">
                                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 5 }}>
                                                                <b>ช่วงอายุ</b>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <select className="form-control">
                                                                    <option value="-1">--= กรุณาเลือก </option>
                                                                    <option value="1">ช่วง 1 (อายุ ต่ำกว่า 25 ปี) </option>
                                                                    <option value="2">ช่วง 2 (อายุ 25 - 34  ปี) </option>
                                                                    <option value="3">ช่วง 3 (อายุ 35 - 44  ปี) </option>
                                                                    <option value="4">ช่วง 4 (อายุ 45 - 54  ปี) </option>
                                                                    <option value="5">ช่วง 5 (อายุ 55 - 64  ปี) </option>
                                                                    <option value="6">ช่วง 6 (อายุ 65 ปีขึ้นไป) </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row py-1">
                                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 5 }}>
                                                                <b>ระดับปริญญา</b>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <select className="form-control">
                                                                    <option value="-1">--= กรุณาเลือก </option>
                                                                    <option value="0">ปริญญาตรี</option>
                                                                    <option value="1">ปริญญาโท</option>
                                                                    <option value="2">ปริญญาเอก</option>
                                                                    <option value="3">Post-Doctoral</option>
                                                                    <option value="4">ปริญญาโท-เอก</option>
                                                                    <option value="10">-ไม่ระบุ-</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row py-1">
                                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 5 }}>
                                                                <b>เงินเดือน</b>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <input type="text" className="form-control"></input>
                                                            </div>
                                                            <span style={{ marginTop: 5 }}>บาท</span>
                                                        </div>
                                                        <div className="row py-1">
                                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-info text-white MuiButton-contained">บันทึก</button>
                                                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-Default text-black MuiButton-contained" onClick={() => this.toggleHidden2()}>ยกเลิก</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                } */}
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
export default Department_Coordinator;