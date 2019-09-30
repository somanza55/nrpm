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
import { Table } from 'reactstrap';

class Coor_proposalUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
            isHidden2: false,
            isHidden3: false,
            isHidden4: false,
            isHidden5: false,
            isHidden6: false,
            isHidden7: false,
            isHidden8: false,
            isHidden9: false,
            isHidden10: false,


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
    toggleHidden8() {
        this.setState({
            isHidden8: !this.state.isHidden8,
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
        })
    }
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
                            <div className="form-horizontal" style={{ marginTop: 40 }}>
                                <div className="form-group">
                                    <label className="col-lg-4  label-text" style={{ marginTop: 20 }}>
                                        รหัสโครงการ :
                                            <span>682766</span>
                                    </label>
                                    <label className="col-lg-4  label-text" style={{ marginTop: 20 }}>
                                        รหัส:
                                            <span>-</span>
                                    </label>
                                    <label className="col-lg-4  label-text" style={{ marginTop: 20 }}>
                                        รหัสชุดโครงการ/แผนงานวิจัย :
                                        <span>-</span>
                                    </label>
                                </div>
                                <label className="col-lg-4  label-text" style={{ marginTop: 20 }}>

                                </label>
                                <label className="col-lg-4  label-text" style={{ marginTop: 20 }}>

                                </label>
                                <label className="col-lg-4  label-text">
                                    รหัส1:  รหัส2:  รหัส3:
                                            &nbsp;<span></span>
                                </label>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>ข้อมูลทุน<hr></hr></b></div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>แหล่งทุน</b></span>
                                    </div>
                                    <div>
                                        <span>ทุนวิจัยและนวัตกรรมในประเด็นสำคัญของประเทศ</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>ชื่อทุน</b></span>
                                    </div>
                                    <div>
                                        <span>T2562001 ทุนวิจัยมุ่งเป้า ปีงบประมาณ 2562 ข้าว (24933)</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 20 }}><b style={{ color: 'blue' }}>ข้อมูลโครงการ<hr></hr></b></div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>ชื่อเรื่อง (ไทย)</b></span>
                                    </div>
                                    <div>
                                        <span>การพัฒนาวิธีการสำหรับตรวจจำแนกสปีชีส์ของเชื้อลิสเทอเรียในเนื้อไก่ด้วยเทคนิคบีทอะเรย์</span>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>ชื่อเรื่อง (อังกฤษ)</b></span>
                                    </div>
                                    <div>
                                        <span>Development of high-throughput method based on bead array technology to discriminate Listeria species <br></br> in poultry samples.</span>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>หน่วยงานเจ้าของโครงการ</b></span>
                                    </div>
                                    <div>
                                        <span>สำนักงานพัฒนาการวิจัยการเกษตร (องค์การมหาชน) (สวก.)</span>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <span><b>ประเภทโครงการ</b></span>
                                    </div>
                                    <div>
                                        <span>โครงการเดี่ยว</span>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                    </div>
                                    <div>
                                        <span>โครงการสิ้นสุดในปีงบประมาณ</span>

                                    </div>
                                </div>
                                <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>ประเภทการวิจัย<hr></hr></b></div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-lg-3" style={{ textAlign: "right" }}>
                                            <span><b>สาขาวิจัย</b></span>
                                        </div>
                                        <div>
                                            <span>  </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3" style={{ textAlign: "right" }}>
                                            <span><b>ประเภทการวิจัย</b></span>
                                        </div>
                                        <div>
                                            <span>การวิจัยพื้นฐาน</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>ระยะเวลาการวิจัย<hr></hr></b></div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <b>ระยะเวลาโครงการ</b>
                                    </div>
                                    <div className="col-lg-1">
                                        1
                                    </div>
                                    &nbsp;&nbsp;<b>ปี</b>
                                    <div className="col-lg-1">
                                        <span style={{ paddingLeft: 20 }}>0</span>
                                    </div>
                                    &nbsp;&nbsp;<b>เดือน</b>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <b>จำนวนเดือนต่องวด</b>
                                    </div>
                                    <div className="col-lg-1">
                                        <span>0</span>
                                    </div>
                                    &nbsp;&nbsp;<b>เดือน</b>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>นโยบายและยุทธศาสตร์การวิจัยของชาติ<hr></hr></b></div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <b>ยุทธศาสตร์</b>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <b>กลยุทธ์</b>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <b>แผนวิจัย</b>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>ยุทธศาสตร์การพัฒนาประเทศตามแผนพัฒนาเศรษฐกิจและสังคมแห่งชาติ<hr></hr></b></div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <b>ยุทธศาสตร์</b>
                                    </div>
                                    <div>
                                        ยุทธศาสตร์การวิจัยที่ 1 : การเสริมสร้างและพัฒนาศักยภาพทุนมนุษย์
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <b>เป้าประสงค์</b>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <b>กลยุทธ์</b>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>หน่วยงานร่วมลงทุน ร่วมวิจัย รับจ้างวิจัย หรือ Matching found<hr></hr></b></div>
                            <div className="shadow border-0 card">
                                <div className="card-header">
                                    <span class="zmdi zmdi-key zmdi-hc-1x">
                                        &nbsp;&nbsp;หน่วยงานร่วมลงทุน ร่วมวิจัย รับจ้างวิจัย หรือ Matching found
                                        </span>
                                    <div className="form-btnright">
                                        <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden()} ></i>
                                    </div>
                                </div>
                                {!this.state.isHidden && <p>
                                    <div className="table-responsive-material">
                                        <Table bordered>
                                            <thead>
                                                <tr >
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 200 }}><b>หน่วยงาน/บริษัท</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>ชื่อผู้ประสานงาน</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>เบอร์โทรศัพท์ผู้ประสานงาน</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>เบอร์โทรสารผู้ประสานงาน</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>อีเมล์ผู้ประสานงาน</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{ textAlign: "center", backgroundColor: 'grey' }} colSpan='6'><span style={{ color: 'white' }}>- ไม่มีข้อมูลหน่วยงานร่วมลงทุน -</span></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </p>}
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>การเสนอข้อเสนอหรือส่วนหนึ่งส่วนใดของงานวิจัยนี้ต่อแหล่งทุนอื่น<hr></hr></b></div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        <b>การยื่นข้อเสนอขอรับทุน</b>
                                    </div>
                                    <div>
                                        ไม่มี
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>บทสรุป<hr></hr></b></div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right", marginLeft: 15 }}>
                                        <b>แบบสรุปข้อเสนอการวิจัย(ไทย)</b>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right", marginLeft: 15 }}>
                                        <b>แบบสรุปข้อเสนอการวิจัย(อังกฤษ)</b>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right", marginLeft: 15 }}>
                                        <b>ความสำคัญและที่มาของปัญหาที่ทำการวิจัย</b>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right", marginLeft: 15 }}>
                                        <b>วัตถุประสงค์การวิจัย</b>
                                    </div>
                                    <div className="col-lg-7">
                                        เพื่อพัฒนาวิธีการสำหรับจำแนกสปีชีส์ของเชื้อ Listeria spp. โดยใช้เทคนิค bead array และทดสอบวิธีที่ได้พัฒนาขึ้นมากับตัวอย่างจากสายการผลิตไก่เนื้อจากฟาร์ม โรงฆ่าสัตว์และตลาด ซึ่งด้วยเทคนิค bead array นี้จะสามารถทำให้ขั้นตอนการจำแนกสปีชีส์ของเชื้อ Listeria spp. มีความรวดเร็วกว่าวิธีมาตรฐาน
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right", marginLeft: 15 }}>
                                        <b>ประโยชน์ที่คาดว่าจะได้รับ</b>
                                    </div>
                                    <div className="col-lg-7">
                                        ปีที่1&nbsp;- ชุดต้นแบบระดับห้องปฏิบัติการสำหรับจำแนกสปีส์ของเชื้อ Listeria จำนวน 1 ชุดต้นแบบ<br></br>

                                        <span style={{ paddingLeft: 30 }}>- ตีพิมพ์ในวารสารวิชาการนานาชาติ จำนวน 1 ฉบับ</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right", marginLeft: 15 }}>
                                        <b>คำสำคัญ (ไทย)</b>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right", marginLeft: 15 }}>
                                        <b>คำสำคัญ (อังกฤษ)</b>
                                    </div>
                                    <div className="col-lg-6">
                                        Bead array,multiplex detection,multiplex PCR,Listeria spp.,poultry
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right", marginLeft: 15 }}>
                                        <b>การนำไปใช้ประโยชน์ในด้าน</b>
                                        <div className="col-lg-7" style={{ marginLeft: 200 }}>
                                            <b>กลุ่มอุตสาหกรรม</b>
                                        </div>
                                    </div>

                                    <div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right", marginLeft: 15 }}>
                                        <b>หน่วยงานที่นำผลการวิจัยไปใช้ประโยชน์</b>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>สถานที่ทำวิจัย<hr></hr></b></div>
                            <div className="shadow border-0 card">
                                <div className="card-header">
                                    <span class="zmdi zmdi-key zmdi-hc-1x">
                                        &nbsp;&nbsp;สถานที่ทำวิจัย
                                        </span>
                                    <div className="form-btnright">
                                        <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden2()} ></i>
                                    </div>
                                </div>
                                {!this.state.isHidden2 && <p>
                                    <div className="table-responsive-material">
                                        <Table bordered>
                                            <thead>
                                                <tr >
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 80 }}><b>ประเภท</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>ชื่อประเทศ/จังหวัด</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>ชื่อสถานที่</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{ textAlign: "center", backgroundColor: 'grey' }} colSpan='6'><span style={{ color: 'white' }}>- ไม่มีข้อมูล -</span></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </p>}
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-lg-3" style={{ textAlign: "right" }}>
                                            <b>การตรวจสอบทรัพย์สินทางปัญญาหรือสิทธิบัตรที่เกี่ยวข้อง</b>
                                        </div>
                                        <div className="col-lg-9">
                                           <input type="radio" style={{paddingTop:4}}></input>
                                           <span style={{marginBottom:15}}>ไม่มีการตรวจสอบทรัพย์สินทางปัญญา และ/หรือ สิทธิบัตรที่เกี่ยวข้อง</span><br></br>
                                           <input type="radio" disabled="disabled" style={{marginTop:4}}></input>
                                           <span>ตรวจสอบทรัพย์สินทางปัญญาแล้ว ไม่มีทรัพย์สินทางปัญญา และ/หรือ สิทธิบัตรที่เกี่ยวข้อง</span><br></br>
                                           <input type="radio" disabled="disabled" style={{marginTop:4}}></input>
                                           <span>ตรวจสอบทรัพย์สินทางปัญญาแล้ว มีทรัพย์สินทางปัญญา และ/หรือ สิทธิบัตรที่เกี่ยวข้อง</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow border-0 card">
                            <div className="card-header">
                                    <span class="zmdi zmdi-account zmdi-hc-1x">
                                        &nbsp;&nbsp;คณะผู้วิจัย
                                        </span>
                                    <div className="form-btnright">
                                        <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden3()} ></i>
                                    </div>
                                </div>
                                {!this.state.isHidden3 && <p>
                                    <div className="table-responsive-material">
                                        <Table bordered>
                                            <thead>
                                                <tr >
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 150 }}><b>ชื่อ - สกุล</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>ตำแหน่งในโครงการ</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>สัดส่วนการมีส่วนร่วม</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 80}}><b>เวลาที่ทำวิจัย</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{ textAlign: "center" }}><span >นิศรา การุณอุทัยศิริ</span></td>
                                                    <td style={{textAlign:"center"}}>ผู้ร่วมวิจัย</td>
                                                    <td style={{textAlign:"center"}}>10</td>
                                                    <td style={{textAlign:"center"}}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: "center" }}><span >สุดธิดา พึ่งวาส</span></td>
                                                    <td style={{textAlign:"center"}}>ผู้ร่วมวิจัย</td>
                                                    <td style={{textAlign:"center"}}>10</td>
                                                    <td style={{textAlign:"center"}}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: "center" }}><span >จอมขวัญ มีรักษ์</span></td>
                                                    <td style={{textAlign:"center"}}>ผู้ร่วมวิจัย</td>
                                                    <td style={{textAlign:"center"}}>25</td>
                                                    <td style={{textAlign:"center"}}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: "center" }}><span >มัลลิกา มะกรวัฒนะ</span></td>
                                                    <td style={{textAlign:"center"}}>ผู้ร่วมวิจัย</td>
                                                    <td style={{textAlign:"center"}}>20</td>
                                                    <td style={{textAlign:"center"}}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: "center" }}><span >รัฐพล เฉลิมโรจน์</span></td>
                                                    <td style={{textAlign:"center"}}>หัวหน้าโครงการ</td>
                                                    <td style={{textAlign:"center"}}>25</td>
                                                    <td style={{textAlign:"center"}}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: "center" }}><span >ดวงพร พิชผล</span></td>
                                                    <td style={{textAlign:"center"}}>ผู้ร่วมวิจัย</td>
                                                    <td style={{textAlign:"center"}}>20</td>
                                                    <td style={{textAlign:"center"}}>-</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </p>}
                                </div>
                                <div className="shadow border-0 card">
                                <div className="card-header">
                                    <span class="zmdi zmdi-account zmdi-hc-1x">
                                        &nbsp;&nbsp;งานวิจัยที่กำลังทำ
                                        </span>
                                    <div className="form-btnright">
                                        <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden4()} ></i>
                                    </div>
                                </div>
                                {!this.state.isHidden4 && <p>
                                    <div className="table-responsive-material">
                                        <Table bordered>
                                            <thead>
                                                <tr >
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 150 }}><b>ชื่อ - สกุล</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}><b>ชื่อโครงการ</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>ความก้าวหน้าโครงการ(%)</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>สัดส่วนในโครงการ(%)</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 60 }}><b>วันที่สิ้นสุดโครงการ</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{ textAlign: "center", backgroundColor: 'grey' }} colSpan='6'><span style={{ color: 'white' }}>- ไม่มีข้อมูล -</span></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </p>}
                                </div>
                                <div className="shadow border-0 card">
                                <div className="card-header">
                                    <span class="zmdi zmdi-account zmdi-hc-1x">
                                        &nbsp;&nbsp;ที่ปรึกษาโครงการ
                                        </span>
                                    <div className="form-btnright">
                                        <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden5()} ></i>
                                    </div>
                                </div>
                                {!this.state.isHidden5 && <p>
                                    <div className="table-responsive-material">
                                        <Table bordered>
                                            <thead>
                                                <tr >
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 150 }}><b>ชื่อ - สกุล</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}><b>ชื่อ-สกุล (อังกฤษ)</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>ตำแหน่ง</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>สังกัด</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 60 }}><b>เบอร์โทรศัทพ์มือถือ</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 60 }}><b>อีเมล์</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{ textAlign: "center", backgroundColor: 'grey' }} colSpan='6'><span style={{ color: 'white' }}>- ไม่มีข้อมูล -</span></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </p>}
                                </div>
                                <div className="shadow border-0 card">
                                <div className="card-header">
                                    <span class="zmdi zmdi-account zmdi-hc-1x">
                                        &nbsp;&nbsp;แผนการดำเนินงานวิจัย
                                        </span>
                                    <div className="form-btnright">
                                        <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden6()} ></i>
                                    </div>
                                </div>
                                {!this.state.isHidden6 && <p>
                                    <div className="table-responsive-material">
                                        <Table bordered>
                                            <thead>
                                                <tr >
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 30 }}><b>ปีงบ</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 50 }}><b>กิจกรรม</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle"}}>1</th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle"}}>2</th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle"}}>3</th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle"}}>4</th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle"}}>5</th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle"}}>6</th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle"}}>7</th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle"}}>8</th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle"}}>9</th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle"}}>10</th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle"}}>11</th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle"}}>12</th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>ร้อยละของงาน</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>ผู้รับผิดชอบ</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{ textAlign: "center", backgroundColor: 'grey' }} colSpan='18'><span style={{ color: 'white' }}>-ไม่มีข้อมูลแผนการดำเนินงานวิจัย -</span></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </p>}
                                </div>
                                <div className="shadow border-0 card">
                                <div className="card-header">
                                    <span class="zmdi zmdi-account zmdi-hc-1x">
                                        &nbsp;&nbsp;รายละเอียดการจัดซื้อครุภัณฑ์
                                        </span>
                                    <div className="form-btnright">
                                        <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden7()} ></i>
                                    </div>
                                </div>
                                {!this.state.isHidden7 && <p>
                                    <div className="table-responsive-material">
                                        <Table bordered>
                                            <thead>
                                                <tr >
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 150 }}><b>ชื่อครุภัณฑ์</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}><b>สถานะภาพของครุภัณฑ์ในหน่วยงาน</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>รายละเอียดครุภัณฑ์</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}><b>เหตุผลและความจำเป็นต่อโครงการ</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>การใช้ประโยชน์เมื่อโครงการสิ้นสุด</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>รายละเอียดของเดิม</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{ textAlign: "center", backgroundColor: 'grey' }} colSpan='6'><span style={{ color: 'white' }}>- ไม่มีข้อมูลการจัดซื้อครุภัณฑ์ -</span></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </p>}
                                </div>
                                <div className="shadow border-0 card">
                                <div className="card-header">
                                    <span class="zmdi zmdi-account zmdi-hc-1x">
                                        &nbsp;&nbsp;งบประมาณ
                                        </span>
                                    <div className="form-btnright">
                                        <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden8()} ></i>
                                    </div>
                                </div>
                                {!this.state.isHidden8 && <p>
                                    <div className="table-responsive-material">
                                        <Table bordered>
                                            <thead>
                                                <tr >
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}><b>ประเภทงบประมาณ</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}><b>งบประมาณที่เสนอขอ</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}><b>งบประมาณที่ได้รับจัดสรร</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>งบบุคลากร</td>
                                                    <td><input type="text" className="form-control" defaultValue="0.00" style={{textAlign:"right"}}></input></td>
                                                    <td><input type="text" className="form-control" defaultValue="0.00" style={{textAlign:"right"}}></input></td>
                                                </tr>
                                                <tr>
                                                    <td>งบดำเนินการ</td>
                                                    <td><input type="text" className="form-control" defaultValue="0.00" style={{textAlign:"right"}}></input></td>
                                                    <td><input type="text" className="form-control" defaultValue="0.00" style={{textAlign:"right"}}></input></td>
                                                </tr>
                                                <tr>
                                                    <td>งบลงทุน</td>
                                                    <td><input type="text" className="form-control" defaultValue="0.00" style={{textAlign:"right"}}></input></td>
                                                    <td><input type="text" className="form-control" defaultValue="0.00" style={{textAlign:"right"}}></input></td>
                                                </tr>
                                                <tr>
                                                    <td style={{textAlign:"center"}}><b>รวม</b></td>
                                                    <td style={{textAlign:"right",paddingRight:23}}><b>0.00</b></td>
                                                    <td style={{textAlign:"right",paddingRight:23}}><b>0.00</b></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </p>}
                                </div>
                                <div className="shadow border-0 card">
                                <div className="card-header">
                                    <span class="zmdi zmdi-key zmdi-hc-1x">
                                        &nbsp;&nbsp;ผลสำเร็จ
                                        </span>
                                    <div className="form-btnright">
                                        <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden9()} ></i>
                                    </div>
                                </div>
                                {!this.state.isHidden9 && <p>
                                    <div className="table-responsive-material">
                                        <Table bordered>
                                            <thead>
                                                <tr >
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 40 }}><b>ปี</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 180 }}><b>ผลสำเร็จที่คาดว่าจะได้รับ</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 40 }}><b>ประเภท</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{ textAlign: "center", backgroundColor: 'grey' }} colSpan='6'><span style={{ color: 'white' }}>- ไม่มีข้อมูลนักวิจัย -</span></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </p>}
                                </div>
                                <div className="shadow border-0 card">
                                <div className="card-header">
                                    <span class="zmdi zmdi-account zmdi-hc-1x">
                                        &nbsp;&nbsp;เอกสารแนบ
                                        </span>
                                    <div className="form-btnright">
                                        <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden10()} ></i>
                                    </div>
                                </div>
                                {!this.state.isHidden10 && <p>
                                    <div className="table-responsive-material">
                                        <Table bordered>
                                            <thead>
                                                <tr >
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 150 }}><b>ชื่อไฟล์</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}><b>ประเภทเอกสาร</b></th>
                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>วันที่</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{ textAlign: "center", backgroundColor: 'grey' }} colSpan='6'><span style={{ color: 'white' }}>- ไม่มีข้อมูลไฟล์ข้อเสนอโครงการ -</span></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </p>}
                                </div>
                                <div className="row py-1">
                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                    </div>
                                    <div style={{ marginLeft: 15 }}>
                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-Default text-black MuiButton-contained">ส่งโครงการ</button>
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