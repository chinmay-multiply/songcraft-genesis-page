import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

interface MediaPlayerProps {
  song: {
    title: string;
    artist: string;
    audioUrl?: string;
    videoUrl?: string;
    lyrics?: string;
  };
  onClose: () => void;
}

export const MediaPlayer = ({ song, onClose }: MediaPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sample lyrics for demonstration - in a real app this would come from the song data
  const sampleLyrics = song.lyrics || `Sweet dreams tonight, little one
Close your eyes and rest
The stars are shining bright above
You are loved and blessed

Sleep now, my darling
Dream of happy things
Tomorrow brings new adventures
On happiness wings`;

  const getLyricsAtTime = (time: number) => {
    const lines = sampleLyrics.split('\n');
    const timePerLine = duration / lines.length;
    const currentLineIndex = Math.floor(time / timePerLine);
    
    return lines.map((line, index) => ({
      text: line,
      isActive: index === currentLineIndex,
      isPast: index < currentLineIndex
    }));
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    const video = videoRef.current;
    
    if (isPlaying) {
      audio?.pause();
      video?.pause();
    } else {
      audio?.play();
      if (showVideo) video?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value[0] / 100;
    }
    if (videoRef.current) {
      videoRef.current.volume = value[0] / 100;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-yellow-100/80 border border-yellow-300 rounded-lg p-3 shadow-lg backdrop-blur-sm">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="text-sm font-semibold text-gray-800">{song.title}</h4>
          <p className="text-xs text-gray-600">{song.artist}</p>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose} className="h-5 w-5 p-0 text-gray-600 hover:text-gray-800">
          ×
        </Button>
      </div>

      <audio ref={audioRef} src={song.audioUrl || "/placeholder-audio.mp3"} />

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={togglePlay}
            className="h-7 w-7 rounded-full bg-yellow-400 hover:bg-yellow-300 text-gray-800"
          >
            {isPlaying ? (
              <Pause className="h-3 w-3" />
            ) : (
              <Play className="h-3 w-3 ml-0.5" />
            )}
          </Button>

          <div className="flex-1">
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={1}
              className="w-full"
              onValueChange={(value) => {
                if (audioRef.current) {
                  audioRef.current.currentTime = value[0];
                  setCurrentTime(value[0]);
                }
              }}
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={toggleMute} className="h-5 w-5 p-0 text-gray-600">
              {isMuted ? (
                <VolumeX className="h-2.5 w-2.5" />
              ) : (
                <Volume2 className="h-2.5 w-2.5" />
              )}
            </Button>
            <Slider
              value={volume}
              max={100}
              step={1}
              className="w-12"
              onValueChange={handleVolumeChange}
            />
          </div>
        </div>

        {/* Karaoke Lyrics */}
        <div className="bg-yellow-50/50 rounded-md p-2 max-h-24 overflow-y-auto border border-yellow-200">
          <div className="text-xs leading-tight space-y-0.5">
            {getLyricsAtTime(currentTime).map((line, index) => (
              <div
                key={index}
                className={`transition-all duration-300 ${
                  line.isActive
                    ? 'text-yellow-800 font-medium bg-yellow-200/50 px-1 rounded'
                    : line.isPast
                    ? 'text-gray-500'
                    : 'text-gray-700'
                }`}
              >
                {line.text || '\u00A0'}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};