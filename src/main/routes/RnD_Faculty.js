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

class RnD_Faculty extends React.Component {
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
            isHidden: false
        })
    }
    toggleHidden3() {
        this.setState({
            isHidden2: !this.state.isHidden2,
            isHidden2: true
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
                        <ContainerHeader match={this.props.match} title={<IntlMessages id="จัดการ.กลุ่มหน่วยงานย่อย" />} />
                        <div className="form-horizontal">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <div className="shadow border-0 card">
                                        <div className="card-header py-2">
                                            <b>
                                                <IntlMessages id="ค้นหา.กลุ่มหน่วยงานย่อย" />
                                            </b>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 4 }}>
                                                        <select className="form-control">
                                                            <option selected="selected" value="1">รหัสหน่วยงานย่อย</option>
                                                            <option value="2">ชื่อหน่วยงานย่อย</option>
                                                            <option value="3">รหัสหน่วยงาน</option>
                                                            <option value="4">ชื่อหน่วยงาน</option>
                                                            <option value="5">รหัสกระทรวง</option>
                                                            <option value="6">ชื่อกระทรวง</option>
                                                            <option value="7">กลุ่มหน่วยงาน</option>
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
                                                            <th rowspan="2" scope="col" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">รหัสหน่วยงานย่อย</a></th>
                                                            <th rowspan="2" scope="col" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">ชื่อหน่วยงานย่อย</a></th>
                                                            <th rowspan="2" scope="col" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">หน่วยงาน</a></th>
                                                            <th rowspan="2" scope="col" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">รหัสกลุ่มหน่วยงาน	</a></th>
                                                            <th rowspan="2" scope="col" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">กลุ่มหน่วยงาน</a></th>
                                                            <th rowspan="2" scope="col" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">FTE</a></th>
                                                            <th rowspan="2" scope="col" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>แก้ไข</b></th>
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>1644</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>กองยุทธศาสตร์และแผนงาน</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>กรมการจัดหางาน</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>5</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>วิทยาลัยพยาบาล/รพ./สสจ./หน่วยงานรัฐอื่นๆ</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>0.15</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}><a className="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }} onClick={() => this.toggleHidden2()}></a></td>

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
                                                                <b>หน่วยงานย่อย :</b>
                                                            </div>
                                                            <div className="col-lg-5">
                                                                <span>1644 - กองยุทธศาสตร์และแผนงาน</span>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="row py-1">
                                                                <div className="col-lg-3" style={{ textAlign: "right" }}>
                                                                    <b>รหัสกลุ่มหน่วยงาน :</b>
                                                                </div>
                                                                <div className="col-lg-5">
                                                                    <select className="form-control">
                                                                        <option value="-1">--= กรุณาเลือก </option>
                                                                        <option value="3">ม.เอกชน / ม.ราชภัฎ / ม.ราชมงคล</option>
                                                                        <option value="2">มหาวิทยาลัยรัฐทุกแห่ง</option>
                                                                        <option value="4">วิทยาลัยเทคนิค / อาชีวะ / อุดมศึกษาอื่นๆ</option>
                                                                        <option selected="selected" value="5">วิทยาลัยพยาบาล/รพ./สสจ./หน่วยงานรัฐอื่นๆ</option>
                                                                        <option value="6">ศูนย์วิทยาศาสตร์การแพทย์ หรือหน่วยงานที่ทำงานวิจัยโดยตรง เช่น สวทช. </option>
                                                                        <option value="1">หน่วยงานภายใต้ กระทรวงเกษตรและสหกรณ์</option>
                                                                        <option value="7">หน่วยงานรัฐวิสาหกิจ/หน่วยงานเอกชนไม่ค้ากำไร</option>
                                                                        <option value="8">เอกชนอื่นๆ/บริษัท</option>

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
export default RnD_Faculty;    