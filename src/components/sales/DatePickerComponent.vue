<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="computedDateFormatted"
          label="Picker in menu"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
      </v-date-picker>
    </v-menu>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    dateFormatted: "",
    menu: false,
    modal: false,
    menu2: false,
  }),
  watch: {
    date(value) {
      this.dateFormatted = this.formatDate(this.date);
      console.log(this.dateFormatted);
      this.setSaleFormField({
        part: "saleDate",
        value: this.dateFormatted,
      });
      return value;
    },
  },
  methods: {
    ...mapActions({
      validateFields: "paymentMethodStore/validateFields",
      setSaleFormField: "salesStore/setSaleFormField",
    }),
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
  computed: {
    computedDateFormatted: {
      get() {
        return this.formatDate(this.date);
      },
    },
  },
  created() {
    this.date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10);
    this.dateFormatted = this.formatDate(
      new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10)
    );
  },
};
</script>
<style></style>
