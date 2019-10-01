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

class RnDThesisPrivateBG extends React.Component {
    render() {
        const store = configureStore();
        const authUser = JSON.parse(store.getState().auth.authUser);
        console.log("test", store.getState().auth)
        return (
            <Fragment>
                <div className="animated slideInUpTiny animation-duration-3">
                    <div className="app-wrapper">
                        <ContainerHeader match={this.props.match} title={<IntlMessages id="จัดการ.ทุนส่วนตัวของวิทยานิพนธ์" />} />
                        <div className="form-horizontal">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <div className="shadow border-0 card">
                                        <div className="card-header py-2">
                                            <b>
                                                <IntlMessages id="จัดการ.ทุนส่วนตัวของวิทยานิพนธ์" />
                                            </b>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                        <b>ปี</b>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <select className="form-control">
                                                            <option selected="selected" value="">--= ไม่ระบุ </option>
                                                            <option value="2562">2562</option>
                                                            <option value="2561">2561</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                        <b>OECD</b>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <select className="form-control">
                                                            <option selected="selected" value="">--= ไม่ระบุ </option>
                                                            <option value="2562">2562</option>
                                                            <option value="2561">2561</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                        <b>ระดับปริญญา</b>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <select className="form-control">
                                                            <option selected="selected" value="">--= ไม่ระบุ </option>
                                                            <option value="2562">2562</option>
                                                            <option value="2561">2561</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-primary text-white MuiButton-contained">ค้นหา</button>
                                                    </div>
                                                </div>
                                                <div style={{ textAlign: "right" }}>
                                                    <span>พบข้อมูลทั้งสิ้น 4 รายการ</span>
                                                </div>
                                                <br></br>
                                                <div className="table-responsive-material">
                                                    <Table bordered>
                                                        <tbody>
                                                            <tr className="card-header">
                                                                <th rowspan="2" scope="col" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#"><b>ปี</b></a></th>
                                                                <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#"><b>OECD</b></a></td>
                                                                <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#"><b>ระดับ</b></a></td>
                                                                <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#"><b>งบประมาณ (บาท)</b></a></td>
                                                                <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#"><b>แก้ไข</b></a></td>
                                                            </tr>
                                                        </tbody>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>2562</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>วิทยาศาสตร์ธรรมชาติ</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>ปริญญาโท</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>100,000</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}><i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi  zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>2562</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>วิทยาศาสตร์ธรรมชาติ</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>ปริญญาเอก</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>150,000</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}><i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi  zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>2562</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>วิศวกรรมและเทคโนโลยี</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>ปริญญาโท</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>100,000</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}><i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi  zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                            </tr>

                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shadow border-0 card">
                                        <div className="card-header">
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 5 }}>
                                                        <b>ปี</b>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <select className="form-control">
                                                            <option selected="selected" value="-1">--= กรุณาเลือก </option>
                                                            <option value="2562">2562</option>
                                                            <option value="2561">2561</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 5 }}>
                                                        <b>OECD</b>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <select className="form-control">
                                                            <option selected="selected" value="-1">--= กรุณาเลือก </option>
                                                            <option value="4">เกษตรศาสตร์</option>
                                                            <option value="6">มนุษยศาสตร์</option>
                                                            <option value="3">วิทยาศาสตร์การแพทย์และสุขภาพ</option>
                                                            <option value="1">วิทยาศาสตร์ธรรมชาติ</option>
                                                            <option value="2">วิศวกรรมและเทคโนโลยี</option>
                                                            <option value="5">สังคมศาสตร์</option>
                                                            <option value="9">อื่นๆ</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 5 }}>
                                                        <b>ระดับปริญญา :</b>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <select className="form-control">
                                                            <option selected="selected" value="-1">--= กรุณาเลือก </option>
                                                            <option value="3">Post-Doctoral</option>
                                                            <option value="0">ปริญญาตรี</option>
                                                            <option value="1">ปริญญาโท</option>
                                                            <option value="4">ปริญญาโท-เอก</option>
                                                            <option value="2">ปริญญาเอก</option>
                                                            <option value="10">-ไม่ระบุ-</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 5 }}>
                                                        <b>งบประมาณ :</b>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                    <span style={{marginTop:5}}>บาท</span>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-info text-white MuiButton-contained">เพิ่ม</button>
                                                    </div>
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
export default RnDThesisPrivateBG;