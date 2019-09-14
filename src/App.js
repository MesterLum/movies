import React from 'react'
import { connect } from 'react-redux'
import Spinner from './components/spinner'
import PropTypes from 'prop-types'

const App = ({ loading }) => (
    <div>
        <Spinner loading={loading} />
        <h4>Hola</h4>
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
