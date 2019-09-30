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
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';
import { fontWeight } from '@material-ui/system';
import CardBox from 'components/CardBox/index';
import { Editor } from '@tinymce/tinymce-react';


class Coor_proposalUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            isHidden2: false,
            isHidden3: true,
            isHidden4: true,
            isHidden5: true,
            isHidden6: true,
            isHidden7: true,
            isHidden8: true,
            isHidden9: true

        }
    };
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden,
            isHidden2: true
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
            isHidden3: false,
        })
    }
    toggleHidden4() {
        this.setState({
            isHidden4: !this.state.isHidden4,
            isHidden3: true
        })
    }
    toggleHidden5() {
        this.setState({
            isHidden5: !this.state.isHidden5,
            isHidden5: false
        })
    }
    toggleHidden6() {
        this.setState({
            isHidden6: !this.state.isHidden6,
            isHidden5: true
        })
    }
    toggleHidden7() {
        this.setState({
            isHidden7: !this.state.isHidden7,
            isHidden7: false
        })
    }
    toggleHidden8() {
        this.setState({
            isHidden8: !this.state.isHidden8,
            isHidden7: true
        })
    }
    toggleHidden9() {
        this.setState({
            isHidden9: !this.state.isHidden9,

        })
    }
    toggleHidden10() {
        this.setState({
            isHidden10: !this.state.isHidden10,
            isHidden9: true
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
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><span style={{ color: 'red' }}>*</span><b style={{ color: 'blue' }}>แผนการดำเนินงานวิจัย<hr></hr></b></div>
                            <div className="col-lg-12" style={{ paddingLeft: 50 }}>
                                <div className="table-responsive-material">
                                    <Table bordered>
                                        <thead className="card-header">
                                            <tr>
                                                <td style={{ width: 5 }}>แก้ไข</td>
                                                <td style={{ width: 5 }}>ปีงบ</td>
                                                <td rowSpan='3' style={{ textAlign: "center", width: 400 }}>กิจกรรม</td>
                                                <td style={{ width: 1 }}>1</td>
                                                <td style={{ width: 1 }}>2</td>
                                                <td style={{ width: 2 }}>3</td>
                                                <td style={{ width: 2 }}>4</td>
                                                <td style={{ width: 2 }}>5</td>
                                                <td style={{ width: 2 }}>7</td>
                                                <td style={{ width: 2 }}>8</td>
                                                <td style={{ width: 2 }}>9</td>
                                                <td style={{ width: 2 }}>10</td>
                                                <td style={{ width: 2 }}>11</td>
                                                <td style={{ width: 2 }}>12</td>
                                                <td style={{ width: 5 }}>ร้อยละของงาน</td>
                                                <td style={{ width: 5 }}>ความสำเร็จ</td>
                                                <td style={{ textAlign: "center", width: 100 }}>ผู้รับผิดชอบ</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan='23'>ปีงบประมาณ : 2563</td>
                                            </tr>
                                            <tr>
                                                <td><i class="zmdi zmdi-close" style={{ color: 'red' }}></i>&nbsp;&nbsp;&nbsp;<i class="zmdi zmdi-edit"></i></td>
                                                <td>ทบทวนวรรณกรรม</td>
                                                <td style={{ backgroundColor: 'blue' }}></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td style={{ width: 180 }}>สมศักดิ์ วาณิชอนันต์ชัย</td>
                                            </tr>
                                            <tr>
                                                <td><i class="zmdi zmdi-close" style={{ color: 'red' }}></i>&nbsp;&nbsp;&nbsp;<i class="zmdi zmdi-edit"></i></td>
                                                <td>เก็บข้อมูลที่เกี่ยวข้อง</td>
                                                <td style={{ backgroundColor: 'blue' }}></td>
                                                <td style={{ backgroundColor: 'blue' }}></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>สมศักดิ์ วาณิชอนันต์ชัย</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            {!this.state.isHidden2 &&
                                <div className="row py-2">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-white text-black MuiButton-contained" onClick={() => this.toggleHidden()}>เพิ่มแผนการดำเนินการวิจัย</button>
                                    </div>
                                </div>
                            }
                            {!this.state.isHidden &&
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                            <span style={{ color: 'red' }}>*</span><b>กิจกรรม</b>
                                        </div>
                                        <div className="col-lg-9">
                                            <input type="text" className="form-control" style={{ width: 750 }}></input>
                                        </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                            <span style={{ color: 'red' }}>*</span><b>ปีงบประมาณ</b>
                                        </div>
                                        <div className="col-lg-3">
                                            <select className="form-control">
                                                <option></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row py-1">
                                        <div className="col-lg-3" style={{ textAlign: "right" }}>
                                            <span style={{ color: 'red' }}>*</span><b>เดือนที่คาดว่าจะดำเนินการ</b>
                                        </div>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 15 }}></input>
                                        </div>
                                        1
                                         <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        2
                                         <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        3
                                         <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        4
                                         <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        5
                                         <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        6
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        7
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        8
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        9
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        10
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        11
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        12
                                    </div>
                                    <div className="row py-1">
                                        <div className="col-lg-3" style={{ textAlign: "right" }}>
                                            <span style={{ color: 'red' }}>*</span><b>เดือนที่ดำเนินการจริง</b>
                                        </div>
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 15 }}></input>
                                        </div>
                                        1
                                         <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        2
                                         <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        3
                                         <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        4
                                         <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        5
                                         <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        6
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        7
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        8
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        9
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        10
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        11
                                        <div>
                                            <input type="checkbox" style={{ marginTop: 4, marginLeft: 30 }}></input>
                                        </div>
                                        12
                                    </div>
                                    <div className="row py-1">
                                        <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                            <span style={{ color: 'red' }}>*</span><b>สัดส่วนของงานต่อโครงการ</b>&nbsp;&nbsp;<span className="zmdi zmdi-info" style={{ color: 'blue' }}></span>
                                        </div>
                                        <div className="col-lg-4">
                                            <input type="text" className="form-control" style={{ width: 300 }}></input>
                                        </div>
                                        <span>(ร้อยละของโครงการ)</span>
                                    </div>
                                    <div className="row py-1">
                                        <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                            <span style={{ color: 'red' }}>*</span><b>ความสำเร็จต่อกิจกรรม </b>&nbsp;&nbsp;<span className="zmdi zmdi-info" style={{ color: 'blue' }}></span>
                                        </div>
                                        <div className="col-lg-4">
                                            <input type="text" className="form-control" style={{ width: 300 }}></input>
                                        </div>
                                        <span>(ร้อยละของกิจกรรม)</span>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                            <span style={{ color: 'red' }}>*</span><b>ผู้รับผิดชอบ</b>
                                        </div>
                                        <div className="col-lg-9">
                                            <select size='4' multiple="multiple" className="form-control" style={{ width: 750 }}>
                                                <option value="37011">สมศักดิ์ วาณิชอนันต์ชัย</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-lg-5" style={{ textAlign: "right" }}>
                                            <button className="MuiButtonBase-root MuiButton-root jr-btn bg-primary text-white MuiButton-contained">บันทึก</button>
                                            <button className="MuiButtonBase-root MuiButton-root jr-btn bg-danger text-white MuiButton-contained" onClick={() => this.toggleHidden2()}>ยกเลิก</button>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="card py-2">
                                <div style={{ paddingLeft: 50 }}><span style={{ color: 'red' }}>*</span><b style={{ color: 'blue' }}>งบประมาณ<hr></hr></b></div>
                                <div className="col-lg-12" style={{ paddingLeft: 50 }}>
                                    <div className="table-responsive-material">
                                        <Table bordered>
                                            <thead className="card-header">
                                                <tr>
                                                    <td style={{ textAlign: "center", width: 200 }} rowSpan='3'><b>ประเภทงบประมาณ</b></td>
                                                    <td style={{ textAlign: "center", width: 200 }}><b>งบประมาณที่เสนอขอ</b></td>
                                                    <td style={{ textAlign: "center", width: 200 }}><b>งบประมาณที่ได้รับจัดสรร</b></td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>งบบุคลากร</td>
                                                    <td><input type="text" className="form-control" defaultValue="0.00" style={{ textAlign: "right" }} ></input></td>
                                                    <td><input type="text" className="form-control" defaultValue="0.00" style={{ textAlign: "right" }} ></input></td>
                                                </tr>
                                                <tr>
                                                    <td>งบดำเนินการ</td>
                                                    <td><input type="text" className="form-control" defaultValue="0.00" style={{ textAlign: "right" }} ></input></td>
                                                    <td><input type="text" className="form-control" defaultValue="0.00" style={{ textAlign: "right" }} ></input></td>
                                                </tr>
                                                <tr>
                                                    <td>งบลงทุน</td>
                                                    <td><input type="text" className="form-control" defaultValue="0.00" style={{ textAlign: "right" }} ></input></td>
                                                    <td><input type="text" className="form-control" defaultValue="0.00" style={{ textAlign: "right" }} ></input></td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: "center" }}><b>รวม</b></td>
                                                    <td><b><label></label></b></td>
                                                    <td><b><label></label></b></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-lg-1" style={{ textAlign: "left" }}>
                                    </div>
                                    <div>
                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained">บันทึก</button>
                                    </div>
                                </div>
                                {!this.state.isHidden3 &&
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <span style={{ color: 'red' }}>*</span><b>ประเภทงบประมาณ</b>
                                            </div>
                                            <div className="col-lg-9">
                                                <select className="form-control" style={{ width: 700 }}>
                                                    <option></option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row py-2">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <span style={{ color: 'red' }}>*</span><b>รายละเอียด</b>
                                            </div>
                                            <div className="col-lg-3">
                                                <input type="text" className="form-control" style={{ width: 700 }}></input>
                                            </div>
                                        </div>
                                        <div className="row py-2">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <span style={{ color: 'red' }}>*</span><b>งบประมาณปี 2563</b>
                                            </div>
                                            <div className="col-lg-3">
                                                <input type="text" className="form-control" style={{ width: 200 }}></input>
                                            </div>
                                            <span style={{ marginTop: 4 }}>บาท</span>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                            </div>
                                            <div className="col-lg-9">
                                                <span style={{ color: 'red' }}>* กรณีแผนงานวิจัย กรอกเฉพาะงบประมาณที่ใช้เฉพาะการบริหารแผนงานวิจัย เท่านั้น</span><br></br>
                                                <span style={{ color: 'red' }}>** กรณีที่ข้อมูลรายละเอียดเหมือนกับข้อมูลรายการเดิม ข้อมูลใหม่จะแทนที่ข้อมูลเดิม</span>
                                            </div>
                                        </div>
                                        <div className="row py-2">
                                            <div className="col-lg-5" style={{ textAlign: "right" }}>
                                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-primary text-white MuiButton-contained">บันทึก</button>
                                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-danger text-white MuiButton-contained" onClick={() => this.toggleHidden4()}>ยกเลิก</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="card py-2">
                                <div style={{ paddingLeft: 50 }}><b style={{ color: 'blue' }}>รายละเอียดการจัดซื้อครุภัณฑ์<hr></hr></b></div>
                                <div className="col-lg-12" style={{ paddingLeft: 50 }}>
                                    <div className="table-responsive-material">
                                        <Table bordered>
                                            <thead className="card-header">
                                                <tr>
                                                    <td style={{ width: 2 }}><b>ลบ</b></td>
                                                    <td style={{ textAlign: "center", width: 400 }}><b>ข้อมูลครุภัณฑ์</b></td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><i class="zmdi zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                    <td style={{ textAlign: 'left' }}>
                                                        <b>ชื่อคุรุภัณฑ์ :</b>
                                                        คอมพิวเตอร์<br></br>
                                                        <b>สถานภาพของครุภัณฑ์ในหน่วยงาน: </b>
                                                        ไม่่มี<br></br>
                                                        <b>รายละเอียดครุภัณฑ์: Processor :  </b>
                                                        Intel Core i7 3.4GHz •Main Memory : 16GB • Hard Drive : 4TB • LCD Monitor 27" • UPS จำนวน 2 ชุด<br></br>
                                                        <b>เหตุผลและความจำเป็นต่อโครงการ:</b>
                                                        &nbsp;ซอร์ฟแวร์ที่ใช้งานต้องการเครื่องคอมพิวเตอร์ที่มีความเร็วในการคำนวณสูงและมีหน่วยความจำขนาดใหญ่ การแสดง Train Diagram ต้องการจอแสดงผลขนาดใหญ่ และต้องนำไปติดตั้งใช้งานที่ศูนย์ควบคุมการเดินรถขอนแก่น และนครราชสีมา<br></br>
                                                        <b>การใช้ประโยชน์เมื่อโครงการสิ้นสุด:</b>
                                                        &nbsp;มอบให้การรถไฟแห่งประเทศไทย<br></br>
                                                        <b>รายละเอียดของเดิม:</b>
                                                        ไม่่มี
                                     </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-lg-2" style={{ textAlign: "right" }}>
                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-white text-black MuiButton-contained" onClick={() => this.toggleHidden5()}>เพิ่มคุรุภัณฑ์</button>
                                    </div>
                                </div>
                                {!this.state.isHidden5 &&
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-4" style={{ textAlign: "right", marginTop: 8 }}>
                                                <span style={{ color: 'red' }}>*</span><b>ชื่อคุรุภัณฑ์</b>
                                            </div>
                                            <div>
                                                <input type="text" className="form-control" style={{ width: 600 }}></input>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4" style={{ textAlign: "right", marginTop: 4 }}>
                                                <span style={{ color: 'red' }}>*</span><b>สถานภาพของครุภัณฑ์ในหน่วยงาน</b>
                                            </div>
                                            <div>
                                                <input type="radio" style={{ marginTop: 10 }}></input>
                                            </div>
                                            <span style={{ marginTop: 6 }}>มี</span>
                                            <div style={{ paddingLeft: 15 }}>
                                                <input type="radio" style={{ marginTop: 10 }}></input>
                                            </div>
                                            <span style={{ marginTop: 6 }}>ไม่มี</span>
                                        </div>
                                        <div className="row py-1">
                                            <div className="col-lg-4" style={{ textAlign: "right", marginTop: 8 }}>
                                                <span style={{ color: 'red' }}>*</span><b>รายละเอียดครุภัณฑ์</b>
                                            </div>
                                            <div>
                                                <input type="text" className="form-control" style={{ width: 600 }}></input>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4" style={{ textAlign: "right", marginTop: 8 }}>
                                                <span style={{ color: 'red' }}>*</span><b>เหตุผลและความจำเป็นต่อโครงการ</b>
                                            </div>
                                            <div>
                                                <input type="text" className="form-control" style={{ width: 600 }}></input>
                                            </div>
                                        </div>
                                        <div className="row py-1">
                                            <div className="col-lg-4" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>การใช้ประโยชน์เมื่อโครงการสิ้นสุด</b>
                                            </div>
                                            <div>
                                                <input type="text" className="form-control" style={{ width: 600 }}></input>
                                            </div>
                                        </div>
                                        <div className="row py-1">
                                            <div className="col-lg-4" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>รายละเอียดของเดิม</b>
                                            </div>
                                            <div>
                                                <input type="text" className="form-control" style={{ width: 600 }}></input>
                                            </div>
                                        </div>
                                        <div className="row py-1">
                                            <div className="col-lg-4" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>งบประมาณ</b>
                                            </div>
                                            <div>
                                                <input type="text" className="form-control" style={{ width: 300 }}></input>
                                            </div>
                                            <span style={{ paddingLeft: 15, marginTop: 7 }}><b>บาท</b></span>
                                        </div>
                                        <div className="row py-1">
                                            <div className="col-lg-4" style={{ textAlign: "right", marginTop: 8 }}>
                                            </div>
                                            <div>
                                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-primary text-white MuiButton-contained">บันทึก</button>
                                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-danger text-white MuiButton-contained" onClick={() => this.toggleHidden6()}>ยกเลิก</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="card py-2">
                                <div style={{ paddingLeft: 50 }}><span style={{ color: 'red' }}>*</span><b style={{ color: 'blue' }}>ผลผลิต<hr></hr></b></div>
                                <div className="col-lg-12" style={{ paddingLeft: 35 }}>
                                    <div className="table-responsive-material">
                                        <Table bordered>
                                            <thead>
                                                <tr >
                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}><b>จัดการ</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}><b>หมวดผลผลิตหลัก</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}><b>หมวดผลผลิตย่อย</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 40 }}><b>ชื่อผลผลิต</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}><b>ปีงบประมาณ	</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}><b>ตัวชี้วัดเชิงปริมาณ</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}><b>ตัวชี้วัดเชิงคุณภาพ</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}><b>ตัวชี้วัดเชิงเวลา</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}><b>ตัวชี้วัดเชิงต้นทุน</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><i class="zmdi zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i>&nbsp;&nbsp;&nbsp;<i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i></td>
                                                    <td style={{ textAlign: 'left' }}>การใช้ประโยชน์เชิงสาธารณะ</td>
                                                    <td></td>
                                                    <td>ซอร์ฟแวร์ช่วยจัดหลีกขบวนรถ (Train Rescheduling System)</td>
                                                    <td>2563</td>
                                                    <td>1</td>
                                                    <td>รถไฟล่าช้าน้อยลง พนักงานควบคุมการเดินรถสามารถทำงานได้รวดเร็ว มีประสิทธิภาพขึ้น</td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2" style={{ marginLeft: 33 }}>
                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-white text-black MuiButton-contained" onClick={() => this.toggleHidden7()} >เพิ่มผลผลิต</button>
                                    </div>
                                </div>
                                {!this.state.isHidden7 &&
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <span style={{ color: 'red' }}>*</span><b>หมวดผลผลิตหลัก</b>
                                            </div>
                                            <div className="col-lg-9">
                                                <select className="form-control" style={{ width: 700 }}>
                                                    <option selected="selected" value="-1">--= กรุณาเลือก </option>
                                                    <option value="1">การใช้ประโยชน์เชิงพาณิชย์</option>
                                                    <option value="2">การใช้ประโยชน์เชิงสาธารณะ</option>
                                                    <option value="3">การผลิตบุคลากร</option>
                                                    <option value="4">การพัฒนาความสามารถบุคลากรร่วมวิจัย</option>
                                                    <option value="5">การพัฒนาบุคลากรวิจัย</option>
                                                    <option value="6">การเสนอผลงานในการประชุม</option>
                                                    <option value="7">ข้อเสนอแนะเชิงนโยบาย</option>
                                                    <option value="8">ต้นแบบกระบวนการ</option>
                                                    <option value="9">ต้นแบบผลิตภัณฑ์/เทคโนโลยี</option>
                                                    <option value="10">บทความในวารสารวิชาการ</option>
                                                    <option value="11">สิทธิบัตร/อนุสิทธิบัตร/ลิขสิทธิ์/เครื่องหมายการค้า</option>
                                                    <option value="12">หนังสือ/ตำราวิชาการ</option>
                                                    <option value="13">หลักสูตรการฝึกอบรม</option>
                                                    <option value="14">หลักสูตรการสอน</option>
                                                    <option value="15">เอกสารทางวิชาการ</option>
                                                    <option value="17">เชิงสังคม/ชุมชน</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row py-2">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>หมวดผลผลิตย่อย</b>
                                            </div>
                                            <div className="col-lg-3">
                                                <select className="form-control" style={{ width: 700 }}>
                                                    <option selected="selected" value="-1">--= กรุณาเลือก </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>ชื่อผลผลิต</b>
                                            </div>
                                            <div className="col-lg-3">
                                                <input type="text" className="form-control" style={{ width: 700 }}></input>
                                            </div>
                                        </div>
                                        <div className="row py-2">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>ปีงบประมาณ</b>
                                            </div>
                                            <div className="col-lg-3">
                                                <select className="form-control" style={{ width: 300 }}>
                                                    <option selected="selected" value="2563">2563</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row py-1">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>ตัวชี้วัดเชิงปริมาณ</b>
                                            </div>
                                            <div className="col-lg-9">
                                                <textarea className="form-control" style={{ width: 700 }}></textarea>
                                            </div>
                                        </div>
                                        <div className="row py-1">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>ตัวชี้วัดเชิงคุณภาพ</b>
                                            </div>
                                            <div className="col-lg-3">
                                                <textarea className="form-control" style={{ width: 700 }}></textarea>
                                            </div>
                                        </div>
                                        <div className="row py-1">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>ตัวชี้วัดเชิงเวลา</b>
                                            </div>
                                            <div className="col-lg-3">
                                                <textarea className="form-control" style={{ width: 700 }}></textarea>
                                            </div>
                                        </div>
                                        <div className="row py-1">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>ตัวชี้วัดเชิงต้นทุน</b>
                                            </div>
                                            <div className="col-lg-3">
                                                <textarea className="form-control" style={{ width: 700 }}></textarea>
                                            </div>
                                        </div>
                                        <div className="row py-2">
                                            <div className="col-lg-5" style={{ textAlign: "right" }}>
                                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-primary text-white MuiButton-contained">บันทึก</button>
                                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-danger text-white MuiButton-contained" onClick={() => this.toggleHidden8()}>ยกเลิก</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="card py-2">
                                <div style={{ paddingLeft: 50 }}><span style={{ color: 'red' }}>*</span><b style={{ color: 'blue' }}>ผลลัพธ์<hr></hr></b></div>
                                <div className="col-lg-12" style={{ paddingLeft: 35 }}>
                                    <div className="table-responsive-material">
                                        <Table bordered>
                                            <thead>
                                                <tr >
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 5 }}><b>จัดการ</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 230 }}><b>ชื่อผลผลิต</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 245 }}><b>ผลลัพธ์</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 40 }}><b>ปีงบประมาณ</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 180 }}><b>ตัวชี้วัดเชิงปริมาณ	</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 180 }}><b>ตัวชี้วัดเชิงคุณภาพ</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>ตัวชี้วัดเชิงเวลา</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>ตัวชี้วัดเชิงต้นทุน</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{ textAlign: "center" }}><i class="zmdi zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i>&nbsp;&nbsp;&nbsp;<i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i></td>
                                                    <td style={{ textAlign: 'left' }}>ซอร์ฟแวร์ช่วยจัดหลีกขบวนรถ (Train Rescheduling System)</td>
                                                    <td style={{ textAlign: "left" }}>พนักงานควบคุมการเดินรถ</td>
                                                    <td>2563</td>
                                                    <td>8 คน</td>
                                                    <td>พนักงานควบคุมการเดินรถสามารถทำงานได้รวดเร็ว และมีประสิทธิภาพขึ้น</td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2" style={{ marginLeft: 33 }}>
                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-white text-black MuiButton-contained" onClick={() => this.toggleHidden9()}  >เพิ่มผลลัพธ์</button>
                                    </div>
                                </div>
                                {!this.state.isHidden9 &&
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <span style={{ color: 'red' }}>*</span><b>ชื่อผลผลิต</b>
                                            </div>
                                            <div className="col-lg-9">
                                                <select className="form-control" style={{ width: 700 }}>
                                                    <option selected="selected" value="-1">--= กรุณาเลือก </option>
                                                    <option value="729070">ซอร์ฟแวร์ช่วยจัดหลีกขบวนรถ (Train Rescheduling System)</option>
                                                    <option value="729142">บทความเรื่อง Train Re-scheduling System</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row py-2">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>ผลลัพธ์</b>
                                            </div>
                                            <div className="col-lg-3">
                                                <input type="text" className="form-control" style={{ width: 700 }}></input>
                                            </div>
                                        </div>
                                        <div className="row py-1">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>ปีงบประมาณ</b>
                                            </div>
                                            <div className="col-lg-3">
                                                <select className="form-control" style={{ width: 300 }}>
                                                    <option selected="selected" value="2563">2563</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row py-1">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>ตัวชี้วัดเชิงปริมาณ</b>
                                            </div>
                                            <div className="col-lg-9">
                                                <textarea className="form-control" rows='3' style={{ width: 700 }}></textarea>
                                            </div>
                                        </div>
                                        <div className="row py-1">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>ตัวชี้วัดเชิงคุณภาพ</b>
                                            </div>
                                            <div className="col-lg-3">
                                                <textarea className="form-control" rows='3' style={{ width: 700 }}></textarea>
                                            </div>
                                        </div>
                                        <div className="row py-1">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>ตัวชี้วัดเชิงเวลา</b>
                                            </div>
                                            <div className="col-lg-3">
                                                <textarea className="form-control" rows='3' style={{ width: 700 }}></textarea>
                                            </div>
                                        </div>
                                        <div className="row py-1">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>ตัวชี้วัดเชิงต้นทุน</b>
                                            </div>
                                            <div className="col-lg-3">
                                                <textarea className="form-control" rows='3' style={{ width: 700 }}></textarea>
                                            </div>
                                        </div>
                                        <div className="row py-2">
                                            <div className="col-lg-5" style={{ textAlign: "right" }}>
                                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-primary text-white MuiButton-contained">บันทึก</button>
                                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-danger text-white MuiButton-contained" onClick={() => this.toggleHidden10()}>ยกเลิก</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="card py-2">
                                <div style={{ paddingLeft: 30 }}><span style={{ color: 'red' }}>*</span><b style={{ color: 'blue' }}>ผลสำเร็จ<hr></hr></b></div>
                                <div className="col-lg-12" style={{ paddingLeft: 50 }}>
                                    <div className="table-responsive-material">
                                        <Table bordered>
                                            <thead className="card-header">
                                                <tr>
                                                    <td style={{ width: 2 }}><b>ลบ</b></td>
                                                    <td style={{ width: 2, textAlign: "center" }}><b>ปี</b></td>
                                                    <td style={{ textAlign: "center" }}><b>ผลสำเร็จที่คาดว่าจะได้รับ</b></td>
                                                    <td style={{ textAlign: "center", width: 120 }}><b>ประเภท</b></td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><i class="zmdi zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                    <td>2563</td>
                                                    <td style={{ textAlign: 'left' }}>
                                                        1. ได้ทดลองใช้ซอร์ฟแวร์ที่สามารถใช้ในการสร้างTime table และTrain diagram 2. ได้ทดลองใช้ซอร์ฟแวร์ที่ช่วยพนักงานควบคุมการเดินรถตัดสินใจในการสั่งเปลี่ยนหลีก 3.ได้ความองค์ความรู้และแนวทางในการสร้างซอร์ฟแวร์เพื่อสร้างตารางเวลา(Time table) และTrain diagram 4. โครงการวิจัยนี้มีลักษณะเป็นโครงการนำร่อง ซึ่งจะได้องค์ความรู้ ที่นำไปสู่การพัฒนาในขั้นต่อไป
                                     </td>
                                                    <td style={{ textAlign: "center" }}>Primary Result</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                            <b>ปี</b>
                                        </div>
                                        <div className="col-lg-9">
                                            <select className="form-control" style={{ width: 700 }}>
                                                <option></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                            <b>ประเภทผลสำเร็จ</b>
                                        </div>
                                        <div className="col-lg-3">
                                            <select className="form-control" style={{ width: 700 }}>
                                                <option></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                            <span style={{ color: 'red' }}>*</span><b>ผลสำเร็จที่คาดว่าจะได้รับ</b>
                                        </div>
                                        <div className="col-lg-3">
                                            <Editor
                                                style={{ margin: "0px !important" }}
                                                init={{
                                                    height: 300,
                                                    width: 698
                                                }}
                                                onChange={this.handleEditorChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-lg-3" style={{ textAlign: "right", marginLeft: 20 }}>
                                        </div>
                                        <div>
                                            <button className="MuiButtonBase-root MuiButton-root jr-btn bg-info text-white MuiButton-contained">เพิ่มผลสำเร็จ</button>
                                        </div>
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

export default Coor_proposalUI;