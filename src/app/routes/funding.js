import React, { Fragment } from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';
import configureStore from 'store';
import CardBox from 'components/CardBox/index';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class funding extends React.Component{
    render() {
        const store = configureStore();
        const authUser = JSON.parse(store.getState().auth.authUser);
        console.log("test", store.getState().auth)
        return (
            <Fragment>
        <div className="animated slideInUpTiny animation-duration-3">
          <div className="app-wrapper">
            <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage"/>}/>
            <div class="form-group">
                <div class="row">
                    <div class="col-lg-4">
                        ปีงบประมาณ
                    </div>
                </div>
            </div>
          </div>
        </div>
    </Fragment>
        );
        }
    }
export default funding;