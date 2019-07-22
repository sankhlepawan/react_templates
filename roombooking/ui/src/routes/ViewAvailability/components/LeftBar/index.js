import React from 'react'; 
import CalendarView from './components/Calendar';
import Filters from './components/Filters';

import classnames from 'classnames/bind';
import styles from './LeftBar.scss';


let lbs = classnames.bind(styles);
class LeftBar extends React.Component {
    render(){
        return(
            <div className={lbs('right-border main-navbar')}>
                            <h6 className="text-left">Select Date</h6>
                
                <CalendarView />
                <Filters/>
            </div>
        )
    }
}

export default LeftBar