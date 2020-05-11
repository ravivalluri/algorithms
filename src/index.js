import logMessage from './js/logger'
import { solutions } from './js/solutions';
import './css/style.css'

// Log message to console
logMessage('Its finished!!')
solutions();

if (module.hot)       // eslint-disable-line no-undef
  module.hot.accept() // eslint-disable-line no-undef
