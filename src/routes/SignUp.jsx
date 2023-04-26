import { Link } from 'react-router-dom'

import Default from '@components/layouts/Default'

function SignUp() {

  return (
    <Default>
     <h1>Sign Up</h1>
     <Link to={`/`}>Home</Link>
    </Default>
  )
}

export default SignUp
