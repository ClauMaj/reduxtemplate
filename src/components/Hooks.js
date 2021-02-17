
import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {increment} from '../actions/templateActions'
import {DivSC, H1S, Paper} from './Styles' // import styled-component

const Hooks = () => {

    // getting global state
    const counter = useSelector(state => state.counter)

    // receive dispatch fucntions
    const dispatch = useDispatch()
  return (
    <>
      <H1S><Paper>Hooks</Paper></H1S>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment(4))}>Click me</button>

      <DivSC bgc="gray">
          This is a styled component
      </DivSC>
    </>
  )
}

export default Hooks
