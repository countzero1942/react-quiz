import { Question, QuestionState, Answer, Difficulty } from "./types";

export const fetchQuizQuestions = async (
	amount: number,
	difficulty: Difficulty
) => {
	const getEndPoint = () => {
		const parts = [
			"https://opentdb.com/api.php",
			"?amount=",
			amount.toString(),
			"&difficulty=",
			difficulty.toString(),
			"&type=multiple",
		];
		return parts.join("");
	};

	const data = await (await fetch(getEndPoint())).json();

	console.log(data);
};
