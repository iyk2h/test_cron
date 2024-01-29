"use client";

export default function Home() {
  return (
    <div
      onClick={() => {
        fetch("/api/testt");
      }}
    >
      ㅙㅡ돼ㅡㄷ
    </div>
  );
}
