import { useEffect, useState } from "react";

import { getNotifications } from "../api/notificationApi";

import NotificationCard from "../components/NotificationCard";

import Navbar from "../components/Navbar";

function AllNotifications() {
  const [notifications, setNotifications] =
    useState([]);

  const [filterType, setFilterType] =
    useState("All");

  const [viewedItems, setViewedItems] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const result =
          await getNotifications();

        setNotifications(result || []);
      } catch (err) {
        setError(
          "Failed to load notifications"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  function markAsViewed(id) {
    if (!viewedItems.includes(id)) {
      setViewedItems([
        ...viewedItems,
        id,
      ]);
    }
  }

  const filteredNotifications =
    filterType === "All"
      ? notifications
      : notifications.filter(
          (item) =>
            item.Type === filterType
        );

  return (
    <div>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1
        style={{
          marginBottom: "20px",
          color: "#1f2937",
          }}
          >
            All Notifications
            </h1>

        <select
          value={filterType}
          onChange={(e) =>
            setFilterType(e.target.value)
          }
          style={{
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <option value="All">
            All
          </option>

          <option value="Placement">
            Placement
          </option>

          <option value="Result">
            Result
          </option>

          <option value="Event">
            Event
          </option>
        </select>

        {loading && (
          <p>Loading notifications...</p>
        )}

        {error && (
          <p
            style={{
              color: "red",
            }}
          >
            {error}
          </p>
        )}

        {!loading &&
          filteredNotifications.map(
            (item, index) => (
              <NotificationCard
                key={
                  item.ID || index
                }
                item={item}
                viewed={viewedItems.includes(
                  item.ID
                )}
                onClick={() =>
                  markAsViewed(
                    item.ID
                  )
                }
              />
            )
          )}
      </div>
    </div>
  );
}

export default AllNotifications;