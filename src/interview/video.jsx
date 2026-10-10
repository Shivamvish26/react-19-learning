import { useRef } from "react";
import VideoPlayer from "./Myvideoplayer";

export default function App() {
  const ref = useRef(null);
  return (
    <>
      <button onClick={() => ref.current.play()}>Play</button>
      &nbsp; &nbsp;
      <button onClick={() => ref.current.pause()}>Pause</button>
      <br />
      <br />
      <VideoPlayer
        ref={ref}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        type="video/mp4"
        width="250"
      />
    </>
  );
}
