import React from 'react';
import configureStore from 'store';


class Report_onproselect extends React.Component {

    render() {
        const store = configureStore();
        const authUser = JSON.parse(store.getState().auth.authUser);
        console.log("test", store.getState().auth)
    return (
            
            <h3><center><b>ออกรายงานแบบเลือกคอลัมน์จากระบบ NRMS Ongoing monitoring</b></center></h3>
        );
    }
  }
  
  export default Report_onproselect;