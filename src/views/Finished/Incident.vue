<template>
  <div class="level-incident" data-cy="levelDescription">
    <i18n tag="h1" path="finished.incident.title">
      <template #level><strong>{{$t('finished.incident.level')}}</strong></template>
    </i18n>
    <p class="level-actions">{{$t('finished.incident.actions')}}</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  /**
   * Displayed when the user completes the survey and their answers do not qualify the incident as
   * serious or as an accident.
   */

  @Component
  export default class Incident extends Vue {
  }
</script>
