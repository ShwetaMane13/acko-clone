import React from "react";
import "../LastPolicy/policy.module.css";

export const Policyexpirirng = () => {
  let flag = 0;
  const handleClick = (e) => {
    localStorage.setItem("PolicyExpiringTime", JSON.stringify(e.target.value));
    window.location.href =
      "https://ackoclone-yashraj-m.vercel.app/car/expiry-date";
    if (flag === 1) {
      e.target.parentElement.style.border = "none";
      flag = 0;
    } else {
      flag = 1;
      e.target.parentElement.style.border = "1px solid #8C76DF";
    }
  };
  return (
    <div className="policybody">
      <div className="policyperiod">When is your policy expiring?</div>
      <div style={{ marginTop: "40px" }} className="policygrid">
        <button value="Today or Tommorow" onClick={handleClick}>
          Today or tomorrow
        </button>

        <button
          className="policybtn"
          value="Within next 7 days"
          onClick={handleClick}
        >
          Within the next 7 days
        </button>

        <button
          className="policybtn"
          value="within next 30 days"
          onClick={handleClick}
        >
          Within the next 30 days
        </button>

        <button
          className="policybtn"
          value="After one month"
          onClick={handleClick}
        >
          After 30 days
        </button>
      </div>
      <div className="policyflexdiv">
        <svg width="42" height="32" viewBox="0 0 42 32" fill="none">
          <path
            d="M36.143 16.348l-6.46-4.35c-1.417-.956-5.075-2.043-6.756-2.274l-4.713-.363c-3.164.066-6.328 1.319-8.503 3.626l-4.78 5.47c1.748 3.461 4.516 5.867 8.24 7.877v4.549h13.052v-11.7l5.965 3.823 3.955-6.658z"
            fill="#C8D0DB"
          ></path>
          <path
            d="M12.117 11.075s2.307.198 1.582 9.097l.725.56s1.285-7.613-1.384-10.151c0 0-.231-.264-.627-.132-.395.165-.296.626-.296.626z"
            fill="#fff"
          ></path>
          <path
            d="M4.932 18.457s1.944.857 3.691 4.087l1.417-.1c1.846-.164 3.23-1.284 3.46-2.141.034-.066.1-.132.166-.132h.23c.297 0 .528.264.495.56l-.1 1.22 1.715-.1c.395-.032.692.33.593.726l-.593 2.34a1.695 1.695 0 01-1.385 1.252l-1.45.198c-2.999 1.087-7.613 2.702-8.536 2.67-1.45-.066-4.383-1.681-3.69-5.076.395-1.846 3.987-5.504 3.987-5.504z"
            fill="#FF92AC"
          ></path>
          <path
            d="M8.623 22.544l-3.592.296s3.922.198 6.69-.758c1.384-.461 1.813-1.78 1.813-1.78s-.626 1.88-4.91 2.242z"
            fill="#fff"
          ></path>
          <path
            d="M16.895 5.043s-.131-.264-.46-.23c-.297.032-.33.56-.166.922.165.363.528.923.989.56.461-.362-.363-1.252-.363-1.252z"
            fill="#FF92AC"
          ></path>
          <path
            d="M18.18 9.757l.067-1.912s-1.615-.79-1.417-3.823c.263-4.383 5.24-2.966 5.438-.824.197 2.143-.1 3.856-1.22 4.647l.165 2.077c-.099 2.142-3.131 1.977-3.032-.165z"
            fill="#FF92AC"
          ></path>
          <path
            d="M22.202 5.043s.131-.264.461-.23c.297.032.33.56.165.922-.165.363-.527.923-.989.56-.461-.362.363-1.252.363-1.252z"
            fill="#FF92AC"
          ></path>
          <path
            d="M26.223 19.182l-.66-.428v12.128h.66v-11.7z"
            fill="#8A99A9"
          ></path>
          <path
            d="M16.797 3.626s-.264.033-.33.264c-.066.23.033.33.033.33s-.363.065-.165.658c0 0 .264-.164.593.165.33.33.264 1.022.264 1.022h.099s-.198-1.12.033-2.044l-.527-.395z"
            fill="#030047"
          ></path>
          <path
            d="M22.3 3.626l.132-.79S20.85 1.45 19.5 1.45c-1.351 0-2.867 1.45-2.867 1.45l.165.725H22.3z"
            fill="#C8D0DB"
          ></path>
          <path
            d="M21.814 3.995s.494.824.264 1.911h.098l.132-.989s.133-.118.341-.105c0 0 .12-.092.088-.356-.033-.23-.264-.264-.264-.264s.026-.466-.171-.565l-.488.368zM16.698 3.132s3.192-1.126 5.664.127l-.061.367h-5.504l-.1-.494z"
            fill="#030047"
          ></path>
          <path
            d="M16.797 3.626s.098.66 2.768.66 2.738-.66 2.738-.66-2.705-.956-5.506 0z"
            fill="#E4EAF1"
          ></path>
          <path
            d="M22.366 3.23s.231-.065.363-.362c.23-.626-1.318-1.944-3.197-1.944-2.472 0-3.526 1.615-3.13 2.076.131.165.296.099.296.099s2.24-1.45 2.834-1.45c.593.033 1.648.758 2.834 1.582z"
            fill="#E4EAF1"
          ></path>
          <path
            d="M19.598 3.066a.396.396 0 100-.79.396.396 0 000 .79z"
            fill="#FFDA12"
          ></path>
          <path
            d="M18.873 6.89s.89.164 1.648-.297c0 0-.165.692-.824.692-.56 0-.824-.396-.824-.396z"
            fill="#030047"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.865 6.241l-.16-.864.05-.009.17.916-.521.07-.007-.05.468-.063z"
            fill="#030047"
          ></path>
          <path
            d="M20.62 5.571a.198.198 0 100-.395.198.198 0 000 .395zM18.642 5.604a.198.198 0 100-.396.198.198 0 000 .396zM20.488 4.615s.527.263.692.198c.198-.1-.363-.528-.626-.495-.264.033-.1.264-.066.297zM18.906 4.615s-.527.263-.692.198c-.198-.1.362-.528.626-.495.264.033.132.264.066.297z"
            fill="#030047"
          ></path>
          <path
            d="M18.214 8.768s-.857-.1-1.45.692c0 0-1.187 1.483.89 3.361l.725-1.417h1.186c-.033.033-1.549-.099-1.351-2.636zM21.114 8.735s.692-.264 1.615.989c0 0 .66 1.384-.923 3.394l-.857-1.582-1.22-.066c-.032-.032 1.55-.296 1.385-2.735z"
            fill="#E4EAF1"
          ></path>
          <path
            d="M19.532 11.438v19.444"
            stroke="#E4EAF1"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M21.015 18.227l1.516 1.581 1.648-1.515-3.164-.066z"
            fill="#E4EAF1"
          ></path>
          <path
            d="M18.445 15.887H15.94v.988h2.505v-.988z"
            fill="#151619"
          ></path>
          <path
            d="M24.443 10.217l.197-.395c.034-.066.1-.099.165-.066l2.34.66c.066.032.1.065.1.131l-.067.494M14.358 10.317l-.198-.395c-.033-.066-.099-.1-.165-.066l-2.076.824a.181.181 0 00-.099.164l.099.56"
            stroke="#C8D0DB"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M38.417 31.245l-8.668-1.153c-.527-.066-.89-.56-.824-1.088l1.648-12.128c.066-.528.56-.89 1.087-.824l8.668 1.153c.528.066.89.56.824 1.088L39.504 30.42c-.066.527-.56.89-1.087.824z"
            fill="#9364ED"
          ></path>
          <path
            d="M33.836 16.315s.099.593.593.956 2.406.692 2.67.494c.263-.197.395-.988.395-.988l.89.131s.264-1.549-.593-1.878c-.857-.33-3.527-1.154-3.955 1.285z"
            fill="#FF92AC"
          ></path>
          <path
            d="M35.121 25.18a2.735 2.735 0 100-5.47 2.735 2.735 0 000 5.47z"
            fill="#5BDB89"
          ></path>
          <path
            d="M34.627 23.401l-.857-1.186.494-.363.527.758 1.418-1.021.362.461-1.944 1.351z"
            fill="#fff"
          ></path>
          <path
            d="M36.835 27.982l-4.383-.594c-.231-.033-.396-.23-.363-.494.033-.23.23-.395.494-.362l4.384.593c.23.033.395.23.362.494-.033.198-.264.363-.494.363z"
            fill="#A892F7"
          ></path>
        </svg>
        <p>
          Great that you didn???t let your policy expire. Avoid hefty fines by
          staying insured always.
        </p>
      </div>
    </div>
  );
};
