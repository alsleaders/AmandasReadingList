import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './Components/Layout'
import Home from './Pages/Home.jsx'
import AddBook from './Pages/AddBook'
import { FetchData } from './Components/FetchData'
import { Counter } from './Components/Counter'
import Testing from './Testing'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/hello" component={Testing} />
        <Route path="/addbook" component={AddBook} />
      </Layout>
    )
  }
}
