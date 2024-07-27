import React, { useState } from "react";
import Track1 from "./Monsters - Katie Sky (Lyrics + Vietsub) .mp3";
import Track2 from "./See Tình - Hoàng Thùy Linh「Cukak Remix」_ Audio Lyrics Video.mp3";
import Track3 from "./KÉM DUYÊN _ RUM X NIT X MASEW.mp3";

const MusicPlayerContext = React.createContext();


const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Monsters - Katie Sky",
      file: Track1,
    },
    {
      name: "See Tình - Hoàng Thùy Linh",
      file: Track2,
    },
    {
      name: "Kém duyên - Rum ft Nit",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
}


const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };