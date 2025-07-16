
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { SpinningReel } from "@/components/SpinningReel";
import { MediaPlayer } from "@/components/MediaPlayer";
import { FormModal } from "@/components/FormModal";

const Index = () => {
  const [selectedSong, setSelectedSong] = useState<any>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const reelWords = ["Song", "Music", "Shayari", "Poem", "Lullaby", "Melodia"];

  const customCreations = [
    {
      id: 1,
      title: "Song 1",
      artist: "Lullaby",
      duration: "1:20",
      audioUrl: "/placeholder-audio.mp3"
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Shayari",
      duration: "0:40",
      audioUrl: "/placeholder-audio.mp3"
    },
    {
      id: 3,
      title: "Song 3",
      artist: "Birthday Song",
      duration: "1:10",
      audioUrl: "/placeholder-audio.mp3"
    },
    {
      id: 4,
      title: "Song 4",
      artist: "Poem",
      duration: "0:55",
      audioUrl: "/placeholder-audio.mp3"
    },
    {
      id: 5,
      title: "Song 5",
      artist: "Wedding Anthem",
      duration: "2:30",
      audioUrl: "/placeholder-audio.mp3"
    },
    {
      id: 6,
      title: "Song 6",
      artist: "Farewell Song",
      duration: "3:05",
      audioUrl: "/placeholder-audio.mp3"
    },
    {
      id: 7,
      title: "Song 7",
      artist: "Party Anthem",
      duration: "1:34",
      audioUrl: "/placeholder-audio.mp3"
    },
    {
      id: 8,
      title: "Song 8",
      artist: "Thank You Song",
      duration: "1:42",
      audioUrl: "/placeholder-audio.mp3"
    },
    {
      id: 9,
      title: "Song 9",
      artist: "Apology",
      duration: "2:00",
      audioUrl: "/placeholder-audio.mp3"
    },
    {
      id: 10,
      title: "Song 10",
      artist: "Self written",
      duration: "2:40",
      audioUrl: "/placeholder-audio.mp3"
    }
  ];

  const testimonials = [
    {
      id: 1,
      title: "Sample Testimonial #1",
      content: "as dfadf asd fasdf asd fasdf Asdfa sdf asdfadsfa asd fasdfda sf asdf adfa df",
      author: "asdfadsfads"
    },
    {
      id: 2,
      title: "Sample Testimonial #2",
      content: "as dfadf asd fasdf asd fasdf Asdfa sdf asdfadsfa asd fasdfda sf asdf adfa df",
      author: "asdfadsfads"
    },
    {
      id: 3,
      title: "Sample Testimonial #3",
      content: "as dfadf asd fasdf asd fasdf Asdfa sdf asdfadsfa asd fasdfda sf asdf adfa df",
      author: "asdfadsfads"
    }
  ];

  const handleFormOpen = (buttonType: string) => {
    let title = "";
    switch (buttonType) {
      case "a":
        title = "What kind of music do you want it to be?";
        break;
      case "b":
        title = "What do you want it to be about?";
        break;
      case "c":
        title = "Make your song special";
        break;
    }
    setFormTitle(title);
    setIsFormOpen(true);
  };

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-border">
        <div></div>
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Melodia
        </h1>
        <Button variant="outline" className="px-6">
          Login
        </Button>
      </div>

      {/* Main Content - Three Columns */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Custom Creations */}
        <div className="w-1/3 bg-gradient-to-b from-yellow-200 to-yellow-300 p-3 overflow-y-auto">
          <h2 className="text-base font-semibold mb-2 text-gray-800">
            Some of our custom creations
          </h2>
          <div className="space-y-2">
            {customCreations.map((song) => (
              <div key={song.id} className="flex items-center justify-between group hover:bg-yellow-200/50 p-1 rounded">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedSong(song)}
                    className="h-6 w-6 p-0 hover:bg-yellow-300"
                  >
                    <Play className="h-3 w-3 text-gray-700" />
                  </Button>
                  <div>
                    <span className="text-xs font-medium text-gray-800">{song.title} - </span>
                    <span className="text-xs italic text-gray-700">{song.artist}</span>
                  </div>
                </div>
                <span className="text-xs text-gray-600">{song.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center Panel - Create Custom Song */}
        <div className="w-1/3 bg-background flex flex-col justify-center items-center p-8">
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-bold mb-2 text-primary">
              CREATE
            </h2>
            <h2 className="text-3xl font-bold mb-8 text-primary">
              CUSTOM
            </h2>
            
            {/* Spinning Reel for SONGS */}
            <div className="border-4 border-foreground rounded-lg p-4 mb-8 bg-background">
              <SpinningReel words={reelWords} className="text-4xl font-bold text-foreground" />
            </div>
            
            <div className="space-y-4 mb-8">
              <Button
                variant="outline"
                onClick={() => handleFormOpen("a")}
                className="w-full h-12 text-sm bg-background border-2 border-muted-foreground text-muted-foreground hover:bg-muted"
              >
                1. Choose 'Music Type'
              </Button>
              <Button
                variant="outline"
                onClick={() => handleFormOpen("b")}
                className="w-full h-12 text-sm bg-background border-2 border-muted-foreground text-muted-foreground hover:bg-muted"
              >
                2. Tell us 'What is the song about ?'
              </Button>
              <Button
                variant="outline"
                onClick={() => handleFormOpen("c")}
                className="w-full h-12 text-sm bg-background border-2 border-muted-foreground text-muted-foreground hover:bg-muted"
              >
                3. Add personal touch
              </Button>
            </div>
            
            <Button 
              className="w-32 h-12 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold rounded-lg"
            >
              Create
            </Button>
          </div>
        </div>

        {/* Right Panel - Testimonials */}
        <div className="w-1/3 bg-gradient-to-b from-yellow-200 to-yellow-300 p-3 overflow-y-auto">
          <h2 className="text-base font-semibold mb-2 text-gray-800">
            We love Impressing people...
          </h2>
          <div className="space-y-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-yellow-100/70 p-2 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-800 mb-1 underline">
                  {testimonial.title}
                </h3>
                <p className="text-xs text-gray-700 mb-2 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <p className="text-right text-xs text-gray-600">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Player Modal */}
      {selectedSong && (
        <MediaPlayer
          song={selectedSong}
          onClose={() => setSelectedSong(null)}
        />
      )}

      {/* Form Modal */}
      <FormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={formTitle}
      />
    </div>
  );
};

export default Index;
