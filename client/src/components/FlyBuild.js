import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Dropdown, Form} from 'semantic-ui-react'

class FlyBuild extends React.Component {
  state = { materials: [] }

  componentDidMount() {
    axios.get('/api/materials')
      .then( ({ data, headers }) => {
        this.setState({ materials: data })
        this.props.dispatch(setHeaders(headers))
      });
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    let { materials } = this.state;
    return (
      <div>
        This is where the magic will happen
        <Form>
          <Form.Field>
            <Dropdown 
              placeholder='Select Material' 
              fluid search selection 
              options={materials}
              onChange={this.handleChange} 
            />
          </Form.Field>
        </Form>
        <Link to="/Stats">See The Stats</Link>
      </div>
    )
  }
}

export default FlyBuild