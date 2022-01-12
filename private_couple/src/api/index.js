import axios from 'axios';

const baseUrl = 'http://localhost:8800/';

// login
function loginUser() {
  return axios.post()
}
// item
function postItem(item) {
  return axios.post(baseUrl+'item', item);
}
function getItemList() {
  return axios.get(baseUrl+'item');
}
function deleteItem(id) {
  return axios.delete(baseUrl+'item'+`/${id}`);
}
function patchUrl(payload) {
  return axios.patch(baseUrl+'item'+`/url/${payload.id}`, {data: {urlText: payload.urlText}});
}
function patchPos(payload) {
  return axios.patch(baseUrl+'item'+`/pos/${payload.id}`, {data: {posText: payload.posText}});
}
function getCheckedItemList() { 
  return axios.get(baseUrl+'item' + '/list');
}
// course
function postCourse(course) {
  return axios.post(baseUrl+'course', course)
}
function getCourseList() {
  return axios.get(baseUrl+'course');
}
function deleteCourse(name) {
  return axios.delete(baseUrl+'course'+`/${name}`)
}
// start
function replaceStartCourse(list) {
  return axios.post(baseUrl+'start', list);
}
function getStartList() {
  return axios.get(baseUrl+'start');
}
function patchComment(payload) {
  return axios.patch(baseUrl+'start'+`/comment/${payload.id}`, {data: {comment: payload.commentText}});
}
function toggleTrueItem(id) {
  return axios.patch(baseUrl+'start'+`/true/${id}`, {data: {completed: true}});
}
function toggleFalseItem(id) {
  return axios.patch(baseUrl+'start'+`/false/${id}`, {data: {completed: false}});
}
function deleteStartItem(id) {
  return axios.delete(baseUrl+'start'+`/${id}`);
}
function patcStarthUrl(payload) {
  return axios.patch(baseUrl+'start'+`/url/${payload.id}`, {data: {urlText: payload.urlText}});
}
function patchStartPos(payload) {
  return axios.patch(baseUrl+'start'+`/pos/${payload.id}`, {data: {posText: payload.posText}});
}
// last
function patchStartItem(item) {
  return axios.patch(baseUrl+'last/item', item);
}
function patchStartCourse(course) {
  return axios.patch(baseUrl+'last/course', course);
}
function getLastList() {
  return axios.get(baseUrl+'last');
}

export { 
  loginUser,
  getItemList, 
  postItem, 
  deleteItem, 
  patchUrl,
  patchPos,
  getCheckedItemList,
  postCourse,
  getCourseList,
  deleteCourse,
  replaceStartCourse,
  getStartList,
  patchComment,
  toggleTrueItem,
  toggleFalseItem,
  deleteStartItem,
  patcStarthUrl,
  patchStartPos,
  patchStartItem,
  patchStartCourse,
  getLastList
};