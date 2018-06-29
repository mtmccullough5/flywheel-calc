import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Dropdown, Form} from 'semantic-ui-react'

class FlyBuild extends React.Component {
  state = { materials: [], material: [] }

  componentDidMount() {
    axios.get('/api/materials/index')
      .then( ({ data }) => {
        const newMaterials = data.map((mat) => {
          mat.key = mat.id;
          mat.text = mat.name;
          mat.value = mat.name;
          return mat;
        });
        this.setState({materials: newMaterials });
      });
  }

  handleChange = (e, { value }) => this.setState({ value })

  onMaterialSelect = ( selection ) => {
    const material = this.state.materials.find( f => f.name === selection.name);
    
    this.setState(material);
  }

  render() {
    const { material } = this.state
    return (
      <div>
        <Form>
          <Form.Field>
            <Dropdown 
              placeholder='Select Material' 
              fluid
              selection
              onChange={this.handleChange}
              options={this.state.materials}
              value={material.name}
            >
            </Dropdown>
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