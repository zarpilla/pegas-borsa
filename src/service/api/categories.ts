import service from '@/service/index'
import CreateBaseApiService from '@/service/api/createBaseApiService'

const resource: string = 'job-categories'
export const categories = {
  ...CreateBaseApiService(resource),
  // list: () => service({ requiresAuth: false }).get(`${resource}?populate=job_categories&populate=job_categories.image&populate=job_entity`),  
}
