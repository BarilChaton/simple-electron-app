import { connect } from 'react-redux'
import { dispatch, setDimensions } from '../../redux/actions'
import React, { useLayoutEffect } from 'react'

const Layout = (props) => {
  const { dispatch, setDimensions, dimensions, developerMode } = props

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
      // TODO
      // Add a label or watermark or something.
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
    <div>
      <h1>🎉 Hello Electron App! 🎉</h1>
    </div>
  )
}

export default connect(state => ({
  developerMode: state.session.developerMode,
  dimensions: state.UI.dimensions
}), { dispatch, setDimensions })(Layout)