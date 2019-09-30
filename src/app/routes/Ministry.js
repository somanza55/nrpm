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

class Ministry extends React.Component {

  render() {
    const store = configureStore();
    const authUser = JSON.parse(store.getState().auth.authUser);
    console.log("test", store.getState().auth)
    
    return (
        <Fragment>
    <div className="animated slideInUpTiny animation-duration-3">
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage"/>}/>
      </div>
    </div>


      <div className="animated slideInUpTiny animation-duration-3">
      <div className="app-wrapper">
      <div className="row mb-md-3">
        <CardBox styleName="col-12" cardStyle="p-0" heading={<IntlMessages id="table.basicTable"/>}
                 headerOutside>

      <div className="table-responsive-material">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat (g)</TableCell>
            <TableCell align="right">Carbs (g)</TableCell>
            <TableCell align="right">Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>

        </TableBody>
      </Table>
    </div>
    </CardBox>
      </div>
      </div>
      </div>
      </Fragment>
    );
  }
}

export default Ministry;