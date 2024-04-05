export default function Map(props: any) {
  return (
    <div className="border-tl h-full border-r border-t border-gray-500 p-2">
      <h4 className="w-fit rounded-md border border-gray-500 px-4 text-sm">
        Mapa
      </h4>
      <div
        className=" grid h-full w-full
      grid-cols-10 grid-rows-5 
      [&>*:nth-child(1)]:col-span-3 [&>*:nth-child(1)]:col-start-2 [&>*:nth-child(1)]:row-start-2 [&>*:nth-child(1)]:border-b-0
      [&>*:nth-child(2)]:col-span-3 [&>*:nth-child(2)]:col-start-2 [&>*:nth-child(2)]:row-start-3 [&>*:nth-child(2)]:border-b-0
      [&>*:nth-child(3)]:col-span-5 [&>*:nth-child(3)]:col-start-2 [&>*:nth-child(3)]:row-start-4 [&>*:nth-child(3)]:border-r-0
      [&>*:nth-child(4)]:col-span-3 [&>*:nth-child(4)]:col-start-7 [&>*:nth-child(4)]:row-span-4 [&>*:nth-child(4)]:row-start-1"
      >
        {Object.keys(props.roomsData).map((room: string) => {
          return (
            <button
              onClick={() => props.setSelectedRoom(room)}
              className={`relative border-4 border-black bg-slate-300 ${props.selectedRoom === room ? "shadow-2xl shadow-black" : ""}`}
            >
              <span className="absolute left-2 top-2 flex aspect-square w-8 items-center justify-center rounded-full bg-blue-700 text-white">
                {props.roomsData[room].persons?.length || 0}
              </span>
              <span className="absolute right-2 top-2 w-1/2 text-right font-bold italic">
                {room === "corridor-1" ? "Korytarz" : room}
              </span>
              {props.roomsData[room].power != "active" ? (
                <span className="absolute bottom-0 left-0 right-0 top-0 m-auto h-fit w-fit rounded-full bg-red-600 p-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-12 w-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                </span>
              ) : props.roomsData[room].temparature > 35 ? (
                <span className="absolute bottom-0 left-0 right-0 top-0 m-auto h-fit w-fit rounded-full bg-yellow-400 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-12 w-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
