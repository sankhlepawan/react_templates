import React from 'react';
import { Table } from 'reactstrap';
import './ViewBooking.css';
import * as action from 'actions'
import { connect } from 'react-redux'
import { columns } from 'constants/column'

class ViewBooking extends React.Component {

     componentDidMount() {
          fetch(this.props.fetchDR()).then(this.props.fetcRoom())
     }
     render() {
          if (!Object.values(this.props.rooms).length > 0 || !Object.keys(this.props.roomList).length > 0) return "loding...";
          return (
               <div className="view-full">
                    <Table bordered striped className='table room-col'>
                         <tbody>
                              <tr>
                                   <th>Conference Rooms</th>
                              </tr>{
                                   Object.keys(this.props.rooms).map((data, index) => {
                                        return (
                                             <tr key={index}>
                                                  <td>{data}</td>
                                             </tr>
                                        )
                                   })
                              }
                         </tbody>
                    </Table>

                    <div className="view-table">
                         <Table bordered striped className='table'>
                              <thead>
                                   <tr>
                                        {columns.map((listValue, index) => {
                                             return (
                                                  <th key={index}>{listValue.label}</th>
                                             );
                                        })}
                                   </tr>
                              </thead>
                              <tbody>{
                                   Object.keys(this.props.rooms).map((data, index) => {
                                        return (
                                             <tr key={index}>
                                                  {
                                                       this.props.rooms[data].map((timee, idx) => {
                                                            return (
                                                                 <td style={timee.type ? { backgroundColor: "grey" } : { backgroundColor: "white" }} key={idx}></td>
                                                            )
                                                       })
                                                  }
                                             </tr>
                                        )
                                   })
                              }
                              </tbody>
                         </Table>
                    </div>
               </div>
          );
     }
}

const mapStateToProps = (state) => {
     return {
          drList: state.booking.DRList,
          roomList: state.booking.RoomList,
          rooms: state.booking.rooms
     }
}


const mapDispatchToProps = (dispatch) => {
     return {
          fetchDR: () => dispatch(action.fetchDRList()),
          fetcRoom: () => dispatch(action.fetchRoomBookingList())
     }
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewBooking)