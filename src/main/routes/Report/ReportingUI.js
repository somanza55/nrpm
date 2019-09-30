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


class ReportingUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
        }
    }
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden,
        })
    }
    render() {
        const store = configureStore();
        const authUser = JSON.parse(store.getState().auth.authUser);
        console.log("test", store.getState().auth)

        return (
            <div className="animated slideInUpTiny animation-duration-3">
                <div className="app-wrapper">
                    <ContainerHeader match={this.props.match} title={<IntlMessages id="title.reportingui" />} />
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-2">
                                <div style={{ textAlign: "right", marginTop: 10 }}><h5><strong>ทุนวิจัย</strong></h5></div>
                            </div>
                            <div style={{ marginTop: 7 }}>
                                <span>การคมนาคมขนส่งระบบราง</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">
                                <div style={{ textAlign: "right", marginTop: 10 }}><h5><strong>หน่วยบริหารทุน</strong></h5></div>
                            </div>
                            <div style={{ marginTop: 7 }}>
                                <span>กองบริหารแผนและงบประมาณการวิจัย (กบง.)</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">
                                <div style={{ textAlign: "right", marginTop: 10 }}><h5><strong>รายงานประจำเดือน</strong></h5></div>
                            </div>
                            <div style={{ marginTop: 7 }}>
                                <select className="form-control" style={{ width: 120 }}>
                                    <option value="1">มกราคม</option>
                                    <option value="2">กุมภาพันธ์</option>
                                    <option value="3">มีนาคม</option>
                                    <option value="4">เมษายน</option>
                                    <option value="5">พฤษภาคม</option>
                                    <option value="6">มิถุนายน</option>
                                    <option value="7">กรกฎาคม</option>
                                    <option value="8">สิงหาคม</option>
                                    <option selected="selected" value="9">กันยายน</option>
                                    <option value="10">ตุลาคม</option>
                                    <option value="11">พฤศจิกายน</option>
                                    <option value="12">ธันวาคม</option>
                                </select>
                            </div>
                            <div style={{ marginTop: 7, marginLeft: 20 }}>
                                <select className="form-control" style={{ width: 120 }}>
                                    <option value="2555">2555</option>
                                    <option value="2556">2556</option>
                                    <option value="2557">2557</option>
                                    <option value="2558">2558</option>
                                    <option value="2559">2559</option>
                                    <option value="2560">2560</option>
                                    <option value="2561">2561</option>
                                    <option selected="selected" value="2562">2562</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="shadow border-0 card">
                        <div className="card-header py-0">
                            <div style={{ marginTop: 6 }}>
                                <div className="row">
                                    <h4></h4>
                                    <div style={{ marginTop: 5 }}><h4><b style={{ paddingLeft: 7 }}><IntlMessages id="hd.reportui" /></b></h4></div>
                                    <div className="form-btnright">
                                        <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden()} ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {!this.state.isHidden && <p>
                            <CardBox styleName="col-12" cardStyle="p-0">
                                <div className="table-responsive-material">
                                    <Table>
                                        <TableHead className="card-header py-1">
                                            <TableRow>
                                                <TableCell align="center">ลำดับ</TableCell>
                                                <TableCell align="center">รหัสโครงการข้อเสนอ</TableCell>
                                                <TableCell align="center">รหัสโครงการ</TableCell>
                                                <TableCell align="center">โครงการ</TableCell>
                                                <TableCell align="center">เสนอขอ</TableCell>
                                                <TableCell align="center">งบจัดสรร</TableCell>
                                                <TableCell align="center">เบิกจ่ายแล้ว	</TableCell>
                                                <TableCell align="center">สถานะโครงการ</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow >
                                                <TableCell colSpan='12' style={{backgroundColor:'gray',paddingLeft:400}}><span style={{color:'white'}}>ไม่มีข้อเสนองานวิจัย</span></TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardBox>
                            </p>}
                        <div className="card-body">
                            <div style={{marginBottom:10}}>
                                <div className="row">
                                    <div className="col-lg-2">
                                    <button class="MuiButtonBase-root MuiButton-root jr-btn bg-primary text-white MuiButton-contained" tabindex="0" type="button" style={{marginLeft:10}}>
                                <span class="MuiButton-label">Export to excel</span></button>
                                </div>
                            <div style={{marginLeft:150}}>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                            </div>
                                            <div className="custom-file">
                                                <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="inputGroupFile01"
                                                    aria-describedby="inputGroupFileAddon01"
                                                />
                                                <label className="custom-file-label" htmlFor="inputGroupFile01">
                                                    No file selected
                                                </label>
                                            </div>
                                            &nbsp;<button className="btn btn-primary"  style={{marginTop:3}}>Import from excel</button>
                                        </div>
                                    </div>
                                    <div  className="col-lg-2" style={{marginTop:3,paddingLeft:220}}>
                                    <button class="MuiButtonBase-root MuiButton-root jr-btn bg-primary text-white MuiButton-contained" tabindex="0" type="button">
                                    <span class="MuiButton-label">บันทึก</span></button>
                                    </div>
                                </div>
                            </div>
                            </div>
                                                  
                    </div>
                </div>
            </div>
        );
    }
}

export default ReportingUI;