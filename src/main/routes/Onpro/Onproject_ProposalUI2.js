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
                                         <Link  to={`./Onproject_ProposalUId`} className="normal" style={{color:'black'}}><b>ข้อมูลทั่วไป</b></Link>   
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                         <Link  to={`./Onproject_ProposalUI1`} className="normal" activeClassName="active" style={{color:'black'}}><b>รายละเอียดโครงการ</b></Link>   
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                         <Link to={`./Onproject_ProposalUI2`} className="link" style={{color:'black'}}><b>คณะผู้วิจัย</b></Link>   
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                         <Link to={`./Onproject_ProposalUI3`} className="link" style={{color:'black'}}><b>แผนงาน</b></Link>   
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                         <Link to={`./Onproject_ProposalUI5`} className="link" style={{color:'black'}}><b>เอกสารแนบ</b></Link>   
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                         <Link to={`./Onproject_ProposalUI7`} className="link" style={{color:'black'}}><b>ตรวจสอบความถูกต้อง</b></Link>   
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                        <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>ข้อมูลนักวิจัย<hr></hr></b></div>
                            <div className="col-lg-11" style={{ marginLeft: 28 }}>
                                <div className="shadow border-0 card">
                                    <div className="card-header py-2">
                                            <span class="zmdi zmdi-account zmdi-hc-lg">
                                                &nbsp;คณะผู้วิจัย
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
                                                    <th style={{ textAlign: "center",width:200 }}>ชื่อ-สกุล</th>
                                                    <th style={{ textAlign: "center" }}>ตำแหน่งในโครงการ</th>
                                                    <th style={{ textAlign: "center" }}>สัดส่วนการมีส่วนร่วม</th>
                                                    <th style={{ textAlign: "center" }}>เวลาที่ทำวิจัย (ชั่วโมง/สัปดาห์)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td styl={{ textAlign: "middle" }}><i class="zmdi zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i></td>
                                                    <td styl={{ textAlign: "center" }}><i class="zmdi zmdi-edit zmdi-hc-2x"></i></td>
                                                    <td style={{textAlign:"center"}}><label>อัครพงศ์ อั้นทอง</label></td>
                                                    <td>หัวหน้าโครงการ</td>
                                                    <td style={{ textAlign: 'center' }}>100.00</td>
                                                    <td style={{ textAlign: 'center' }}>-</td>
                                                </tr>

                                            </tbody>
                                        </Table>
                                    </p>}
                                </div>
                                <div className="form-group">
                                    <div className="col-lg-3">  
                                    <button className="MuiButtonBase-root MuiButton-root jr-btn bg-white text-black MuiButton-contained" onClick={() => this.toggleHidden3()}>เพิ่มข้อมูลนักวิจัย</button>
                                    </div>
                                </div>
                                {!this.state.isHidden3 &&
                                <div className="form-group">
                                    <div className="row">
                                    <div className="col-lg-2" style={{marginTop:8}}>
                                        <span >ชื่อ-สกุล</span>
                                    </div>
                                    <div >
                                        <input type="text" className="form-control" style={{width:480}}></input>
                                    </div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-lg-2" style={{marginTop:8}}>
                                        <span>รหัสบัตรประชาชน</span>
                                    </div>
                                    <div >
                                        <input type="text" className="form-control" style={{width:480}}></input>
                                    </div>
                                </div>
                                    <div className="row" >
                                    <div className="col-lg-2">
                                    </div>
                                    <button className="MuiButtonBase-root MuiButton-root jr-btn bg-primary text-white MuiButton-contained">ค้นหา</button>
                                    <button className="MuiButtonBase-root MuiButton-root jr-btn bg-orange text-white MuiButton-contained"><span className="zmdi zmdi-account-add zmdi-hc-1x">&nbsp;สมัครนักวิจัยใหม่่</span></button>
                                    </div>
                                    <div className="row py-2">
                                    <Table bordered style={{width:700,display:'none'}} >
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