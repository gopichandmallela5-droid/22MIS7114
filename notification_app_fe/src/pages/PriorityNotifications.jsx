import { useEffect, useState } from "react";

import { getNotifications } from "../api/notificationApi";

import NotificationCard from "../components/NotificationCard";

import { priorityOrder } from "../utils/priorityConfig";

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function fetchPriorityNotifications() {
      const data = await getNotifications();

      const sortedNotifications = [...data].sort((a, b) => {
        const priorityDifference =
          priorityOrder[b.Type] -
          priorityOrder[a.Type];

        if (priorityDifference !== 0) {
          return priorityDifference;
        }

        return (
          new Date(b.Timestamp) -
          new Date(a.Timestamp)
        );
      });

      const topNotifications =
        sortedNotifications.slice(0, 10);

      setNotifications(topNotifications);
    }

    fetchPriorityNotifications();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Priority Notifications</h1>

      {notifications.map((item, index) => (
        <NotificationCard
          key={item.ID || index}
          item={item}
        />
      ))}
    </div>
  );
}

export default PriorityNotifications;