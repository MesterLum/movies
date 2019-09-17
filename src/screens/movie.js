import * as React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './movie.css'

import { dispatchGetMovie } from '../actions/movies'


class Movie extends React.Component {


    componentDidMount = () => {
        const { groupId } = this.props.match.params
        this.props.getMovie(groupId)
    }

    render() {
        const { error, movie } = this.props

        if (error)
            return <div className="alert alert-danger text-center" role="alert">{error} </div>

        if (!movie.common)
            return <div className="alert alert-warning text-center" role="alert">No hay data</div>
            console.log(movie.common.extendedcommon)
        return (
            <>
                <div>
                    <div className="position-absolute">
                        <div className="wrapper-title">
                            <h4>{movie.common.title}</h4>
                        </div>
                        <div className="row">
                            <div className="col-sm-7 col-xs-12 col-lg-7 col-xl-7">
                                <img src={movie.common.image_large} className="d-none d-lg-block d-block d-sm-none" alt='' style={{ width: '100%', height: 'auto' }} />
                                <img src={movie.common.image_medium} className="d-none d-sm-block d-md-block d-lg-none " alt='' style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div className="col-sm-5 col-xs-12">
                                <div>
                                    <h4 className="d-none d-sm-block">{movie.common.title}</h4>
                                    <span><strong>Genero:</strong> {
                                        movie.common.extendedcommon.genres.genre.map((genre, index) => (
                                            <span className="borded" key={index}>{genre.desc}</span>
                                        ))
                                    } </span>
                                    <div style={{margin: '20px 0'}}>
                                        <span className="white-box">{movie.common.extendedcommon.media.publishyear}</span>
                                        <span className="white-box" style={{marginLeft: 10}}>{movie.common.extendedcommon.media.duration}</span>
                                    </div>
                                    <span>
                                        <p><strong>Descripcion:</strong> {movie.common.large_description}</p>
                                    </span>
                                    
                                       {
                                           movie.common.extendedcommon.roles.role.map((role, index) => (
                                            <span key={index}><strong>{role.desc}: </strong>{
                                                role.talents.talent.map((talent) => (
                                                    <span className="borded" key={talent.id}>{talent.fullname}</span>
                                                ))
                                            }<br /><br /></span>
                                           ))
                                       } 
                                    <div>
                                        <strong>Idioma:</strong> {movie.common.extendedcommon.media.language.original.desc}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<img src={movie.common.image_background}/>*/}
                </div>
            </>
        )
    }
}



Movie.propTypes = {
    movie: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
    getMovie: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    movie: state.movies.movie,
    error: state.movies.errorMovie
})

const mapDispatchToProps = dispatch => ({
    getMovie: groupId => dispatch(dispatchGetMovie(groupId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
