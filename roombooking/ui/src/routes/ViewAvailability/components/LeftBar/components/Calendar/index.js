import React from 'react'; 
import Calendar from 'react-calendar'; 

class CalendarView extends React.Component{

    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

      render(){
        return(
            <div> 
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        )
    }
}

export default CalendarView