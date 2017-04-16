import React from 'react';
import PropTypes from 'prop-types';
import StreamsList from '../Components/StreamsList';
import update from 'react-addons-update';
const streamersArr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"]
export default class Streams extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data: [],
  filteredData: [],
  input: this.props.input
    }
  }

  componentWillMount(){

}
  // sets the state data and filteredData to the fetched data
  getData = () => {
    let data = Promise.all(this.usersToStreamData(streamersArr))
    .then((value) => this.setState({data:value,filteredData:value}))
  }
  usersToStreamData = (arr) =>{
    return arr.map((item) => this.usernameToStreamData(item))
  }
  // gets username and returns parsed user object
  usernameToStreamData = (user) => {
    return fetch(`https://api.twitch.tv/kraken/streams/${user}`, {headers: {'Client-ID':'yf4fens5312i2ryaz76duqvge5tsoz'}} )
    .then((res) => res.json())
    .then((value) => {
      return this.streamDataToStreamObject(value)
    })
  }
  // gets stream data and returns parsed object
  streamDataToStreamObject= (user) =>{
    return this.getUserPromise(user).then(res => {
      return {name: res.display_name,
        status: res.status,
        logo: res.logo,
        url: res.url,
        online: user.stream !== null
      }}
    )
  }

  // gets a promise with channel data
  getUserPromise = (user) =>{
    let link = user._links.channel
    return fetch(link, {headers: {'Client-ID':'yf4fens5312i2ryaz76duqvge5tsoz'}})
    .then((response) => response.json())
  }

  // filters the data by mode and input
  componentWillReceiveProps = (newProps)=>{
    let filteredData = this.state.filteredData
    let data = this.state.data
    let input = newProps.input
    let mode
    // sets the mode to the changed one
    if (newProps.mode !== this.props.mode)
      mode = newProps.mode
    else
      mode = this.props.mode
    filteredData = data.filter((user) =>
      this.handleUserByMode(user,mode) && this.handleUserByInput(user,input)
    )
    this.setState({filteredData})
}

  // gets user and returns true or false according to the mode
  handleUserByMode = (user,mode) => {
    if (mode === 'online')
      return user.online
    else if(mode === 'offline')
      return (!user.online)
    return true
  }

  handleUserByInput = (user,input)=>{
    return user.name.toLowerCase().match(input.toLowerCase())
  }

  render() {
    this.state.data.length === 0 && this.getData()
    return (
        <StreamsList
          data={this.state.filteredData}
        />
  );
  }
}
Streams.PropTypes = {
  mode: PropTypes.string.isRequired,
};
