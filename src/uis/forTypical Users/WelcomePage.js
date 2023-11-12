import React from "react";

export default function WelcomePage() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userEmail = userData ? userData.EmailId : null;

  return (
    <div>
      <h1>Welcome You login successfully {userEmail}</h1>
    </div>
  );
}
