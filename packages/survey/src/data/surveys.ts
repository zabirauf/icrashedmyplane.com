import { incidentSurvey } from './surveys/incident';
import { profileSurvey } from './surveys/profile';
import { Survey } from '../models/survey';

/** A dictionary of all {@link Survey}s, keyed by their identifier. */

export const surveys: { [key: string]: Survey } = {
  profile: profileSurvey,
  incident: incidentSurvey,
};
