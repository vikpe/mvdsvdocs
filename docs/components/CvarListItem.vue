<script>

export default {
  props: {
    cvar: Object,
  }
}
</script>

<template>
  <strong>{{ cvar.name }}</strong> <span v-if="cvar.flags.includes('CVAR_ROM')">(read-only)</span> <code>default: "{{ cvar.default_value }}"</code>
  <div v-if="cvar.description">{{ cvar.description }}</div>
</template>
