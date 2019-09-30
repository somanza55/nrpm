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
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>เอกสารแนบ<hr></hr></b></div>
                            <div className="col-lg-12" style={{ paddingLeft: 35 }}>
                                <div className="table-responsive-material">
                                    <Table bordered>
                                        <thead>
                                            <tr >
                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 5 }}><b>ลบ</b></th>
                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 230 }}><b>ชื่อไฟล์</b></th>
                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>ประเภทเอกสาร</b></th>
                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 40 }}><b>ประเภทไฟล์</b></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ textAlign: "center" }}><i class="zmdi zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                <td style={{ textAlign: 'left' }}><a href="#">trasymposium2019_paper_16.pdf</a></td>
                                                <td style={{ textAlign: "left" }}>เอกสารอื่นๆ</td>
                                                <td><img src="images/AtFile/pdf.png" alt title="pdf" style={{ width: 20 }} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                            <b>ประเภทเอกสาร</b>
                                        </div>
                                        <div className="col-lg-9">
                                            <select className="form-control">
                                                <option></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginTop: 3 }}>
                                        <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                            <b>ไฟล์แนบ</b>
                                        </div>
                                        <div className="col-lg-4">
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
                                        <span style={{ backgroundColor: 'pink', width: 410, height: 25, textAlign: "left" }}><b style={{ color: 'red' }}>ระบบรองรับไฟล์ขนาดสูงสุดไม่เกิน 20 MB</b></span>
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
            </div>
        );
    }
}

export default Coor_proposalUI;