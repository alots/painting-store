<template>
  <div class="main-footer">
    <div class="main-footer-block">
      <div class="main-footer__left">
        <img class="main-footer-logo" :src="'/img/main-logo.png'" />
        <ul class="main-footer-menu__items">
          <li
            class="main-footer-menu__items-product"
            v-for="item in items"
            :key="item.id"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="main-footer__right">
        <div class="main-footer-contacts">
          <img class="main-footer-contacts__logo" :src="'/img/phone.png'" />
          <p>+7 (495) 555-55-55</p>
        </div>
        <div class="main-footer-adress">
          <img class="main-footer-contacts__logo" :src="'/img/adress.png'" />
          <p>г. Москва, ул. Расплетина, 24</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { menuItems } from "../lib/helpers/menuItems";

export default {
  name: "MainFooter",
  data() {
    return {
      items: menuItems
    };
  }
};
</script>

<style scoped>
.main-footer {
  grid-area: mf;
  display: grid;
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows: 100px;
  grid-template-areas: ". mf-block .";

  background: #eceaea;
}

.main-footer-block {
  grid-area: mf-block;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.main-footer-logo {
  max-width: 48px;
  max-height: 48px;
}

.main-footer-contacts__logo {
  max-width: 14px;
  max-height: 14px;
}

.main-footer__left {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.main-footer__right {
  display: flex;
  flex-direction: row;
  width: fit-content;
}

.main-footer-contacts,
.main-footer-adress {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: max-content;
  padding-left: 50px;
}

p {
  display: flex;
  align-items: center;
  padding-left: 5px;

  white-space: nowrap;
  font-size: 14px;
  line-height: 21px;
  font-style: normal;
  font-weight: 400;
}

.main-footer-adress {
  display: flex;
  flex-direction: row;
}

.main-footer-menu__items {
  display: flex;
  flex-direction: row;
}

.main-footer-menu__items-product {
  display: flex;
  align-items: center;
  padding-left: 48px;
  width: fit-content;

  list-style-type: none;
}
</style>
