import { useState } from "react";
import Header from "./components/Header";
import Logs from "./components/Logs";
import Map from "./components/Map";
import RoomInfo from "./components/RoomInfo";
import { LogContextProvider } from "./context/LogContext";

function App() {
  const [selectedRoom, setSelectedRoom] = useState<string>("");

  const roomsData = {
    "220": {
      temparature: 23,
      humility: 60,
      noise: 60,
      power: "active",
      usage: 4500,
      persons: [1, 2, 3, 4],
    },
    "221": {
      temparature: 34,
      humility: 60,
      noise: 60,
      power: "down",
      usage: 4500,
    },
    "222": {
      temparature: 36,
      humility: 60,
      noise: 60,
      power: "active",
      usage: 4500,
    },
    "corridor-1": {
      temparature: 23,
      humility: 60,
      noise: 60,
      power: "active",
      usage: 4500,
    },
  };

  return (
    <LogContextProvider>
      <Header />
      <main className=" grid h-[calc(100vh-64px)] grid-cols-10 border-l border-r border-gray-500 px-0">
        <div className="col-span-7 h-full">
          <Map
            setSelectedRoom={setSelectedRoom}
            roomsData={roomsData}
            selectedRoom={selectedRoom}
          />
        </div>
        <div className="col-span-3 flex h-full flex-col">
          <div className="h-1/4">
            <RoomInfo
              roomData={roomsData[selectedRoom]}
              selectedRoom={selectedRoom}
            />
          </div>
          <div className="h-3/4">
            <Logs />
          </div>
        </div>
      </main>
    </LogContextProvider>
  );
}

export default App;
