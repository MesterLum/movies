import * as React from 'react'
import { FadeLoader } from 'react-spinners'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    z-index: 3000;
`;

const Spinner = ({ loading }) => (
    <FadeLoader loading={loading} css={override}/>
)

Spinner.propTypes = {
    loading: PropTypes.bool.isRequired
}


export default Spinner