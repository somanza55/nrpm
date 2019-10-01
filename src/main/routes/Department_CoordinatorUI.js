import React, { Fragment } from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';
import configureStore from 'store';
import CardBox from 'components/CardBox/index';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { textAlign } from '@material-ui/system';
import { Table } from 'reactstrap';

class Department_CoordinatorUI extends React.Component {
    render() {
        const store = configureStore();
        const authUser = JSON.parse(store.getState().auth.authUser);
        console.log("test", store.getState().auth)
        return (
            <Fragment>
                <div className="animated slideInUpTiny animation-duration-3">
                    <div className="app-wrapper">
                        <ContainerHeader match={this.props.match} title={<IntlMessages id="จัดการ.เจ้าหน้าที่ในหน่วยงาน" />} />
                        <div className="form-horizontal">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <div className="shadow border-0 card">
                                        <div className="card-header py-2">
                                            <b>
                                            <i class="zmdi zmdi-file-text"></i>&nbsp;&nbsp;<IntlMessages id="ข้อมูล.ข้อมูลพื้นฐาน" />
                                            </b>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:6}}>
                                                        <span style={{color:'red'}}>*</span><b>ชื่อสำหรับเข้าสู่ระบบ :</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:6}}>
                                                        <span style={{color:'red'}}>*</span><b>รหัสผ่าน :</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:6}}>
                                                        <span style={{color:'red'}}>*</span><b>ชื่อผู้ใช้ :</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:6}}>
                                                        <b>กลุ่มผู้ใช้ :</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <select className="form-control">
                                                        <option value="95">เจ้าหน้าที่ ดัชนีค่าใช้จ่าย (กปจ.)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:6}}>
                                                        <span style={{color:'red'}}>*</span><b>บัตรประจำตัวประชาชน :</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:6}}>
                                                        <b>คำนำหน้าชื่อ :</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                    <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3" style={{textAlign:"right"}}>
                                                        <b>เพศ :</b>
                                                    </div>
                                                    <div style={{marginLeft:13}}>
                                                    <input type="radio"style={{marginTop:4}} value="M" id="M" name="male"></input>
                                                    </div>
                                                    <span>ชาย</span>
                                                    <div style={{marginLeft:13}}>
                                                    <input type="radio"style={{marginTop:4}} value="F" id="F" name="female"></input>
                                                    </div>
                                                    <span>หญิง</span>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:6}}>
                                                        <span style={{color:'red'}}>*</span><b>ชื่อจริง (ภาษาไทย) :</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:6}}>
                                                        <span style={{color:'red'}}>*</span><b>นามสกุลจริง (ภาษาไทย) :</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:6}}>
                                                        <b>หมายเลขโทรศัพท์ :</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                    <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:6}}>
                                                        <b>หมายเลขโทรศัพท์มือถือ :</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                    <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:6}}>
                                                        <b>หมายเลขโทรสาร :</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                    <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:6}}>
                                                        <span style={{color:'red'}}>*</span><b>Email Address :</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:6}}>
                                                    </div>
                                                    <div style={{marginLeft:13}}>
                                                        <input type="checkbox" style={{marginTop:4}}></input>
                                                    </div>
                                                    <span>แจ้งผู้ใช้ผ่าน Email</span>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="shadow border-0 card">
                                        <div className="card-header py-2">
                                            <b>
                                            <i class="zmdi zmdi-file-text"></i>&nbsp;&nbsp;<IntlMessages id="หน่วยงาน" />
                                            </b>
                                        </div>
                                        <div className="card-body">
                                        <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:5}}>
                                                        <b>กระทรวง</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <select className="form-control">
                                                        <option selected="selected" value="23">บริษัท/อื่นๆ</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:5}}>
                                                        <b>หน่วยงานสังกัดกระทรวง</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <select className="form-control">
                                                        <option selected="selected" value="362">อื่นๆ</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:5}}>
                                                        <b>หน่วยงาน</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <select className="form-control">
                                                        <option selected="selected" value="21">-</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:5}}>
                                                        <b>เลือกคณะ/กอง/สถาบัน :</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <select className="form-control">
                                                        <option selected="selected" value="21">-</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-success text-white MuiButton-contained">บันทึก</button>
                                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-Default text-black MuiButton-contained">ยกเลิก</button>
                                                    </div>
                                                </div>

                                            </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }
}
export default Department_CoordinatorUI;