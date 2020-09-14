<template>
  <div class="container">
    <header>
      <h1>Hong Kong MTR station colors</h1>
      <div class="current-color" v-if="currentColor">
        Clipboard color:
        <span :style="{backgroundColor: currentColor}">{{currentColor}}</span>
      </div>
      <span>
        😊 Create By
        <a
          href="https://github.com/Chanzhaoyu/hongkong_mtr_colours"
          target="_blank"
        >Redon</a>
      </span>
      <span class="min">
        😊
        <a href="https://github.com/Chanzhaoyu/hongkong_mtr_colours" target="_blank">Redon</a>
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
      currentColor: ''
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
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #374046;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  background-color: #3e464c;

  h1 {
    font-size: 22px;
  }

  .current-color {
    span {
      margin-left: 5px;
      border-radius: 4px;
      padding: 0 5px;
    }
  }

  .min {
    display: none;
  }
}

.colors {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1px;
  overflow-x: hidden;
  overflow-y: auto;
}

.card {
  color: #0a2051;

  .card-body {
    text-align: center;
    padding: 30px 0 50px;
    transition: all ease 0.3s;
    cursor: pointer;
    position: relative;

    .name {
      font: normal bold 22px Simsun;
    }

    .copy {
      position: absolute;
      left: 50%;
      bottom: 10px;
      border-radius: 4px;
      padding: 2px 10px;
      border: 1px solid;
      font-size: 14px;
      opacity: 0;
      transform: scale(0.5);
      margin-left: -28px;
      transition: 0.2s;
    }

    &:hover {
      .copy {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  &.light {
    color: #fff;
  }
}

@media screen and (max-width: 750px) {
  header {
    padding: 0 10px;

    h1 {
      font-size: 16px;
    }

    .current-color,
    & > span {
      display: none;
    }

    .min {
      display: block;
    }
  }
}
</style>
