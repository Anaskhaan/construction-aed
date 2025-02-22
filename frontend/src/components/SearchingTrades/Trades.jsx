export default function TradePage({ params }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F9FAFB",
        padding: "2rem 0",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 1rem" }}>
        <h1
          style={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            color: "#1F2937",
            marginBottom: "2rem",
            textTransform: "capitalize",
          }}
        >
          {params.trade.replace("-", " ")} Estimating Services
        </h1>
      </div>
    </div>
  );
}
