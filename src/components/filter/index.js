import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Action
import { actionFilterMovies } from '../../actions/movies'

// It does not need redux form because it is so simple
class Filter extends React.Component {

    state = {
        filterText: ""
    }

    render() {
        return (
            <>
                <div className="container" >
                    <input
                        style={{ width: '50%', margin: '40px auto',  }}
                        className="form-control"
                        placeholder="Teclee por lo que quiere filtrar"
                        value={this.state.filterText}
                        onChange={e => {
                            this.setState({ filterText: e.target.value })
                            this.props.filter(e.target.value)
                        }}
                    />
                    <hr style={{background: 'white'}}/>
                </div>
            </>
        )
    }
}

Filter.propTypes = {
    filter: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    filter: text => dispatch(actionFilterMovies(text))
})

export default connect(null, mapDispatchToProps)(Filter)