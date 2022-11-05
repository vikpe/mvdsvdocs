<script>

export default {
  async setup() {
    const releasesResponse = await fetch(`https://api.github.com/repos/qw-group/mvdsv/releases`);
    const releases = await releasesResponse.json()

    return {
      previousReleases: releases.slice(1, 6)
    }
  }
}

</script>

<template>

  <table style="font-size: 0.85em">
    <thead>
      <tr>
        <th>Version</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="release in previousReleases">
        <td valign="top"><a :href="release.html_url">{{ release.name }}</a></td>
        <td valign="top">{{ release.created_at.substring(0, "2020-01-01".length) }}</td>
      </tr>
    </tbody>
  </table>

</template>
