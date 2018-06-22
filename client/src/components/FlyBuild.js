import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Dropdown, Form} from 'semantic-ui-react'

class FlyBuild extends React.Component {
  state = { materials: [], material: [] }

  componentDidMount() {
    axios.get('/api/materials')
      .then( ({ data }) => {
        this.setState({ materials: data })
      });
  }

  onMaterialSelect = ( selection ) => {
    const material = this.state.materials.find( f => f.name === selection.name);
    this.setState(material);
  }

  render() {
    let { materials } = this.state;
    return (
      <div>
        <Form>
          <Form.Field>
            <Dropdown 
              placeholder='Select Material' 
              fluid search selection 
              options={materials}
              onChange={this.onMaterialSelect}
            />
          </Form.Field>
        </Form>
        <Link to="/Stats">See The Stats</Link>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { material: state.material }
}
export default connect(mapStateToProps)(FlyBuild)