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
  const customCreations = [{
    id: 1,
    title: "Sweet Dreams Tonight",
    artist: "Lullaby",
    duration: "1:20",
    audioUrl: "/placeholder-audio.mp3"
  }, {
    id: 2,
    title: "Dil Ki Baat",
    artist: "Shayari",
    duration: "0:40",
    audioUrl: "/placeholder-audio.mp3"
  }, {
    id: 3,
    title: "Another Year of Joy",
    artist: "Birthday Song",
    duration: "1:10",
    audioUrl: "/placeholder-audio.mp3"
  }, {
    id: 4,
    title: "Whispers of the Heart",
    artist: "Poem",
    duration: "0:55",
    audioUrl: "/placeholder-audio.mp3"
  }, {
    id: 5,
    title: "Two Hearts, One Love",
    artist: "Wedding Anthem",
    duration: "2:30",
    audioUrl: "/placeholder-audio.mp3"
  }, {
    id: 6,
    title: "Until We Meet Again",
    artist: "Farewell Song",
    duration: "3:05",
    audioUrl: "/placeholder-audio.mp3"
  }, {
    id: 7,
    title: "Dance All Night",
    artist: "Party Anthem",
    duration: "1:34",
    audioUrl: "/placeholder-audio.mp3"
  }, {
    id: 8,
    title: "Grateful Hearts",
    artist: "Thank You Song",
    duration: "1:42",
    audioUrl: "/placeholder-audio.mp3"
  }, {
    id: 9,
    title: "I'm Sorry, My Love",
    artist: "Apology",
    duration: "2:00",
    audioUrl: "/placeholder-audio.mp3"
  }, {
    id: 10,
    title: "My Story, My Song",
    artist: "Self written",
    duration: "2:40",
    audioUrl: "/placeholder-audio.mp3"
  }];
  const testimonials = [{
    id: 1,
    title: "Perfect Birthday Surprise!",
    content: "Melodia created the most beautiful birthday song for my daughter. She absolutely loved it and it made her day so special. The personalized lyrics brought tears to my eyes!",
    author: "Priya S."
  }, {
    id: 2,
    title: "Our Wedding Song Dreams",
    content: "We wanted something unique for our first dance and Melodia delivered beyond our expectations. The song perfectly captured our love story and had all our guests in tears.",
    author: "Rohit & Kavya"
  }, {
    id: 3,
    title: "Heartfelt Apology Song",
    content: "I messed up big time with my partner and needed something special to make amends. The apology song Melodia created helped me express what I couldn't say in words. We're back together now!",
    author: "Arjun M."
  }, {
    id: 4,
    title: "Thank You Mom",
    content: "Created a thank you song for my mother on Mother's Day. The way they captured all the little memories and moments was incredible. Mom still plays it every day!",
    author: "Sneha K."
  }, {
    id: 5,
    title: "Farewell to a Dear Friend",
    content: "When my best friend moved across the country, I wanted to give her something meaningful. The farewell song they created perfectly expressed our friendship and the memories we shared.",
    author: "Vikram T."
  }];
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
  return <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-border bg-slate-50">
        <div></div>
        
        <Button variant="outline" className="px-6">
          Login
        </Button>
      </div>

      {/* Main Content - Three Columns */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Custom Creations */}
        <div className="w-1/3 bg-gradient-to-b from-yellow-200 to-yellow-300 p-3 overflow-y-auto bg-amber-200">
          <h2 className="text-base font-semibold mb-2 text-gray-800">
            Some of our custom creations
          </h2>
          <div className="space-y-2">
            {customCreations.map(song => <div key={song.id} className="flex items-center justify-between group hover:bg-yellow-200/50 p-1 rounded">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={() => setSelectedSong(song)} className="h-6 w-6 p-0 hover:bg-yellow-300">
                    <Play className="h-3 w-3 text-gray-700" />
                  </Button>
                  <div>
                    <span className="text-xs font-medium text-gray-800">{song.title} - </span>
                    <span className="text-xs italic text-gray-700">{song.artist}</span>
                  </div>
                </div>
                <span className="text-xs text-gray-600">{song.duration}</span>
              </div>)}
          </div>
        </div>

        {/* Center Panel - Create Custom Song */}
        <div className="w-1/3 flex flex-col justify-center items-center p-8 bg-slate-50">
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-bold mb-2 text-primary">
              CREATE
            </h2>
            <h2 className="text-3xl font-bold mb-8 text-primary">
              CUSTOM
            </h2>
            
            {/* Spinning Reel for SONGS */}
            
            
            <div className="space-y-4 mb-8">
              <Button variant="outline" onClick={() => handleFormOpen("a")} className="w-full h-12 text-sm text-left bg-background border-2 border-muted-foreground text-muted-foreground hover:bg-muted">
                1. Choose 'Music Type'
              </Button>
              <Button variant="outline" onClick={() => handleFormOpen("b")} className="w-full h-12 text-sm bg-background border-2 border-muted-foreground text-muted-foreground hover:bg-muted">
                2. Tell us 'What is the song about ?'
              </Button>
              <Button variant="outline" onClick={() => handleFormOpen("c")} className="w-full h-12 text-sm bg-background border-2 border-muted-foreground text-muted-foreground hover:bg-muted">
                3. Add personal touch
              </Button>
            </div>
            
            <Button className="w-32 h-12 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold rounded-lg">
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
            {testimonials.map(testimonial => <div key={testimonial.id} className="bg-yellow-100/70 p-2 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-800 mb-1 underline">
                  {testimonial.title}
                </h3>
                <p className="text-xs text-gray-700 mb-2 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <p className="text-right text-xs text-gray-600">
                  - {testimonial.author}
                </p>
              </div>)}
          </div>
        </div>
      </div>

      {/* Media Player Modal */}
      {selectedSong && <MediaPlayer song={selectedSong} onClose={() => setSelectedSong(null)} />}

      {/* Form Modal */}
      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} title={formTitle} />
    </div>;
};
export default Index;