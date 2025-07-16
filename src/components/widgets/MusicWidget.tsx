import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  Heart,
  Music,
  Shuffle,
  Repeat
} from "lucide-react";

export function MusicWidget() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [progress, setProgress] = useState(35);
  
  const currentSong = {
    title: "Midnight City",
    artist: "M83",
    album: "Hurry Up, We're Dreaming",
    duration: "4:03",
    currentTime: "1:24"
  };

  return (
    <Card className="widget-container group">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
              <Music className="h-4 w-4 text-white" />
            </div>
            <span className="font-medium">Now Playing</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsLiked(!isLiked)}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Song Info */}
        <div className="space-y-1">
          <h3 className="font-semibold text-lg leading-tight">{currentSong.title}</h3>
          <p className="text-muted-foreground text-sm">{currentSong.artist}</p>
          <p className="text-muted-foreground text-xs">{currentSong.album}</p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{currentSong.currentTime}</span>
            <span>{currentSong.duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="rounded-full h-10 w-10"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="sm">
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>
          
          <Button variant="ghost" size="sm">
            <Volume2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}