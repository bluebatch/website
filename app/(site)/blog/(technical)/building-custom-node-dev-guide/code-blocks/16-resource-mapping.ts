const resourceMapping = {
  leads: {
    create: {
      method: "POST",
      endpoint: "/leads",
    },
    read: {
      method: "GET",
      endpoint: "/leads",
    },
    update: {
      method: "PATCH",
      endpoint: "/leads",
    },
    delete: {
      method: "DELETE",
      endpoint: "/leads",
    },
  },
  accounts: {
    create: {
      method: "POST",
      endpoint: "/accounts",
    },
    list: {
      method: "GET",
      endpoint: "/accounts",
    },
  },
  contacts: {
    create: {
      method: "POST",
      endpoint: "/contacts",
    },
  },
};
