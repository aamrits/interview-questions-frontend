import { v4 as uuidv4 } from 'uuid';

const TopicsList = [
  {
    id: 1,
    topic_id: "array_questions",
    topic_name: "Arrays",
    questions: [
      {
        id: uuidv4(),
        title: "Reverse an array",
        difficulty: "easy",
        link: "reverse-array",
      },
      {
        id: uuidv4(),
        title: "Find the maximum and minimum element in an array.",
        difficulty: "medium",
        link: "max-min-element-of-array",
      },
      {
        id: uuidv4(),
        title: "Move all negative numbers to beginning and positive to end.",
        difficulty: "hard",
        link: "move-negative-numbers-to-left",
      },
      {
        id: uuidv4(),
        title: "Sort an array of 0s, 1s and 2s.",
        difficulty: "easy",
        link: "sort-array-0s-1s-2s",
      },
    ],
  },
  {
    id: 2,
    topic_id: "sorting_questions",
    topic_name: "Sorting",
    questions: [
      {
        id: uuidv4(),
        title: "Merge Sort",
        difficulty: "easy",
        link: "merge-sort",
      },
      {
        id: uuidv4(),
        title: "Bubble Sort",
        difficulty: "easy",
        link: "bubble-sort",
      },
      {
        id: uuidv4(),
        title: "Insertion Sort",
        difficulty: "easy",
        link: "insertion-sort",
      },
      {
        id: uuidv4(),
        title: "Selection Sort",
        difficulty: "easy",
        link: "selection-sort",
      },
      {
        id: uuidv4(),
        title: "Quick Sort",
        difficulty: "easy",
        link: "quick-sort",
      },
    ],
  },
];

export default TopicsList;
