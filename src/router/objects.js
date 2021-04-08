import Show from "@/views/objects/Show.vue";
import Create from "@/views/objects/Create.vue";
import Edit from "@/views/objects/Edit.vue";


const routes = [
  {
    path: '/objects/create',
    name: 'objects.create',
    component: Create,
  },
  {
    path: '/objects/:id/edit',
    name: 'objects.edit',
    component: Edit,
  },
  {
    path: '/objects/:id',
    name: 'objects.show',
    component: Show,
  }
];

export default routes;
