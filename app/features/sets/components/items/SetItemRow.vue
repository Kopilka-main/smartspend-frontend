<script setup lang="ts"></script>

<template>
  <tr class="group">
    <td
      class="border-b border-border px-14 py-11 pl-24 align-middle first:pl-24 group-hover:bg-surface-2"
    >
      <div class="font-medium tracking-[-0.01em]">Крупы</div>
      <div class="mt-1 text-11 text-text-3">Гречка, рис, овсянка</div>
    </td>
    <td
      class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
    >
      <div class="flex items-center gap-5">
        <button
          type="button"
          class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
        >
          −
        </button>
        <span class="min-w-16 text-center font-secondary text-12">3</span>
        <button
          type="button"
          class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
        >
          +
        </button>
      </div>
    </td>
    <td
      class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
    >
      <input
        class="w-80 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        min="0"
        step="100"
        type="number"
        value="158"
      />
      <span
        class="mt-4 block whitespace-nowrap font-secondary text-12 text-text-2"
        >4.2 кг</span
      >
    </td>
    <td
      class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
    >
      <div class="flex items-center gap-5">
        <input
          class="w-60 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          min="0.25"
          step="0.5"
          type="number"
          value="0.08333333333333333"
        />
        <span class="font-secondary text-11 text-text-3">лет</span>
      </div>
    </td>
    <td
      class="border-b border-border px-14 py-11 pr-24 text-right align-middle group-hover:bg-surface-2 last:pr-24"
    >
      <span
        class="whitespace-nowrap font-secondary text-13 font-medium text-accent-green"
        >473 ₽</span
      >
    </td>
  </tr>
</template>