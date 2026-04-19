<script setup lang="ts">
import AppModal from '~/components/layout/AppModal.vue'

// const PLATE_ICONS = {
//   income: (
//     <text
//       y="7"
//       fill="#0E0E0C"
//       fontFamily="Arial"
//       fontSize="18"
//       fontWeight="bold"
//     >
//       ₽
//     </text>
//   ),
//   housing: (
//     <path
//       d="M-9 2 L-9 10 L-3 10 L-3 4 L3 4 L3 10 L9 10 L9 2 L0 -6 Z"
//       stroke="#0E0E0C"
//       strokeWidth="2.5"
//       fill="none"
//       strokeLinejoin="round"
//       transform="translate(0,-1)"
//     />
//   ),
//   credit: (
//     <>
//       <rect
//         x="-11"
//         y="-7"
//         width="22"
//         height="14"
//         rx="3"
//         stroke="#0E0E0C"
//         strokeWidth="2"
//         fill="none"
//       />
//       <line x1="-11" y1="-1" x2="11" y2="-1" stroke="#0E0E0C" strokeWidth="2" />
//     </>
//   ),
//   creditMonths: (
//     <>
//       <circle
//         cx="0"
//         cy="0"
//         r="10"
//         stroke="#0E0E0C"
//         strokeWidth="2"
//         fill="none"
//       />
//       <path
//         d="M0 -6 L0 0 L4 3"
//         stroke="#0E0E0C"
//         strokeWidth="2"
//         strokeLinecap="round"
//         fill="none"
//       />
//     </>
//   ),
//   capital: (
//     <path
//       d="M-10 -2 L-5 -8 L5 -8 L10 -2 L0 8 Z"
//       stroke="#0E0E0C"
//       strokeWidth="2"
//       fill="none"
//       strokeLinejoin="round"
//     />
//   )
// }

const progress = computed(() => {
  return 0
})

const isDone = computed(() => {
  return false
})

const currentPlateIcon = computed(() => {
  return null //PLATE_ICONS[plateIconId]
})

const onClose = () => {}
</script>

<template>
  <AppModal>
    <div class="quiz-modal fin-modal-v2">
      <div
        class="quiz-progress-bar"
        :style="{ width: isDone ? '100%' : `${progress}%` }"
      />

      <button class="fin-modal-close" @click="onClose">✕</button>

      <div class="fin-v2-layout">
        <div class="fin-v2-cube-col">
          <div class="cw">
            <svg width="260" height="260" viewBox="0 0 260 260" fill="none">
              <defs>
                <clipPath id="portalClip">
                  <path
                    d="M-100 -100 H360 V175 H175 A 45 7 0 0 1 85 175 H-100 Z"
                  />
                </clipPath>
                <mask id="outsideMask">
                  <rect width="260" height="260" fill="white" />
                  <rect
                    x="90"
                    y="90"
                    width="80"
                    height="80"
                    rx="18"
                    fill="black"
                  />
                </mask>
              </defs>

              <ellipse id="portal-ellipse" cx="130" cy="175" rx="45" ry="7" />

              <g id="masked-content">
                <g id="cube-group">
                  <rect
                    id="main-rect"
                    x="90"
                    y="90"
                    width="80"
                    height="80"
                    rx="18"
                    @click="onCubeClick"
                  />
                  <g id="cube-inner" :style="{ pointerEvents: 'none' }">
                    <rect
                      id="cube-inner-bg"
                      x="104"
                      y="104"
                      width="52"
                      height="52"
                      rx="10"
                      fill="#EEEDE9"
                    />
                    <path
                      class="check-path"
                      d="M115 132 L124 141 L146 119"
                      stroke="#0E0E0C"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <g id="disgruntled-face">
                      <rect
                        x="115"
                        y="125"
                        width="8"
                        height="3"
                        rx="1.5"
                        fill="#0E0E0C"
                      />
                      <rect
                        x="137"
                        y="125"
                        width="8"
                        height="3"
                        rx="1.5"
                        fill="#0E0E0C"
                      />
                      <path
                        d="M120 140 Q124 137 128 140 Q132 143 136 140 Q139 138 140 140"
                        stroke="#0E0E0C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </g>
                  </g>
                </g>
              </g>

              <g id="plate" mask="url(#outsideMask)">
                <rect
                  x="178"
                  y="90"
                  width="4"
                  height="42"
                  rx="2"
                  fill="#0E0E0C"
                />
                <rect
                  x="158"
                  y="56"
                  width="44"
                  height="34"
                  rx="6"
                  fill="#0E0E0C"
                />
                <rect
                  x="161"
                  y="59"
                  width="38"
                  height="28"
                  rx="4"
                  fill="#EEEDE9"
                />
                <g transform="translate(180, 73)" textAnchor="middle">
                  {{ currentPlateIcon }}
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </AppModal>
</template>
