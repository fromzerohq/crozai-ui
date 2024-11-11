// app/components/VideoGrid.tsx

import React from "react";

interface VideoItem {
  id: string;
  title: string;
  url: string;
}

interface VideoGridProps {
  videos: VideoItem[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div>
      <h3>Video Resources</h3>
      <div style={styles.grid}>
        {videos.map((video) => (
          <div key={video.id} style={styles.gridItem}>
            <iframe
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={styles.video}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "10px",
  },
  gridItem: {
    backgroundColor: "rgba(45, 55, 72, 0.9)",
    borderRadius: "6px",
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "200px",
  },
};

export default VideoGrid;
