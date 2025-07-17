import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Plus, Clock, Star, Tv, Book, Gamepad2 } from "lucide-react";

export function EntertainmentWidget() {
  const queues = [
    {
      type: "tv",
      icon: Tv,
      items: [
        { title: "The Bear S3", episode: "E4", time: "25m", rating: 9.2 },
        { title: "House of Dragon", episode: "E6", time: "58m", rating: 8.8 },
      ]
    },
    {
      type: "books", 
      icon: Book,
      items: [
        { title: "Atomic Habits", progress: "Ch 8", time: "2h left", rating: 4.5 },
      ]
    },
    {
      type: "games",
      icon: Gamepad2, 
      items: [
        { title: "Hades II", progress: "Early Access", time: "∞", rating: 9.5 },
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "tv": return "text-red-400";
      case "books": return "text-blue-400"; 
      case "games": return "text-green-400";
      default: return "text-gray-400";
    }
  };

  const getTypeBg = (type: string) => {
    switch (type) {
      case "tv": return "bg-red-500/10";
      case "books": return "bg-blue-500/10";
      case "games": return "bg-green-500/10";
      default: return "bg-gray-500/10";
    }
  };

  return (
    <Card className="glass-effect h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Play className="h-5 w-5 text-primary" />
          Entertainment Queue
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="text-center p-2 rounded-lg bg-red-500/10">
            <div className="font-bold text-red-400">3</div>
            <div className="text-muted-foreground">Shows</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-blue-500/10">
            <div className="font-bold text-blue-400">2</div>
            <div className="text-muted-foreground">Books</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-green-500/10">
            <div className="font-bold text-green-400">1</div>
            <div className="text-muted-foreground">Games</div>
          </div>
        </div>

        {/* Up Next */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground">Up Next</h4>
          {queues.map((queue, qIndex) => (
            <div key={qIndex} className="space-y-2">
              {queue.items.slice(0, 1).map((item, index) => (
                <div key={index} className={`p-3 rounded-lg ${getTypeBg(queue.type)} border border-opacity-20`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <queue.icon className={`h-4 w-4 ${getTypeColor(queue.type)}`} />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.episode || item.progress}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {item.time}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs font-medium">{item.rating}</span>
                    </div>
                    <Button size="sm" variant="outline" className="h-6 px-2 text-xs">
                      <Play className="h-2 w-2 mr-1" />
                      Continue
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Add Button */}
        <Button size="sm" variant="outline" className="w-full">
          <Plus className="h-3 w-3 mr-1" />
          Add to Queue
        </Button>
      </CardContent>
    </Card>
  );
}