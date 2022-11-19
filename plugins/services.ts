import { API } from "./api";
import {AxiosResponse} from "axios";
import { $axios } from "~/utils/api";

type pagingRequest = (pageNumber: number) => Promise<AxiosResponse<any>>

enum Query {
  sort = "sort=make_model_id", year = "year=2020", limit = "limit=21"
}
type requestById = (id: number) => Promise<AxiosResponse<any>>


let $getTrims: pagingRequest
$getTrims =  async (pageNumber: number) => await $axios.get(`${API.Trims}?page=${pageNumber}&${Query.limit}&${Query.sort}&${Query.year}`)


let $getTrimsById: requestById
$getTrimsById =  async (id:number | null) => await $axios.get(`${API.Trims}/${id}`)


export {$getTrims, $getTrimsById}