export default function RoomInfo(props: any) {
  return (
    <>
      <div className="border-t border-gray-500 p-2">
        <h4 className="w-fitborder border-gray-500 px-4 text-sm">
          Informacja o pomieszczeniu
        </h4>
        {props.selectedRoom ? (
          <div>
            <p>
              Pomieszczenie:{" "}
              {props.selectedRoom === "corridor-1"
                ? "Korytarz"
                : props.selectedRoom}
            </p>
            <p>Temperatura: {props.roomData.temparature}°C</p>
            <p>Wilgotność: {props.roomData.humility}%</p>
            <p>Natężenie hałasu: {props.roomData.noise}db</p>
            <p>
              Stan sieci elektrycznej:{" "}
              {props.roomData.power == "active" ? (
                <span className="text-green-700">aktywna</span>
              ) : (
                <span className="text-red-700">nieaktywna</span>
              )}
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
}
