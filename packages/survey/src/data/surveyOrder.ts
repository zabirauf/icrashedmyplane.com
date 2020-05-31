import { incidentSurvey } from './surveys/incident';
import { profileSurvey } from './surveys/profile';

/** The order to present {@link Survey}s to the user. */

export const surveyOrder = [profileSurvey.identifier, incidentSurvey.identifier]
