import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Header() {
  const [selectedEmergency, setSelectedEmergency] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");

  function sendEmergency() {
    console.log(selectedEmergency, selectedPlace);
  }

  return (
    <header className="flex h-16 items-center justify-between px-0 px-2">
      <h4 className="text-4xl font-bold italic text-[#F46524]">SAFETY EYE</h4>
      <Dialog>
        <DialogTrigger>
          <Button className="bg-red-600 font-bold">ZGŁOŚ WYPADEK</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>ZGŁOŚ WYPADEK</DialogTitle>
          </DialogHeader>
          <Select onValueChange={(value) => setSelectedPlace(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Miejsce" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="220">Obecna lokalizacja(220)</SelectItem>
              <SelectItem value="221">221</SelectItem>
              <SelectItem value="222">222</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setSelectedEmergency(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Wypadek" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cutted-cable">Przecięty kabel</SelectItem>
              <SelectItem value="fire">Pozar</SelectItem>
              <SelectItem value="others">Inne</SelectItem>
            </SelectContent>
          </Select>
          <DialogFooter>
            <Button onClick={sendEmergency} type="submit">
              Zgłoś
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="flex gap-2">
        <h5>Witaj, Tymon Plopski!</h5>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Wyloguj</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
