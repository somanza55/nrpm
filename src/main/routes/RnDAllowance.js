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

class RnDAllowance extends React.Component {
    render() {
        const store = configureStore();
        const authUser = JSON.parse(store.getState().auth.authUser);
        console.log("test", store.getState().auth)
        return (
            <Fragment>
                <div className="animated slideInUpTiny animation-duration-3">
                    <div className="app-wrapper">
                        <ContainerHeader match={this.props.match} title={<IntlMessages id="จัดการ.ค่าตอบแทน" />} />
                        <div className="form-horizontal">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <div className="shadow border-0 card">
                                        <div className="card-header">
                                            <b>
                                                <IntlMessages id="ค่าตอบแทน.จัดการค่าตอบแทน" />
                                            </b>
                                        </div>
                                        <div className="card-body">
                                            <div style={{ textAlign: "right" }}>
                                                <span>พบข้อมูลทั้งสิ้น 4 รายการ</span>
                                            </div>
                                            <br></br>
                                            <div className="table-responsive-material">
                                                <Table bordered>
                                                    <tbody className="card-header">
                                                        <tr>
                                                            <th rowspan="2" scope="col" style={{ textAlign: "center", verticalAlign: "middle", width: 30 }}><a href="#">ปี</a></th>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle", width: 450 }}><a href="#">ตำแหน่ง</a></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">ค่าตอบแทน</a></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>แก้ไข</b></td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>2562</td>
                                                            <td style={{ textAlign: "left", verticalAlign: "middle" }}>ศาสตราจารย์</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>13,000</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                <i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi  zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>2562</td>
                                                            <td style={{ textAlign: "left", verticalAlign: "middle" }}>รองศาสตราจารย์</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>9,900</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                <i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi  zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>2562</td>
                                                            <td style={{ textAlign: "left", verticalAlign: "middle" }}>ผู้ช่วยศาสตราจารย์</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>5,600</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                <i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi  zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>2562</td>
                                                            <td style={{ textAlign: "left", verticalAlign: "middle" }}>อาจารย์ หรือ ตำแหน่งอื่นตามที่ คณะกรรมการข้าราชการพลเรือนในสถาบันอุดมศึกษา(ก.พ.อ.) กำหนด</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>0</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                <i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi  zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
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
                                                        <b>ปี :</b>
                                                    </div>
                                                    <div className="col-lg-7">
                                                        <select className="form-control">
                                                            <option value="-1">--= กรุณาเลือก </option>
                                                            <option value="2562">2562</option>
                                                            <option value="2561">2561</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 5 }}>
                                                        <b>ตำแหน่ง :</b>
                                                    </div>
                                                    <div className="col-lg-7">
                                                        <select className="form-control">
                                                            <option value="-1">--= กรุณาเลือก </option>
                                                            <option value="8">จอมเวทย์</option>
                                                            <option value="3">ผู้ช่วยศาสตราจารย์</option>
                                                            <option value="6">ไม่ระบุ</option>
                                                            <option value="2">รองศาสตราจารย์</option>
                                                            <option value="1">ศาสตราจารย์</option>
                                                            <option value="4">อาจารย์ หรือ ตำแหน่งอื่นตามที่ คณะกรรมการข้าราชการพลเรือนในสถาบันอุดมศึกษา(ก.พ.อ.) กำหนด</option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 5 }}>
                                                        <b>ค่าตอบแทน :</b>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                    <span style={{ marginTop: 4 }}>บาท</span>
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
export default RnDAllowance;