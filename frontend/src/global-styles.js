import { injectGlobal } from 'styled-components'
import { colors } from './common/variables'
/* eslint no-unused-expressions: 0 */
injectGlobal `


html{
  font-size: 10px;
  color: ${colors.text};
}

body {
  font-family: 'Raleway';
  margin: 0px;
  height: 100vh;
}

ul {
  padding: 0;
}

#root{
  height: 100vh;
  width: 100%;
}
`
