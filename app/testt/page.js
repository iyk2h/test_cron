"use client";

import { sendEmail } from "../api/cron/[cron]/mail";

export default function Home() {
  return (
    <div
      onClick={() => {
        sendEmail();
        console.log("click");
      }}
    >
      메일 전송 테스트
    </div>
  );
}
