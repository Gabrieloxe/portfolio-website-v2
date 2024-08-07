import { TypeAnimation } from 'react-type-animation';

export const RotatingText = ({ textSequence }) => {
  // type animation sample component code
  return <TypeAnimation sequence={textSequence} wrapper="span" speed={50} repeat={Infinity} />;
};
