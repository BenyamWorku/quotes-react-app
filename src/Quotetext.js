import React, { useState, useEffect } from "react";

export default function Quotetext({ text }) {
  return (
    <div>
      <h1>"{text}"</h1>
    </div>
  );
}
