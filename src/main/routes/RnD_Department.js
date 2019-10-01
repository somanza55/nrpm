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

class RnD_Department extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            isHidden2: true
        }
    }
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden,
        })
    }
    toggleHidden2() {
        this.setState({
            isHidden2: !this.state.isHidden2,
            isHidden:false
        })
    }
    toggleHidden3() {
        this.setState({
            isHidden2: !this.state.isHidden2,
            isHidden2:true
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
                        <ContainerHeader match={this.props.match} title={<IntlMessages id="จัดการ.ประเภทหน่วนงาน" />} />
                        <div className="form-horizontal">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <div className="shadow border-0 card">
                                        <div className="card-header py-2">
                                            <b>
                                                <IntlMessages id="ค้นหา.จัดการประเภทหน่วยงาน" />
                                            </b>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 4 }}>
                                                        <select className="form-control">
                                                            <option selected="selected" value="1">รหัสหน่วยงาน</option>
                                                            <option value="2">ชื่อหน่วยงาน</option>
                                                            <option value="3">รหัสกระทรวง</option>
                                                            <option value="4">ชื่อกระทรวง</option>
                                                            <option value="5">ประเภทหน่วยงาน</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-6" style={{ marginTop: 4 }}>
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-Default text-black MuiButton-contained">ค้นหา</button>
                                                    </div>
                                                </div>

                                            </div>
                                            <hr></hr>
                                            <div style={{ textAlign: "right" }}>
                                                <b>พบข้อมูลทั้งสิ้น 2 รายการ</b>
                                            </div>
                                            <div className="table-responsive-material">
                                                <Table bordered>
                                                    <tbody>
                                                        <tr>
                                                            <th rowspan="2" scope="col" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">กระทรวง</a></th>
                                                            <th rowspan="2" scope="col" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">รหัสหน่วยงาน</a></th>
                                                            <th rowspan="2" scope="col" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">ชื่อหน่วยงาน</a></th>
                                                            <th rowspan="2" scope="col" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">รหัสประเภทหน่วยงาน	</a></th>
                                                            <th rowspan="2" scope="col" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">ประเภทหน่วยงาน</a></th>
                                                            <th rowspan="2" scope="col" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>แก้ไข</b></th>
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>สำนักนายกรัฐมนตรี</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>1</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>สำนักงานปลัดสำนักนายกรัฐมนตรี</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>1</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>หน่วยงานภาครัฐ</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}><a  className="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }} onClick={() => this.toggleHidden2()}></a></td>

                                                        </tr>

                                                    </tbody>
                                                </Table>
                                                <div style={{ textAlign: "center" }}>
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
                                    {!this.state.isHidden && <p>
                                        <div className="shadow border-0 card">
                                            <div className="card-header py-2">
                                                <b>
                                                    <IntlMessages id="แก้ไข.แก้ไขกลุ่มหน่วยงาน" />
                                                </b>
                                            </div>
                                            <div className="card-body">
                                                {!this.state.isHidden2 && <p>
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-lg-3" style={{ textAlign: "right" }}>
                                                                <b>หน่วยงาน :</b>
                                                            </div>
                                                            <div className="col-lg-5">
                                                                <span>1 - สำนักงานปลัดสำนักนายกรัฐมนตรี</span>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="row py-1">
                                                                <div className="col-lg-3" style={{ textAlign: "right" }}>
                                                                    <b>ประเภทหน่วยงาน :</b>
                                                                </div>
                                                                <div className="col-lg-5">
                                                                    <select className="form-control">
                                                                        <option value="-1">--= กรุณาเลือก </option>
                                                                        <option selected="selected" value="1">หน่วยงานภาครัฐ</option>
                                                                        <option value="2">หน่วยงานภาคเอกชน</option>
                                                                        <option value="3">หน่วยงานรัฐวิสาหกิจ</option>
                                                                        <option value="4">หน่วยงานภาคอุดมศึกษา</option>
                                                                        <option value="5">หน่วยงานเอกชนไม่ค้ากำไร (มูลนิธิ สมาคม)</option>
                                                                        <option value="6">ทุนส่วนตัว</option>
                                                                        <option value="7">ทุนต่างประเทศ</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <button className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained">บันทึก</button>
                                                                    <button className="MuiButtonBase-root MuiButton-root jr-btn bg-danger text-white MuiButton-contained" onClick={() => this.toggleHidden3()}>ยกเลิก</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </p>}
                                            </div>
                                        </div>
                                    </p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }
}
export default RnD_Department;    