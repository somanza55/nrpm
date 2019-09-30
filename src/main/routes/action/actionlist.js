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
import { makeStyles, Theme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});
class actionlist extends React.Component {

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
            value: 0,

        }
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab });
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
        const classes = this.props;
        const { value } = this.state;
        return (
            <div className="animated slideInUpTiny animation-duration-3">
                <div className="app-wrapper">
                    <ContainerHeader match={this.props.match} title={<IntlMessages id="title.action" />} />
                    <span style={{ color: 'blue' }}>การพัฒนาวิธีการสำหรับตรวจจำแนกสปีชีส์ของเชื้อลิสเทอเรียในเนื้อไก่ด้วยเทคนิคบีทอะเรย์</span><br></br><br></br>
                    <span>T2562001	ทุนวิจัยมุ่งเป้า ปีงบประมาณ 2562	ข้าว</span>
                    <div className="shadow border-0 card">
                        <div className="card-header py-0">
                            <div className={classes.root}>
                                <Tabs value={value} onChange={this.handleChange}>
                                    <Tab className label="ข้อมูลโครงการ" />
                                    <Tab label="เอกสารสัญญา" />
                                    <Tab label="รายงานความก้าวหน้า" />
                                    <Tab label="ประเมินโครงการ" />
                                    <Tab label="ประวัติการแก้ไขข้อมูล" />
                                </Tabs>
                                {value === 0 && <TabContainer >
                                    <div style={{ marginTop: 40 }}><b style={{ color: 'blue', fontSize: '12' }}>จัดการโครงการ<hr></hr></b></div>
                                    <div style={{ textAlign: "right" }}>
                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained">แก้ไขข้อมูลโครงการ</button>
                                    </div>
                                    <br></br>
                                    <div className="shadow border-0 card" style={{ width: 980 }}>
                                        <div className="card-header">
                                            <span class="zmdi zmdi-tag zmdi-hc-1x">
                                                &nbsp;&nbsp;ข้อมูลทั่วไป
                                        </span>
                                            <div className="form-btnright">
                                                <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden2()} ></i>
                                            </div>
                                        </div>
                                        {!this.state.isHidden2 && <p>
                                            <div className="form-horizontal" style={{ marginTop: 20 }}>
                                                <div className="form-group">
                                                    <label className="col-lg-4  label-text" style={{ marginTop: 20 }}>
                                                        รหัสโครงการ :
                                            <span>682766</span>
                                                    </label>
                                                    <label className="col-lg-4  label-text" style={{ marginTop: 20 }}>
                                                        รหัสข้อเสนอการวิจัย:
                                            <span>-</span>
                                                    </label>
                                                    <label className="col-lg-4  label-text" style={{ marginTop: 20 }}>
                                                        รหัสชุดโครงการ/แผนงานวิจัย :
                                        <span>-</span>
                                                    </label>
                                                    <label className="col-lg-8" style={{ textAlign: "right", marginLeft: 170 }}>
                                                        รหัส1:  รหัส2:  รหัส3:
                                            &nbsp;<span></span>
                                                    </label>
                                                    <label className="col-lg-8" style={{ textAlign: "right", marginLeft: 127 }}>
                                                        ชื่อหน่วยงาน:
                                            &nbsp;<span></span>
                                                    </label>
                                                    <label className="col-lg-8" style={{ textAlign: "right", marginLeft: 320 }}>
                                                        สถานะโครงการ:
                                            &nbsp;<span>ยังไม่ได้ส่ง(ข้อมูลอยู่ที่นักวิจัย) (0)</span>
                                                    </label>
                                                    <label className="col-lg-8" style={{ textAlign: "right", marginLeft: 200 }}>
                                                        กลุ่มโครงการ:
                                            &nbsp;<span>โครงการที่เข้าใหม่</span>
                                                    </label>
                                                </div>
                                                <label className="col-lg-4  label-text">

                                                </label>
                                                <label className="col-lg-4  label-text">

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
                                                <div className="row">
                                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                                        <span><b>ปีงบประมาณ</b></span>
                                                    </div>
                                                    <div>
                                                        <span>2562</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ paddingLeft: 50, marginTop: 20 }}><b style={{ color: 'blue' }}>ข้อมูลโครงการ<hr></hr></b></div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                                        <span><b>ชื่อเรื่อง (ไทย)</b></span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <span>การพัฒนาวิธีการสำหรับตรวจจำแนกสปีชีส์ของเชื้อลิสเทอเรียในเนื้อไก่ด้วยเทคนิคบีทอะเรย์</span>
                                                    </div>
                                                </div>
                                                <div className="row py-2">
                                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                                        <span><b>ชื่อเรื่อง (อังกฤษ)</b></span>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <span>Development of high-throughput method based on bead array technology to discriminate Listeria species <br></br> in poultry samples.</span>
                                                    </div>
                                                </div>
                                                <div className="row py-2">
                                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                                        <span><b>หน่วยงานเจ้าของโครงการ</b></span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <span>สำนักงานพัฒนาการวิจัยการเกษตร (องค์การมหาชน) (สวก.)</span>
                                                    </div>
                                                </div>
                                                <div className="row py-2">
                                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                                        <span><b>สังกัดนักวิจัย</b></span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <span>-</span>
                                                    </div>
                                                </div>
                                                <div className="row py-2">
                                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                                        <span><b>ประเภทโครงการ</b></span>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <span>โครงการเดี่ยว</span>

                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                                        <span><b>ลักษณะโครงการ</b></span>
                                                    </div>
                                                    <div className="col-lg-9">
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
                                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>ยุทธศาสตร์ประเทศ<hr></hr></b></div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                                        <b>ยุทธศาสตร์ที่ 1 :</b>
                                                    </div>
                                                    <div>
                                                        ด้านความมั่นคง
                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>นโยบาย/เป้าหมายของรัฐบาล<hr></hr></b></div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                                        <b>ระเบียบวาระแห่งชาติ</b>
                                                    </div>
                                                    <div>

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
                                        </p>}
                                    </div>
                                    <div className="shadow border-0 card" style={{ width: 980 }}>
                                        <div className="card-header">
                                            <span class="zmdi zmdi-tag zmdi-hc-1x">
                                                &nbsp;&nbsp;บทสรุป
                                        </span>
                                            <div className="form-btnright">
                                                <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden3()} ></i>
                                            </div>
                                        </div>
                                        {!this.state.isHidden3 && <p>
                                            <div style={{ paddingLeft: 15, marginTop: 40 }}><b style={{ color: 'blue' }}>แบบสรุปข้อเสนอการวิจัย(ภาษาไทย)<hr></hr></b></div>
                                            <b style={{ paddingLeft: 15 }}>แบบสรุปข้อเสนอการวิจัย(อังกฤษ)</b>
                                            <div style={{ paddingLeft: 15, marginTop: 40 }}><b style={{ color: 'blue' }}>ความสำคัญและที่มาของปัญหาที่ทำการวิจัย<hr></hr></b></div>
                                            <div style={{ paddingLeft: 15, marginTop: 40 }}><b style={{ color: 'blue' }}>วัตถุประสงค์การวิจัย<hr></hr></b></div>
                                            <span><p>เพื่อพัฒนาวิธีการสำหรับจำแนกสปีชีส์ของเชื้อ <em>Listeria</em> spp. โดยใช้เทคนิค bead array และทดสอบวิธีที่ได้พัฒนาขึ้นมากับตัวอย่างจากสายการผลิตไก่เนื้อจากฟาร์ม โรงฆ่าสัตว์และตลาด ซึ่งด้วยเทคนิค bead array นี้จะสามารถทำให้ขั้นตอนการจำแนกสปีชีส์ของเชื้อ <em>Listeria</em> spp. มีความรวดเร็วกว่าวิธีมาตรฐาน</p></span>
                                            <div style={{ paddingLeft: 15, marginTop: 40 }}><b style={{ color: 'blue' }}>วิธีการดำเนินการวิจัย<hr></hr></b></div>
                                            <div className="row">
                                                <div className="col-lg-3" style={{ textAlign: "right", marginLeft: 15 }}>
                                                    <b>ประโยชน์ที่คาดว่าจะได้รับ</b>
                                                </div>
                                                <div className="col-lg-8">
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
                                                    <div className="col-lg-9" style={{ marginLeft: 120 }}>
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
                                            <div style={{ paddingLeft: 50, marginTop: 40 }}><b style={{ color: 'blue' }}>สถานที่ทำวิจัย<hr></hr></b></div>
                                            <div className="shadow border-0 card">
                                                <div className="card-header">
                                                    <span class="zmdi zmdi-key zmdi-hc-1x">
                                                        &nbsp;&nbsp;สถานที่ทำวิจัย
                                        </span>
                                                    <div className="form-btnright">
                                                        <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden4()} ></i>
                                                    </div>
                                                </div>
                                                {!this.state.isHidden4 && <p>
                                                    <div className="table-responsive-material">
                                                        <Table bordered>
                                                            <thead className="card-header">
                                                                <tr >
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 80 }}><b>ประเภท</b></th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>ชื่อประเทศ/จังหวัด</b></th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>ชื่อสถานที่</b></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ textAlign: "center" }}><span>ในประเทศ</span></td>
                                                                    <td style={{ textAlign: "center" }}><span>จังหวัดเชียงใหม่</span></td>
                                                                    <td style={{ textAlign: "left" }}><span>ภาควิชาชีววิทยา คณะวิทยาศาสตร์ มหาวิทยาลัยเชียงใหม่</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ textAlign: "center" }}><span>ในประเทศ</span></td>
                                                                    <td style={{ textAlign: "center" }}><span>จังหวัดเชียงใหม่</span></td>
                                                                    <td style={{ textAlign: "left" }}><span>ห้องปฏิบัติการไมโครอะเรย์ครบวงจร ศูนย์พันธุวิศวกรรมและเทคโนโลยีชีวภาพแห่งชาติ</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ textAlign: "center" }}><span>ในประเทศ</span></td>
                                                                    <td style={{ textAlign: "center" }}><span>จังหวัดเชียงใหม่</span></td>
                                                                    <td style={{ textAlign: "left" }}><span>ฟาร์ม เลี้ยงไก่ จังหวัดเชียงใหม่</span></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </p>}
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-3" style={{ textAlign: "right" }}>
                                                        <b>การตรวจสอบทรัพย์สินทางปัญญาหรือสิทธิบัตรที่เกี่ยวข้อง</b>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <input type="radio" style={{ paddingTop: 4 }}></input>
                                                        <span style={{ marginBottom: 15 }}>ไม่มีการตรวจสอบทรัพย์สินทางปัญญา และ/หรือ สิทธิบัตรที่เกี่ยวข้อง</span><br></br>
                                                        <input type="radio" disabled="disabled" style={{ marginTop: 4 }}></input>
                                                        <span>ตรวจสอบทรัพย์สินทางปัญญาแล้ว ไม่มีทรัพย์สินทางปัญญา และ/หรือ สิทธิบัตรที่เกี่ยวข้อง</span><br></br>
                                                        <input type="radio" disabled="disabled" style={{ marginTop: 4 }}></input>
                                                        <span>ตรวจสอบทรัพย์สินทางปัญญาแล้ว มีทรัพย์สินทางปัญญา และ/หรือ สิทธิบัตรที่เกี่ยวข้อง</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </p>}
                                    </div>

                                    <div className="shadow border-0 card" style={{ width: 980 }}>
                                        <div className="card-header">
                                            <span class="zmdi zmdi-key zmdi-hc-1x">
                                                &nbsp;&nbsp;คณะผู้วิจัย
                                        </span>
                                            <div className="form-btnright">
                                                <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden5()} ></i>
                                            </div>
                                        </div>
                                        {!this.state.isHidden5 && <p>
                                            <div style={{ paddingLeft: 30, marginTop: 40 }}><b style={{ color: 'blue' }}>ข้อมูลนักวิจัย<hr></hr></b></div>
                                            <div className="shadow border-0 card">
                                                <div className="card-header">
                                                    <span class="zmdi zmdi-account zmdi-hc-1x">
                                                        &nbsp;&nbsp;คณะผู้วิจัย
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
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 150 }}><b>ชื่อ - สกุล</b></th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>ตำแหน่งในโครงการ</b></th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 100 }}><b>สัดส่วนการมีส่วนร่วม</b></th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 80 }}><b>เวลาที่ทำวิจัย</b></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ textAlign: "center" }}><span >นิศรา การุณอุทัยศิริ</span></td>
                                                                    <td style={{ textAlign: "center" }}>ผู้ร่วมวิจัย</td>
                                                                    <td style={{ textAlign: "center" }}>10</td>
                                                                    <td style={{ textAlign: "center" }}>-</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ textAlign: "center" }}><span >สุดธิดา พึ่งวาส</span></td>
                                                                    <td style={{ textAlign: "center" }}>ผู้ร่วมวิจัย</td>
                                                                    <td style={{ textAlign: "center" }}>10</td>
                                                                    <td style={{ textAlign: "center" }}>-</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ textAlign: "center" }}><span >จอมขวัญ มีรักษ์</span></td>
                                                                    <td style={{ textAlign: "center" }}>ผู้ร่วมวิจัย</td>
                                                                    <td style={{ textAlign: "center" }}>25</td>
                                                                    <td style={{ textAlign: "center" }}>-</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ textAlign: "center" }}><span >มัลลิกา มะกรวัฒนะ</span></td>
                                                                    <td style={{ textAlign: "center" }}>ผู้ร่วมวิจัย</td>
                                                                    <td style={{ textAlign: "center" }}>20</td>
                                                                    <td style={{ textAlign: "center" }}>-</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ textAlign: "center" }}><span >รัฐพล เฉลิมโรจน์</span></td>
                                                                    <td style={{ textAlign: "center" }}>หัวหน้าโครงการ</td>
                                                                    <td style={{ textAlign: "center" }}>25</td>
                                                                    <td style={{ textAlign: "center" }}>-</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ textAlign: "center" }}><span >ดวงพร พิชผล</span></td>
                                                                    <td style={{ textAlign: "center" }}>ผู้ร่วมวิจัย</td>
                                                                    <td style={{ textAlign: "center" }}>20</td>
                                                                    <td style={{ textAlign: "center" }}>-</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </p>}
                                            </div>
                                        </p>}
                                        <div className="shadow border-0 card">
                                            <div className="card-header">
                                                <span class="zmdi zmdi-tag zmdi-hc-1x">
                                                    &nbsp;&nbsp; แผนงาน
                                        </span>
                                                <div className="form-btnright">
                                                    <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden7()} ></i>
                                                </div>
                                            </div>
                                        </div>
                                        {!this.state.isHidden7 && <p>
                                            <div className="shadow border-0 card">
                                                <div className="card-header">
                                                    <span class="zmdi zmdi-account zmdi-hc-1x">
                                                        &nbsp;&nbsp;แผนการดำเนินงานวิจัย
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
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 30 }}><b>ปีงบ</b></th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle", width: 50 }}><b>กิจกรรม</b></th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}>1</th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}>2</th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}>3</th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}>4</th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}>5</th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}>6</th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}>7</th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}>8</th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}>9</th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}>10</th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}>11</th>
                                                                    <th style={{ textAlign: "center", verticalAlign: "middle" }}>12</th>
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
                                        </p>}
                                        <div className="shadow border-0 card">
                                            <div className="card-header">
                                                <span class="zmdi zmdi-account zmdi-hc-1x">
                                                    &nbsp;&nbsp;รายละเอียดการจัดซื้อครุภัณฑ์
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
                                            <div className="card-header">
                                                <span class="zmdi zmdi-account zmdi-hc-1x">
                                                    &nbsp;&nbsp;งบประมาณรวมตลอดโครงการวิจัย
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
                                                                <td><input type="text" className="form-control" defaultValue="0.00" style={{ textAlign: "right" }}></input></td>
                                                                <td><input type="text" className="form-control" defaultValue="0.00" style={{ textAlign: "right" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td>งบดำเนินการ</td>
                                                                <td><input type="text" className="form-control" defaultValue="0.00" style={{ textAlign: "right" }}></input></td>
                                                                <td><input type="text" className="form-control" defaultValue="0.00" style={{ textAlign: "right" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td>งบลงทุน</td>
                                                                <td><input type="text" className="form-control" defaultValue="0.00" style={{ textAlign: "right" }}></input></td>
                                                                <td><input type="text" className="form-control" defaultValue="0.00" style={{ textAlign: "right" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ textAlign: "center" }}><b>รวม</b></td>
                                                                <td style={{ textAlign: "right", paddingRight: 23 }}><b>0.00</b></td>
                                                                <td style={{ textAlign: "right", paddingRight: 23 }}><b>0.00</b></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </p>}
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
                                        </div>
                                        <div className="shadow border-0 card">
                                            <div className="card-header">
                                                <span class="zmdi zmdi-tag zmdi-hc-1x">
                                                    &nbsp;&nbsp;เอกสารอ้างอิง
                                        </span>
                                                <div className="form-btnright">
                                                    <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden9()} ></i>
                                                </div>
                                            </div>
                                        </div>
                                        {!this.state.isHidden9 && <p>
                                            <div className="shadow border-0 card">
                                                <div className="card-header">
                                                    <span class="zmdi zmdi-account zmdi-hc-1x">
                                                        &nbsp;&nbsp;เอกสารแนบ
                                        </span>
                                                    <div className="form-btnright">
                                                        <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden9()} ></i>
                                                    </div>
                                                </div>
                                                <div className="table-responsive-material">
                                                    <Table bordered>
                                                        <thead>
                                                            <tr >
                                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 40 }}><b>ชื่อไฟล์</b></th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 180 }}><b>ประเภทเอกสาร</b></th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 40 }}><b>การเปิดเผยไฟล์สู่สาธารณะ</b></th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 40 }}><b>รหัสดีโอไอ<i className="zmdi zmdi-info" style={{ color: 'blue' }}></i></b></th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 40 }}><b>วันที่</b></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ textAlign: "center", backgroundColor: 'grey' }} colSpan='6'><span style={{ color: 'white' }}>- ไม่มีข้อมูลไฟล์ข้อเสนอโครงการ -</span></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </p>}
                                        <div className="shadow border-0 card">
                                            <div className="card-header">
                                                <span class="zmdi zmdi-tag zmdi-hc-1x">
                                                    &nbsp;&nbsp;รายการประเมิน
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
                                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 40 }}><b>รายการประเมิน</b></th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 180 }}><b>ผู้สร้าง</b></th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 40 }}><b>ผลการประเมิน</b></th>
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
                                    </div>
                                    <div className="shadow border-0 card" style={{ width: 980 }}>
                                        <div className="card-header">
                                            <span class="zmdi zmdi-tag zmdi-hc-1x">
                                                &nbsp;&nbsp; ผลการดำเนินการวิจัย
                                        </span>
                                            <div className="form-btnright">
                                                <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden9()} ></i>
                                            </div>
                                        </div>
                                        <br></br>
                                        {!this.state.isHidden9 && <p>
                                            <div className="shadow border-0 card">
                                                <div className="card-header">
                                                    <span class="zmdi zmdi-account zmdi-hc-1x">
                                                        &nbsp;&nbsp;แผนการดำเนินงานวิจัย
                                        </span>
                                                    <div className="form-btnright">
                                                        <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden9()} ></i>
                                                    </div>
                                                </div>

                                                <div className="table-responsive-material">
                                                    <Table bordered>
                                                        <thead>
                                                            <tr >
                                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 5 }}><b>ปีงบ</b></th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 20 }}><b>กิจกรรม</b></th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>ตค.</th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>พย.</th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>ธค.</th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>มค.</th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>กพ.</th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>มีค.</th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>เมย.</th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>พค.</th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>มิย.</th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>กค.</th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>สค.</th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>กย.</th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 40 }}><b>ร้อยละของงาน</b></th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 40 }}><b>ความสำเร็จ</b></th>
                                                                <th style={{ textAlign: "center", verticalAlign: "middle", width: 40 }}><b>ผู้รับผิดชอบ</b></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ textAlign: "center", backgroundColor: 'grey' }} colSpan='18'><span style={{ color: 'white' }}>- ไม่มีข้อมูลไฟล์ข้อเสนอโครงการ -</span></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </p>}
                                    </div>
                                    {!this.state.isHidden9 && <p>
                                        <div className="shadow border-0 card" style={{ width: 980 }}>
                                            <div className="card-header">
                                                <span class="zmdi zmdi-account zmdi-hc-1x">
                                                    &nbsp;&nbsp;รายงานความก้าวหน้า / รายงานฉบับสมบูรณ์
                                        </span>
                                                <div className="form-btnright">
                                                    <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden9()} ></i>
                                                </div>
                                            </div>

                                            <div className="table-responsive-material">
                                                <Table bordered>
                                                    <thead>
                                                        <tr >
                                                            <th style={{ textAlign: "center", verticalAlign: "middle", width: 5 }}><b>ครั้งที่</b></th>
                                                            <th style={{ textAlign: "center", verticalAlign: "middle", width: 20 }}><b>ประเภท</b></th>
                                                            <th style={{ textAlign: "center", verticalAlign: "middle" }}>งปม.ใช้แล้ว</th>
                                                            <th style={{ textAlign: "center", verticalAlign: "middle" }}>ร้อยละ</th>
                                                            <th style={{ textAlign: "center", verticalAlign: "middle" }}>วันที่รายงาน</th>
                                                            <th style={{ textAlign: "center", verticalAlign: "middle" }}>วันที่สร้าง</th>
                                                            <th style={{ textAlign: "center", verticalAlign: "middle" }}>วันที่อัพเดทล่าสุด</th>
                                                            <th style={{ textAlign: "center", verticalAlign: "middle" }}>สรุป</th>
                                                            <th style={{ textAlign: "center", verticalAlign: "middle" }}>สถานะ</th>
                                                            <th style={{ textAlign: "center", verticalAlign: "middle" }}>ชื่อไฟล์</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ textAlign: "center", backgroundColor: 'grey' }} colSpan='18'><span style={{ color: 'white' }}>- ไม่พบข้อมูล -</span></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                                < a className="zmdi zmdi-print" href="#" style={{ color: 'black' }}>&nbsp;&nbsp;แบบรายงานความก้าวหน้า / รายงานฉบับสมบูรณ์</a>
                                            </div>
                                        </div>
                                    </p>}
                                    {!this.state.isHidden9 && <p>
                                        <div className="shadow border-0 card" style={{ width: 980 }}>
                                            <div className="card-header">
                                                <span class="zmdi zmdi-account zmdi-hc-1x">
                                                    &nbsp;&nbsp;แผนการเบิกจ่ายงบประมาณ
                                        </span>
                                                <div className="form-btnright">
                                                    <i class="zmdi zmdi-chevron-right zmdi-hc-1x" onClick={() => this.toggleHidden9()} ></i>
                                                </div>
                                            </div>

                                            <div className="table-responsive-material">
                                                <Table bordered>
                                                    <thead>
                                                        <tr >
                                                            <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}><b>งวดที่/ครั้งที่/ไตรมาสที่</b></th>
                                                            <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}><b>งบเบิกจ่าย</b></th>
                                                            <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}>วันที่เบิกจ่าย</th>
                                                            <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}>หมายเหตุ</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ textAlign: "center", backgroundColor: 'grey' }} colSpan='18'><span style={{ color: 'white' }}>- ไม่มีรายงานการเบิกจ่ายงบประมาณ -</span></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </p>}
                                    <div style={{ marginTop: 20 }}><b style={{ color: 'blue', fontSize: '12' }}>บทคัดย่อ(ภาษาไทย)<hr></hr></b></div>
                                    <div style={{ marginTop: 20 }}><b style={{ color: 'blue', fontSize: '12' }}>บทคัดย่อ(อังกฤษ)<hr></hr></b></div>
                                    <div className="shadow border-0 card" style={{ width: 980 }}>
                                        <div className="card-header">
                                            <span class="zmdi zmdi-account zmdi-hc-1x">
                                                &nbsp;&nbsp;รายงานการเบิกจ่ายงบประมาณ (งบจัดสรร - บาท)
                                        </span>
                                            <div className="form-btnright">
                                                <i class="zmdi zmdi-chevron-right zmdi-hc-1x" ></i>
                                            </div>
                                        </div>

                                        <div className="table-responsive-material">
                                            <Table bordered>
                                                <thead>
                                                    <tr >
                                                        <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}><b>งวดที่/ครั้งที่/ไตรมาสที่</b></th>
                                                        <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}><b>งบเบิกจ่าย</b></th>
                                                        <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}>วันที่เบิกจ่าย</th>
                                                        <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}>หมายเหตุ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ textAlign: "center", backgroundColor: 'grey' }} colSpan='18'><span style={{ color: 'white' }}>- ไม่มีรายงานการเบิกจ่ายงบประมาณ -</span></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>

                                    <div className="shadow border-0 card" style={{ width: 980 }}>
                                        <div className="card-header">
                                            <span class="zmdi zmdi-account zmdi-hc-1x">
                                                &nbsp;&nbsp;รายการแก้ไขโครงการวิจัย (Log)
                                        </span>
                                            <div className="form-btnright">
                                                <i class="zmdi zmdi-chevron-right zmdi-hc-1x" ></i>
                                            </div>
                                        </div>

                                        <div className="table-responsive-material">
                                            <Table bordered>
                                                <thead className="card-header">
                                                    <tr >
                                                        <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}></th>
                                                        <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}></th>
                                                        <th style={{ textAlign: "center", verticalAlign: "middle", width: 120 }}></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>2/4/2562 9:54:21</td>
                                                        <td>ผู้ดูแลแหล่งทุน สำนักงานพัฒนาการวิจัยการเกษตร (องค์การมหาชน)</td>
                                                        <td>ข้อมูลทั่วไป</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </TabContainer>}
                                {value === 1 && <TabContainer>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                งบประมาณที่ได้รับจัดสรร
                                            </div>
                                            <div>
                                                -
                                            </div>
                                            <span>&nbsp;&nbsp;<b>บาท</b></span>

                                        </div>
                                    </div>
                                    <div style={{ marginTop: 20 }}><b style={{ color: 'blue', fontSize: '12' }}>แบ่งงวดงาน<hr></hr></b></div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-3" style={{ textAlign: "right", marginTop: 8 }}>
                                                <b>จำนวนงวด</b>
                                            </div>
                                            <div>
                                                <select className="form-control" style={{ width: 300 }}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option selected="selected" value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </select>
                                            </div>
                                            &nbsp;&nbsp;&nbsp;<button className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained">ตกลง</button>
                                        </div>
                                    </div>
                                </TabContainer>}
                                {value === 2 && <TabContainer><div className="shadow border-0 card" style={{ width: 980,height:100 }}>
                                        <div className="card-header">
                                            <span class="zmdi zmdi-account zmdi-hc-1x">
                                                &nbsp;&nbsp;รายงานความก้าวหน้า
                                        </span>
                                            <div className="form-btnright">
                                                <i class="zmdi zmdi-chevron-right zmdi-hc-1x" ></i>
                                            </div>
                                        </div>

                                        <div className="table-responsive-material">
                                            <Table bordered>
                                                <thead className="card-header">
                                                    <tr >
                                                    <th colSpan='18' style={{backgroundColor:'grey',color:'white',textAlign:"center"}}>- ไม่พบข้อมูล -</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div></TabContainer>}
                                {value === 3 && <TabContainer>Item 4</TabContainer>}
                                {value === 4 && <TabContainer>Item 5</TabContainer>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default actionlist;