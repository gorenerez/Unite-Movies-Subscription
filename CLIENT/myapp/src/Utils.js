import axios from 'axios';

const getAll = (url) => axios.get(url)

const getById = (url, id) => axios.get(`${url}/${id}`)

const addItem = (url, obj) => axios.post(url, obj)

const updateItem = (url, id, obj) => axios.put(`${url}/${id}`, obj)

const deleteItem = (url, id) => axios.delete(`${url}/${id}`)

const deleteSubscriptionItem = (url, movieid) => axios.delete(`${url}?movieid=${movieid}`)

const deleteMemberSubscriptionItem = (url, memberid) => axios.delete(`${url}?memberid=${memberid}`)

const getAllSubscriptionsByMovieId = (url, movieid) => axios.get(`${url}?movieid=${movieid}`)

const getAllSubscriptionsByMemberId = (url, memberid) => axios.get(`${url}?memberid=${memberid}`)

export { getAll, getById, addItem, updateItem, deleteItem, getAllSubscriptionsByMovieId, getAllSubscriptionsByMemberId,deleteSubscriptionItem, deleteMemberSubscriptionItem }