import List from "@/components/list";
import style from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.currentCost}>
        <h1>999,999원</h1>
      </div>
      <div className={style.inputWrapper}>
        <div className={style.calculateWrapper}>
          <input type="radio" id="plus" name="calculate" hidden />
          <label htmlFor="plus" className={style.plusButton}>+</label>
          <input type="radio" id="minus" name="calculate" hidden />
          <label htmlFor="minus" className={style.minusButton}>-</label>
        </div>
        <input type="text" placeholder="이름" />
        <input type="tel" placeholder="가격" />
        <button>제출</button>
      </div>
      <List />
    </div>
  );
}
