import { container, instanceCachingFactory } from 'tsyringe'

import { DOCUMENT } from '../config/token'

container.register(DOCUMENT, { useFactory: instanceCachingFactory(() => document) })
