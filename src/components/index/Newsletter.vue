<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

const name = ref("");
const email = ref("");

const alert = ref<boolean>(false);
const alertType = ref<"success" | "error">("success");
const alertTitleError = "Błąd!";
const alertTextError =
  "Wystąpił błąd podczas zapisywania do listy mailingowej. Spróbuj ponownie później.";
const alertTitleSuccess = "Gratulacje!";
const alertTextSuccess =
  "Dziękujemy za zapisanie się do naszej listy mailingowej!";
const alertSuccess = () => {
  alert.value = true;
  alertType.value = "success";
  setTimeout(() => {
    alert.value = false;
  }, 10000);
};
const alertError = () => {
  alert.value = true;
  alertType.value = "error";
  setTimeout(() => {
    alert.value = false;
  }, 10000);
};

const nameRules = (v: string) => {
  if (!v) return "To pole jest wymagane";
  return true;
};
const emailRules = (v: string) => {
  if (!v) return "To pole jest wymagane";
  if (!/.+@.+\..+/.test(v)) return "E-mail musi być poprawny";
  return true;
};

const submit = async () => {
  if (nameRules(name.value) !== true || emailRules(email.value) !== true) {
    return;
  }
  try {
    const formData = new FormData();
    formData.append("subscribers_list_hash", "og29u738k0");
    formData.append("freshmail_custom_field[imie_i_nazwisko]", name.value);
    formData.append("freshmail_email", email.value);

    const response = await axios.post(
      "https://app.freshmail.com/pl/actions/subscribe/",
      formData
    );

    if (response.status === 200) {
      alertSuccess();
      name.value = "";
      email.value = "";
    } else {
      alertError();
    }
  } catch (error) {
    alertError();
  }
};
</script>
<template>
  <v-alert
    :title="alertType === 'success' ? alertTitleSuccess : alertTitleError"
    :text="alertType === 'success' ? alertTextSuccess : alertTextError"
    :type="alertType"
    class="fixed-alert"
    v-model="alert"
    closable
  ></v-alert>
  <div
    class="bg-secondary-darken d-flex align-center justify-center text-center pa-10"
  >
    <v-card variant="text" max-width="800">
      <h1>Bądź na bieżąco z wydarzeniami i spotkaniami Kooperatywy</h1>
      <p class="text-h5 mb-5">Zapisz się do naszej listy mailingowej</p>
      <v-form @submit.prevent>
        <v-text-field
          label="Imię i nazwisko"
          v-model="name"
          :rules="[nameRules]"
          variant="solo"
          required
        ></v-text-field>
        <v-text-field
          label="E-mail"
          type="email"
          v-model="email"
          :rules="[emailRules]"
          variant="solo"
          required
        ></v-text-field>
        <v-btn class="bg-secondary" size="x-large" type="submit" @click="submit"
          >Zapisz się</v-btn
        >
      </v-form>
    </v-card>
  </div>
</template>
<style scoped>
.fixed-alert {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1200px;
  margin: auto;
  z-index: 2000;
  margin-top: 10px;
}
</style>
