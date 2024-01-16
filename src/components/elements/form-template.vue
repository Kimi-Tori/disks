<template>
  <form @submit.prevent class="form-template">
    <v-text-field
      label="Выше имя"
      variant="outlined"
      v-model="form.NAME"
      class="form-template__input color-white"
      maxlength="80"
      :rules="getRules('NAME')"
      hide-details="auto"
    ></v-text-field>

    <v-text-field
      label="Номер телефона"
      variant="outlined"
      v-model="form.PHONE"
      class="form-template__input color-white mt-8"
      @keydown="filterPhoneKey"
      @keyup="fixPhone"
      :maxlength="phoneMaxlength"
      :rules="getRules('PHONE')"
      hide-details="auto"
    ></v-text-field>

    <v-text-field
      label="Email"
      variant="outlined"
      class="form-template__input color-white mt-8"
      hide-details="auto"
      v-model="form.EMAIL"
      :rules="getRules('EMAIL')"
      required
    ></v-text-field>

    <v-textarea
      label="Опишите суть обращения..."
      variant="outlined"
      class="form-template__textarea color-white mt-8"
      v-model="form.MSG"
      :rules="getRules('MSG')"
      hide-details
    ></v-textarea>
    <v-btn type="submit" class="form-template__button mt-7">Отправить</v-btn>
  </form>
</template>

<script>
export default {
  name: "form-template",
  data() {
    return {
      form: {
        NAME: "",
        PHONE: "",
        EMAIL: "",
        MSG: "",
      },
      isMessageShown: false,
      message: "",
      loading: false,
      phoneMaxlength: 32,
      isFormValid: false,
      validationRules: [
        {
          field: "NAME",
          re: /^.{2,}$/,
          msg: "Пожалуйста, введите ваше имя",
        },
        {
          field: "PHONE",
          re: /^.{11,}$/,
          msg: "Пожалуйста, введите ваш номер телефона",
        },
        {
          field: "EMAIL",
          re: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          msg: "Пожалуйста, введите корректный e-mail",
        },
        {
          field: "MSG",
          re: /^.{11,}$/,
          msg: "Пожалуйста, введите ваше сообщение",
        },
      ],
    };
  },
  methods: {
    validatePhone() {
      const phoneWithoutSpaces = this.form.PHONE.replace(/\s/g, ""); // Убираем пробелы
      const isValid = /^\d{11}$/.test(phoneWithoutSpaces);
      return isValid;
    },
    getRules(fieldName) {
      const fieldRule = this.validationRules.find(
        (rule) => rule.field === fieldName
      );
      let result = null;
      if (fieldName === "PHONE") {
        result = [
          (value) =>
            fieldRule.re.test(value.replace(/\D/g, "")) || fieldRule.msg,
        ];
      } else {
        result = [(value) => fieldRule.re.test(value) || fieldRule.msg];
      }
      return result;
    },
    submit() {
      let isValid = true;
      this.validationRules.forEach((rule) => {
        if (rule.field === "PHONE") {
          if (!rule.re.test(this.form[rule.field].replace(/\D/g, ""))) {
            isValid = false;
          }
        } else {
          if (!rule.re.test(this.form[rule.field])) {
            isValid = false;
          }
        }
      });
      if (isValid) {
        const params = {
          NAME: this.form.NAME,
          EMAIL: this.form.EMAIL,
          PHONE: this.form.PHONE,
          MSG: this.form.MSG,
        };
        this.$store
          .dispatch("post", {
            action: "FeedbackTaxController",
            params: params,
          })
          .then((res) => {
            console.log("it works", res);
            this.isMessageShown = true;
            this.message =
              "Спасибо! Наш менеджер свяжется с вами в ближайшее время.";
          })
          .catch((error) => {
            console.log("ERROR: ", error);
            this.isMessageShown = true;
            this.message = "Произошла ошибка, пожалуйста, попробуйте снова.";
          })
          .finally(() => {});
      }
    },
    filterPhoneKey(e) {
      //console.log(e);
      const a = e.key;

      // ignore arrows, del, backspace
      if (
        e.keyCode === 37 ||
        e.keyCode === 39 ||
        e.keyCode === 8 ||
        e.keyCode === 46 ||
        e.keyCode === 35 ||
        e.keyCode === 36 ||
        e.keyCode === 9 ||
        (e.key === "x" && e.ctrlKey) ||
        (e.key === "c" && e.ctrlKey) ||
        (e.key === "v" && e.ctrlKey)
      )
        return true;

      if (!this.validatePhoneKey(a)) e.preventDefault();
    },
    validatePhoneKey(a) {
      if (!a.match(/[+0-9\(\) -]/)) return false;

      let l = this.form.PHONE?.length;
      //console.log("a: "+a+", l: "+l);
      if (l === 0) {
        if (!a.match(/[+0-9]/)) return false;
        if (a === "+") this.form.PHONE = "";
        else if (a !== "8") this.form.PHONE = "+";
        else if (a === "9") this.form.PHONE = "+7 (";
      } else if (l === 1) {
        if (this.form.PHONE === "+" && a === "8") this.form.PHONE = "";
      }
      return true;
    },
    fixPhone(e) {
      if (
        e &&
        (e.keyCode === 37 ||
          e.keyCode === 39 ||
          e.keyCode === 8 ||
          e.keyCode === 46 ||
          e.keyCode === 35 ||
          e.keyCode === 36)
      )
        return true;

      let s = this.form.PHONE;
      s = s.replace(/[^0-9]+/g, "");
      //console.log("s=" + s);
      //v = v.substr(1);

      this.phoneMaxlength = 32;
      if (!s.length) return "";
      const f = [];
      for (let i = 0; i < s.length; i++) {
        let l = s[i];
        //if ( i === 0 && l === "+" )
        //console.log(i + "=" + l);

        if (s[0] === "8") {
          // 8 ...
          this.phoneMaxlength = 17;
          if (i === 1) {
            f.push(" ");
            f.push("(");
          } else if (i === 4) {
            f.push(")");
            f.push(" ");
          } else if (i === 7) {
            f.push("-");
          } else if (i === 9) {
            f.push("-");
          }
          f.push(l);
        } else if (s[0] === "7") {
          // +7 ...
          this.phoneMaxlength = 18;
          if (i === 0) {
            f.push("+");
          } else if (i === 1) {
            f.push(" ");
            f.push("(");
          } else if (i === 4) {
            f.push(")");
            f.push(" ");
          } else if (i === 7) {
            f.push("-");
          } else if (i === 9) {
            f.push("-");
          }
          f.push(l);
        } else if (s[0] === "9") {
          // 9 ...
          this.phoneMaxlength = 18;
          if (i === 0) {
            f.push("+");
            f.push("7");
            f.push(" ");
            f.push("(");
          } else if (i === 4) {
            f.push(")");
            f.push(" ");
          } else if (i === 7) {
            f.push("-");
          } else if (i === 9) {
            f.push("-");
          }
          f.push(l);
        } else {
          // [0-6] ...
          this.phoneMaxlength = 24;
          if (i === 0) {
            f.push("+");
          } else if (i === 3) {
            f.push(" ");
          }
          f.push(l);
        }
      }
      const p = f.join("");
      if (p === this.form.PHONE) return;
      this.form.PHONE = p;
    },
    fillForm() {
      this.form.NAME = "TEST NAME";
      this.form.PHONE = "+7 (911) 999-99-99";
    },
  },
};
</script>

<style lang="scss">
.form-template {
  width: 395px;

  &__input {
    height: 49px;

    & .v-field {
      height: 49px;
      border-color: $white;

      &__input,
      &__field,
      &__overlay {
        height: 49px;
      }
    }
  }

  &__textarea {
    height: 116px;

    & .v-field {
      height: 116px;

      &__input,
      &__field,
      &__overlay {
        height: 116px;
      }
    }
  }

  &__button {
    width: 100%;
    border-radius: 100px;
    background-color: transparent !important;
    border: 1px solid $red;
    color: $red;
    transition: 0.2s linear;

    &:hover {
      background-color: $red !important;
      color: $white;
    }
  }
}
</style>
