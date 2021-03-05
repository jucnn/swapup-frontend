import Index from "@/views/objects/Index.vue";
import Show from "@/views/objects/Show.vue";

const routes = [
  {
    path: "/objects",
    name: "objects.index",
    component: Index,
  },
  {
    path: "/objects/:id",
    name: "objects.show",
    component: Show,
  },
];

export default routes;
