import { API } from "./api";
import {AxiosResponse} from "axios";
import { $axios } from "~/utils/api";

// Без платной подписки API предоставляет набор данных, ограниченный автомобилями 2020 года.
// https://carapi.app/api

type pagingRequest = (pageNumber: number, attribute?: string) => Promise<AxiosResponse<any>>
enum Query {
  sort = "sort=id", year = "year=2020", limit = "limit=21"
}
type requestById = (id: number) => Promise<AxiosResponse<any>>


let $getMakes : pagingRequest
$getMakes =  async (pageNumber: number) => await $axios.get(`${API.Makes}?page=${pageNumber}&${Query.limit}&${Query.sort}&${Query.year}`)


let $getModels : pagingRequest
$getModels =  async (pageNumber: number) => await $axios.get(`${API.Models}?page=${pageNumber}&${Query.limit}&${Query.sort}&${Query.year}`)


let $getTrims: pagingRequest
$getTrims =  async (pageNumber: number, attribute?: string) => {

  return await $axios.get(`${API.Trims}?page=${pageNumber}&${Query.limit}&${Query.sort}&${Query.year}${attribute}`)
}


let $getTrimsById: requestById
$getTrimsById =  async (id:number | null) => await $axios.get(`${API.Trims}/${id}`)

let $getBodies: pagingRequest
$getBodies =  async (pageNumber: number, attribute?: string) => await $axios.get(`${API.Bodies}?page=${pageNumber}&${Query.limit}&${Query.sort}&${attribute}&${Query.year}`)

let $getEngines: pagingRequest
$getEngines =  async (pageNumber: number, attribute?: string) => await $axios.get(`${API.Engines}?page=${pageNumber}&${Query.limit}&${Query.sort}&${attribute}&${Query.year}`)


export {$getMakes, $getModels, $getTrims, $getTrimsById, $getBodies, $getEngines }