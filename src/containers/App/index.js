/**
 * @desc: THis is a sample container for connecting the state with a component
 */
// eslint-disable-next-line
import React from 'react'

//import your component
import App from '../../components/App/'

import { connect } from 'react-redux'

//import whatever action you need to update your state
import { enableContent, disableContent } from '../../actions'

const mapStateToProps = (state, props) => (
    {
        enable: state.enable
    }
)

const mapDispatchToProps = dispatch => {
    return{
        onEnableContent(){
            dispatch(
                enableContent()
            )
        },
        onDisableContent(){
            dispatch(
                disableContent()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)