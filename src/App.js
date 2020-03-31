import React, { Component } from 'react';
import './css/App.scss';
import { post } from './mainAction'
import logo_1 from './img/other_1.png'
import logo_2 from './img/other_2.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.callData()
  }

  async callData() {
    const Data = await post(`https://api.github.com/users/jerry0926/repos`, {})
    if (Data.length) {
      this.setState({
        data: Data
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <span>My GitHub Profile</span>
        </div>
        <div className='profile'>
          {
            this.state.data.map((val, index) =>
              <div className='block' key={`profile_block_${index}`}>
                <a href={val.html_url} target='_blank'><span className='profile_name'>{val.name}</span></a>
                <div className='profile_content'>
                  {val.description}
                  <p style={{
                    position: 'absolute',
                    bottom: '10px'
                  }}>Link : <a href={val.html_url} target='_blank'>{val.html_url}</a></p>
                </div>
              </div>)
          }
        </div>
        <div className='header'>
          <span>Other Project</span>
          <div className='other'>
            <div>
              <p>隆意螺絲</p>
              <a href='http://www.longiscrew.com' target='_blank'><img src={logo_1} /></a>
            </div>
            <div>
              <p>媽媽桃</p>
              <div style={{ marginTop: '120px' }}>(網頁已關閉)</div>
            </div>
            <div>
              <p>桃園律師公會</p>
              <a href='http://www.tybar.org.tw' target='_blank'><img src={logo_2} /></a>
            </div>
          </div>
          <p style={{
            fontSize: '18px',
            color: '#312c29',
            marginTop: '40px',
            textAlign: 'center'
          }}>❇因目前從事博弈相關產業，恕無法提供相關作品</p>
        </div>
      </div>
    );
  }
}

export default App;
