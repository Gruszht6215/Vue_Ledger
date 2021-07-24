<template>
  <div>
    Add List
    <div>
      <div>
        <label for="name">Item Name</label>
        <input type="text" v-model="form.name" />
      </div>

      <div>
        <label for="price">Price</label>
        <input type="number" v-model="form.price" />
      </div>

      <div class="type-from">
        <label for="type">Type</label>
        <select v-model="form.type">
          <option disabled value="">Please select one</option>
          <option>income</option>
          <option>costs</option>
        </select>
        <span>Selected: {{ form.type }}</span>
      </div>

      <div>
        <label for="date">Type</label>
        <input type="date" v-model="form.date" />
      </div>

      <div>
        <button @click="addItem">Add</button>
      </div>

    </div>
  </div>
</template>

<script>
import LedgerItemStore from "@/store/LedgerItems";

export default {
  data() {
    return {
      form: {
        item: "",
        price: "",
        type: "",
        date: "",
      },
    };
  },
  created() {
    this.fetchItem();
  },
  methods: {
    fetchItem() {
      LedgerItemStore.dispatch("fetchItem");
    },
    clearForm() {
      this.form = {
        item: "",
        price: "",
        type: "",
        date: "",
      };
    },
    addItem() {
      let payload = {
        name: this.form.name,
        price: this.form.price,
        type: this.form.type,
        date: this.form.date,
      };
      LedgerItemStore.dispatch("addItem", payload);
      this.clearForm();
    },
  },
};
</script>

<style>
.type-form {
  display: flex;
  flex-direction: row;
}
</style>

