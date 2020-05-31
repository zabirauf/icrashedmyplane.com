import { incidentSurvey } from '@/data/surveys/incident';
import { profileSurvey } from '@/data/surveys/profile';

/** The order to present {@link Survey}s to the user. */

export const surveyOrder = [profileSurvey.identifier, incidentSurvey.identifier]
