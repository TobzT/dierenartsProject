import React from "react";

export default function appointmentForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));
  }

  return (
    <div className="appointmentForm">
      <div>This is the appointmentForm hi</div>
    </div>
  );
}
