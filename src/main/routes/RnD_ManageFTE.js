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

class RnD_ManageFTE extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
            isHidden2: true,
            isHidden3: false,
            isHidden4: true,
            isHidden5: true,
            isHidden6: false,
            isHidden7: false
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
        })
    }
    toggleHidden3() {
        this.setState({
            isHidden3: !this.state.isHidden3,
            isHidden2: true
        })
    }
    toggleHidden4() {
        this.setState({
            isHidden4: !this.state.isHidden4,
        })
    }
    toggleHidden5() {
        this.setState({
            isHidden5: !this.state.isHidden5,
            isHidden4:true
        })
    }
    toggleHidden6() {
        this.setState({
            isHidden6: !this.state.isHidden6,
        })
    }
    toggleHidden7() {
        this.setState({
            isHidden7: !this.state.isHidden7,
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
                        <ContainerHeader match={this.props.match} title={<IntlMessages id="จัดการ.จัดการFTE" />} />
                        <div className="form-horizontal">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <div className="shadow border-0 card">
                                        <div className="card-header py-2">
                                            <b>
                                                <i class="zmdi zmdi-search"></i>&nbsp;&nbsp;<IntlMessages id="FTE.FTE บุคลากรตามกลุ่มหน่วยงาน" />
                                            </b>
                                            <div className="form-btnright">
                                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained" onClick={() => this.toggleHidden2()}>เพิ่ม</button>
                                                <span className="zmdi zmdi-chevron-right" onClick={() => this.toggleHidden6()}></span>
                                            </div>
                                        </div>
                                        {!this.state.isHidden6 && <p>
                                        {!this.state.isHidden &&
                                            <div className="card-body">
                                                <div style={{ textAlign: "right" }}>
                                                    <b>พบข้อมูลทั้งสิ้น 2 รายการ</b>
                                                </div>
                                                <br></br>
                                                <div className="table-responsive-material">
                                                    <Table bordered>
                                                        <tbody>
                                                            <tr className="card-header">
                                                                <th rowspan="2" scope="col" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">รหัสกลุ่ม</a></th>
                                                                <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">กลุ่มหน่วยงาน</a></td>
                                                                <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">FTE</a></td>
                                                                <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}>จัดการ</td>
                                                            </tr>
                                                        </tbody>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>1</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>หน่วยงานภายใต้ กระทรวงเกษตรและสหกรณ์</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>0.8</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}><i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>2</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>มหาวิทยาลัยรัฐทุกแห่ง</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>0.3</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}><i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>3</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>ม.เอกชน / ม.ราชภัฎ / ม.ราชมงคล</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>0.25</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}><i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>4</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>วิทยาลัยเทคนิค / อาชีวะ / อุดมศึกษาอื่นๆ</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>0.15</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}><i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>5</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>วิทยาลัยพยาบาล/รพ./สสจ./หน่วยงานรัฐอื่นๆ</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>0.15</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}><i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>6</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>ศูนย์วิทยาศาสตร์การแพทย์ หรือหน่วยงานที่ทำงานวิจัยโดยตรง เช่น สวทช.</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>0.9</td>
                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}><i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                                {!this.state.isHidden2 && <p>
                                                    <hr></hr>
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                                <b>กลุ่มหน่วยงาน</b>
                                                            </div>
                                                            <div className="col-lg-5">
                                                                <input type="text" className="form-control"></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                                <b>FTE</b>
                                                            </div>
                                                            <div className="col-lg-5">
                                                                <input type="text" className="form-control"></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row py-1">
                                                        <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <button className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained">บันทึก</button>
                                                            <button className="MuiButtonBase-root MuiButton-root jr-btn bg-danger text-white MuiButton-contained" onClick={() => this.toggleHidden3()}>ยกเลิก</button>
                                                        </div>
                                                    </div>
                                                </p>}
                                            </div>
                                        }
                                        </p>}
                                    </div>
                                    

                                    <div className="shadow border-0 card">
                                        <div className="card-header py-2">
                                            <b>
                                                <i class="zmdi zmdi-tag"></i>&nbsp;&nbsp;<IntlMessages id="FTE" />
                                            </b>
                                            <div className="form-btnright">
                                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained" onClick={() => this.toggleHidden4()}>เพิ่ม</button>
                                                <span className="zmdi zmdi-chevron-right" onClick={() => this.toggleHidden7()}></span>
                                            </div>
                                        </div>
                                        {!this.state.isHidden7 && <p>
                                        <div className="card-body">
                                            <div className="table-responsive-material">
                                                <Table bordered>
                                                    <tbody>
                                                        <tr>
                                                            <th rowspan="2" scope="col" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">ปี</a></th>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">ระดับ</a></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">FTE</a></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>จัดการ</b></td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>2562</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>ปริญญาโท</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>0.6</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}><i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>2562</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>ปริญญาเอก</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>0.6</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}><i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                        </tr>

                                                    </tbody>
                                                </Table>
                                            </div>
                                            {!this.state.isHidden4 && <p>
                                                <hr></hr>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                            <b>ปี :</b>
                                                        </div>
                                                        <div className="col-lg-5">
                                                            <select className="form-control">
                                                                <option selected="selected" value="-1">--= กรุณาเลือก </option>
                                                                <option value="2562">2562</option>
                                                                <option value="2561">2561</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
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
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                            <b>FTE</b>
                                                        </div>
                                                        <div className="col-lg-5">
                                                            <input type="text" className="form-control"></input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained">บันทึก</button>
                                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-danger text-white MuiButton-contained" onClick={() => this.toggleHidden5()}>ยกเลิก</button>
                                                    </div>
                                                </div>
                                            </p>}
                                        </div>
                                        </p>}
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
export default RnD_ManageFTE;    