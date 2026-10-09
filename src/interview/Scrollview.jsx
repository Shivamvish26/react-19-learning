import { useRef } from "react";

export default function Scrollview() {
  const topRef = useRef(null);

  const scrollToTop = () => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
 
  return (
    <div>
      <div ref={topRef}>
        <h1>Welcome to My Website</h1>
      </div>

      <div style={{ height: "2000px" }}>
        <h2>Scroll down to see the button</h2>
      </div>

      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "12px 18px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        ↑
      </button>
    </div>
  );
}