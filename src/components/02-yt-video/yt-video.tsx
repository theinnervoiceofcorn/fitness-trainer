interface IYoutubeVideo {
  width: string;
  height: string;
  embedID: string;
}

export const YoutubeVideo = ({ width, height, embedID }: IYoutubeVideo) => {
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${embedID}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture, web-share"
      allowFullScreen
    />
  );
};
