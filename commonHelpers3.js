import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as c}from"./assets/vendor-9cb839b9.js";const n="https://64859281a795d24810b7146a.mockapi.io/work";async function r(){try{const o=await c.get(`${n}/contacts`)}catch(o){console.log(o)}}async function s(o){try{c.post(`${n}/contacts/`,o)}catch(t){console.log(t)}}async function e(o,t){try{c.put(`${n}/contacts/${o}`,t)}catch(a){console.log(a)}}r();s({name:"Jared",phone:911});e(20,{name:"Patron",phone:322});
//# sourceMappingURL=commonHelpers3.js.map