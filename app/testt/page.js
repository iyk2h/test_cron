"use client";

export default function Home() {
  return (
    <div
      onClick={() => {
        fetch("/api/cron");
      }}
    >
      ㅙㅡ돼ㅡㄷ
    </div>
  );
}
