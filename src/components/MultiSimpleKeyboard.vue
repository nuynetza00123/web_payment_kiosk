<template>
  <div>
    <button  @click="switchLayout()">Change language</button>
    <div class="mt-5">
      <div class="simple-keyboard"></div>
    </div>
  </div>
</template>

<script>
import thai from "simple-keyboard-layouts/build/layouts/thai";
import english from "simple-keyboard-layouts/build/layouts/english";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

export default {
  name: "SimpleKeyboard",
  data: () => ({
    keyboard: null,
    layout: english,
  }),
  mounted() {
    this.createKeyboard();
  },
  methods: {
    switchLayout() {
        if(this.keyboard.options.layout.default[0].includes("1")){
            this.keyboard.setOptions({ layout: thai });
        }
        else{
            this.keyboard.setOptions({ layout: english });
        }
    },
    createKeyboard() {
      this.keyboard = new Keyboard({
        onChange: this.onChange,
        onKeyPress: this.onKeyPress,
        layout: this.layout,
      });

      this.setKeyboardInput(this.input);
    },
    onChange(input) {
      this.$emit("onChange", input);
    },
    onKeyPress(button) {
      this.$emit("onKeyPress", button);

      if (button === "{shift}" || button === "{lock}") {
        this.handleShift();
      }
    },
    handleShift() {
      const currentLayout = this.keyboard.options.layoutName;
      const shiftToggle = currentLayout === "default" ? "shift" : "default";

      this.keyboard.setOptions({
        layoutName: shiftToggle,
      });
    },
    setKeyboardInput(input) {
      this.keyboard.setInput(input);
    },
    hideKeyboard() {
      this.$emit("closeKeyboard");
    },
  },
  watch: {
    input(input) {
      this.setKeyboardInput(input);
    },
  },
};
</script>

<style scoped>
button {
  background-color: #126496;
  border: none;
  border-radius: 4px;
  color: #fff;
  padding: 0.5em;
  cursor: pointer;
}
</style>