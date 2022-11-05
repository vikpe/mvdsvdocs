<script>
import cvars from './../../data/mvdsv/cvars.json';
import { slugify } from "./util";
import CvarListItem from './CvarListItem.vue';

export default {
  components: { CvarListItem },
  props: {
    groupName: String,
  },
  data() {
    return {
      slugify,
      cvars
    }
  }
}
</script>

<template v-if="cvars.length">

  <table style="font-size: 0.85em">
    <tbody>
      <tr v-for="cvar in cvars" :id="slugify(cvar.name)" class="algolia-3">
        <td valign="top">
          <CvarListItem :cvar=cvar />
        </td>
      </tr>
    </tbody>
  </table>

</template>
