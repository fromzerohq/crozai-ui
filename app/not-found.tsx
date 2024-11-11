import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>The page you are looking for does not exist.</p>
      <Link href="/" style={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a2e",
    color: "#ffffff",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  message: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#B0B0B0",
  },
  link: {
    fontSize: "16px",
    color: "#0070f3",
    textDecoration: "underline",
  },
};

export default NotFoundPage;
