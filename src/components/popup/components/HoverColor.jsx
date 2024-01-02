import { useSelector } from "react-redux";
import convert from 'color-convert';
import PropTypes from 'prop-types';

const HoverColor = ({ item }) => {
  const popupSub = useSelector((state) => state.popup.popupSub);

  let content = null;

  if (popupSub === 'HEX' || popupSub === null) {
    content = `#${item.hex}`;
  } else if (popupSub === 'RGB') {
    content = `rgb(${item.rgb})`;
  } else if (popupSub === 'HSL') {
    content = `hsl(${convert.hex.hsl(item.hex)})`;
  }

  return <div>{content}</div>;
};

HoverColor.propTypes = {
    item: PropTypes.object
  };
  

export default HoverColor;