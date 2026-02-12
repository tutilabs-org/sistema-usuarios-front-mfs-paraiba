<template>
  <div>
    {{ this.$auth.user }}
  </div>
</template>

<script>
export default {
  name: "UsersIndexPage",
  middleware: ["authenticated", "admin"],
};
</script>
