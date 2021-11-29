import React from 'react'
import ms from 'ms'
import {routes, redirects} from './routes'
import SimpleRouter from './components/simple-router'
import DefaultLayout from './layout'
import WasteCycles from './components/waste-cycles'

function App() {
  return (
    <div>
      <SimpleRouter routes={routes} redirects={redirects} defaultLayout={DefaultLayout} />
      {/* mimicking a more complex layout which takes longer to render */}
      <WasteCycles duration={ms('200ms')} />
    </div>
  )
}

export default App
