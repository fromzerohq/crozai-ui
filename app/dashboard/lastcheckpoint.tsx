import React from "react";
import Card from "./card";
import CardContent from "./cardcontent";
import Image from "next/image";

const LastCheckpoint = () => {
  const checkpoints = [
    { id: 1, title: "CreatePayment.mp4", time: "2 mins ago", thumbnail: "/images/thumb.png" },
    { id: 2, title: "Title", time: "5 mins ago", thumbnail: "/images/thumb-2.png" },
    { id: 3, title: "Title", time: "10 mins ago", thumbnail: "/images/thumb.png" },
    { id: 4, title: "Title", time: "15 mins ago", thumbnail: "/images/thumb.png" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <h2 className="text-2xl font-bold text-gray-100">LAST CHECKPOINT</h2>
        <div className="h-1 w-1 rounded-full bg-blue-400"></div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {checkpoints.map((item) => (
          <Card
            key={item.id}
            className="group transition-all duration-300 hover:border-blue-500/50"
          >
            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="rounded-full bg-blue-500/80 p-3">
                  <svg 
                    className="h-6 w-6 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                    />
                  </svg>
                </div>
              </div>
            </div>
            <CardContent>
              <h3 className="font-medium text-gray-200">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.time}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LastCheckpoint;
