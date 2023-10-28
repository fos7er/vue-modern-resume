<i18n>
{
  "en": {
    "Choose": "Choose"
  },
  "ru": {
    "Choose": "Выбрать"
  }
}
</i18n>

<template>
  <div>
    <slot name="label">
      <div v-if="props.label" class="inline-block text-sm font-medium mb-3">{{ props.label }}</div>
    </slot>
    <div
      :tabindex="0"
      class="app-select disable-select"
      @blur="showItems = false"
    >
      <div
        :class="{ 'app-select__selected_open': showItems }"
        class="app-select__selected pointer"
        @click="showItems = !showItems"
      >
        {{ label }}
        <span
          v-if="modelValue && clearable"
          class="i-mdi-remove"
          @click.stop="handleRemoveClick"
        />
      </div>
      <div
        v-if="showItems"
        class="app-select__items custom-scroll"
      >
        <div
          v-for="(option, i) of options"
          v-show="!option.hidden"
          :key="i"
          @click="handleClick(option)"
        >
          <div
            v-if="option.disabled"
            class="d-flex align-items-center app-select__item app-select__item_disabled"
          >
            <span class="mr10">{{ option.label }}</span>
          </div>
          <div
            v-else
            class="app-select__item app-select__item_active pointer"
          >
            <span>{{ option.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { t } = useI18n()

  const props = defineProps({
    modelValue: {
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    label: {
      type: String,
      default: ''
    }
  })

  const emit = defineEmits(['update:modelValue', 'change'])

  let showItems = ref(false)
  const label = computed(() => {
    if (!props.modelValue) return props.placeholder || t('Choose')
    return props.options.find(option => option.value === props.modelValue).label
  })

  const handleClick = (option) => {
    if (option.disabled) return
    showItems.value = false
    emit('change', option.value)
    emit('update:modelValue', option.value)
  }

  const handleRemoveClick = () => emit('update:modelValue', null)
</script>

<style lang="postcss" scoped>

  .app-select {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
    line-height: 45px;
    font-size: 14px;
    border-radius: 10px;
    background-color: theme('colors.header');
    color: #fff;

    &__selected {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 45px;
      border-radius: 5px;
      border: 1px solid transparent;
      padding: 0 1em;
      transition: unset;

      &_open {
        border-radius: 5px 5px 0 0;
        border: 1px solid theme('colors.primary');
      }
    }

    &__items {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 999;
      max-height: 350px;
      overflow-y: auto;
      background-color: theme('colors.zinc.600');
      border-radius: 0 0 5px 5px;
      border-right: 1px solid theme('colors.primary');
      border-left: 1px solid theme('colors.primary');
      border-bottom: 1px solid theme('colors.primary');
      box-shadow: 0 20px 40px 0 rgba(92, 92, 92, 0.2);
    }

    &__item {
      padding-left: 1em;

      &_active {
        &:hover {
          background-color: theme('colors.primary/80');
        }
      }

      &_disabled {
        color: #eee;
        pointer-events: none;
      }
    }
  }
</style>
