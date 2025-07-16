import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

export function CalendarWidget() {
  const upcomingEvents = [
    {
      title: "Team Standup",
      time: "9:00 AM",
      location: "Conference Room A",
      type: "meeting",
      color: "bg-blue-500"
    },
    {
      title: "Product Review",
      time: "2:00 PM",
      location: "Virtual",
      type: "meeting",
      color: "bg-green-500"
    },
    {
      title: "Gym Session",
      time: "6:00 PM",
      location: "Local Gym",
      type: "personal",
      color: "bg-orange-500"
    }
  ];

  return (
    <Card className="widget-container">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
            <Calendar className="h-4 w-4 text-white" />
          </div>
          <span className="font-medium">Today</span>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <div className={`w-3 h-3 rounded-full ${event.color} mt-1.5 flex-shrink-0`} />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{event.title}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{event.time}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-3 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center">
            3 events today • 2 upcoming
          </p>
        </div>
      </CardContent>
    </Card>
  );
}