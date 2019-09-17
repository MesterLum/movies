import React from 'react'
import { connect } from 'react-redux'
import Spinner from './components/spinner'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './App.css'

// Routes
import ListScreen from './screens/list'
import MovieDetail from './screens/movie'

import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = ({ loading }) => (
    <div className={classNames('container-fluid', { 'opacity-loading': loading })}>
        <Spinner loading={loading} />

        <Router>
            <Route exact path="/" component={ListScreen}/>
            <Route exact path="/movie/:groupId" component={MovieDetail}/>
        </Router>
    </div>
)

App.propTypes = {
    loading: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    loading: state.app.loading
})

//const mapDispatchToProps

export default connect(mapStateToProps)(App);
