const truth = [
  {
    qNo: 1,
    question: "If you could be invisible, what’s the first thing you would do?",
  },
  {
    qNo: 2,
    question: "What’s a secret you kept from your parents?",
  },
  {
    qNo: 3,
    question: "What’s the most embarrassing music you listen to?",
  },
  {
    qNo: 4,
    question: "What’s one thing you wish you could change about yourself?",
  },
  {
    qNo: 5,
    question: "Who is your secret crush?",
  },
  {
    qNo: 6,
    question: "Who is the last person you creeped on social media?",
  },
  {
    qNo: 7,
    question: "When was the last time you wet the bed?",
  },
  {
    qNo: 8,
    question: "If a genie granted you three wishes, what would you ask for?",
  },
  {
    qNo: 9,
    question: "What’s your biggest regret?",
  },
  {
    qNo: 10,
    question:
      "If you had to only ever watch rom coms or only watch scary movies for the rest of your life, which would you choose?",
  },
  {
    qNo: 11,
    question: "Where is the weirdest place you've ever gone to the bathroom?",
  },
  {
    qNo: 12,
    question: "What’s the most food you've ever eaten in a single sitting?",
  },
  {
    qNo: 13,
    question:
      "Which player would survive a zombie apocalypse and which would be the first to go?",
  },
  {
    qNo: 14,
    question: "Reveal all the details of your first kiss.",
  },
  {
    qNo: 15,
    question: "What excuse have you used before to get out plans?",
  },
  {
    qNo: 16,
    question: "What's the longest you've ever slept?",
  },
  {
    qNo: 17,
    question:
      "Read the last thing you sent your best friend or significant other out loud.",
  },
  {
    qNo: 18,
    question: "What's your biggest pet peeve?",
  },
  {
    qNo: 19,
    question: "When was the last time you lied?",
  },
  {
    qNo: 20,
    question: "What five things would you bring to a deserted island?",
  },
  {
    qNo: 21,
    question:
      "Which is your favorite Hollywood Chris? Chris Evans, Chris Pratt, Chris Hemsworth or Chris Pine?",
  },
  {
    qNo: 22,
    question: "What's the most embarrassing thing you ever did on a date?",
  },
  {
    qNo: 23,
    question: "What is the craziest pickup line you've ever used?",
  },
  {
    qNo: 24,
    question: "What animal do you think you most look like?",
  },
  {
    qNo: 25,
    question: "How many selfies do you take a day?",
  },
  {
    qNo: 26,
    question: "What is one thing you would stand in line an hour for?",
  },
  {
    qNo: 27,
    question: "When was the last time you cried?",
  },
  {
    qNo: 28,
    question: "What's the longest time you've ever gone without showering?",
  },
  {
    qNo: 29,
    question: "What's the most embarrassing top-played song on your phone?",
  },
  {
    qNo: 30,
    question: "What was your favorite childhood show?",
  },
  {
    qNo: 31,
    question:
      "If you had to change your name, what would your new first name be?",
  },
  {
    qNo: 32,
    question:
      "If you could be a fictional character for a day, who would you choose?",
  },
  {
    qNo: 33,
    question: "What's your biggest fear?",
  },
  {
    qNo: 34,
    question: "What's one silly thing you can't live without?",
  },
  {
    qNo: 35,
    question: "What is the weirdest trend you've ever participated in?",
  },
  {
    qNo: 36,
    question:
      "If you could only listen to one song for the rest of your life, what would you choose?",
  },
  {
    qNo: 37,
    question: "What person do you text the most?",
  },
  {
    qNo: 38,
    question: "Have you ever been fired from a job?",
  },
  {
    qNo: 39,
    question:
      "If you had to wear only flip flops or heels for the next 10 years, which would you choose?",
  },
  {
    qNo: 40,
    question: "What’s an instant deal breaker in a potential love interest?",
  },
  {
    qNo: 41,
    question:
      "If you could only eat one thing for the rest of your life, what would you choose?",
  },
  {
    qNo: 42,
    question: "What is the biggest lie you ever told your parents?",
  },
  {
    qNo: 43,
    question: "What's the worst physical pain you've ever experienced?",
  },
  {
    qNo: 44,
    question: "Which player knows you the best?",
  },
  {
    qNo: 45,
    question: "What's your favorite part of your body?",
  },
  {
    qNo: 46,
    question:
      "If you could only accomplish three things in life, what would they be?",
  },
  {
    qNo: 47,
    question: "What's the weirdest thing you've ever eaten?",
  },
  {
    qNo: 48,
    question: "Have you ever gone skinny dipping?",
  },
  {
    qNo: 49,
    question: "Tell us about the worst date you've ever been on.",
  },
  {
    qNo: 50,
    question: "Who was your first celebrity crush?",
  },
  {
    qNo: 51,
    question: "What's the strangest dream you've ever had?",
  },
  {
    qNo: 52,
    question: "What are the top three things you look for in a love interest?",
  },
  {
    qNo: 53,
    question: "What is your worst habit?",
  },
  {
    qNo: 54,
    question: "How many stuffed animals do you own?",
  },
  {
    qNo: 55,
    question: "What is your biggest insecurity?",
  },
  {
    qNo: 56,
    question:
      "Name one thing you’d do if you knew there’d be zero consequences.",
  },
  {
    qNo: 57,
    question: "When’s the last time you said you were sorry? For what?",
  },
  {
    qNo: 58,
    question: "Do you pee in the shower?",
  },
  {
    qNo: 59,
    question: "Do you still have feelings for any of your exes?",
  },
  {
    qNo: 60,
    question:
      "What’s the most embarrassing thing you’ve secretly done to get a crush’s attention?",
  },
  {
    qNo: 61,
    question: "What’s the most random thing in your bag right now?",
  },
  {
    qNo: 62,
    question: "Have you ever sent a sext?",
  },
  {
    qNo: 63,
    question: "What’s the last movie that made you cry?",
  },
  {
    qNo: 64,
    question: "What’s the last thing you Googled?",
  },
  {
    qNo: 65,
    question: "When’s the last time you got caught in a lie?",
  },
  {
    qNo: 66,
    question: "What gross smell do you actually enjoy?",
  },
  {
    qNo: 67,
    question: "Who was the last person you said “I love you” to?",
  },
  {
    qNo: 68,
    question: "Have you ever had a paranormal experience?",
  },
  {
    qNo: 69,
    question:
      "If you were handed $1,000 right now, what would you spend it on?",
  },
  {
    qNo: 70,
    question:
      "Who’s your celebrity “hall pass” if you were to meet that person while in a relationship?",
  },
  {
    qNo: 71,
    question: "Have you ever cheated on an exam?",
  },
  {
    qNo: 72,
    question: "What unexpected part of the body do you find attractive?",
  },
  {
    qNo: 73,
    question: "What’s the most awkward thing you’ve ever been caught doing?",
  },
  {
    qNo: 74,
    question: "Have you ever flirted with a close friend’s sibling?",
  },
  {
    qNo: 75,
    question: "What was your first concert?",
  },
  {
    qNo: 76,
    question:
      "If you had the choice to never have to sleep again, would you take it?",
  },
  {
    qNo: 77,
    question: "If you had to get a tattoo today, what would it be?",
  },
  {
    qNo: 78,
    question:
      "Even if you’d be paid $1 million for it, what’s something you would never do?",
  },
  {
    qNo: 79,
    question:
      "If you could travel to the past and meet one person, who would it be?",
  },
  {
    qNo: 80,
    question: "What popular music artist do you secretly hate?",
  },
  {
    qNo: 81,
    question: "Where do you see yourself in 10 years?",
  },
  {
    qNo: 82,
    question: "Name your go-to karaoke song.",
  },
  {
    qNo: 83,
    question: "What’s the most adventurous thing you’ve ever done?",
  },
  {
    qNo: 84,
    question: "When have you been in the most trouble in school?",
  },
  {
    qNo: 85,
    question:
      "If you had to always be overdressed or underdressed, which would you choose?",
  },
  {
    qNo: 86,
    question: "Who would you cast as you in the movie version of your life?",
  },
  {
    qNo: 87,
    question: "What’s the luckiest thing that’s ever happened to you?",
  },
  {
    qNo: 88,
    question: "Do you have any phobias?",
  },
  {
    qNo: 89,
    question: "Have you ever had your fortune told?",
  },
  {
    qNo: 90,
    question:
      "If you had to move to a different country tomorrow, where would you go?",
  },
  {
    qNo: 91,
    question: "What do you want to be remembered for most in life?",
  },
  {
    qNo: 92,
    question: "Do you believe in soul mates?",
  },
  {
    qNo: 93,
    question: "Have you ever re-gifted a present? What was it?",
  },
  {
    qNo: 94,
    question: "What’s something you only do when you’re alone?",
  },
  {
    qNo: 95,
    question: "What movie (or franchise) are you most embarrassed to love?",
  },
  {
    qNo: 96,
    question: "Have you ever had an imaginary friend? Describe them.",
  },
  {
    qNo: 97,
    question: "What gross food combo do you secretly love?",
  },
  {
    qNo: 98,
    question: "If you could become besties with a celebrity, who would it be?",
  },
  {
    qNo: 99,
    question: "What’s the most embarrassing nickname you’ve ever been given?",
  },
  {
    qNo: 100,
    question:
      "If you could trade lives with any person you know for a day, who would it be?",
  },
]

export default truth
