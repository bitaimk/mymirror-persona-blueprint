import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  Palette, 
  Volume2, 
  Monitor, 
  Bell, 
  Shield,
  Brain,
  Layout,
  User,
  Settings2
} from "lucide-react";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

export function SettingsPanel({ isOpen, onClose, currentTheme, onThemeChange }: SettingsPanelProps) {
  const [aiEnabled, setAiEnabled] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [voiceCommands, setVoiceCommands] = useState(true);
  const [ambientVolume, setAmbientVolume] = useState([60]);
  const [autoAdjust, setAutoAdjust] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Settings2 className="h-5 w-5" />
              <span>MyMirror Settings</span>
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Theme Settings */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Palette className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Appearance</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Theme</span>
                <div className="flex space-x-2">
                  {["default", "warm", "cool", "nature"].map((theme) => (
                    <Button
                      key={theme}
                      variant={currentTheme === theme ? "default" : "outline"}
                      size="sm"
                      onClick={() => onThemeChange(theme)}
                      className="capitalize"
                    >
                      {theme}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Auto-adjust colors</span>
                <Switch checked={autoAdjust} onCheckedChange={setAutoAdjust} />
              </div>
            </div>
          </div>

          {/* AI Settings */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">AI Assistant</h3>
              <Badge variant="secondary" className="text-xs">
                Premium
              </Badge>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium">AI Recommendations</span>
                  <p className="text-xs text-muted-foreground">Get personalized suggestions</p>
                </div>
                <Switch checked={aiEnabled} onCheckedChange={setAiEnabled} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium">Voice Commands</span>
                  <p className="text-xs text-muted-foreground">Control your dashboard with voice</p>
                </div>
                <Switch checked={voiceCommands} onCheckedChange={setVoiceCommands} />
              </div>
            </div>
          </div>

          {/* Audio Settings */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Volume2 className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Audio</h3>
            </div>
            
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Ambient Sound Volume</span>
                  <span className="text-sm text-muted-foreground">{ambientVolume[0]}%</span>
                </div>
                <Slider
                  value={ambientVolume}
                  onValueChange={setAmbientVolume}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Notifications</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium">Smart Notifications</span>
                  <p className="text-xs text-muted-foreground">AI-powered timing</p>
                </div>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Privacy</h3>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="text-sm">
                  Your data is processed locally and encrypted. 
                  <a href="#" className="text-primary hover:underline ml-1">
                    Learn more about our privacy policy
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between pt-4 border-t">
            <Button variant="outline">
              Export Settings
            </Button>
            <div className="space-x-2">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onClose}>
                Save Changes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}