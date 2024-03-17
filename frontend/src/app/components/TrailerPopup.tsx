import { MouseEventHandler } from "react";

const TrailerPopup = (props: {
  trailer: string;
  closePopup: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex items-center justify-center"
      onClick={props.closePopup}
    >
      <div
        className="relative w-3/4 h-3/4 bg-black bg-opacity-90 rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={props.trailer}
          className="w-full h-full"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerPopup;
