import { Table, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export default function Logs() {
  const logs = [
    {
      user: {
        id: 2,
        name: "Jan Kowalski",
      },
      time: 1712307978202,
      action: "entry",
      room: {
        id: 2,
        number: 54,
      },
    },
    {
      user: {
        id: 2,
        name: "Jan Kowalski",
      },
      time: 1712307978232,
      action: "exit",
      room: {
        id: 2,
        number: 54,
      },
    },
    {
      user: {
        id: 2,
        name: "Jan Kowalski",
      },
      time: 1712305978632,
      action: "accident",
      type: "Przecięty kabel",
      room: {
        id: 2,
        number: 54,
      },
    },
  ];

  return (
    <div className="border-t border-gray-500 p-2">
      <h4 className="w-fit rounded-md border border-gray-500 px-4 text-sm">
        Logi
      </h4>
      <Table className="overflow-x-auto text-nowrap">
        <TableRow>
          <TableHead>ID pracownika</TableHead>
          <TableHead>Pracownik</TableHead>
          <TableHead>Akcja</TableHead>
          <TableHead>Czas</TableHead>
          <TableHead>Pomieszczenie</TableHead>
        </TableRow>
        {logs.map((log) => {
          return (
            <TableRow>
              <TableCell>{log.user.id}</TableCell>
              <TableCell>{log.user.name}</TableCell>
              <TableCell>
                {log.action == "entry" ? "Wejście" : null}
                {log.action == "exit" ? "Wyjście" : null}
                {log.action == "accident" ? log.type : null}
              </TableCell>
              <TableCell>
                {new Date(log.time)
                  .toISOString()
                  .replace("T", " ")
                  .replace("Z", "")}
              </TableCell>
              <TableCell>{log.room.number}</TableCell>
            </TableRow>
          );
        })}
      </Table>
    </div>
  );
}
