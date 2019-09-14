import * as React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './styles.css'

const Item = ({ url, id }) => (
    <Link to="/movie" className="item-movie">
        <img src={url} alt="image"></img>
    </Link>
)
Item.propTypes = {
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}


export default Item

