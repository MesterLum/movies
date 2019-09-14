import * as React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Dispatchs
import { dispatchGetMovies } from '../actions/movies'

class List extends React.Component {

    componentDidMount = () => {
        this.props.getMovies()
    }


    render() {
        //console.log(this.props)
        return (
            <>
            </>
        )
    }
}

List.propTypes = {
    movies: PropTypes.array.isRequired,
    error: PropTypes.string.isRequired,
    getMovies: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    ...state.movies
})

const mapDispatchToProps = dispatch => ({
    getMovies: () => dispatch(dispatchGetMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(List)



