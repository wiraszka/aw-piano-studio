import tinyDancerAudio from "@assets/Tiny Dancer [COVER]_1751057815652.mp3";
import lostKeysAudio from "@assets/The Lost Keys - Every Single Day_1751057824227.wav";
import somethingOrangeAudio from "@assets/Something in the Orange [COVER]_1751057839294.wav";

// Music tracks
export const musicTracks = [
  {
    id: 1,
    title: "Tiny Dancer (Cover)",
    category: "Cover Performance",
    duration: "4:30",
    durationInSeconds: 270,
    audioSrc: tinyDancerAudio,
  },
  {
    id: 2,
    title: "The Lost Keys - Every Single Day",
    category: "Original Performance",
    duration: "3:45",
    durationInSeconds: 225,
    audioSrc: lostKeysAudio,
  },
  {
    id: 3,
    title: "Something in the Orange (Cover)",
    category: "Cover Performance",
    duration: "4:15",
    durationInSeconds: 255,
    audioSrc: somethingOrangeAudio,
  },
  {
    id: 4,
    title: "Your Song (Cover)",
    category: "Cover Performance",
    duration: "3:52",
    durationInSeconds: 232,
    audioSrc: tinyDancerAudio, // Placeholder - will be replaced with actual file
  },
  {
    id: 5,
    title: "Original Composition #2",
    category: "Original Performance",
    duration: "5:28",
    durationInSeconds: 328,
    audioSrc: lostKeysAudio, // Placeholder - will be replaced with actual file
  }
];

// Gallery items
export const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "AW Music Studios piano lesson environment",
    title: "Studio Environment",
    description: "A welcoming space designed for focused learning"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Piano lessons in action at AW Music Studios",
    title: "Lessons in Action",
    description: "Personalized instruction for all skill levels"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Student recital performance",
    title: "Student Recitals",
    description: "Regular performance opportunities for students"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1626046909801-8393fcc9dc5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "One-on-one piano instruction",
    title: "Individual Instruction",
    description: "Focused attention on each student's development"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Music theory and composition",
    title: "Theory & Composition",
    description: "Comprehensive musical education beyond playing"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1619096934850-ce5e7519c3b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Group lessons and workshops",
    title: "Group Workshops",
    description: "Collaborative learning experiences"
  }
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    content: "My daughter has been taking lessons at AW Music Studios for three years, and the transformation has been remarkable. The instructor's patience and expertise have helped her develop not just as a pianist, but as a confident performer and music lover.",
    author: "Sarah Johnson",
    role: "Parent of student, 5 years",
    rating: 5
  },
  {
    id: 2,
    content: "As an adult beginner, I was nervous about starting piano lessons. AW Music Studios created a supportive environment where I could learn at my own pace. The personalized curriculum has kept me motivated and excited about my musical journey.",
    author: "Michael Rodriguez",
    role: "Adult student, 2 years",
    rating: 5
  },
  {
    id: 3,
    content: "The instruction at AW Music Studios goes beyond technical skills. My son has developed a deep appreciation for music history and theory, which has enriched his playing. The recitals have been wonderful opportunities for him to build confidence.",
    author: "Jennifer Williams",
    role: "Parent of student, 3 years",
    rating: 4.5
  }
];

// Resource categories and links
export const resourceCategories = [
  {
    id: 1,
    title: "Practice Resources",
    color: "primary",
    icon: "external-link-alt",
    links: [
      {
        id: 1,
        title: "PianoChops",
        description: "Interactive practice tools and technique exercises",
        url: "https://www.pianochops.com"
      },
      {
        id: 2,
        title: "Metronome Online",
        description: "Free online metronome for consistent practice",
        url: "https://www.metronomeonline.com"
      },
      {
        id: 3,
        title: "Music Theory",
        description: "Comprehensive music theory lessons and exercises",
        url: "https://www.musictheory.net"
      },
      {
        id: 4,
        title: "Sight Reading Factory",
        description: "Tools to improve sight reading skills",
        url: "https://www.sightreadingfactory.com"
      }
    ]
  },
  {
    id: 2,
    title: "Sheet Music & Repertoire",
    color: "secondary",
    icon: "external-link-alt",
    links: [
      {
        id: 1,
        title: "IMSLP Petrucci Library",
        description: "Free public domain sheet music",
        url: "https://imslp.org"
      },
      {
        id: 2,
        title: "Sheet Music Plus",
        description: "Online store for purchasing sheet music",
        url: "https://www.sheetmusicplus.com"
      },
      {
        id: 3,
        title: "MuseScore",
        description: "Free sheet music and notation software",
        url: "https://musescore.org"
      },
      {
        id: 4,
        title: "Piano Street",
        description: "Classical piano repertoire and resources",
        url: "https://www.pianostreet.com"
      }
    ]
  },
  {
    id: 3,
    title: "Competitions & Events",
    color: "primary",
    icon: "external-link-alt",
    links: [
      {
        id: 1,
        title: "Kiwanis Music Festival",
        description: "Annual competition for young musicians",
        url: "https://www.kiwanismusicfestival.com"
      },
      {
        id: 2,
        title: "Royal Conservatory of Music",
        description: "Examination information and resources",
        url: "https://www.rcmusic.com"
      },
      {
        id: 3,
        title: "Vancouver Symphony Orchestra",
        description: "Concert schedule and educational programs",
        url: "https://www.vancouversymphony.ca"
      },
      {
        id: 4,
        title: "Music Teachers National Association",
        description: "Professional development and certification resources",
        url: "https://www.mtna.org"
      }
    ]
  }
];
