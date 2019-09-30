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
import { TextArea } from 'semantic-ui-react';


class Coor_proposalUI extends React.Component {
    render() {
        const store = configureStore();
        const authUser = JSON.parse(store.getState().auth.authUser);
        console.log("test", store.getState().auth)
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
                            <div className="form-horizontal">
                                <div className="form-group">
                                    <label className="col-lg-4  label-text" style={{ marginTop: 20 }}>
                                        รหัสโครงการ :
                                            <span>1180488</span>
                                    </label>
                                    <label className="col-lg-4  label-text" style={{ marginTop: 20 }}>
                                        รหัสข้อเสนอการวิจัย :
                                            <span>2563NRCT324738</span>
                                    </label>
                                    <label className="col-lg-4  label-text" style={{ marginTop: 20 }}>
                                        รหัสชุดโครงการ/แผนงานวิจัย :
                                    </label>
                                </div>
                                <label className="col-lg-4  label-text" style={{ marginTop: 20 }}>

                                </label>
                                <label className="col-lg-4  label-text" style={{ marginTop: 20 }}>

                                </label>
                                <label className="col-lg-4  label-text">
                                    สถานะโครงการ:
                                            &nbsp;<span>แหล่งทุนได้รับข้อเสนอโครงการเรียบร้อยแล้ว (14)</span>
                                </label>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>ข้อมูลทุน<hr></hr></b></div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>แหล่งทุน</b></span>
                                    </div>
                                    <div>
                                        <span>ทุน วช.</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>ชื่อทุน</b></span>
                                    </div>
                                    <div>
                                        <span>การคมนาคมขนส่งระบบราง</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>ปีงบประมาณ</b></span>
                                    </div>
                                    <div>
                                        <span>2563</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 20 }}><b style={{ color: 'blue' }}>ข้อมูลโครงการ<hr></hr></b></div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>ชื่อโครงการ (ไทย)</b></span>
                                    </div>
                                    <div>
                                        <span>ระบบจัดเปลี่ยนหลีกการเดินรถ โดยใช้แบบจำลองคัลเลอร์เพตริเนต</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>หน่วยงานเจ้าของโครงการ</b></span>
                                    </div>
                                    <div>
                                        <span>กองบริหารแผนและงบประมาณการวิจัย (กบง.)</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>หน่วยงานสังกัดนักวิจัย</b></span>
                                    </div>
                                    <div>
                                        <span>มหาวิทยาลัยเทคโนโลยีสุรนารี</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>ประเภทโครงการ</b></span>
                                    </div>
                                    <div>
                                        <span>โครงการวิจัย</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                    </div>
                                    <div>
                                        <a className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained" href="#">แสดงรายละเอียดโครงการทั้งหมด</a>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 20 }}><b style={{ color: 'blue' }}><label>ข้อมูล ณ วันที่: 24/9/2562 14:14:07 <br></br>ความครบถ้วนของข้อมูล</label><hr></hr></b></div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>ข้อมูลทั่วไป</b></span>
                                    </div>
                                    <div>
                                        <span><button className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained"><span className="zmdi zmdi-check"></span>&nbsp;ครบถ้วน</button></span>
                                    </div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>รายละเอียดโครงการ</b></span>
                                    </div>
                                    <div>
                                        <span><button className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained"><span className="zmdi zmdi-check"></span>&nbsp;ครบถ้วน</button></span>
                                    </div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>คณะผู้วิจัย</b></span>
                                    </div>
                                    <div>
                                        <span><button className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained"><span className="zmdi zmdi-check"></span>&nbsp;ครบถ้วน</button></span>
                                    </div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>แผนงาน</b></span>
                                    </div>
                                    <div>
                                        <span><button className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained"><span className="zmdi zmdi-check"></span>&nbsp;ครบถ้วน</button></span>
                                    </div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>เอกสารแนบ</b></span>
                                    </div>
                                    <div>
                                        <span><button className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained"><span className="zmdi zmdi-check"></span>&nbsp;ครบถ้วน</button></span>
                                    </div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <input type="checkbox" style={{ borderWidth: 30 }}></input>
                                    </div>
                                    <div className="col-lg-9">
                                        <span>วช.ถือว่าข้อเสนอโครงการที่เสนอมานั้น ผ่านความเห็นชอบจากหัวหน้าโครงการวิจัย คณะผู้วิจัย
                                      และผู้บังคับบัญชา<br></br>
                                            สูงสุดของหน่วยงานระดับอธิการบดี อธิบดีหรือเทียบเท่าของภาครัฐที่ผู้อำนวยการโครงการสังกัดอยู่
                                      หรือกรรมการ<br></br>ผู้จัดการใหญ่หรือเทียบเท่าของภาคเอกชนเรียบร้อยแล้ว
                                      &nbsp;&nbsp;หากมีการร้องเรียนเกี่ยวกับข้อเสนอดังกล่าวจากคณะผู้วิจัย<br></br>
                                            วช. ขอสงวนสิทธิในการสนับสนุนทุนวิจัย</span>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <b>ความคิดเห็น</b>
                                    </div>
                                    <div className="col-lg-9">
                                        <textarea className="form-control" rows="4" style={{ width: 700 }}></textarea>
                                    </div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <b>สถานะข้อเสนอการวิจัย</b>
                                    </div>
                                    <div className="col-lg-9">
                                        <select className="form-control" style={{width:700}}>
                                            <option value="0">นักวิจัยกำลังดำเนินการ (0)</option>
                                            <option value="1">ส่งกลับให้นักวิจัยแก้ไขโครงการ (1)</option>
                                            <option value="14">แหล่งทุนได้รับข้อเสนอโครงการเรียบร้อยแล้ว (14)</option>
                                            <option value="16">แหล่งทุนกำลังพิจารณาข้อเสนอโครงการ (16)</option>
                                            <option value="17">แหล่งทุนอนุมัติโครงการ (17)</option>
                                            <option value="18">แหล่งทุนไม่อนุมัติโครงการ (18)</option>
                                            <option value="19">ข้อเสนอโครงการไม่สอดคล้องกับภารกิจของแหล่งทุน (19)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>

                                    </div>
                                    <div style={{ marginLeft: 15 }}>
                                        <input type="checkbox" style={{ marginTop: 4 }}></input>
                                    </div>
                                    <span>ส่งข้อความให้นักวิจัย(<label id="name" name="สมศักดิ์ วาณิชอนันต์ชัย">สมศักดิ์ วาณิชอนันต์ชัย</label>)-<label id="tel">0842803744</label></span>
                                </div>
                                <div className="row py-1">
                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                    </div>
                                    <div style={{ marginLeft: 15 }}>
                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-Default text-black MuiButton-contained">บันทึกสถานะข้อเสนอการวิจัย</button>
                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-danger text-white MuiButton-contained">ยกเลิก</button>
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