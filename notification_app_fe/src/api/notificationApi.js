const token = import.meta.env.VITE_ACCESS_TOKEN;

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

    const data = await response.json();

    console.log(data);

    return data.notifications || [];
  } catch (error) {
    console.log(error);

    return [];
  }
}