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

class RnDPeriodAge extends React.Component {
    render() {
        const store = configureStore();
        const authUser = JSON.parse(store.getState().auth.authUser);
        console.log("test", store.getState().auth)
        return (
            <Fragment>
                <div className="animated slideInUpTiny animation-duration-3">
                    <div className="app-wrapper">
                        <ContainerHeader match={this.props.match} title={<IntlMessages id="จัดการ.ช่วงอายุ" />} />
                        <div className="form-horizontal">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <div className="shadow border-0 card">
                                        <div className="card-header">
                                            <b>
                                                <IntlMessages id="จัดการ.ช่วงอายุ" />
                                            </b>
                                        </div>
                                        <div className="card-body">
                                            <div style={{ textAlign: "right" }}>
                                                <span>พบข้อมูลทั้งสิ้น  6 รายการ</span>
                                            </div>
                                            <br></br>
                                            <div className="table-responsive-material">
                                                <Table bordered>
                                                    <tbody className="card-header">
                                                        <tr>
                                                            <th rowspan="2" scope="col" style={{ textAlign: "center", verticalAlign: "middle", width: 30 }}><a href="#">ช่วง</a></th>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle", width: 450 }}><a href="#">ช่วงอายุ</a></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">อายุเริ่มต้น</a></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><a href="#">อายุสิ้นสุด</a></td>
                                                            <td rowspan="2" align="center" style={{ textAlign: "center", verticalAlign: "middle" }}><b>แก้ไข</b></td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>1</td>
                                                            <td style={{ textAlign: "left", verticalAlign: "middle" }}>ช่วง 1 (อายุ ต่ำกว่า 25 ปี)</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>0</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>24	</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                <i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi  zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>2</td>
                                                            <td style={{ textAlign: "left", verticalAlign: "middle" }}>ช่วง 2 (อายุ 25 - 34 ปี)</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>25</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>34</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                <i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi  zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>3</td>
                                                            <td style={{ textAlign: "left", verticalAlign: "middle" }}>	ช่วง 3 (อายุ 35 - 44 ปี)</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>35</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>44</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                <i class="zmdi zmdi-edit zmdi-hc-2x" style={{ color: 'yellow' }}></i>&nbsp;&nbsp;<i class="zmdi  zmdi-close zmdi-hc-2x" style={{ color: 'red' }}></i>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>4</td>
                                                            <td style={{ textAlign: "left", verticalAlign: "middle" }}>ช่วง 4 (อายุ 45 - 54 ปี)</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>45</td>
                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>54</td>
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
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 5 }}>
                                                        <b>ช่วง</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                    <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 5 }}>
                                                        <b>ช่วงอายุ</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                    <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 5 }}>
                                                        <b>อายุเริ่มต้น</b>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control"></input>
                                                    </div>
                                                </div>
                                                <div className="row py-1">
                                                    <div className="col-lg-3" style={{ textAlign: "right", marginTop: 5 }}>
                                                        <b>อายุสิ้นสุด</b>
                                                    </div>
                                                    <div className="col-lg-6">
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
export default RnDPeriodAge;