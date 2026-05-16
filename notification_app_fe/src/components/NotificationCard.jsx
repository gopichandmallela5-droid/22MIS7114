function NotificationCard({ item }) {
  return (
    <div
      style={{
        border: "1px solid #d1d5db",
        padding: "14px",
        marginBottom: "12px",
        borderRadius: "10px",
      }}
    >
      <h3>{item.Type}</h3>

      <p>{item.Message}</p>

      <small>{item.Timestamp}</small>
    </div>
  );
}

export default NotificationCard;