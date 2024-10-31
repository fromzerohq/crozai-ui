import React from "react";
import Card from "./card";
import CardContent from "./cardcontent";
import { PlaySquare } from "lucide-react";

const LastCheckpoint = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <h2 className="text-2xl font-bold text-gray-100">LAST CHECKPOINT</h2>
        <div className="h-1 w-1 rounded-full bg-blue-400"></div>
      </div>
      <button className="btn custom-class ml-4 text-sm hover:bg-blue-500 focus:outline-none md:py-4 lg:text-lg">
        Click me!
      </button>

      <div className="grid grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <Card
            key={item}
            className="group transition-all duration-300 hover:border-blue-500/50"
          >
            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <PlaySquare
                size={30}
                className="text-gray-600 transition-colors group-hover:text-blue-400"
              />
            </div>
            <CardContent>
              <h3 className="font-medium text-gray-200">
                {item === 1 ? "CreatePayment.mp4" : "Title"}
              </h3>
              <p className="text-sm text-gray-400">
                {item === 1 ? "2 mins ago" : "huidhaid"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LastCheckpoint;
