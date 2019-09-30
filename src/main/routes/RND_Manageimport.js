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

class RND_Manageimport extends React.Component {
    render() {
        const store = configureStore();
        const authUser = JSON.parse(store.getState().auth.authUser);
        console.log("test", store.getState().auth)
        return (
            <Fragment>
                <div className="animated slideInUpTiny animation-duration-3">
                    <div className="app-wrapper">
                        <ContainerHeader match={this.props.match} title={<IntlMessages id="การนำเข้าข้อมูล.ข้อมูล" />} />
                        <div className="form-horizontal">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <div className="shadow border-0 card">
                                        <div className="card-header">
                                            <b>
                                                <IntlMessages id="การนำเข้าข้อมูล.ข้อมูล" />
                                            </b>
                                        </div>
                                        <div className="card-body">
                                            <div className="col-lg-12" align="right" style={{ marginTop: 3 }}>
                                                พบข้อมูลทั้งสิ้น 2 รายการ
                                            </div>
                                            <div className="table-responsive-material">
                                                <Table bordered>
                                                    <tbody>
                                                        <tr>
                                                            <th rowspan="2" scope="col" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">ปีงบประมาณ</a></th>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>วันที่เริ่มต้นเปิดรับข้อมูล</b></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>วันที่สิ้นสุดเปิดรับข้อมูล</b></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>แก้ไข</b></td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>2561</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>18 ก.พ. 62</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>31 ต.ค. 62</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}><i class="zmdi zmdi-edit" style={{color:'yellow'}}></i> &nbsp;&nbsp;<i class="zmdi zmdi-close" style={{color:'red'}}></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>2562</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>18 ก.พ. 62</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>31 ต.ค. 62</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}><i class="zmdi zmdi-edit" style={{color:'yellow'}}></i> &nbsp;&nbsp;<i class="zmdi zmdi-close" style={{color:'red'}}></i></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <hr></hr>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:7}}>
                                                        <b>ปีงบประมาณ</b>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:7}}>
                                                        <b>วันที่เริ่มต้นเปิดรับข้อมูล</b>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:7}}>
                                                        <b>วันที่สิ้นสุดเปิดรับข้อมูล</b>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{textAlign:"right",marginTop:7}}>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <button className="MuiButtonBase-root MuiButton-root jr-btn bg-cyan text-white MuiButton-contained">เพิ่ม</button>
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
export default RND_Manageimport;