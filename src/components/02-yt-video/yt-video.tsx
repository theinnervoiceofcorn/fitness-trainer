import "./yt-video.scss";

interface IYoutubeVideo {
  embedID: string;
}

export const YoutubeVideo = ({ embedID }: IYoutubeVideo) => {
  return (
    <iframe
      className="youtube-video"
      title="YouTube video player"
      src={`https://www.youtube.com/embed/${embedID}`}
      allowFullScreen
    />
  );
};
