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


class Coor_proposalUI extends React.Component {
    state = { values: [{ value: null }] };
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
            isHidden2: false,
            isHidden3: true

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
        })
    }
    toggleHidden3() {
        this.setState({
            isHidden3: !this.state.isHidden3,
            isHidden3:false
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
                    <div className="shadow border-0 card">
                        <div className="card-header py-0">
                            <div>
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink>
                                            <Link to={`/`} className="link" style={{ color: 'black' }}><b>ข้อมูลทั่วไป</b></Link>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            <Link to={`./Coor_proposalUI1`} className="link" style={{ color: 'black' }}><b>รายละเอียดโครงการ</b></Link>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            <Link to={`./Coor_proposalUI2`} className="link" style={{ color: 'black' }}><b>คณะผู่วิจัย</b></Link>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            <Link to={`./Coor_proposalUI3`} className="link" style={{ color: 'black' }}><b>แผนงาน</b></Link>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            <Link to={`./Coor_proposalUI5`} className="link" style={{ color: 'black' }}><b>เอกสารแนบ</b></Link>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            <Link to={`./Coor_proposalUI7`} className="link" style={{ color: 'black' }}><b>ตรวจสอบความถูกต้อง</b></Link>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                        <div className="card">
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>ข้อมูลนักวิจัย<hr></hr></b></div>
                            <div className="col-lg-11" style={{ marginLeft: 28 }}>
                                <div className="shadow border-0 card">
                                    <div className="card-header py-0">
                                        <span style={{ fontWeight: 'bold' }} onClick={() => this.toggleHidden()}>วิธีการเพิ่มคณะผู้วิจัย</span>
                                    </div>
                                    {!this.state.isHidden && <p>
                                        <div className="card-body">
                                            <p style={{ marginBottom: 10 }}>1. คลิก เพิ่มคณะผู้วิจัย ค้นหา นักวิจัยด้วย ชื่อ/นามสกุล/เลขบัตรประชาชน และคลิกค้นหาเมื่อพบนักวิจัยที่ต้องการแล้ว คลิก เลือก หน้าชื่อนักวิจัย หากค้นหานักวิจัยไม่พบให้คลิกสมัครนักวิจัยใหม่ เพื่อลงทะเบียนนักวิจัย</p>
                                            <p>2. เลือกตำแหน่งในโครงการ ระบุส่วนร่วมร้อยละ เวลาที่ทำวิจัย และคลิกบันทึก โดย 1 คน มี 1 ตำแหน่ง</p>
                                            <ul>
                                                <li>กรณีเป็น ผู้อำนวยการแผนงาน/ชุดโครงการ และเป็นหัวหน้าโครงการย่อยด้วยให้เลือกตนเองเป็น ผู้อำนวยการแผนงานวิจัย หรือชุดโครงการวิจัย</li>
                                                <li>หากเลือกผู้อื่นเป็นหัวหน้าโครงการ หรือเป็น ผู้อำนวยการแผนงานวิจัย หรือชุดโครงการวิจัย (กรณีแผนงาน/ชุดโครงการ) เมื่อบันทึกข้อมูลแล้วโครงการจะถูกย้ายไปอยู่ที่หัวหน้าโครงการ/ผู้อำนวยการแผนงานวิจัย หรือชุดโครงการวิจัย และผู้ร่วมวิจัยจะไม่สามารถแก้ไขข้อเสนอโครงการได้</li>
                                                <li style={{ width: 1000 }}>หากลบตัวเองออกจากการเป็นหัวหน้าโครงการ หรือ ผู้อำนวยการแผนงานวิจัยหรือชุดโครงการวิจัย เมื่อบันทึกแล้ว จะไม่สามารถแก้ไขข้อเสนอโครงการได้</li>
                                            </ul>
                                        </div>
                                    </p>}
                                </div>
                            </div>
                        </div>
                            <div className="col-lg-11" style={{ marginLeft: 28 }}>
                                <div className="shadow border-0 card">
                                    <div className="card-header py-2">
                                            <span class="zmdi zmdi-account zmdi-hc-lg">
                                                &nbsp;ข้อมูลนักวิจัย
                                            </span>
                                        <div className="form-btnright">
                                            <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden2()} ></i>
                                        </div>
                                    </div>
                                    {!this.state.isHidden2 && <p>
                                        <Table bordered>
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 5 }}>ลบ</th>
                                                    <th style={{ width: 5 }}>แก้ไข</th>
                                                    <th style={{ textAlign: "center" }}>ชื่อ-สกุล</th>
                                                    <th style={{ textAlign: "center" }}>ตำแหน่งในโครงการ</th>
                                                    <th style={{ textAlign: "center" }}>สัดส่วนการมีส่วนร่วม</th>
                                                    <th style={{ textAlign: "center" }}>เวลาที่ทำวิจัย (ชั่วโมง/สัปดาห์)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td styl={{ textAlign: "middle" }}><i class="zmdi zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                    <td styl={{ textAlign: "center" }}><i class="zmdi zmdi-edit zmdi-hc-2x"></i></td>
                                                    <td rowSpan='8' style={{ width: 400 }}>
                                                        <div className="form-group">
                                                            <div className="row">
                                                                <div style={{ paddingLeft: 2 }}>
                                                                    <label>สมศักดิ์ วาณิชอนันต์ชัย</label>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <span style={{ paddingLeft: 3 }} >หน่วยงาน :</span>
                                                                <div>
                                                                    <span style={{ paddingLeft: 4 }}>&nbsp;มหาวิทยาลัยเทคโนโลยีสุรนารี สำนักวิชาวิศวกรรมศาสตร์</span>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <span style={{ paddingLeft: 3 }}>การตรวจสอบของ วช. :</span>
                                                                <div>
                                                                    <span style={{ paddingLeft: 4 }}>&nbsp;ตรวจสอบเลขบัตรแล้ว โดยเจ้าหน้าที่ วช.</span>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <span style={{ paddingLeft: 3 }}>สถานะการติดค้าง :</span>
                                                                <div>
                                                                    <span style={{ paddingLeft: 4 }}>&nbsp;<a href="#">0 โครงการ</a></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>หัวหน้าโครงการ</td>
                                                    <td style={{ textAlign: 'center' }}>100.00</td>
                                                    <td style={{ textAlign: 'center' }}>20</td>
                                                </tr>

                                            </tbody>
                                        </Table>
                                    </p>}
                                </div>
                                <div className="form-group">
                                    <div className="col-lg-2">  
                                    <button className="MuiButtonBase-root MuiButton-root jr-btn bg-white text-black MuiButton-contained" onClick={() => this.toggleHidden3()}>เพิ่มคณะผู้วิจัย</button>
                                    </div>
                                </div>
                                {!this.state.isHidden3 &&
                                <div className="form-group">
                                    <div className="row">
                                    <div className="col-lg-2" style={{marginTop:8}}>
                                        <span >ชื่อ-นามสกุล</span>
                                    </div>
                                    <div >
                                        <input type="text" className="form-control" style={{width:480}}></input>
                                    </div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-lg-2" style={{marginTop:8}}>
                                        <span >เลขบัตรประชาชน/passport</span>
                                    </div>
                                    <div >
                                        <input type="text" className="form-control" style={{width:480}}></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2">
                                    </div>
                                    <div >
                                    ระบุ ชื่อ และหรือนามสกุล โดยไม่ต้องมีคำนำหน้า หรือระบุเลขบัตรประชาชน
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-lg-2">
                                    </div>
                                    <span style={{color:'red'}}>*สามารถค้นหาได้เฉพาะนักวิจัยที่มีสิทธิ์เข้าระบบแล้วเท่านั้น</span>
                                    </div>
                                    <div className="row" >
                                    <div className="col-lg-2">
                                    </div>
                                    <button className="MuiButtonBase-root MuiButton-root jr-btn bg-primary text-white MuiButton-contained">ค้นหา</button>
                                    <button className="MuiButtonBase-root MuiButton-root jr-btn bg-orange text-white MuiButton-contained"><span className="zmdi zmdi-account-add zmdi-hc-1x">&nbsp;สมัครนักวิจัยใหม่่</span></button>
                                    <button className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained"><span className="zmdi zmdi-search zmdi-hc-1x">&nbsp;ตรวจสอบบัญชีในระบบ</span></button>
                                    </div>
                                    <div className="row py-2">
                                    <Table bordered style={{width:700}}>
                                        <thead className="card-header">
                                        <tr>
                                            <td style={{fontWeight:'bold',width:5}}>เลือก</td>
                                            <td style={{fontWeight:'bold',width:5}}>รหัส</td>
                                            <td style={{fontWeight:'bold',textAlign:"center"}}>ชืื่อ-นามสกุล</td>
                                            <td style={{fontWeight:'bold',textAlign:"center"}}>หน่วยงาน</td>
                                        </tr>
                                        </thead>
                                        <tr>
                                            <td colSpan='4' style={{backgroundColor:'grey',textAlign:"center"}}><span style={{color:'white'}}>-ไม่มีข้อมูลนักวิจัย</span></td>
                                        </tr>
                                    </Table>
                                    </div>
                                </div>
                                }
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>ข้อมูลหัวหน้าสถาบันต้นสังกัด<hr></hr></b></div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:8}}>
                                        <span style={{color:'red'}}>*</span><b>ชื่อ-นามสกุล</b>
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" style={{width:480}}></input>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:8}}>
                                        <span style={{color:'red'}}>*</span><b>สังกัด</b>
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" style={{width:480}}></input>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:8}}>
                                        <span style={{color:'red'}}>*</span><b>ตำแหน่ง</b>
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" style={{width:480}}></input>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:8}}>
                                        <span style={{color:'red'}}>*</span><b>ที่อยู่</b>
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" style={{width:480}}></input>
                                    </div>
                                </div>
                                <div className="row py-2">
                                <div className="col-lg-5" style={{textAlign:"right"}}>
                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-white text-black MuiButton-contained">บันทึก</button>
                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-danger text-white MuiButton-contained">ยกเลิก</button>
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