import { useEffect, useState } from "react";

import { getNotifications } from "../api/notificationApi";

import NotificationCard from "../components/NotificationCard";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getNotifications();

      setNotifications(result);
    }

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Notifications</h1>

      {notifications.length === 0 ? (
        <p>Loading notifications...</p>
      ) : (
        notifications.map((item, index) => (
          <NotificationCard
            key={item.ID || index}
            item={item}
          />
        ))
      )}
    </div>
  );
}

export default AllNotifications;