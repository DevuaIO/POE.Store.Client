import React, { Component } from "react"
import Layout from "../Layout"
import Loading from "../../Components/Loading"
import findAll from "../../Services/Hideouts/findAll"

class Hideouts extends Component {
  state = {
    data: [],
    loading: false,
  }

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      this.setState({ data: await findAll(), loading: false })
    })
  }

  renderData = () =>
    this.state.data.map((item) => <div key={item.id}>{item.title}</div>)

  render() {
    const { loading } = this.state
    return (
      <Layout>
        <Loading state={loading}>{this.renderData()}</Loading>
      </Layout>
    )
  }
}

export default Hideouts
