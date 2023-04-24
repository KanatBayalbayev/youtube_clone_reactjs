import React from "react";
// import video from "../../assets/video.png";
import "./Videos.scss";

const Videos = ({ videos }) => {
  console.log(videos);

  const videosOfcategories = videos.map((video) => (
    <div className="video-container" key={video.id["videoId"]}>
      <img src={video.snippet.thumbnails.medium.url} alt="video" />
      <p className="videoName">{video.snippet.title}</p>

      <p className="videoChannel"> {video.snippet.channelTitle}</p>
    </div>
  ));

  return <section className="videos-container">{videosOfcategories}</section>;
};

export default Videos;
