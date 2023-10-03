import React from "react";

const videoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="bg-white p-2 m-2 rounded-lg shadow-lg w-60">
      <img
        className="rounded-md"
        src={thumbnails.medium.url}
        alt={info.snippet.title}
      />
      <h3 className="my-1 text-lg font-semibold">{title}</h3>
      <h6 className="">{channelTitle}</h6>
      <p className="text-gray-500">{viewCount} views</p>
    </div>
  );
};

export default videoCard;
