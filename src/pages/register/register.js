import "@/pages/register/register.css";
import { gsap } from "gsap";
import pb from "../../api/pocketbase";

console.log("register");

function render() {
  const tag = ` 
     <div class="container">
        <h2>회원가입</h2>
        <div class="line">
          <div></div>
        </div>
        <div class="wrapper">
          <div class="step-1">
            <h3>
              로그인에 사용할 <br />
              아이디를 입력해주세요.
            </h3>
            <label for="idField"></label>
            <input type="email" id="idField" placeholder="아이디(이메일)입력"/>
            <button disabled type="button" class="next-1">다음</button>
          </div>
          <div class="step-2">
            <h3>
              로그인에 사용할 <br />
              비밀번호를 입력해주세요.
            </h3>
            <label for="pwField"></label>
            <input type="password" id="pwField" placeholder="비밀번호 입력"/>
            <button disabled type="button" class="next-2">회원가입</button>
          </div>
        </div>
      </div>
  `;
  document.body.insertAdjacentHTML("beforeend", tag);
}

function register() {
  const idField = document.querySelector("#idField");
  const pwField = document.querySelector("#pwField");
  const next1 = document.querySelector(".next-1");
  const next2 = document.querySelector(".next-2");

  function handleValidation(e) {
    const target = e.currentTarget;

    if (target.value.length > 5) {
      target.nextElementSibling.disabled = false;
    } else {
      target.nextElementSibling.disabled = true;
    }
  }

  function handleNext() {
    gsap.to(".wrapper", { x: -460, ease: "power2.inOut" });
    gsap.to(".line > div", { width: "70%" });
  }

  function handleRegister() {
    pb.collection("users")
      .create({
        email: idField.value,
        password: pwField.value,
        passwordConfirm: pwField.value,
      })
      .then(() => {
        alert("회원가입 성공!");
      })
      .catch(() => {
        alert("회원가입 실패!");
      });
  }

  idField.addEventListener("input", handleValidation);
  pwField.addEventListener("input", handleValidation);

  next1.addEventListener("click", handleNext);
  next2.addEventListener("click", handleRegister);
}

render();
register();
