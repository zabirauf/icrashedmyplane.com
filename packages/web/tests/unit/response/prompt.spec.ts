import { answerPathFromQuestionPath } from '@/models/response/prompt';
import { expect } from 'chai';
import { incidentSurvey, QuestionAction } from 'i-just-crashed-my-plane-survey';

describe('answerPathFromQuestionPath', () => {
  it('returns the answer path for a question path', () => {
    const questionPath = [
      incidentSurvey.root,
      incidentSurvey.root.options[2],
      incidentSurvey.root.options[2].action,
      (<QuestionAction>incidentSurvey.root.options[2].action).question,
      (<QuestionAction>incidentSurvey.root.options[2].action).question.options[0]
    ]
    expect(answerPathFromQuestionPath(questionPath)).to.eql([2, 0])
  })
})
