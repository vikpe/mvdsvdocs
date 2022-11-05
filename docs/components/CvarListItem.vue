<script>

export default {
  props: {
    cvar: Object,
  }
}
</script>

<template>
  <strong>{{ cvar.name }}</strong> <code v-if="cvar.default_value" i>default: {{ cvar.default_value }}</code>
  <div v-if="cvar.description">{{ cvar.description }}</div>
</template>
