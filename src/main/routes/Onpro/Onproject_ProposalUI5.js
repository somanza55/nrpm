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
    render() {
        const store = configureStore();
        const authUser = JSON.parse(store.getState().auth.authUser);
        console.log("test", store.getState().auth)
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
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>เอกสารแนบ<hr></hr></b></div>
                            <div className="col-lg-12" style={{ paddingLeft: 35 }}>
                                <div className="table-responsive-material">
                                    <Table bordered>
                                        <thead>
                                            <tr >
                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 5 }}><b>แก้ไข</b></th>
                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 200 }}><b>ชื่อไฟล์</b></th>
                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 150 }}><b>รหัสดีโอไอ</b>&nbsp;&nbsp;<a href="#" className="zmdi zmdi-info" alt title="คำอธิบายรหัสดีโอไอ" style={{ color: 'blue' }}></a></th>
                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>ประเภทเอกสาร</b></th>
                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 40 }}><b>วันที่</b></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ textAlign: "center" }}><i class="zmdi zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i>&nbsp;<i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i></td>
                                                <td style={{ textAlign: 'left' }}><a href="#">01_Cover_จีนปี2_Final_May18.pdf</a></td>
                                                <td style={{ textAlign: "left" }}></td>
                                                <td>ไฟล์หน้าปกรายงาน</td>
                                                <td>5/8/2561 13:59:16</td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                </div>
                                <div className="row" style={{ marginTop: 3 }}>
                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                        <b>ไฟล์แนบ</b>
                                    </div>
                                    <div className="col-lg-3">
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
                                        </div>
                                    </div>
                                    <span style={{ backgroundColor: 'pink', width: 490, height: 25, textAlign: "left" }}><b style={{ color: 'red' }}>** ระบบรองรับไฟล์ขนาดสูงสุดไม่เกิน 500 MB</b></span>
                                </div>
                                <div className="form-group py-1">
                                    <div className="row">
                                        <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                            <b>ประเภทเอกสาร</b>
                                        </div>
                                        <div className="col-lg-9">
                                            <select className="form-control">
                                                <option value="1">ไฟล์ข้อมูลโครงการ</option>
                                                <option value="2">ไฟล์รายงานความก้าวหน้าโครงการวิจัย</option>
                                                <option value="3">ไฟล์รายงานฉบับสมบูรณ์</option>
                                                <option value="4">ไฟล์บทสรุปสำหรับผู้บริหาร</option>
                                                <option value="5">ไฟล์บทคัดย่อ/สรุปผลการดำเนินงาน</option>
                                                <option value="7">ไฟล์บทความทางวิชาการ</option>
                                                <option value="8">ไฟล์หน้าปกรายงาน</option>
                                                <option value="9">ไฟล์สรุปผลงานวิจัย 1 หน้า (Explore)</option>
                                                <option value="10">ไฟล์สรุปผลงานวิจัย 5 บรรทัด (Explore)</option>
                                                <option value="15">ไฟล์เอกสารแนบ</option>
                                                <option value="16">ไฟล์เอกสารอนุมัติการขยายระยะเวลาโครงการ</option>
                                                <option value="17">ไฟล์เอกสารสัญญา</option>
                                                <option value="18">ไฟล์เอกสารธนาคาร</option>
                                                <option value="21">ไฟล์หนังสือแจ้งเปลี่ยนแปลงคณะผู้วิจัย/รายละเอียดโครงการ</option>
                                                <option value="22">หนังสือยินยอมจากหน่วยงานร่วมดำเนินการ</option>
                                                <option value="23">ไฟล์รายละเอียดการใช้ประโยชน์</option>
                                                <option value="99">ไฟล์อื่นๆ</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        </div>
                                        <div className="col-lg-8" style={{textAlign:"left"}}>
                                            <input type="checkbox" style={{marginTop:7}}></input>
                                            &nbsp;<b>การเปิดเผยไฟล์รายงานสู่สาธารณะ </b><span>(หากติ๊กเปิดเผยไฟล์รายงานสู่สาธารณะ เมื่อโครงการดำเนินการเสร็จสิ้น วช.จะส่งไฟล์รายงานไปเผยแพร่ที่ห้องสมุดดิจิทัลของ วช. และช่องทางการเผยแพร่อื่น)</span>
                                        </div>
                                            
                                        </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-lg-4" style={{ textAlign: "right", marginLeft: 19 }}>
                                            <button className="MuiButtonBase-root MuiButton-root jr-btn bg-primary text-white MuiButton-contained">เพิ่มไฟล์</button>
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