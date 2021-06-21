import React from "react";

export const Video = ({ id, children }) => {
  return (
    <figure style={{ marginBottom: "32px" }}>
      <div
        style={{
          position: "relative",
          paddingBottom: "51.25%",
          paddingTop: "30px",
          height: 0,
          overflow: "hidden",
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {children && <figcaption>{children}</figcaption>}
    </figure>
  );
};
