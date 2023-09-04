import { connect } from 'react-redux'
import { dispatch, setDimensions } from '../../redux/actions'
import React, { useLayoutEffect, useState } from 'react'

const Layout = (props) => {
  const { dispatch, setDimensions, dimensions, developerMode } = props

  const [ active, setActive ] = useState(null)

  useLayoutEffect(() => {
    if (!dimensions) {
      const dimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
        dpr: window.devicePixelRatio
      }

      setDimensions(dimensions)
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useLayoutEffect(() => {
    if (developerMode) {
      setActive('Active')
    }
  }, [ dispatch ])

  const handleResize = () => {
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
      dpr: window.devicePixelRatio
    }

    setDimensions(dimensions)
  }

  return (
    <div id='app-container'>
      <h1>🎉 Hello Electron App! 🎉</h1>
      <div id='dev-mode'>Developer mode: {active}</div>
    </div>
  )
}

export default connect(state => ({
  developerMode: state.session.developerMode,
  dimensions: state.UI.dimensions
}), { dispatch, setDimensions })(Layout)