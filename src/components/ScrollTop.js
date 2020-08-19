import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const style = {
  position: `fixed`,
  bottom: `50px`,
  right: `100px`,
  zIndex: `99`,
}
const ScrollTop = ({ children }) => {
  const trigger = useScrollTrigger()

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" style={style}>
        {children}
      </div>
    </Zoom>
  )
}
export default ScrollTop;
