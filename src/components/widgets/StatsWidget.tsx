import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Target, 
  TrendingUp, 
  Clock,
  Flame,
  Award,
  ChevronUp,
  ChevronDown
} from "lucide-react";

export function StatsWidget() {
  const stats = [
    {
      label: "Focus Time",
      value: "6.5h",
      progress: 81,
      change: "+12%",
      trending: "up",
      icon: Clock,
      color: "text-blue-500"
    },
    {
      label: "Learning Streak",
      value: "23 days",
      progress: 92,
      change: "+5 days",
      trending: "up",
      icon: Flame,
      color: "text-orange-500"
    },
    {
      label: "Goals Completed",
      value: "8/10",
      progress: 80,
      change: "-1",
      trending: "down",
      icon: Target,
      color: "text-green-500"
    },
    {
      label: "Productivity",
      value: "94%",
      progress: 94,
      change: "+8%",
      trending: "up",
      icon: TrendingUp,
      color: "text-purple-500"
    }
  ];

  return (
    <Card className="widget-container">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500">
              <Activity className="h-4 w-4 text-white" />
            </div>
            <span className="font-medium">Personal Stats</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            This Week
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  <span className="text-sm font-medium">{stat.label}</span>
                </div>
                <div className="flex items-center space-x-1">
                  {stat.trending === "up" ? (
                    <ChevronUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <ChevronDown className="h-3 w-3 text-red-500" />
                  )}
                  <span className={`text-xs ${
                    stat.trending === "up" ? "text-green-500" : "text-red-500"
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="text-lg font-bold">{stat.value}</div>
                <Progress value={stat.progress} className="h-1.5" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-3 border-t border-border/50 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Award className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">Productivity Champion</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Keep up the great work! You're in the top 10% this week.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}