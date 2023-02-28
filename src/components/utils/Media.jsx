const { useState, useEffect } = require("react");

const Media = ({ name, cn, onClick }) => {
  const [media, setMedia] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/icons`)
      .then((response) => response.json())
      .then((data) => {
        const media = data.find((media) => media.name === name);
        setMedia(media);
      });
  }, [name]);

  return media.path ? (
    <img onClick={onClick} className={cn} src={media.path} alt={name} />
  ) : (
    <div></div>
  );
};

export default Media;
