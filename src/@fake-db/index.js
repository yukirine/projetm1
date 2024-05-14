import mock from './mock'

import './auth/jwt'
import './calendar'
import './chat'
import './profile'

mock.onAny().passThrough()
