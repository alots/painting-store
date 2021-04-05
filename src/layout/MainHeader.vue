<template>
  <div class="main__header">
    <div class="header__block">
      <div class="main-header__left">
        <img class="main-header-logo" :src="'/img/main-logo.png'" />
        <ul class="main-header__menu">
          <li class="main-header__menu-items">
            <router-link :to="{name: 'Home'}">Каталог</router-link>
          </li>
          <li class="main-header__menu-items">
            <router-link :to="{name: 'Contacts'}">Контакты</router-link>
          </li>
        </ul>
      </div>
      <div class="main-header__right">
        <input
          class="main-header__input-search"
          placeholder=" Поиск по названию картины"
        />
        <button class="main-header__button-search">Найти</button>
      </div>
    </div>
  </div>
</template>

<script>
import { menuItems } from "../lib/helpers/menuItems";

export default {
  name: "MainHeader",
  data() {
    return {
      items: menuItems
    };
  },
  created() {
    console.log(this.menuItems);
  }
};
</script>

<style lang="scss">
$color-text:rgba(52, 48, 48, 1);

.main__header {
  grid-area: mh;
  display: grid;
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows: 100px;
  grid-template-areas: ". mh-block .";
  border-bottom: 1px solid #e1e1e1;
}

.header__block {
  grid-area: mh-block;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.main-header__left {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.main-header-logo {
  width: 48px;
  height: 48px;
  padding: 24px 0;
}

.main-header__right {
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 48px;
  max-width: 416px;

  border: 1px solid #e1e1e1;
  box-sizing: border-box;
}

.main-header__menu {
  display: flex;
  flex-direction: row;
}

.main-header__menu-items {
  display: flex;
  align-items: center;
  padding-left: 48px;
  width: fit-content;

  list-style-type: none;

  & a {
    display: flex;
    align-items: center;
    text-decoration: none;

    color: $color-text;
  }

  & a:hover {
    opacity: 0.3;
  }
}

.main-header__input-search {
  max-width: 294px;
  max-height: 48px;

  border-style: none;
}

.main-header__right:active {
  border: 1px solid #b5b5b5;
  box-sizing: border-box;
}

.main-header__button-search {
  max-width: 122px;
  max-height: 48px;

  color: white;
  border-style: none;
  background-color: rgba(64, 52, 50, 1);
  font-size: 14px;
  line-height: 21px;
  font-style: normal;
  font-weight: 700;
}
</style>
