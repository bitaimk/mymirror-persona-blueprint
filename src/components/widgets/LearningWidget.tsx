import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Flame, Target, TrendingUp } from "lucide-react";

export function LearningWidget() {
  const currentStreak = 7;
  const longestStreak = 15;
  const todayProgress = 85;
  const weeklyGoal = 5; // hours
  const weeklyActual = 3.2;

  const subjects = [
    { name: "React", progress: 65, color: "text-blue-400" },
    { name: "TypeScript", progress: 80, color: "text-purple-400" },
    { name: "System Design", progress: 35, color: "text-green-400" },
  ];

  return (
    <Card className="glass-effect h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <BookOpen className="h-5 w-5 text-primary" />
          Learning Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Streak Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-400" />
            <div>
              <div className="font-bold text-lg text-orange-400">{currentStreak}</div>
              <div className="text-xs text-muted-foreground">day streak</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Best: {longestStreak} days</div>
            <div className="text-xs text-muted-foreground">Keep it up! 🔥</div>
          </div>
        </div>

        {/* Today's Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Today's Goal</span>
            <span className="font-medium">{todayProgress}%</span>
          </div>
          <Progress value={todayProgress} className="h-2" />
        </div>

        {/* Weekly Goal */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Weekly ({weeklyActual}h / {weeklyGoal}h)</span>
            <span className="font-medium">{Math.round((weeklyActual / weeklyGoal) * 100)}%</span>
          </div>
          <Progress value={(weeklyActual / weeklyGoal) * 100} className="h-2" />
        </div>

        {/* Subject Progress */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground">Current Focus</h4>
          {subjects.map((subject, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className={subject.color}>{subject.name}</span>
                <span className="text-muted-foreground">{subject.progress}%</span>
              </div>
              <Progress value={subject.progress} className="h-1.5" />
            </div>
          ))}
        </div>

        {/* Action Button */}
        <Button size="sm" className="w-full">
          <Target className="h-3 w-3 mr-1" />
          Continue Learning
        </Button>
      </CardContent>
    </Card>
  );
}