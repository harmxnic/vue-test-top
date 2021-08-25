<template>
  <div class="container">
    <form @submit.prevent class="form">
      <div class="form__inputs">
        <input
            type="text"
            class="form__input"
            placeholder="Введите название"
            :value="inputTitle"
            @input="updateTitle"
        >
        <input
            type="text"
            class="form__input"
            placeholder="Введите дату дедлайна"
            :value="inputDeadline"
            @input="updateDeadline"
        >
        <textarea
            class="form__text"
            placeholder="Введите описание"
            :value="inputText"
            @input="updateText"
        >
        </textarea>
      </div>
      <button
          class="form__submit"
          @click="updateList"
          :class="{disabled: !(inputTitle && inputText)}"
      >
        Создать ToDo
      </button>
    </form>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "TodoConfig",
  methods: {
    updateTitle(e) {
      this.$store.commit('updateTitle', e.target.value)
    },
    updateDeadline(e) {
      this.$store.commit('updateDeadline', e.target.value)
    },
    updateText(e) {
      this.$store.commit('updateText', e.target.value)
    },
    updateList() {
      this.$store.commit('updateList')
    }
  },
  computed: {
    ...mapState([
      'inputTitle',
      'inputDeadline',
      'inputText'
    ])
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>

.form {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 100px 0;
  border: 1px solid darkblue;
  border-radius: 15px;
  &__inputs {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  &__input, &__text {
    font-family: inherit
  ;
    padding: 20px;
    box-sizing: border-box;
    font-size: 1.25rem;
    border-radius: 10px;
    border: 1px solid #2c3e50;
    resize: none;
  }
  &__submit {
    background: transparent;
    border: 1px solid #2c3e50;
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
    color: #2c3e50;
    font-size: 1.1rem;
    transition: all .3s ease;
    &:hover {
      background: #2c3e50;
      color: #ffffff;
    }
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

</style>