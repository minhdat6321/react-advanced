import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div className="header">
      <marquee>{currentTrackName}</marquee>
    </div>
  );
}

export default Header;