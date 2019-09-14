import * as React from 'react'
import { FadeLoader } from 'react-spinners'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const override = css`
    position: absolute; 
    left: 0; 
    right: 0; 
    top: 50%;
    margin-left: auto; 
    margin-right: auto; 
    z-index: 3000;
`;

const Spinner = ({ loading }) => (
    <FadeLoader loading={loading} css={override} color="white"/>
)

Spinner.propTypes = {
    loading: PropTypes.bool.isRequired
}


export default Spinner