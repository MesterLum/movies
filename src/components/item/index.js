import * as React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './styles.css'

const Item = ({ movie }) => (
    <Link to="/movie" className="item-movie">
        <img src={`${movie.image_base_horizontal}?size=290x163`} alt='' className="image_horizontal"></img>
        <img src={`${movie.image_base_vertical}?size=200x300`} alt='' className="image_vertical"></img>
    </Link>
)
Item.propTypes = {
    movie: PropTypes.object.isRequired
}


export default Item

