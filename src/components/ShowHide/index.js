// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  firstName = () => {
    const {first} = this.state
    if (first) {
      this.setState(() => ({first: false}))
      return
    }
    this.setState(() => ({first: true}))
  }

  lastName = () => {
    const {last} = this.state
    if (last) {
      this.setState(() => ({last: false}))
      return
    }
    this.setState(() => ({last: true}))
  }

  render() {
    const {first, last} = this.state

    return (
      <div className="bg">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div>
            <button className="btn" type="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {first && <p className="para">Joe</p>}
          </div>
          <div>
            <button type="button" className="btn" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {last && <p className="para">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
