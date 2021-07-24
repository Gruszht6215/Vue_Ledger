<template>
  <div>
    <ledger-add-form></ledger-add-form>
    <ledger-table></ledger-table>
    <graph-ledger></graph-ledger>
  </div>
</template>

<script>
// @ is an alias to /src
import LedgerTable from "@/components/LedgerTable";
import LedgerAddForm from "@/components/LedgerAddForm";
import GraphLedger from "@/components/GraphLedger";

export default {
  components: {
    LedgerTable,
    LedgerAddForm,
    GraphLedger,
  },
};
</script>
