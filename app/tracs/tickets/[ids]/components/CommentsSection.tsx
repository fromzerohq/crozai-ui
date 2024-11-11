// app/components/CommentsSection.tsx

import React from "react";

interface Comment {
  id: string;
  text: string;
  author: string;
  date: string;
}

interface CommentsSectionProps {
  comments: Comment[];
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ comments }) => {
  return (
    <div>
      <h3>Comments</h3>
      <ul style={styles.list}>
        {comments.map((comment) => (
          <li key={comment.id} style={styles.item}>
            <p style={styles.text}>
              <strong>{comment.author}</strong> ({comment.date}): {comment.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  list: {
    listStyleType: "none",
    padding: "0",
  },
  item: {
    marginBottom: "10px",
  },
  text: {
    fontSize: "14px",
    color: "#B0B0B0",
  },
};

export default CommentsSection;
