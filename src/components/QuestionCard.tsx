import React from "react";
import { Answer } from "../types";

type Props = {
	question: string;
	answers: string[];
	onAnswerChosen: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer?: Answer;
	questionNumber: number;
	totalQuestions: number;
};

const isUndefined = <T,>(value?: T): boolean => {
	return value ? false : true;
};

const isDefined = <T,>(value?: T): boolean => {
	return value ? true : false;
};


const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	onAnswerChosen,
	userAnswer,
	questionNumber,
	totalQuestions,
}) => (
	<div>
		<p className="number">
			Question: {questionNumber} / {totalQuestions}
		</p>
		<p dangerouslySetInnerHTML={{ __html: question }} />
		<div>
			{answers.map((answer) => (
				<div>
					<button
						disabled={isUndefined(userAnswer)}
						onClick={onAnswerChosen}
					>
						<span dangerouslySetInnerHTML={{ __html: answer }} />
					</button>
				</div>
			))}
		</div>
	</div>
);

export default QuestionCard;
