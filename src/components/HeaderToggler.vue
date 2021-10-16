<template>
  <input
    @change="themeTogglerHandler"
    type="checkbox"
    name="toggler"
    id="checkbox"
    class="checkbox"
  />
  <label for="checkbox" class="label">
    <i class="far fa-moon"></i>
    <i class="far fa-sun"></i>
    <div class="ball"><p>O</p></div>
  </label>
</template>

<script>
export default {
  methods: {
    themeTogglerHandler(e) {
      let checked = e.target.checked;
      this.$emit("themeToggler", checked);
    },
  },
};
</script>

<style scoped>
.label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 26px;
  width: 50px;
  background-color: #001;
  border: 1px solid lightseagreen;
  border-radius: 50px;
  padding: 5px;
  position: relative;
  transform: scale(1.2);
}

.fa-moon {
  color: #f1c40f;
  font-size: 16px;
}

.fa-sun {
  color: #f39c12;
  font-size: 16px;
}

.ball {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 2px;
  background-color: #222;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  /* border: 1px solid lightpink; */
  transition: transform 200ms linear;
  padding-top: 1px;
}

.ball p {
  font-family: "Monoton";
  color: var(--accent-color-secondary);
  font-size: 22px;
  line-height: 22px;
}

.checkbox {
  display: none;
}

.checkbox:checked + .label .ball {
  transform: translateX(24px);
}
</style>