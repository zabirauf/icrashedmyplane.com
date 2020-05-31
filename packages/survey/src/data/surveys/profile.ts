import {
  Flag,
  FlagAction,
  Option,
  Question,
  Survey
  } from '@/models/survey';

export const profileSurvey = new Survey('profile',
  new Question('root', [
    new Option('largeMulti', new FlagAction(Flag.LARGE_MULTI)),
    new Option('airCarrier', new FlagAction(Flag.AIR_CARRIER)),
    new Option('helicopter', new FlagAction(Flag.HELICOPTER))
  ],
  { multi: true }))
