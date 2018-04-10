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
  height: 100%;
  width: 100%;
}

ul {
  padding: 0;
}

#root{
  height: 100%;
  width: 100%;
}

/* SLIDER ARROWS CSS */
button.slick-arrow {
  font-size: 0;
  line-height: 0;
  top: 50%;
  width: 30px;
  height: 30px;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
  cursor: pointer;
  position: absolute;
  border-radius: 60px;
  border: none;
  z-index: 10;
  background-color: ${colors.secondary};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 85%;
  animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
}

}

.slick-next {
  right:5px;
  background-image: url(${arRight});
}

.slick-prev {
  left: 5px;
  background-image: url(${arLeft});
}


`
