<template>
    <div>

        <table class="kentekenInfoExtra">
             <tr>Tweede kleur<td>{{kentekenInfo.tweede_kleur}}</td></tr>
            <tr>Aantal cilinders<td>{{kentekenInfo.aantal_cilinders}}</td></tr>
            <tr>Aantal deuren<td>{{kentekenInfo.aantal_rolstoelplaatsen}}</td></tr>
            <tr>Wam verzekerd<td>{{kentekenInfo.wam_verzekerd}}</td></tr>
            <tr>Aantal rolstoel plaatsen<td>{{kentekenInfo.aantal_deuren}}</td></tr>
            <tr>Afstand hart koppeling tot achterzijde voertuig<td>{{kentekenInfo.afstand_hart_koppeling_tot_achterzijde_voertuig}}</td></tr>
            <tr>Afstand voorzijde voertuig tot hart koppeling<td>{{kentekenInfo.afstand_voorzijde_voertuig_tot_hart_koppeling}}</td></tr>
            <tr>Breedte<td>{{kentekenInfo.breedte}}</td></tr>
            <tr>Bruto bpm<td>{{kentekenInfo.bruto_bpm}}</td></tr>
            <tr>Cilinder inhoud<td>{{kentekenInfo.cilinderinhoud}}</td></tr>
            <tr>Datum eerste afgifte in Nederland<td>{{kentekenInfo.datum_eerste_afgifte_nederland}}</td></tr>
            <tr>Datum_tenaamstelling<td>{{kentekenInfo.datum_eerste_toelating}}</td></tr>
            <tr>Europese voertuigen categorie<td>{{kentekenInfo.europese_voertuigcategorie}}</td></tr>
            <tr>Export indicator<td>{{kentekenInfo.export_indicator}}</td></tr>
            <tr>Inrichting<td>{{kentekenInfo.inrichting}}</td></tr>
            <tr>Lengte<td>{{kentekenInfo.lengte}}</td></tr>
            <tr>Massa ledig voertuig<td>{{kentekenInfo.massa_ledig_voertuig}}</td></tr>
            <tr>Massa rijklaar<td>{{kentekenInfo.massa_rijklaar}}</td></tr>
            <tr>Maximum massa samenstelling<td>{{kentekenInfo.maximum_massa_samenstelling}}</td></tr>
            <tr>Maximum massa trekken ongeremd<td>{{kentekenInfo.maximum_massa_trekken_ongeremd}}</td></tr>
            <tr>Maximum massa trekken geremd<td>{{kentekenInfo.maximum_trekken_massa_geremd}}</td></tr>
            <tr>Openstaande terugroepactie indicator<td>{{kentekenInfo.openstaande_terugroepactie_indicator}}</td></tr>
            <tr>Plaats chassisnummer<td>{{kentekenInfo.plaats_chassisnummer}}</td></tr>
            <tr>Taxi indicator<td>{{kentekenInfo.taxi_indicator}}</td></tr>
            <tr>Technische max massa voertuig<td>{{kentekenInfo.technische_max_massa_voertuig}}</td></tr>
            <tr>Toegestane maximum massa voertuig<td>{{kentekenInfo.toegestane_maximum_massa_voertuig}}</td></tr>
            <tr>Tweede kleur<td>{{kentekenInfo.tweede_kleur}}</td></tr>
            <tr>Type goedkeurings nummer<td>{{kentekenInfo.typegoedkeuringsnummer}}</td></tr>
            <tr>Variant<td>{{kentekenInfo.variant}}</td></tr>
            <tr>Massa rijklaar<td>{{kentekenInfo.vermogen_massarijklaar}}</td></tr>
            <tr>Voertuigen soort<td>{{kentekenInfo.voertuigsoort}}</td></tr>
            <tr>Volgnummer wijziging eu typegoedkeuring<td>{{kentekenInfo.volgnummer_wijziging_eu_typegoedkeuring}}</td></tr>
            <tr>Wacht op keuren<td>{{kentekenInfo.wacht_op_keuren}}</td></tr>
            <tr>Wielbasis<td>{{kentekenInfo.wielbasis}}</td></tr>



        </table>
    </div>
</template>

<script>
    export default {
        props: ['kentekenInfo', 'brandstofInfo', 'kentekenImage'],
        name: 'HelloWorld',


    }
</script>

<style>
    .kentekenInfoExtra {
        text-align: left;
        margin: 16px auto 0px auto;

    }
</style>