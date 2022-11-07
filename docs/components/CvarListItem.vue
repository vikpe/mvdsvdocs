<script>

export default {
  props: {
    cvar: Object,
  }
}
</script>

<template>
  <strong>{{ cvar.name }}</strong> <code>default: "{{ cvar.default_value }}"</code>
  <div v-if="cvar.description">{{ cvar.description }}</div>
</template>
