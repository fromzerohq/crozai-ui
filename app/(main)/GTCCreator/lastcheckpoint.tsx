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

      <div className="grid grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} className="group hover:border-blue-500/50 transition-all duration-300">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center">
              <PlaySquare size={30} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
            </div>
            <CardContent>
              <h3 className="font-medium text-gray-200">{item === 1 ? "CreatePayment.mp4" : "Title"}</h3>
              <p className="text-sm text-gray-400">{item === 1 ? "2 mins ago" : "huidhaid"}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LastCheckpoint;
