import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Plus, TrendingUp, Clock, Target } from "lucide-react";

export function JobHuntWidget() {
  const applications = [
    { company: "TechCorp", position: "Frontend Dev", status: "interview", applied: "2 days ago" },
    { company: "StartupXYZ", position: "Full Stack", status: "pending", applied: "5 days ago" },
    { company: "BigTech", position: "React Dev", status: "rejected", applied: "1 week ago" },
  ];

  const stats = {
    applied: 12,
    interviews: 3,
    offers: 1,
    responseRate: "25%"
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "interview": return "bg-blue-500/20 text-blue-400";
      case "pending": return "bg-yellow-500/20 text-yellow-400";
      case "rejected": return "bg-red-500/20 text-red-400";
      case "offer": return "bg-green-500/20 text-green-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <Card className="glass-effect h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Briefcase className="h-5 w-5 text-primary" />
          Job Hunt Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="text-center p-2 rounded-lg bg-primary/10">
            <div className="font-bold text-primary">{stats.applied}</div>
            <div className="text-muted-foreground">Applied</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-blue-500/10">
            <div className="font-bold text-blue-400">{stats.interviews}</div>
            <div className="text-muted-foreground">Interviews</div>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Recent Applications</h4>
          {applications.slice(0, 2).map((app, index) => (
            <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{app.company}</div>
                <div className="text-xs text-muted-foreground">{app.position}</div>
              </div>
              <Badge className={`text-xs ${getStatusColor(app.status)}`} variant="outline">
                {app.status}
              </Badge>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button size="sm" className="flex-1">
            <Plus className="h-3 w-3 mr-1" />
            Add Application
          </Button>
          <Button variant="outline" size="sm">
            <TrendingUp className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}