// const apiUrl =
//   process.env.NODE_ENV === "production"
//     ? process.env.SERVER_URL
//     : "http://localhost:3000";

export const sendEmail = async (
  emailFrom: string | undefined,
  subject: string | undefined,
  message: string
) => {
  console.log(emailFrom, subject, message);
  const endpoint = `https://billo-empire.vercel.app/api/mailgun`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailFrom,
        subject,
        message,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Server response:", errorText);
      return undefined;
    }

    const contentType = res.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      return await res.json();
    } else {
      return await res.text();
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return undefined;
  }
};
