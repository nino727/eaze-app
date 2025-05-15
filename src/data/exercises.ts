import { Exercise } from '../types';

export const EXERCISES: Exercise[] = [
  {
    id: "breathingDeep",
    title: "4-7-8 Deep Breathing",
    description: "A powerful breathing technique to quickly reduce anxiety and stress.",
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
    description: "A sensory awareness technique to anchor yourself in the present moment.",
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
    title: "Quick Reset",
    description: "A fast way to reset your nervous system in high-stress moments.",
    longDescription: "This technique combines several quick interventions to help you regain control during moments of high stress or anxiety. It's designed to be done quickly and discreetly, making it perfect for work or public situations.",
    instructions: [
      "Take 3 deep belly breaths",
      "Press your tongue to the roof of your mouth",
      "Rub your hands together, then place them over your eyes",
      "Think of one thing you're grateful for",
      "Roll your shoulders up, back, and down",
      "Shake out your hands and feet"
    ],
    benefits: ["Quick stress relief", "Can be done anywhere", "Combines multiple techniques", "Immediate effect"],
    duration: 1,
    category: "nervous-system",
    featured: true,
    icon: "⚡",
    color: "#FFD166",
    animation: "pulse"
  },
  {
    id: "bodyScan",
    title: "Body Scan",
    description: "A mindfulness practice to connect with your body and reduce tension.",
    longDescription: "The body scan is a fundamental mindfulness practice that helps you develop awareness of bodily sensations and release physical tension. It's particularly effective for reducing stress and improving sleep quality.",
    instructions: [
      "Lie down in a comfortable position",
      "Close your eyes and take a few deep breaths",
      "Bring awareness to your feet, noticing any sensations",
      "Slowly move your attention up through your body",
      "Notice areas of tension and consciously relax them",
      "Take your time with each body part",
      "End with a few deep breaths"
    ],
    benefits: ["Reduces physical tension", "Improves body awareness", "Promotes relaxation", "Better sleep quality"],
    duration: 10,
    category: "mindfulness",
    featured: false,
    icon: "🧘",
    color: "#5B8E7D",
    animation: "scan"
  },
  {
    id: "boxBreathing",
    title: "Box Breathing",
    description: "A simple breathing technique used by Navy SEALs to stay calm and focused.",
    longDescription: "Box breathing, also known as square breathing, is a powerful stress-reduction technique. It helps clear the mind, relax the body, and improve focus. Navy SEALs use this breathing pattern to stay calm and alert in high-stress situations.",
    instructions: [
      "Inhale for 4 counts",
      "Hold for 4 counts",
      "Exhale for 4 counts",
      "Hold for 4 counts",
      "Repeat the cycle"
    ],
    benefits: ["Reduces stress", "Improves focus", "Regulates breathing", "Calms the nervous system"],
    duration: 5,
    category: "breathing",
    featured: true,
    icon: "🔲",
    color: "#9DCEFF",
    animation: "breathing"
  },
  {
    id: "progressiveMuscle",
    title: "Progressive Muscle Relaxation",
    description: "Systematically tense and release muscles to reduce physical tension.",
    longDescription: "Progressive muscle relaxation is a deep relaxation technique that has been effectively used to control stress and anxiety, relieve insomnia, and reduce symptoms of certain types of chronic pain. The technique involves systematically tensing and then relaxing muscle groups throughout your body.",
    instructions: [
      "Start with your feet and work up to your head",
      "Tense each muscle group for 5 seconds",
      "Release and relax for 30 seconds",
      "Notice the contrast between tension and relaxation",
      "Move to the next muscle group",
      "Take your time with each area"
    ],
    benefits: ["Reduces physical tension", "Decreases anxiety", "Improves sleep", "Increases body awareness"],
    duration: 15,
    category: "nervous-system",
    featured: false,
    icon: "💪",
    color: "#EF6461",
    animation: "wave"
  },
  {
    id: '2',
    title: 'Body Scan',
    description: 'A mindfulness exercise to help you become aware of physical sensations.',
    icon: '🧘',
    color: '#34D399',
    duration: 10,
    instructions: [
      'Lie down in a comfortable position.',
      'Close your eyes and take a few deep breaths.',
      'Focus your attention on your toes.',
      'Notice any sensations in your toes.',
      'Slowly move your attention up through your body.',
      'Pay attention to each part of your body.',
      'Notice any tension or discomfort.',
      'Breathe into any areas of tension.',
      'Continue until you reach the top of your head.',
      'Take a few final deep breaths before ending.'
    ]
  },
  {
    id: '3',
    title: 'Progressive Muscle Relaxation',
    description: 'A technique to reduce physical tension and stress.',
    icon: '💪',
    color: '#F87171',
    duration: 15,
    instructions: [
      'Find a quiet, comfortable place to sit or lie down.',
      'Take a few deep breaths to center yourself.',
      'Start with your toes - tense them for 5 seconds.',
      'Release the tension and notice the difference.',
      'Move up to your calves and repeat.',
      'Continue with your thighs, abdomen, chest, hands, arms, shoulders, and face.',
      'Take your time with each muscle group.',
      'Notice the contrast between tension and relaxation.',
      'End with a few deep breaths.',
      'Take a moment to appreciate the feeling of relaxation.'
    ]
  },
  {
    id: '4',
    title: 'Mindful Walking',
    description: 'A walking meditation to help you stay present and reduce stress.',
    icon: '🚶',
    color: '#A78BFA',
    duration: 10,
    instructions: [
      'Find a quiet place to walk, indoors or outdoors.',
      'Stand still and take a few deep breaths.',
      'Begin walking at a slow, comfortable pace.',
      'Notice the sensation of your feet touching the ground.',
      'Pay attention to your breath as you walk.',
      'Observe the movement of your body.',
      'Notice your surroundings without judgment.',
      'If your mind wanders, gently bring it back to walking.',
      'Continue for the duration of the exercise.',
      'End by standing still and taking a few deep breaths.'
    ]
  },
  {
    id: '5',
    title: 'Gratitude Practice',
    description: 'A mindfulness exercise to cultivate gratitude and positive emotions.',
    icon: '🙏',
    color: '#FBBF24',
    duration: 5,
    instructions: [
      'Find a comfortable position and close your eyes.',
      'Take a few deep breaths to center yourself.',
      'Think of something you are grateful for.',
      'Notice how it makes you feel.',
      'Think of another thing you are grateful for.',
      'Continue this practice for the duration.',
      'End with a few deep breaths.',
      'Notice how you feel after the practice.'
    ]
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
  "I deserve rest and recovery time.",
  "Each breath brings me back to center.",
  "I am learning to be present with my experiences.",
  "My body knows how to heal itself.",
  "I am connected to my inner resources.",
  "I can create a sense of safety within me.",
  "I welcome peace into my mind and body."
]; 