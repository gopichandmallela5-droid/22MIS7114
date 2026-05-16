const token =
  import.meta.env.VITE_ACCESS_TOKEN;

console.log("TOKEN:", token);

export async function getNotifications() {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("STATUS:", response.status);

    const data = await response.json();

    console.log("DATA:", data);

    return data.notifications || [];
  } catch (error) {
    console.log("ERROR:", error);

    return [];
  }
}