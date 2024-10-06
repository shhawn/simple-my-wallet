import style from "./list.module.css";

export default function List() {
  return (
    <div className={style.container}>
      <ul>
        <li>
          <span>2024-10-04</span>
          <h4>화장품</h4>
          <p>
            <b>+</b> 99,999원
          </p>
        </li>
      </ul>
    </div>
  );
}
