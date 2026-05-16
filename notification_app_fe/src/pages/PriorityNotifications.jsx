import { useEffect, useState } from "react";

import { getNotifications } from "../api/notificationApi";

import NotificationCard from "../components/NotificationCard";

import Navbar from "../components/Navbar";

const priorityOrder = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function PriorityNotifications() {
  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {
    async function fetchData() {
      const data =
        await getNotifications();

      const sortedData = [
        ...data,
      ].sort((a, b) => {
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

      setNotifications(
        sortedData.slice(0, 10)
      );
    }

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>
          Priority Notifications
        </h1>

        {notifications.map(
          (item, index) => (
            <NotificationCard
              key={
                item.ID || index
              }
              item={item}
            />
          )
        )}
      </div>
    </div>
  );
}

export default PriorityNotifications;