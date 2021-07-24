<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Price</th>
          <th>Type</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" v-bind:key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.date }}</td>
        </tr>
      </tbody>
    </table>
    {{ updateAmount() }}
    <h1>Income Amount: {{ incomeAmount }}</h1>
    <h1>Costs Amount: {{ costsAmount }}</h1>
  </div>
</template>

<script>
import LedgerItemStore from "@/store/LedgerItems";
import GraphLedger from "@/components/GraphLedger";

export default {
  components: { GraphLedger },
  data() {
    return {
      items: [],
      incomeAmount: 0,
      costsAmount: 0,
    };
  },
  created() {
    this.fetchItem();
  },
  methods: {
    fetchItem() {
      LedgerItemStore.dispatch("fetchItem");
      this.items = LedgerItemStore.getters.items;
      this.incomeAmount = LedgerItemStore.getters.incomeAmount;
      this.costsAmount = LedgerItemStore.getters.costsAmount;
    },
    updateAmount() {
      let currentIncome = LedgerItemStore.getters.incomeAmount;
      let currentCosts = LedgerItemStore.getters.costsAmount;
      this.incomeAmount = currentIncome;
      this.costsAmount = currentCosts;
    },
  },
};
</script>

<style>
</style>