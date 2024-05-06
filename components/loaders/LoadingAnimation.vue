<template>
    <div class="loader-layout">
        <div class="loaderWrapper">
            <div class="loaderInner">
                <div class=loader>
                <span class=letter>H</span>
                <span class=letter>E</span>
                <span class=letter>L</span>
                <span class=letter>L</span>
                <div class=letterO></div>
                </div>
                <div class="welcome">Guten Tag </div>
                <div class="welcome">こんにちは </div>
                <div class="welcome">Goddag </div>
                <div class="welcome">Vanakkam </div>
                <div v-if="store.name == ''" class="welcome">Bonjour <span>👋</span></div>
                <div v-else class="welcome">{{store.name}} <span>👋</span></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useUtilsStore } from "~~/store/utils";
const store = useUtilsStore();
</script>
<style lang="scss" scoped>
.loader-layout{
    position: fixed;
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    background: var(--tp-theme-blue);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    z-index: 999;
}

.loaderWrapper {
  height: 90px;
  overflow: hidden;
 
}

.loaderInner {
  position: relative;
  animation-name: languageSwitch;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-delay: 1.4s;
  display: flex;
  align-items:center;
  flex-direction:column;
}

.loader {
  display: flex;
  align-items: baseline;
  width: auto;
  width: 190px;
  height:90px;
}

.letter {
  display: inline-block;
  font-family: sans-serif;
  font-size: 52px;
  font-weight: 900;
  color: white;
  animation-name: letterAppears;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  width: 1px;
  visibility: hidden;
  animation-delay: .5s;
}

.letterO {
  background-color: white;
  height: 40px;
  border-radius: 20px;
  box-sizing: border-box;
  animation-name: loader;
  animation-duration: .5s;
  animation-fill-mode: forwards;
  border: 10px solid white;
}
.welcome {
  font-family: sans-serif;
  font-size: 52px;
  font-weight: 900;
  color: white;
  height: 90px;
  display: flex;
  align-items: center;
  & span {
    animation: wize 1s ease-in-out 1s forwards infinite alternate;
  }
}

/* animation keyframes */

@keyframes loader {
  0% {
    width: 1px;
  }
  60% {
    background-color: white;
    width: 100%;
  }
  90% {
    background-color: var(--tp-theme-blue);;
  }
  100% {
    background-color: var(--tp-theme-blue);;
    width: 100%;
  }
}

@keyframes letterAppears {
  0% {
    width: 1px;
    transform: rotate(15deg);
  }
  100% {
    width: 100%;
    transform: rotate(0);
    visibility: visible;
  }
}

@keyframes languageSwitch {
  0% {
    bottom: 0;
  }
  15% {
    bottom: 0;
  }
  20% {
    bottom: 90px;
  }
  35% {
    bottom: 90px;
  }
  40% {
    bottom: 180px;
  }
  55% {
    bottom: 180px;
  }
  60% {
    bottom: 270px;
  }
  75% {
    bottom: 270px;
  }
  80% {
    bottom: 360px;
  }
  95% {
    bottom: 360px;
  }
  100% {
    bottom: 450px;
  }
}
</style>