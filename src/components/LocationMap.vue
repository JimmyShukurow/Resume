<script setup lang="ts">
import { LCircleMarker, LMap, LTileLayer, LTooltip } from '@vue-leaflet/vue-leaflet'

const TASHKENT: [number, number] = [41.2995, 69.2401]

const circleOptions = {
  color: '#F2B33D',
  fillColor: '#F2B33D',
  fillOpacity: 0.9,
  weight: 3,
}
</script>

<template>
  <div class="overflow-hidden rounded-2xl border border-line">
    <LMap
      :center="TASHKENT"
      :zoom="12"
      :use-global-leaflet="false"
      :options="{ scrollWheelZoom: false }"
      style="height: 320px; width: 100%"
      aria-label="Map showing Tashkent, Uzbekistan"
    >
      <LTileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=cb1_3rzr_1_0a69c7b2d6633a6cf31341d7"
      />
      <LCircleMarker
        :lat-lng="TASHKENT"
        :radius="9"
        :color="circleOptions.color"
        :fill-color="circleOptions.fillColor"
        :fill-opacity="circleOptions.fillOpacity"
        :weight="circleOptions.weight"
      >
        <LTooltip :options="{ direction: 'top', offset: [0, -10] }">
          Tashkent, Uzbekistan
        </LTooltip>
      </LCircleMarker>
    </LMap>
  </div>
</template>

<style>
@import 'leaflet/dist/leaflet.css';
</style>
