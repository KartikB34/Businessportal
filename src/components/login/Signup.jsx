import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SignupOne from './SignupOne'
import SignupTwo from './SignupTwo'

const Signup = () => {
  return (
    <div className='bg-gray-200 flex flex-col items-center justify-center py-6'>
        <h1 className='text-3xl font-bold text-blue-400 mb-2'>New business registration</h1>
        <div className='bg-white'>
          <Switch>
              <SignupOne />
            <Route exact path="/">
            </Route>
            <Route exact path="/step-two">
              <SignupTwo />
            </Route>
          </Switch>
        </div>
    </div>
  )
}

export default Signup