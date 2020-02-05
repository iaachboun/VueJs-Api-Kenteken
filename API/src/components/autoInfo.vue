<template>
<div>
    <table class="kentekenInfo">
        <tr>Merk<td>{{kentekenInfo.merk}}</td></tr>
        <tr>Handelsbenaming<td>{{kentekenInfo.handelsbenaming}}</td></tr>
        <tr>Uitvoering<td>{{kentekenInfo.uitvoering}}</td></tr>
        <tr>Aantal deuren<td>{{kentekenInfo.aantal_deuren}}</td></tr>
        <tr>Aantal zitplaatsen<td>{{kentekenInfo.aantal_zitplaatsen}}</td></tr>
        <tr>Eerste kleur<td>{{kentekenInfo.eerste_kleur}}</td></tr>
        <tr>Verval datum apk<td>{{kentekenInfo.vervaldatum_apk}}</td></tr>
        <tr>Brandstof<td>{{brandstofInfo.brandstof_omschrijving}}</td></tr>
        <tr>Zuinigheidslabel<td>{{kentekenInfo.zuinigheidslabel}}</td></tr>
        <tr>Brandstof gebruik<td>{{brandstofInfo.brandstofverbruik_gecombineerd }}</td></tr>
    </table>

    <img v-bind:src="kentekenImage" class="kentekenAutoImage">

</div>
</template>

<script>
    export default {
        props: ['kentekenInfo', 'brandstofInfo', 'kentekenImage','laadpalen'],

    }
</script>

<style>
    td {
        padding-left: 40px;
    }

    .kentekenInfo {
        text-align: left;
        margin: 16px auto 0px auto;
        max-width: 300px;
    }

    .kentekenAutoImage{
        max-width: 346px;
        margin-top: 20px;
    }

</style>