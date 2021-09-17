import { useState } from 'react';

const Block = ({ mouseEnterCallbak, imgSrc, imgAlt, content }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  const renderContent = () => {
    if (content) {
      return <p>BLock2 content: {content}</p>;
    } else if (imgSrc || imgAlt) {
      return <img src={imgSrc} alt={imgAlt} />;
    }
  };
  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? 'active' : ''}>
      {renderContent()}
    </div>
  );
};