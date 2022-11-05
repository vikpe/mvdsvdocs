---
---

<script setup>
import LatestRelease from "../components/LatestRelease.vue";
import PreviousReleases from "../components/PreviousReleases.vue";
</script>

# Downloads

## Latest release

<Suspense>
    <LatestRelease />
    <template #fallback>
        Loading...
    </template>
</Suspense>

## Previous releases

See [all releases](https://github.com/QW-Group/mvdsv/releases) on GitHub.

<Suspense>
    <PreviousReleases repoPath="qw-group/mvdsv" />
    <template #fallback>
        Loading...
    </template>
</Suspense>

## Nightly builds

A history of nightly builds is available at [builds.quakeworld.nu](https://builds.quakeworld.nu/mvdsv/snapshots/).
