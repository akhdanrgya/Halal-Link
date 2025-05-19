"use client"
import {Card, CardHeader, Image} from "@nextui-org/react";
import React, {useState, useEffect} from "react";
import { dummyEvent, Event } from "@/data/product";


export default function ProductCard() {
  const [event, setEvent] = useState<Event[]>([])

  const fetchEvent = async () => {
    setEvent(dummyEvent)
  }

  useEffect(() => {
    fetchEvent()
  }, [])
  
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      {event.map((event,index) => (
    <Card className="col-span-12 sm:col-span-4 h-[300px]" key={index}>
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <h4 className="text-white font-medium text-large">{event.nama}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={event.imageUrl}
      />
    </Card>
      ))}
  </div>
  );
}