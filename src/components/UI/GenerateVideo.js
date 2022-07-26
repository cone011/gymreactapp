import classes from "./GenerateVideo.module.css";

const GenerateVideo = (props) => {
  return (
    <iframe
      src={props.video}
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      title="video"
    />
  );
};

export default GenerateVideo;
