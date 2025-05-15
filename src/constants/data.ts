import { Exercise, Article } from '../types';

export const EXERCISES: Exercise[] = [
  {
    id: "breathingDeep",
    title: "4-7-8 Deep Breathing",
    description: "A powerful breathing technique to quickly reduce anxiety, stress, and help you fall asleep faster.",
    longDescription: "This breathing exercise is known as a natural tranquilizer for the nervous system. It's simple but powerful, especially when practiced regularly. The technique forces your mind and body to focus on regulating your breath rather than replaying your worries.",
    instructions: [
      "Sit with your back straight or lie down in a comfortable position",
      "Place the tip of your tongue against the ridge behind your upper front teeth",
      "Exhale completely through your mouth, making a whoosh sound",
      "Close your mouth and inhale quietly through your nose for 4 seconds",
      "Hold your breath for 7 seconds",
      "Exhale completely through your mouth making a whoosh sound for 8 seconds",
      "Repeat the cycle 3-4 times"
    ],
    benefits: ["Reduces anxiety", "Helps manage stress response", "Promotes better sleep", "Improves focus"],
    duration: 5,
    category: "breathing",
    featured: true,
    icon: "🫁",
    color: "#9DCEFF",
    animation: "breathing"
  },
  {
    id: "senses",
    title: "5-4-3-2-1 Grounding",
    description: "A sensory awareness technique to anchor yourself in the present moment and reduce anxiety.",
    longDescription: "This technique helps bring you back to the present by focusing on your five senses. It's particularly helpful during moments of anxiety or when feeling overwhelmed by racing thoughts.",
    instructions: [
      "Look around and name 5 things you can see",
      "Notice 4 things you can physically feel",
      "Become aware of 3 things you can hear",
      "Acknowledge 2 things you can smell",
      "Note 1 thing you can taste"
    ],
    benefits: ["Reduces anxiety", "Breaks rumination cycles", "Brings awareness to the present", "Can be done anywhere"],
    duration: 3,
    category: "grounding",
    featured: true,
    icon: "👁️",
    color: "#A5DEBB",
    animation: "pulse"
  },
  {
    id: "quickReset",
    title: "60-Second Reset",
    description: "Ultra-fast nervous system regulation for high-stress moments.",
    longDescription: "This technique is designed for moments when you need immediate regulation but don't have much time. It combines several quick nervous system interventions for maximum effectiveness.",
    instructions: [
      "Take 3 deep belly breaths, exhaling longer than you inhale",
      "Press your tongue to the roof of your mouth firmly for 5 seconds",
      "Rub your hands together vigorously, then place warm palms over your eyes",
      "Bring to mind one thing you're grateful for right now",
      "Roll your shoulders up, back, and down 3 times",
      "Shake out your hands and feet for 10 seconds"
    ],
    benefits: ["Immediately shifts nervous system state", "Can be done anywhere", "Requires minimal time", "Combination of several effective techniques"],
    duration: 1,
    category: "nervous-system",
    featured: true,
    icon: "⚡",
    color: "#C5A3FF",
    animation: "pulse"
  }
];

export const AFFIRMATIONS = [
  "I am safe in my body right now.",
  "I can handle whatever comes my way.",
  "My breath is a powerful tool for regulation.",
  "I am resilient and growing stronger each day.",
  "This moment is temporary, and I am okay.",
  "My nervous system knows how to return to balance.",
  "I release tension and welcome calm.",
  "I trust my body's wisdom to heal and restore.",
  "I deserve rest and recovery time."
];

export const ARTICLES: Article[] = [
  {
    id: "polyvagal",
    title: "Understanding Polyvagal Theory",
    description: "Learn how your nervous system responds to stress and safety",
    image: "nervous-system",
    duration: "4 min read"
  },
  {
    id: "trauma",
    title: "Nervous System & Trauma",
    description: "How past experiences shape your current responses",
    image: "brain",
    duration: "5 min read"
  },
  {
    id: "sleep",
    title: "Optimizing Sleep Through Regulation",
    description: "Techniques for better sleep through nervous system balance",
    image: "sleep",
    duration: "3 min read"
  },
  {
    id: "science",
    title: "The Science of Breathing",
    description: "How breathing affects your brain, heart and stress levels",
    image: "lungs",
    duration: "6 min read"
  }
];

export const CATEGORIES = [
  { name: "All", value: "all" },
  { name: "Breathing", value: "breathing" },
  { name: "Grounding", value: "grounding" },
  { name: "Nervous System", value: "nervous-system" }
]; 