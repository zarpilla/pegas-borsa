import service from '@/service/index'
import CreateBaseApiService from '@/service/api/createBaseApiService'

const resource: string = 'jobs'
export const jobs = {
  ...CreateBaseApiService(resource),
  get: (id: string) => service({ requiresAuth: false }).get(`${resource}/${id}?populate=job_categories&populate=job_categories.image&populate=job_entity&populate=job_type`),
  list: (type: string,) => service({ requiresAuth: false }).get(`${resource}?populate=job_categories&populate=job_categories.image&populate=job_entity&populate=job_type&filters[job_type][slug][$eq]=${type}`),
  listCategory: (type: string, category: string) => service({ requiresAuth: false }).get(`${resource}?populate=job_categories&populate=job_categories.image&populate=job_entity&populate=job_type&filters[job_type][slug][$eq]=${type}&filters[job_categories][slug][$in]=${category}`),
}
