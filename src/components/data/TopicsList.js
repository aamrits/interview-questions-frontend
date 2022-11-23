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
        difficulty: "easy",
        link: "max-min-element-of-array",
      },
      {
        id: uuidv4(),
        title: "Move all negative numbers to beginning and positive to end.",
        difficulty: "easy",
        link: "move-negative-numbers-to-left",
      },
      {
        id: uuidv4(),
        title: "Sort an array of 0s, 1s and 2s.",
        difficulty: "medium",
        link: "sort-array-0s-1s-2s",
      },
    ],
  },
  {
    id: 2,
    topic_id: "strings_questions",
    topic_name: "Strings",
    questions: [
      {
        id: uuidv4(),
        title: "Remove duplicate characters of a string",
        difficulty: "easy",
        link: "remove-duplicate-characters-of-a-string",
      },
    ],
  },
  {
    id: 3,
    topic_id: "sorting_questions",
    topic_name: "Sorting",
    questions: [
      {
        id: uuidv4(),
        title: "Merge Sort",
        difficulty: "medium",
        link: "merge-sort",
      },
      {
        id: uuidv4(),
        title: "Bubble Sort",
        difficulty: "medium",
        link: "bubble-sort",
      },
      {
        id: uuidv4(),
        title: "Insertion Sort",
        difficulty: "medium",
        link: "insertion-sort",
      },
      {
        id: uuidv4(),
        title: "Selection Sort",
        difficulty: "medium",
        link: "selection-sort",
      },
      {
        id: uuidv4(),
        title: "Quick Sort",
        difficulty: "medium",
        link: "quick-sort",
      },
    ],
  },
  {
    id: 4,
    topic_id: "misc_questions",
    topic_name: "Miscellaneous",
    questions: [
      {
        id: uuidv4(),
        title: "Check Palindrome",
        difficulty: "easy",
        link: "check-palindrome",
      },
      {
        id: uuidv4(),
        title: "Check Prime",
        difficulty: "easy",
        link: "check-prime",
      },
      {
        id: uuidv4(),
        title: "Find factorial",
        difficulty: "easy",
        link: "find-factorial",
      },
      {
        id: uuidv4(),
        title: "Convert from decimal to hexadecimal",
        difficulty: "easy",
        link: "convert-from-decimal-to-hexadecimal",
      },
      {
        id: uuidv4(),
        title: "Find the sum of perimeter of a matrix",
        difficulty: "medium",
        link: "sum-of-perimeter-of-matrix",
      },
      {
        id: uuidv4(),
        title: "Currying with example",
        difficulty: "medium",
        link: "currying-with-example",
      },
      {
        id: uuidv4(),
        title: "Construct a Pyramid",
        difficulty: "medium",
        link: "construct-a-pyramid",
      },
      {
        id: uuidv4(),
        title: "Reconstruct an Object",
        difficulty: "medium",
        link: "reconstruct-an-object",
      }
    ],
  },
];

export default TopicsList;
