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
import { Link, Route } from "react-router-dom";


class Onproject_ProposalUI extends React.Component {
    state = { values: [{ value: null }] };

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            showtitle: true,
            showtitle2: false,
            anotherForm: 1,
            anotherForm: false,
            form1: false,
            v1: true,
            v2: false,

        }

        this.showComments = this.showComments.bind(this);
        this.showComments2 = this.showComments2.bind(this);
        this.showComments3 = this.showComments3.bind(this);
        this.showComments4 = this.showComments4.bind(this);
        this.close = this.close.bind(this);
        this.close1 = this.close1.bind(this);
        this.showtitle = this.showtitle.bind(this);
        this.showtitle2 = this.showtitle2.bind(this);
        this.newForm = this.newForm.bind(this);
        this.form1 = this.form1.bind(this);
        this.v1 = this.v1.bind(this);
        this.v2 = this.v2.bind(this);
    }
    newForm() {
        this.setState({
            anotherForm: this.state.anotherForm + 1
        })
    }
    removeClick(i) {
        this.setState({
            anotherForm: 0
        })
    }
    open() {
        this.setState({

        })
    }

    displayForm() {
        let forms = [];
        for (let i = 0; i < this.state.anotherForm; i++) {
            forms.push(
                <div key={i}>
                    <div className="form-group" style={{ marginTop: 10 }}>
                        <div className="row">
                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                <span style={{ color: 'red' }}>*</span><b>ชื่อหน่วยงาน/บริษัท</b>
                            </div>
                            <div>
                                <input type="text" className="form-control" style={{ width: 480 }}></input>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: 4 }}>
                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                <b>ที่อยู่</b>
                            </div>
                            <div>
                                <input type="text" className="form-control" style={{ width: 480 }}></input>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: 4 }}>
                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                <b>เบอร์โทรศัพท์</b>
                            </div>
                            <div>
                                <input type="text" className="form-control" style={{ width: 480 }}></input>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: 4 }}>
                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                <span style={{ color: 'red' }}>*</span><b>ชื่อผู้ประสานงาน</b>
                            </div>
                            <div>
                                <input type="text" className="form-control" style={{ width: 480 }}></input>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: 4 }}>
                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                <b>เบอร์โทรศัพท์ผู้ประสานงาน</b>
                            </div>
                            <div>
                                <input type="text" className="form-control" style={{ width: 480 }}></input>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: 4 }}>
                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                <b>เบอร์โทรสารผู้ประสานงาน</b>
                            </div>
                            <div>
                                <input type="text" className="form-control" style={{ width: 480 }}></input>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: 4 }}>
                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                <b>อีเมลผู้ประสานงาน</b>
                            </div>
                            <div>
                                <input type="text" className="form-control" style={{ width: 480 }}></input>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: 4 }}>
                            <div className="col-lg-10" style={{ textAlign: "right", marginTop: 8 }}>
                                <button className="btn btn-danger" onClick={this.removeClick}>ลบฟอร์ม</button>
                            </div>
                            <div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        }
        console.log(this.state.value);
        return forms || null;
    }
    form1() {
        this.setState({
            form1: !this.setState.form1
        })
    }
    v1() {
        this.setState({
            v1: !this.setState.v1,
            v2: false,
            v1: true
        })
    }
    v2() {
        this.setState({
            v2: !this.setState.v2,
            v1: false,
            v2: true
        })
    }
    showtitle() {
        this.setState({
            showtitle: !this.setState.showtitle,
            showtitle2: false,
            showComponent: false
        })
    }
    showtitle2() {
        this.setState({
            showtitle2: !this.setState.showtitle2,
            showtitle: false,
            showComponent: false
        })
    }
    showComments() {
        this.setState({
            showComponent: !this.state.showComponent
        });
    }
    showComments2() {
        this.setState({
            showComponent2: !this.state.showComponent2

        });

    }
    close() {
        this.setState({
            showComponent2: false,
        });

    }
    close1() {
        this.setState({
            form1: false
        });

    }
    showComments3() {
        this.setState({
            showComponent3: !this.state.showComponent3,
            showComponent4: false,
            showComponent3: true,
        });

    }
    showComments4() {
        this.setState({
            showComponent4: !this.state.showComponent4,
            showComponent3: false,
            showComponent4: true,
        });
    }
    state = {
        startDate: new Date()
    };
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    handleChange2 = date => {
        this.setState({
            enddate: date
        });
    };


    render() {
        const store = configureStore();
        const authUser = JSON.parse(store.getState().auth.authUser);
        console.log("test", store.getState().auth)

        return (
            <div className="animated slideInUpTiny animation-duration-3">
                <div className="app-wrapper">
                    <ContainerHeader match={this.props.match} title={<IntlMessages id="title.Onproject" />} />
                    <div style={{marginBottom:15}}>
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
                        <div className="card">
                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>ข้อมูลทุน<hr></hr></b></div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                        <b>แหล่งทุน</b>
                                    </div>
                                    <div>
                                        <select className="form-control" style={{ width: 570 }}>
                                            <option selected="selected" value="010">เงินรายได้</option>
                                            <option value="020">ทุน วช.</option>
                                            <option value="040">ทุนวิจัยและนวัตกรรมในประเด็นสำคัญของประเทศ</option>
                                            <option value="046">ทุนวิจัยตอบสนองต่อนโยบาย/เป้าหมายรัฐบาล และท้าทายไทย</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: 4 }}>
                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                        <b>ปี</b>
                                    </div>
                                    <div>
                                        <select className="form-control" style={{ width: 570 }}>
                                            <option selected="selected" value="2563">2563</option>
                                            <option value="2562">2562</option>
                                            <option value="2561">2561</option>
                                            <option value="2560">2560</option>
                                            <option value="2559">2559</option>
                                            <option value="2558">2558</option>
                                            <option value="2557">2557</option>
                                            <option value="2556">2556</option>
                                            <option value="2555">2555</option>
                                            <option value="2554">2554</option>
                                            <option value="2553">2553</option>
                                            <option value="2552">2552</option>
                                            <option value="2551">2551</option>
                                            <option value="2550">2550</option>
                                            <option value="2539">2539</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: 4 }}>
                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                        <b>ชื่อทุน</b>
                                    </div>
                                    <div>
                                        <select className="form-control" style={{ width: 570 }}>
                                            <option selected="selected" value="25385">(สำนักงานเศรษฐกิจการคลัง) สำนักงานเศรษฐกิจการคลัง</option>
                                        </select>
                                    </div>
                                </div>
                                <div style={{ paddingLeft: 50, marginTop: 15 }}><b style={{ color: 'blue' }}>ข้อมูลโครงการ</b></div>
                                <hr></hr>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-lg-3" style={{ textAlign: "right" }}>
                                            <b>ประเภทโครงการ</b>
                                        </div>
                                        <div style={{ marginTop: 4 }}>
                                            <input id="ctl00_ContentDetail_rbShowUserTypeOption2" type="radio" name="ctl00$ContentDetail$g1" defaultValue="rbShowUserTypeOption2" onClick={this.showtitle}></input>
                                        </div>
                                        <span style={{ marginTop: 2 }}>โครงการเดี่ยว</span>
                                        <div style={{ marginTop: 4, paddingLeft: 20 }}>
                                            <input id="ctl00_ContentDetail_rbShowUserTypeOption2" type="radio" name="ctl00$ContentDetail$g1" defaultValue="rbShowUserTypeOption2" onClick={this.showtitle2}></input>
                                        </div>
                                        <span style={{ marginTop: 2 }}>แผนงานวิจัย </span>
                                        <div style={{ marginTop: 4, paddingLeft: 20 }}>
                                            <input id="ctl00_ContentDetail_rbShowUserTypeOption1" type="radio" name="ctl00$ContentDetail$g1" defaultValue="rbShowUserTypeOption1" onClick={this.showComments}></input>
                                        </div>
                                        <span style={{ marginTop: 2 }}>โครงการย่อย </span>
                                    </div>
                                    {this.state.showComponent ? <div className="comments_preview_sample">
                                        <div className="row">
                                            <div className="col-lg-5" style={{ textAlign: "right", marginLeft: 40, marginTop: 7 }}>
                                                <span style={{ color: 'green' }}>รหัสข้อเสนอการวิจัยของแผนงาน</span>
                                            </div>
                                            <div>
                                                <input type="text" className="form-control" style={{ width: 200 }}></input>
                                            </div>
                                            <span style={{ color: 'green', marginTop: 7, marginLeft: 10 }}>รหัสโครงการ</span>
                                            <div>
                                                <input type="text" className="form-control" style={{ width: 100 }}></input>
                                            </div>
                                            <div style={{ marginLeft: 5, marginTop: 3 }}>
                                                <button className="MuiButtonBase-root MuiButton-root jr-btn bg-warning text-white MuiButton-contained">ตรวจสอบ</button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4" style={{ marginLeft: 260 }}>
                                                <span style={{ color: 'red' }}><b>กรุณาระบุรหัสโครงการของแผนงานวิจัย !</b></span>
                                            </div>
                                        </div>
                                    </div> : null}
                                    <div className="row">
                                        <div className="col-lg-3" style={{ textAlign: "right" }}>
                                        </div>
                                        <div style={{ marginTop: 4 }}>
                                            <i class="zmdi zmdi-alert-triangle" style={{ color: 'red' }}>เมื่อบันทึกข้อเสนอโครงการแล้วจะไม่สามารถแก้ไขประเภทโครงการได้</i>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-lg-3" style={{ textAlign: "right" }}>
                                            <b>สถานภาพ</b>
                                        </div>
                                        <div style={{ marginTop: 4 }}>
                                            <input id="ctl00_ContentDetail_rbShowUserTypeOption2" type="radio" name="ctl00$ContentDetail$g1" defaultValue="rbShowUserTypeOption2" onClick={this.close}></input>
                                        </div>
                                        <span style={{ marginTop: 2 }}>ใหม่</span>
                                        <div style={{ marginTop: 4, paddingLeft: 20 }}>
                                            <input id="ctl00_ContentDetail_rbShowUserTypeOption2" type="radio" name="ctl00$ContentDetail$g1" defaultValue="rbShowUserTypeOption2" onClick={this.showComments2}></input>
                                        </div>
                                        <span style={{ marginTop: 2 }}>ต่อเนื่อง </span>
                                    </div>
                                    {this.state.showComponent2 ? <div className="comments_preview_sample2">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-lg-3" style={{ textAlign: "right" }}>
                                                    <b>โครงการปีก่อนหน้า</b>
                                                </div>
                                                <div>
                                                    <div style={{ marginTop: 5 }}>รหัสข้อเสนอโครงการวิจัยต่อเนื่องปีก่อนหน้า</div>
                                                </div>
                                                <div>
                                                    <input type="text" className="form-control" style={{ width: 150, marginLeft: 5, marginBottom: 30 }}></input>
                                                </div>
                                                <div>
                                                    <div style={{ marginTop: 5, paddingLeft: 3 }}> รหัสโครงการต่อเนื่องปีก่อนหน้า</div>
                                                </div>
                                                <div>
                                                    <input type="text" className="form-control" style={{ width: 80, marginLeft: 5, marginBottom: 30 }}></input>
                                                </div>
                                                <div className="col-lg-5" style={{ textAlign: "right" }}>
                                                    <button className="MuiButtonBase-root MuiButton-root jr-btn bg-warning text-white MuiButton-contained">ตรวจสอบ</button>
                                                    <button className="MuiButtonBase-root MuiButton-root jr-btn bg-primary text-white MuiButton-contained">บันทึก</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div> : null}
                                    <div className="row">
                                        <div className="col-lg-3" style={{ textAlign: "right" }}>
                                            <b>ลักษณะโครงการ</b>
                                        </div>
                                        <div style={{ marginTop: 4 }}>
                                            <input id="ctl00_ContentDetail_rbShowUserTypeOption3" type="radio" name="ctl00$ContentDetail$g3" defaultValue="rbShowUserTypeOption3" type="radio" onClick={this.showComments4}></input>
                                        </div>
                                        <span style={{ marginTop: 2 }}>โครงการสิ้นสุดในปีงบประมาณ </span>
                                        <div style={{ marginTop: 4, paddingLeft: 20 }}>
                                            <input id="ctl00_ContentDetail_rbShowUserTypeOption3" type="radio" name="ctl00$ContentDetail$g3" defaultValue="rbShowUserTypeOption3" onClick={this.showComments3}></input>
                                        </div>
                                        <span style={{ marginTop: 2 }}>โครงการลักษณะต่อเนื่อง </span>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-5" style={{ textAlign: "right" }}>
                                            โครงการลักษณะต่อเนื่องปีที่
                                        </div>
                                        <div>{this.state.showComponent3 ? <div className="comments_preview_sample3"><input type="text" className="form-control" style={{ width: 35, height: 20 }} defaultValue="1"></input></div> : null}</div>
                                        <div>{this.state.showComponent4 ? <div className="comments_preview_sample4"><input type="text" className="form-control" style={{ width: 35, height: 20 }} defaultValue="0" disabled="disabled"></input></div> : null}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                        <div>{this.state.showtitle ? <div className="showtitle"><span style={{ color: 'red' }}>*</span><b>ชื่อโครงการ (ไทย)
                                        </b></div> : null}</div>
                                        <div>{this.state.showtitle2 ? <div className="showtitle"><span style={{ color: 'red' }}>*</span><b>ชื่อโครงการ (ไทย)
                                        </b></div> : null}</div>

                                    </div>
                                    <div className="App">
                                        <CKEditor
                                        />
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: 5 }}>
                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                        <div>{this.state.showtitle ? <div className="showtitle"><span style={{ color: 'red' }}>*</span><b>ชื่อโครงการ (อังกฤษ)
                                        </b></div> : null}</div>
                                        <div>{this.state.showtitle2 ? <div className="showtitle"><span style={{ color: 'red' }}>*</span><b>ชื่อโครงการ (อังกฤษ)

                                        </b></div> : null}</div>
                                    </div>
                                    <div className="App">
                                        <CKEditor
                                        />
                                    </div>
                                </div>
                                <div style={{ paddingLeft: 50, marginTop: 20 }}><b style={{ color: 'blue' }}>ประเภทการวิจัย
                                <hr></hr></b>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-2" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>สาขาวิจัย</b>
                                            </div>
                                            <div>
                                                <select className="form-control" style={{ width: 580 }}>
                                                    <option></option>
                                                    {/* <option value="6"></option>
                                            <option value="3"></option>
                                            <option value="1"></option>
                                            <option value="2"></option>
                                            <option value="5"></option>
                                            <option value="9"></option> */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row" style={{ marginTop: 4 }}>
                                            <div className="col-lg-2" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>ประเภทการวิจัย</b>
                                            </div>
                                            <div>
                                                <select className="form-control" style={{ width: 580 }}>
                                                    <option></option>
                                                    {/* <option value="6"></option>
                                            <option value="3"></option>
                                            <option value="1"></option>
                                            <option value="2"></option>
                                            <option value="5"></option>
                                            <option value="9"></option> */}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>มาตรฐานการวิจัย
                                <hr></hr></b>
                                    <div className="form-group">
                                        <div className="row" style={{ paddingLeft: 20 }}>
                                            <div>
                                                <input type="checkbox" style={{ marginTop: 4 }}></input>
                                            </div>
                                            &nbsp;<span>มีการใช้สัตว์ทดลอง</span>
                                        </div>
                                        <div className="row" style={{ paddingLeft: 20 }}>
                                            <div>
                                                <input type="checkbox" style={{ marginTop: 4 }}></input>
                                            </div>
                                            &nbsp;<span>มีการวิจัยในมนุษย์&nbsp;<i class="zmdi zmdi-info" style={{ color: 'blue' }}></i></span>
                                        </div>
                                        <div className="row" style={{ paddingLeft: 20 }}>
                                            <div>
                                                <input type="checkbox" style={{ marginTop: 4 }}></input>
                                            </div>
                                            &nbsp;<span>มีการวิจัยที่เกี่ยวข้องกับความปลอดภัยทางชีวภาพ</span>
                                        </div>
                                        <div className="row" style={{ paddingLeft: 20 }}>
                                            <div>
                                                <input type="checkbox" style={{ marginTop: 4 }}></input>
                                            </div>
                                            &nbsp;<span>มีการใช้ห้องปฎิบัติการที่เกี่ยวกับสารเคมี&nbsp;<i class="zmdi zmdi-info" style={{ color: 'blue' }}></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>ระยะเวลาการวิจัย
                                <hr></hr></b>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-2" style={{ textAlign: "right", marginTop: 5 }}>
                                                <b>ระยะเวลาโครงการ</b>
                                            </div>
                                            <div>
                                                <select className="form-control" style={{ width: 150 }}>
                                                    <option value="0">0</option>
                                                    <option selected="selected" value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                </select>
                                            </div> <span style={{ marginLeft: 20, marginTop: 8 }}><b>ปี</b></span>
                                            <div className="col-lg-2" style={{ marginLeft: 100 }}>
                                                <select className="form-control" style={{ width: 150 }}>
                                                    <option selected="selected" value="0">0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                </select>
                                            </div>
                                            <div>
                                            </div> <span style={{ marginLeft: 30, marginTop: 8 }}><b>เดือน</b></span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>นโยบายและยุทธศาสตร์การวิจัยของชาติ
                                <hr></hr></b>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <div className="fg" style={{ marginTop: 8 }}>
                                                    <b>ยุทธศาสตร์</b>
                                                </div>
                                            </div>
                                            <div>
                                                <select className="form-control" style={{ width: 580 }} disabled="disabled">
                                                    <option></option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row" style={{ marginTop: 4 }}>
                                            <div className="col-lg-2">
                                                <div className="fg" style={{ marginTop: 8 }}>
                                                    <b>กลยุทธ์</b>
                                                </div>
                                            </div>
                                            <div>
                                                <select className="form-control" style={{ width: 580 }} disabled="disabled">
                                                    <option></option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row" style={{ marginTop: 4 }}>
                                            <div className="col-lg-2">
                                                <div className="fg" style={{ marginTop: 8 }}>
                                                    <b>แผนวิจัย</b>
                                                </div>
                                            </div>
                                            <div>
                                                <select className="form-control" style={{ width: 580 }} disabled="disabled">
                                                    <option></option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>ยุทธศาสตร์การพัฒนาประเทศตามแผนพัฒนาเศรษฐกิจและสังคมแห่งชาติ
                                <hr></hr></b>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-2" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>ยุทธศาสตร์</b>
                                            </div>
                                            <div>
                                                <select className="form-control" style={{ width: 570 }} >
                                                    <option></option>
                                                    {/* <option value="180">ยุทธศาสตร์การวิจัยที่ 10 : ความร่วมมือระหว่างประเทศเพื่อการพัฒนา</option>
                                                    <option value="172">ยุทธศาสตร์การวิจัยที่ 2 : การสร้างความเป็นธรรมและลดความเหลื่อมล้ำในสังคม</option>
                                                    <option value="173">ยุทธศาสตร์การวิจัยที่ 3 : การสร้างความเข้มแข็งทางเศรษฐกิจและแข่งขันได้อย่างยั่งยืน</option>
                                                    <option value="174">ยุทธศาสตร์การวิจัยที่ 4 : การเติบโตที่เป็นมิตรกับสิ่งแวดล้อมเพื่อการพัฒนาอย่างยั่งยืน</option>
                                                    <option value="175">ยุทธศาสตร์การวิจัยที่ 5 : การเสริมสร้างความมั่นคงแห่งชาติเพื่อการพัฒนาประเทศสู่ความมั่งคั่งและยั่งยืน</option>
                                                    <option value="176">ยุทธศาสตร์การวิจัยที่ 6 : การบริหารจัดการในภาครัฐ การป้องกันการทุจริตประพฤติมิชอบ และธรรมาภิบาลในสังคมไทย</option>
                                                    <option value="177">ยุทธศาสตร์การวิจัยที่ 7 : การพัฒนาโครงสร้างพื้นฐานและระบบโลจิสติกส์</option>
                                                    <option value="178">ยุทธศาสตร์การวิจัยที่ 8 : การพัฒนาวิทยาศาสตร์ เทคโนโลยี วิจัย และนวัตกรรม</option>
                                                    <option value="179">ยุทธศาสตร์การวิจัยที่ 9 : การพัฒนาภาค เมือง และพื้นที่เศรษฐกิจ</option> */}

                                                </select>
                                            </div>
                                        </div>
                                        <div className="row" style={{ marginTop: 4 }}>
                                            <div className="col-lg-2" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>เป้าประสงค์</b>
                                            </div>
                                            <div>
                                                <select className="form-control" style={{ width: 570 }} disabled="disabled">
                                                    {/* <option selected="selected" value="171">ยุทธศาสตร์การวิจัยที่ 1 : การเสริมสร้างและพัฒนาศักยภาพทุนมนุษย์</option>
                                                    <option value="180">ยุทธศาสตร์การวิจัยที่ 10 : ความร่วมมือระหว่างประเทศเพื่อการพัฒนา</option>
                                                    <option value="172">ยุทธศาสตร์การวิจัยที่ 2 : การสร้างความเป็นธรรมและลดความเหลื่อมล้ำในสังคม</option>
                                                    <option value="173">ยุทธศาสตร์การวิจัยที่ 3 : การสร้างความเข้มแข็งทางเศรษฐกิจและแข่งขันได้อย่างยั่งยืน</option>
                                                    <option value="174">ยุทธศาสตร์การวิจัยที่ 4 : การเติบโตที่เป็นมิตรกับสิ่งแวดล้อมเพื่อการพัฒนาอย่างยั่งยืน</option>
                                                    <option value="175">ยุทธศาสตร์การวิจัยที่ 5 : การเสริมสร้างความมั่นคงแห่งชาติเพื่อการพัฒนาประเทศสู่ความมั่งคั่งและยั่งยืน</option>
                                                    <option value="176">ยุทธศาสตร์การวิจัยที่ 6 : การบริหารจัดการในภาครัฐ การป้องกันการทุจริตประพฤติมิชอบ และธรรมาภิบาลในสังคมไทย</option>
                                                    <option value="177">ยุทธศาสตร์การวิจัยที่ 7 : การพัฒนาโครงสร้างพื้นฐานและระบบโลจิสติกส์</option>
                                                    <option value="178">ยุทธศาสตร์การวิจัยที่ 8 : การพัฒนาวิทยาศาสตร์ เทคโนโลยี วิจัย และนวัตกรรม</option>
                                                    <option value="179">ยุทธศาสตร์การวิจัยที่ 9 : การพัฒนาภาค เมือง และพื้นที่เศรษฐกิจ</option> */}

                                                </select>
                                            </div>
                                        </div>
                                        <div className="row" style={{ marginTop: 4 }}>
                                            <div className="col-lg-2" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>กลยุทธ์</b>
                                            </div>
                                            <div>
                                                <select className="form-control" style={{ width: 570 }} disabled="disabled">
                                                    {/* <option selected="selected" value="171">ยุทธศาสตร์การวิจัยที่ 1 : การเสริมสร้างและพัฒนาศักยภาพทุนมนุษย์</option>
                                                    <option value="180">ยุทธศาสตร์การวิจัยที่ 10 : ความร่วมมือระหว่างประเทศเพื่อการพัฒนา</option>
                                                    <option value="172">ยุทธศาสตร์การวิจัยที่ 2 : การสร้างความเป็นธรรมและลดความเหลื่อมล้ำในสังคม</option>
                                                    <option value="173">ยุทธศาสตร์การวิจัยที่ 3 : การสร้างความเข้มแข็งทางเศรษฐกิจและแข่งขันได้อย่างยั่งยืน</option>
                                                    <option value="174">ยุทธศาสตร์การวิจัยที่ 4 : การเติบโตที่เป็นมิตรกับสิ่งแวดล้อมเพื่อการพัฒนาอย่างยั่งยืน</option>
                                                    <option value="175">ยุทธศาสตร์การวิจัยที่ 5 : การเสริมสร้างความมั่นคงแห่งชาติเพื่อการพัฒนาประเทศสู่ความมั่งคั่งและยั่งยืน</option>
                                                    <option value="176">ยุทธศาสตร์การวิจัยที่ 6 : การบริหารจัดการในภาครัฐ การป้องกันการทุจริตประพฤติมิชอบ และธรรมาภิบาลในสังคมไทย</option>
                                                    <option value="177">ยุทธศาสตร์การวิจัยที่ 7 : การพัฒนาโครงสร้างพื้นฐานและระบบโลจิสติกส์</option>
                                                    <option value="178">ยุทธศาสตร์การวิจัยที่ 8 : การพัฒนาวิทยาศาสตร์ เทคโนโลยี วิจัย และนวัตกรรม</option>
                                                    <option value="179">ยุทธศาสตร์การวิจัยที่ 9 : การพัฒนาภาค เมือง และพื้นที่เศรษฐกิจ</option> */}

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>หน่วยงานร่วมลงทุน ร่วมวิจัย รับจ้างวิจัย หรือ Matching fund
                                <hr></hr></b>
                                    <div className="form-group">
                                        <div className="row" style={{ marginLeft: 300 }}>
                                            <button className="MuiButtonBase-root MuiButton-root jr-btn bg-default text-black MuiButton-contained" onClick={this.newForm}>เพิ่มหน่วยงานร่วมลงทุน</button>

                                        </div>
                                        {this.displayForm()}
                                    </div>
                                </div>
                                <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>การเสนอข้อเสนอหรือส่วนหนึ่งส่วนใดของงานวิจัยนี้ต่อแหล่งทุนอื่น
                                <hr></hr></b>
                                    <div className="row" style={{ marginLeft: 350 }}>
                                        <div>
                                            <input id="ctl00_ContentDetail_rbShowUserTypeOption4" type="radio" name="ctl00$ContentDetail$g4" defaultValue="rbShowUserTypeOption4" type="radio" style={{ marginTop: 11 }} onClick={this.form1}></input>
                                        </div>
                                        &nbsp;<span style={{ marginTop: 7 }}>มี</span>
                                        <div>
                                            <input id="ctl00_ContentDetail_rbShowUserTypeOption4" type="radio" name="ctl00$ContentDetail$g4" defaultValue="rbShowUserTypeOption4" type="radio" style={{ marginTop: 11, marginLeft: 5 }} onClick={this.close1}></input>
                                        </div>
                                        &nbsp;<span style={{ marginTop: 7 }}>ไม่มี</span>
                                    </div>
                                    <div className="form-group">
                                    <div className="row">
                                            <div className="col-lg-2">
                                                <div className="fg" style={{marginTop:8}}>
                                                <b>กลุ่มโครงการ</b>
                                                </div>
                                            </div>
                                            <div>
                                                <select className="form-control" style={{ width: 570 }}>
                                                    <option selected="selected" value="4">โครงการที่เข้าใหม่</option>
                                                    <option selected="" value="4">ไม่ได้รับจัดสรร</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.form1 ? <div className="comments_preview_sample">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                    <b>หน่วยงาน/สถาบันที่ยื่น</b>
                                                </div>
                                                <div>
                                                    <input type="text" className="form-control" style={{ width: 580 }}></input>
                                                </div>
                                            </div>
                                            <div className="row" style={{ marginTop: 5 }}>
                                                <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                    <b>ชื่อโครงการ</b>
                                                </div>
                                                <div>
                                                    <input type="text" className="form-control" style={{ width: 580 }}></input>
                                                </div>
                                            </div>
                                            <div className="row" style={{ marginTop: 5 }}>
                                                <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                    <b>ระบุความแตกต่างจากโครงการนี้</b>
                                                </div>
                                                <div>
                                                    <input type="text" className="form-control" style={{ width: 580 }}></input>
                                                </div>
                                            </div>
                                            <div className="row" style={{ marginTop: 5 }}>
                                                <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                    <b>สถานะการพิจารณา</b>
                                                </div>
                                                <div>
                                                    <input id="ctl00_ContentDetail_rbShowUserTypeOption3" type="radio" name="ctl00$ContentDetail$g3" defaultValue="rbShowUserTypeOption3" style={{ marginTop: 10 }} onClick={this.v1} ></input>
                                                </div>
                                                &nbsp;<span style={{ marginTop: 7 }}>โครงการได้รับอนุมัติแล้ว</span>
                                                <span style={{ marginTop: 7, marginLeft: 40 }}> สัดส่วนทุนที่ได้รับ</span>
                                                <div>
                                                    <div>{this.state.v1 ? <div className="comments_preview_sample3"><input type="text" className="form-control" style={{ width: 150, marginLeft: 15 }}></input></div> : null}</div>
                                                    <div>{this.state.v2 ? <div className="comments_preview_sample4"><input type="text" className="form-control" style={{ width: 150, marginLeft: 15 }} disabled="disabled"></input></div> : null}</div>
                                                </div>
                                                <span style={{ marginTop: 7 }}>&nbsp;%</span>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3" style={{ textAlign: "right" }}>
                                                </div>
                                                <div>
                                                    <input id="ctl00_ContentDetail_rbShowUserTypeOption3" type="radio" name="ctl00$ContentDetail$g3" defaultValue="rbShowUserTypeOption3" style={{ marginTop: 10 }} onClick={this.v2} ></input>
                                                </div> &nbsp;<span style={{ marginTop: 7 }}>โครงการอยู่ระหว่างการพิจารณา</span>
                                            </div>
                                        </div>
                                    </div> : null}
                                </div>
                                <hr></hr>
                                <div className="row" style={{ marginLeft: 350 }}>
                                    <button className="MuiButtonBase-root MuiButton-root jr-btn bg-primary text-white MuiButton-contained">บันทึก</button>
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

export default Onproject_ProposalUI;