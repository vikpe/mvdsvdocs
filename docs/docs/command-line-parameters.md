---
aside: false
---

<script setup>
import cmdlineParams from './../../data/mvdsv/cmdline_params.json'
</script>

# Command Line Parameters

Use command line parameters to start MVDSV with specific settings.

## Parameters

<table style="font-size: 0.85em">
    <thead>
        <tr>
            <th style="min-width: 220px">Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(props, name) in cmdlineParams">
            <td valign="top">
                <strong>-{{ props.name }}</strong> <code v-if="props.arguments">{{ props.arguments }}</code>
            </td>
            <td valign="top">
                {{ props.description }}
                <div style="margin-top: 0.5em" v-if="props.systems">systems: {{ props.systems.join(", ") }}</div>
            </td>
        </tr>
    </tbody>
</table>

