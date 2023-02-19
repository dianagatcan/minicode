const { useState, useEffect } = require("react");

const Media = ({ name, cn }) => {
  const [media, setMedia] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/icons`)
      .then((response) => response.json())
      .then((data) => {
        const media = data.find((media) => media.name === name);
        setMedia(media);
      });
  }, [name]);

  return media.path ? (
    <img className={cn} src={media.path} alt={name} />
  ) : (
    <div></div>
  );
};

export default Media;