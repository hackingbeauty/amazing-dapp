import React, { Component }     from 'react'
import { connect }              from 'react-redux'
import { bindActionCreators }   from 'redux'
import * as nameActionCreators  from 'core/actions/actions-name'
import TextField                from '@material-ui/core/TextField'
import Button                   from '@material-ui/core/Button'

class HomeView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  onSubmit = () => {
    const { actions } = this.props
    const { name } = this.state

    actions.name.checkIfNameExists(name)
  }

  handleChange = (evt) => {
    const { value } = evt.currentTarget

    this.setState({
      name: value
    })
  }

  render() {
    const { name } = this.state

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <TextField
            id="standard-name"
            label="Enter Name"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <Button variant="outlined" type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      name: bindActionCreators(nameActionCreators, dispatch)
    }
  }
}

export default connect(null, mapDispatchToProps)(HomeView)
