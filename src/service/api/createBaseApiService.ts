import service from '@/service/index'

const requiresAuth = false

const CreateBaseApiService = (resource: string) => {
  return {
    // Get a list of resources
    list: () => service({ requiresAuth }).get(`${resource}`),
    // Get a single resource by its id
    get: (id: string) => service({ requiresAuth }).get(`${resource}/${id}`),
    // Create a new resource
    create: (payload: any) => service({ requiresAuth }).post(`${resource}`, payload),
    // Replace an existing resource with payload
    update: (id: string, payload: any) => service({ requiresAuth }).put(`${resource}/${id}`, payload),
    // Merge new payload into a resource
    patch: (id: string, payload: any) => service({ requiresAuth }).patch(`${resource}/${id}`, payload),
    // Remove a resource by its id
    remove: (id: string) => service({ requiresAuth }).delete(`${resource}/${id}`),
  };
};

export default CreateBaseApiService
