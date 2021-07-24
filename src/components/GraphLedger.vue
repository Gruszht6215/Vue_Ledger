<script>
import { Bar, mixins } from "vue-chartjs";
import LedgerItemStore from "@/store/LedgerItems";

export default {
  extends: Bar,
  // mixins: [mixins.reactiveData],
  data: () => ({
    income: 0,
    cost: 0,
    chartdata: {
      labels: [
        // "January",
        // "February",
        // "March",
        // "April",
        // "May",
        // "June",
        // "July",
        // "August",
        // "September",
        // "October",
        // "November",
        // "December",too lazyyyyyyyyyyyyyyyyy for this part
      ],
      datasets: [
        {
          label: "Income",
          backgroundColor: "#1ED760",
          data: [LedgerItemStore.getters.incomeAmount],
        },
        {
          label: "costs",
          backgroundColor: "#f87979",
          data: [LedgerItemStore.getters.costsAmount],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),
  created() {
    this.fetchItem();
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
  methods: {
    fetchItem() {
      LedgerItemStore.dispatch("fetchItem");
      // this.chartdata.labels = LedgerItemStore.getters.list;too lazyyyyyyyyyyyyyyyyy for this part
    },
  },
};
</script>