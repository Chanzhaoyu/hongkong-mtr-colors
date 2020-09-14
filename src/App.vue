<template>
  <div class="container">
    <header>
      <h1>Hong Kong MTR station colors</h1>
      <div class="current-color" v-if="currentColor">
        Clipboard color:
        <span :style="{backgroundColor: currentColor}">{{currentColor}}</span>
      </div>
      <span>
        😊
        <a :href="gitPath" target="_blank">Redon</a>
      </span>
    </header>
    <div class="colors">
      <div
        class="card"
        v-for="(item,index) of colors"
        :key="index"
        :class="item.type === 'light' && 'light'"
        @click="copyColor(item.value)"
      >
        <div class="card-body" :style="{backgroundColor: item.value}">
          <h3 class="name">{{item.name || '名稱'}}</h3>
          <p class="name-en">{{item.name_en}}</p>
          <span class="copy">COPY</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { colors } from '@/data/colors'
export default {
  name: 'App',
  components: {},
  data () {
    return {
      colors,
      currentColor: '',
      gitPath: 'https://github.com/Chanzhaoyu/hongkong-mtr-colors'
    }
  },
  methods: {
    copyColor (color) {
      if (document.execCommand('copy')) {
        const input = document.createElement('input')
        input.setAttribute('readonly', 'readonly')
        input.setAttribute('value', color)
        document.body.appendChild(input)
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
        this.currentColor = color
      }
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/main.scss";
</style>
