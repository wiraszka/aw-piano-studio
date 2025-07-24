import React, { useState, useRef, useEffect } from 'react';
import { musicTracks } from '@/lib/constants';
import studioPhoto from '@assets/IMG_20221216_114755_1750898834697.jpg';

interface MusicTrack {
  id: number;
  title: string;
  category: string;
  duration: string;
  durationInSeconds: number;
  audioSrc: string;
}

const MusicSection: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<MusicTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    // Set default track when component mounts
    if (musicTracks.length > 0 && !currentTrack) {
      setCurrentTrack(musicTracks[0]);
    }
  }, []);
  
  useEffect(() => {
    // Initialize audio element when track changes
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.audioSrc;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack]);
  
  useEffect(() => {
    // Handle play/pause
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
        startProgressAnimation();
      } else {
        audioRef.current.pause();
        stopProgressAnimation();
      }
    }
  }, [isPlaying]);
  
  useEffect(() => {
    // Update volume when it changes
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  
  const startProgressAnimation = () => {
    if (audioRef.current) {
      animationRef.current = requestAnimationFrame(updateProgress);
    }
  };
  
  const stopProgressAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };
  
  const updateProgress = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      animationRef.current = requestAnimationFrame(updateProgress);
    }
  };
  
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  const handleTrackSelection = (track: MusicTrack) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };
  
  const handlePrevious = () => {
    if (currentTrack) {
      const currentIndex = musicTracks.findIndex(track => track.id === currentTrack.id);
      const prevIndex = (currentIndex - 1 + musicTracks.length) % musicTracks.length;
      setCurrentTrack(musicTracks[prevIndex]);
    }
  };
  
  const handleNext = () => {
    if (currentTrack) {
      const currentIndex = musicTracks.findIndex(track => track.id === currentTrack.id);
      const nextIndex = (currentIndex + 1) % musicTracks.length;
      setCurrentTrack(musicTracks[nextIndex]);
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };
  
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = parseFloat(e.target.value);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
  
  const calculateProgress = () => {
    if (currentTrack && audioRef.current) {
      return (currentTime / currentTrack.durationInSeconds) * 100;
    }
    return 0;
  };
  
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <section id="music" className="section-padding bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">
            <span className="text-primary">Music</span> <span className="text-secondary">Samples</span>
          </h2>
          <div className="title-underline"></div>
          <p className="text-lg mt-8 max-w-3xl mx-auto text-gray-300">
            Experience a selection of my performances that showcase both classical repertoire and contemporary pieces. These recordings demonstrate the breadth and depth of piano music that I both perform and teach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-between">
            <img 
              src={studioPhoto} 
              alt="AW Piano Studios recording session" 
              className="rounded-lg shadow-lg w-full object-cover object-top"
            />
          </div>
          
          <div className="flex flex-col">
            {/* Hidden Audio Element */}
            <audio 
              ref={audioRef} 
              onEnded={() => {
                setIsPlaying(false);
                setCurrentTime(0);
              }}
              onLoadedMetadata={() => {
                if (audioRef.current) {
                  setCurrentTime(0);
                }
              }}
              className="hidden"
            />
            
            {/* Music Player - Clean, Classic Design */}
            <div className="h-full flex flex-col space-y-2">
              {/* Current Track Player */}
              {currentTrack && (
                <div className="bg-black rounded-lg p-5 shadow-xl border-b-2 border-gray-600">
                  <div className="mb-5">
                    <h3 className="text-xl font-playfair font-semibold mb-1">{currentTrack.title}</h3>
                    <p className="text-gray-400 text-sm">{currentTrack.category}</p>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                      <span>{formatTime(currentTime)}</span>
                      <span>{currentTrack.duration}</span>
                    </div>
                    <div className="relative h-1.5 w-full bg-gray-800 rounded-full">
                      <input
                        type="range"
                        min="0"
                        max={currentTrack.durationInSeconds}
                        value={currentTime}
                        onChange={handleProgressChange}
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div 
                        className="absolute top-0 left-0 h-full bg-white rounded-full"
                        style={{ width: `${calculateProgress()}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Controls */}
                  <div className="flex justify-between items-center py-2">
                    <div className="flex space-x-8 items-center justify-center w-full">
                      <button 
                        onClick={handlePrevious}
                        className="text-white hover:text-gray-300 transition-colors"
                        aria-label="Previous track"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        onClick={handlePlayPause}
                        className="h-14 w-14 rounded-full bg-white flex items-center justify-center text-black focus:outline-none hover:bg-gray-300 transition-colors"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                      <button 
                        onClick={handleNext}
                        className="text-white hover:text-gray-300 transition-colors"
                        aria-label="Next track"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Volume Control */}
                  <div className="flex items-center space-x-2 justify-end mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 01.001-7.072m0 0l3 3m-3-3l-3 3" />
                    </svg>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-24 cursor-pointer appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-800 [&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:mt-[-3px]"
                    />
                  </div>
                </div>
              )}
              
              {/* Track List */}
              <div className="bg-black rounded-lg p-5 shadow-xl flex-grow flex flex-col">
                <h4 className="text-lg font-playfair font-semibold mb-5 border-b border-gray-800 pb-3">Available Tracks</h4>
                <div className="flex-grow flex flex-col">
                  {musicTracks.map((track) => (
                    <div 
                      key={track.id}
                      className={`group cursor-pointer transition flex justify-between items-center border-b border-gray-800/50 flex-1 px-3 py-2 ${
                        currentTrack?.id === track.id ? 'bg-gray-900' : 'hover:bg-gray-900/40'
                      }`}
                      onClick={() => handleTrackSelection(track)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-7 h-7 flex items-center justify-center ${
                          currentTrack?.id === track.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
                        }`}>
                          {currentTrack?.id === track.id && isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                            </svg>
                          ) : (
                            <span>{track.id}</span>
                          )}
                        </div>
                        <div>
                          <h5 className="font-medium text-sm leading-tight">{track.title}</h5>
                          <p className="text-xs text-gray-400">{track.category}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">{track.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
