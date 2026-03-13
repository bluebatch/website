// Deklarativer Node verwendet Routing
const routing = {
  "user.create": {
    request: {
      method: "POST",
      url: "/users",
      body: {
        name: "={{ $parameter.name }}",
        email: "={{ $parameter.email }}",
      },
    },
  },
};