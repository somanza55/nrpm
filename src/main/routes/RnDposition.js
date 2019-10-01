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

class RnDposition extends React.Component {
    render() {
        const store = configureStore();
        const authUser = JSON.parse(store.getState().auth.authUser);
        console.log("test", store.getState().auth)
        return (
            <Fragment>
                <div className="animated slideInUpTiny animation-duration-3">
                    <div className="app-wrapper">
                        <ContainerHeader match={this.props.match} title={<IntlMessages id="จัดการตำแหน่งทางวิชาการ.ตำแหน่งวิชาการ" />} />
                        <div className="form-horizontal">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <div className="shadow border-0 card">
                                        <div className="card-header">
                                            <b>
                                                <IntlMessages id="ตำแหน่งวิชาการ.จัดการ" />
                                            </b>
                                        </div>
                                        <div className="card-body">
                                            <div style={{textAlign:"right"}}>
                                                <span>พบข้อมูลทั้งสิ้น 6 รายการ</span>
                                            </div>
                                            <br></br>
                                            <div className="table-responsive-material">
                                                <Table bordered>
                                                    <tbody className="card-header">
                                                        <tr>
                                                            <th rowspan="2" scope="col" style={{ textAlign: "center", verticalAlign: "middle",width:30 }}><a href="#">รหัส</a></th>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle",width:450 }}><a href="#">ตำแหน่ง</a></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">ตัวย่อ</a></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>แก้ไข</b></td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>1</td>
                                                            <td style={{ textAlign: "left", verticalAlign: "middle" }}>ศาสตราจารย์</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>ศ.</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                            <i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi  zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i>
                                                            </td>                            
                                                        </tr>  
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>2</td>
                                                            <td style={{ textAlign: "left", verticalAlign: "middle" }}>รองศาสตราจารย์</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>รศ.</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                            <i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi  zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i>
                                                            </td>                            
                                                        </tr>  
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>3</td>
                                                            <td style={{ textAlign: "left", verticalAlign: "middle" }}>ผู้ช่วยศาสตราจารย์</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>ผศ.</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                            <i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi  zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i>
                                                            </td>                            
                                                        </tr>  
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>4</td>
                                                            <td style={{ textAlign: "left", verticalAlign: "middle" }}>อาจารย์ หรือ ตำแหน่งอื่นตามที่ คณะกรรมการข้าราชการพลเรือนในสถาบันอุดมศึกษา(ก.พ.อ.) กำหนด</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>อ.</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                            <i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi  zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i>
                                                            </td>                            
                                                        </tr>  
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>6</td>
                                                            <td style={{ textAlign: "left", verticalAlign: "middle" }}>	ไม่ระบุ</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>-</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                            <i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi  zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i>
                                                            </td>                            
                                                        </tr>  
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>8</td>
                                                            <td style={{ textAlign: "left", verticalAlign: "middle" }}>จอมเวทย์</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>ArchMage</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                            <i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi  zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i>
                                                            </td>                            
                                                        </tr>        
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shadow border-0 card">
                                        <div className="card-header">
                                        </div>
                                        <div className="card-body">
                                        <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:5}}>
                                                        <b>ตำแหน่ง :</b>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:5}}>
                                                        <b>ตัวย่อ :</b>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 7 }}>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-info text-white MuiButton-contained">เพิ่ม</button>
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
export default RnDposition;