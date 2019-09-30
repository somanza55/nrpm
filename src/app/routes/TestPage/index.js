import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';
import configureStore from 'store';


class TestPage extends React.Component {

  render() {
    const store = configureStore();
    const authUser = JSON.parse(store.getState().auth.authUser);
    console.log("test", store.getState().auth)
    
    return (
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage"/>}/>
        <div className="d-flex justify-content-center">
          <h1><IntlMessages id="pages.samplePage.description"/></h1>
        </div>
      </div>
    );
  }
}

export default TestPage;