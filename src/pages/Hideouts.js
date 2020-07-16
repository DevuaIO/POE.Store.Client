import React, { Component } from "react"
import Layout from "../hoc/Layout"
import Loading from "../hoc/Loading"
import { findAll } from "../services/hideouts"

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

  render() {
    return (
      <Layout>
        <Loading state={this.state.loading}>
          {this.state.data.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </Loading>
      </Layout>
    )
  }
}

export default Hideouts
