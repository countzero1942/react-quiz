export type Answer = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

export type Question = {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
};

export type Difficulty = "easy" | "medium" | "hard";

export type QuestionState = Question & { answers: string[] };
