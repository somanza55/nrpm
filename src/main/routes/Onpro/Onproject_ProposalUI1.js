import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';
import configureStore from 'store';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import CKEditor from 'ckeditor4-react';
import { blue, green } from '@material-ui/core/colors';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import ReactDOM from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import { TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import CardBox from 'components/CardBox/index';


class Coor_proposalUI1 extends React.Component {
    state = { values: [{ value: null }] };
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,

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
        const anotherForm = this.state.anotherForm;
        return (

            <div className="animated slideInUpTiny animation-duration-3">
                <div className="app-wrapper">
                    <ContainerHeader match={this.props.match} title={<IntlMessages id="title.coorprop" />} />
                    <div style={{ marginBottom: 15 }}>
                        <span><b>รหัสโครงการ :</b><label>682766</label></span><span><b>แหล่งทุน :</b><label>ทุนวิจัยและนวัตกรรมในประเด็นสำคัญของประเทศ</label></span>
                        <span><b>ชื่อทุน :</b><label>T2562001 ทุนวิจัยมุ่งเป้า ปีงบประมาณ 2562 ข้าว</label></span><span><b>ปี :</b><label>2562</label></span>
                    </div>
                    <div className="shadow border-0 card">
                        <div className="card-header py-0">
                            <div>
                                <Nav tabs>
                                    <NavItem>

                                        <NavLink>
                                            <Link to={`./Onproject_ProposalUId`} className="normal" style={{ color: 'black' }}><b>ข้อมูลทั่วไป</b></Link>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            <Link to={`./Onproject_ProposalUI1`} className="normal" activeClassName="active" style={{ color: 'black' }}><b>รายละเอียดโครงการ</b></Link>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            <Link to={`./Onproject_ProposalUI2`} className="link" style={{ color: 'black' }}><b>คณะผู้วิจัย</b></Link>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            <Link to={`./Onproject_ProposalUI3`} className="link" style={{ color: 'black' }}><b>แผนงาน</b></Link>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            <Link to={`./Onproject_ProposalUI5`} className="link" style={{ color: 'black' }}><b>เอกสารแนบ</b></Link>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            <Link to={`./Onproject_ProposalUI7`} className="link" style={{ color: 'black' }}><b>ตรวจสอบความถูกต้อง</b></Link>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                        <div className="card">
                            <div style={{ paddingLeft: 30, marginTop: 40 }}><span style={{ color: 'red' }}>*</span>&nbsp;<b style={{ color: 'blue' }}>แบบสรุปข้อเสนอการวิจัย(ภาษาไทย)<hr></hr></b></div>
                            <div className="form-group">
                                <div className="col-lg-1">
                                </div>
                                <div className="col-lg-12" style={{ marginLeft: 10 }}>
                                    <div className="App">
                                        <CKEditor
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><span style={{ color: 'red' }}>*</span>&nbsp;<b style={{ color: 'blue' }}>แบบสรุปข้อเสนอการวิจัย(อังกฤษ)<hr></hr></b></div>
                            <div className="form-group">
                                <div className="col-lg-1">
                                </div>
                                <div className="col-lg-12" style={{ marginLeft: 10 }}>
                                    <div className="App">
                                        <CKEditor
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><span style={{ color: 'red' }}>*</span>&nbsp;<b style={{ color: 'blue' }}>ความสำคัญและที่มาของปัญหาที่ทำการวิจัย<hr></hr></b></div>
                            <div className="form-group">
                                <div className="col-lg-1">
                                </div>
                                <div className="col-lg-12" style={{ marginLeft: 10 }}>
                                    <div className="App">
                                        <CKEditor
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><span style={{ color: 'red' }}>*</span>&nbsp;<b style={{ color: 'blue' }}>วัตถุประสงค์การวิจัย<hr></hr></b></div>
                            <div className="form-group">
                                <div className="col-lg-1">
                                </div>
                                <div className="col-lg-12" style={{ marginLeft: 10 }}>
                                    <div className="App">
                                        <CKEditor
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><span style={{ color: 'red' }}>*</span>&nbsp;<b style={{ color: 'blue' }}>วิธีการดำเนินการวิจัย<hr></hr></b></div>
                            <div className="form-group">
                                <div className="col-lg-1">
                                </div>
                                <div className="col-lg-12" style={{ marginLeft: 10 }}>
                                    <div className="App">
                                        <CKEditor
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><span style={{ color: 'red' }}>*</span>&nbsp;<b style={{ color: 'blue' }}>ประโยชน์ที่คาดว่าจะได้รับ<hr></hr></b></div>
                            <div className="form-group">
                                <div className="col-lg-1">
                                </div>
                                <div className="col-lg-12" style={{ marginLeft: 10 }}>
                                    <div className="App">
                                        <CKEditor
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-4" style={{ textAlign: "right", marginTop: 7 }}>
                                        <b>การนำไปใช้ประโยชน์ในด้าน</b>
                                    </div>
                                    <div>
                                        <select className="form-control" style={{ width: 600 }}>
                                            <option selected="selected" value="1">ด้านวิชาการ</option>
                                            <option value="2">ด้านนโยบาย</option>
                                            <option value="3">ด้านเศรษฐกิจ/พาณิชย์/อุตสาหกรรม</option>
                                            <option value="4">ด้านสังคมและชุมชน</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-lg-4" style={{ textAlign: "right", marginTop: 7 }}>
                                        <span style={{ color: 'red' }}>*</span><b>หน่วยงานที่นำผลการวิจัยไปใช้ประโยชน์</b>
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" style={{width:600}}></input>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><span style={{ color: 'red' }}>*</span>&nbsp;<b style={{ color: 'blue' }}>ขอบเขตการวิจัย<hr></hr></b></div>
                            <div className="form-group">
                                <div className="col-lg-1">
                                </div>
                                <div className="col-lg-12" style={{ marginLeft: 10 }}>
                                    <div className="App">
                                        <CKEditor
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><span style={{ color: 'red' }}>*</span>&nbsp;<b style={{ color: 'blue' }}>ประโยชน์ที่คาดว่าจะได้รับ<hr></hr></b></div>
                            <div className="form-group">
                                <div className="col-lg-3">
                                </div>
                                <div className="col-lg-12" style={{ marginLeft: 10 }}>
                                    <div className="App">
                                        <CKEditor
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" style={{ textAlign: "right", marginTop: 8 }}>
                                        <b>การนำไปใช้ประโยชน์ในด้าน</b>
                                    </div>
                                    <div>
                                        <select className="form-control" style={{ width: 480, marginTop: 3 }}>
                                            <option></option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" style={{ textAlign: "right", marginTop: 8 }}>
                                        <span style={{ color: 'red' }}>*</span>&nbsp;<b>หน่วยงานที่นำผลการวิจัยไปใช้ประโยชน์</b>
                                    </div>
                                    <div>
                                        <select className="form-control" style={{ width: 480, marginTop: 3 }}>
                                            <option></option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 20 }}><span style={{ color: 'red' }}>*</span>&nbsp;<b style={{ color: 'blue' }}>คำสำคัญ<hr></hr></b></div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-2" style={{ textAlign: "right", marginTop: 7 }}>
                                        <span style={{ color: 'red' }}>*</span><b>ภาษาไทย</b>
                                    </div>
                                    <div class="col-lg-9 ">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: 4 }}>
                                    <div className="col-lg-2" style={{ textAlign: "right", marginTop: 7 }}>
                                        <span style={{ color: 'red' }}>*</span><b>ภาษาอังกฤษ</b>
                                    </div>
                                    <div class="col-lg-9 ">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 20 }}><span style={{ color: 'red' }}>*</span>&nbsp;<b style={{ color: 'blue' }}>สถานที่ทำวิจัย<hr></hr></b></div>
                            <div className="table-responsive-material">
                                <CardBox styleName="col-12" cardStyle="p-0">
                                    <div className="table-responsive-material">
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">แก้ไข</TableCell>
                                                    <TableCell align="center">ประเภท</TableCell>
                                                    <TableCell align="center">ชื่อประเทศ/จังหวัด </TableCell>
                                                    <TableCell align="center">ชื่อสถานที่ </TableCell>
                                                    <TableCell align="center">ลบ</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell align="center"><i class="zmdi zmdi-edit"></i></TableCell>
                                                    <TableCell align="center">ในประเทศ</TableCell>
                                                    <TableCell align="center">จังหวัดสระบุรี</TableCell>
                                                    <TableCell align="center">ศูนย์ควบคุมการเดินรถแก่งคอย</TableCell>
                                                    <TableCell align="center"><i class="zmdi zmdi-close-circle" style={{ color: 'red' }}></i></TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </CardBox>
                            </div>
                            <div>
                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-white text-black MuiButton-contained" onClick={() => this.toggleHidden()} style={{ marginLeft: 15, marginTop: 3 }}>เพิ่มสถานที่ทำวิจัย</button>
                            </div>
                            {!this.state.isHidden && <p>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-lg-4" style={{ textAlign: "right", marginTop: 8 }}>
                                            <span style={{ color: 'red' }}>*</span><b>ประเภท</b>
                                        </div>
                                        <div>
                                            <select className="form-control" style={{ width: 480 }}>
                                                <option selected="selected" value="1">ในประเทศ</option>
                                                <option value="2">ต่างประเทศ</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginTop: 4 }}>
                                        <div className="col-lg-4" style={{ textAlign: "right", marginTop: 8 }}>
                                            <span style={{ color: 'red' }}>*</span>&nbsp;<b>ภาค</b>
                                        </div>
                                        <div>
                                            <select className="form-control" style={{ width: 480 }}>
                                                <option selected="selected" value="1">ภาคกลาง</option>
                                                <option value="2">ภาคเหนือ</option>
                                                <option value="3">ภาคตะวันออกเฉียงเหนือ</option>
                                                <option value="4">ภาคตะวันออก</option>
                                                <option value="5">ภาคใต้</option>
                                                <option value="6">ภาคตะวันตก</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4" style={{ textAlign: "right" }}>
                                        </div>
                                        <div>
                                            <span style={{ color: 'red' }}>*** จำแนกภาคตามกระทรวงมหาดไทย</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-lg-4" style={{ textAlign: "right" }}>
                                            <span style={{ color: 'red' }}>*</span>&nbsp;<b>ชื่อจังหวัด</b>
                                        </div>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4 }}></input>
                                        </div><span>กรุงเทพมหานคร</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4 }}></input>
                                        </div><span>กำแพงเพชร</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4 }}></input>
                                        </div><span>ชัยนาท</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 25 }}></input>
                                        </div><span>นครนายก</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 44 }}></input>
                                        </div><span>นครปฐม</span>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4" style={{ textAlign: "right" }}>
                                        </div>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4 }}></input>
                                        </div><span>นครสวรรค์</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 33 }}></input>
                                        </div><span>นนทบุรี</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 27 }}></input>
                                        </div><span>ปทุมธานี</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 17 }}></input>
                                        </div><span>พระนครศรีอยุธยา</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4 }}></input>
                                        </div><span>พิจิตร</span>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4" style={{ textAlign: "right" }}>
                                        </div>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4 }}></input>
                                        </div><span>พิษณุโลก</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 38 }}></input>
                                        </div><span>เพชรบูรณ์</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 13 }}></input>
                                        </div><span>ลพบุรี</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 34 }}></input>
                                        </div><span>สมุทรปราการ</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 25 }}></input>
                                        </div><span>สมุทรสงคราม</span>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4" style={{ textAlign: "right" }}>
                                        </div>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4 }}></input>
                                        </div><span>สมุทรสาคร</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div><span>สระบุรี</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 34 }}></input>
                                        </div><span>สิงห์บุรี</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 28 }}></input>
                                        </div><span>สุโขทัย</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 58 }}></input>
                                        </div><span>สุพรรณบุรี</span>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4" style={{ textAlign: "right" }}>
                                        </div>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4 }}></input>
                                        </div><span>อ่างทอง</span>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 47 }}></input>
                                        </div><span>อุทัยธานี</span>
                                    </div>
                                    <div className="row" style={{ marginTop: 4 }}>
                                        <div className="col-lg-4" style={{ textAlign: "right", marginTop: 8 }}>
                                            <span style={{ color: 'red' }}>*</span>&nbsp;<b>ชื่อสถานที่</b>
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" style={{ width: 480 }}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-lg-4" style={{ textAlign: "right" }}>
                                        </div>
                                        <div>
                                            <button className="MuiButtonBase-root MuiButton-root jr-btn bg-primary text-white MuiButton-contained" style={{ marginLeft: 10, marginTop: 3 }}>บันทึก</button>
                                            <button className="MuiButtonBase-root MuiButton-root jr-btn bg-danger text-white MuiButton-contained" style={{ marginLeft: 10, marginTop: 3 }}>ยกเลิก</button>
                                        </div>
                                    </div>
                                </div>
                            </p>}
                            <div style={{ paddingLeft: 50, marginTop: 20 }}><span style={{ color: 'red' }}>*</span>&nbsp;<b style={{ color: 'blue' }}>การตรวจสอบทรัพย์สินทางปัญญาหรือสิทธิบัตรที่เกี่ยวข้อง<hr></hr></b></div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-3">
                                    </div>
                                    <div>
                                        <input type="radio" id="1" name="1" defaultValue="1" style={{ marginTop: 4 }}></input>
                                    </div>
                                    ไม่มีการตรวจสอบทรัพย์สินทางปัญญา และ/หรือ สิทธิบัตรที่เกี่ยวข้อง
                                 </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                    </div>
                                    <div>
                                        <input type="radio" id="1" name="1" defaultValue="1" style={{ marginTop: 4 }}></input>
                                    </div>
                                    ตรวจสอบทรัพย์สินทางปัญญาแล้ว ไม่มีทรัพย์สินทางปัญญา และ/หรือ สิทธิบัตรที่เกี่ยวข้อง
                                 </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                    </div>
                                    <div>
                                        <input type="radio" id="1" name="1" defaultValue="1" style={{ marginTop: 4 }}></input>
                                    </div>
                                    ตรวจสอบทรัพย์สินทางปัญญาแล้ว มีทรัพย์สินทางปัญญา และ/หรือ สิทธิบัตรที่เกี่ยวข้อง
                                 </div>
                            </div>
                            <hr></hr>
                            <div className="col-lg-6" style={{ textAlign: "right" }}>
                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-primary text-white MuiButton-contained" style={{ marginLeft: 10, marginTop: 3 }}>บันทึก</button>
                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-danger text-white MuiButton-contained" style={{ marginLeft: 10, marginTop: 3 }}>ยกเลิก</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Coor_proposalUI1;