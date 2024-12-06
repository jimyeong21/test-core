import{u,f as h,r as f,i as g,a as m,x as l,t as v}from"./Header-Dh3wurkM.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:h},b=(t=w,e,a)=>{const{kind:n,metadata:r}=a;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(a.name,t),n==="accessor"){const{name:s}=a;return{set(i){const p=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,p,t)},init(i){return i!==void 0&&this.P(s,void 0,t),i}}}if(n==="setter"){const{name:s}=a;return function(i){const p=this[s];e.call(this,i),this.requestUpdate(s,p,t)}}throw Error("Unsupported decorator location: "+n)};function y(t){return(e,a)=>typeof a=="object"?b(t,e,a):((n,r,o)=>{const s=r.hasOwnProperty(o);return r.constructor.createProperty(o,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(r,o):void 0})(t,e,a)}function P(t,e="photo"){return`http://127.0.0.1:8090/api/files/${t.collectionId}/${t.id}/${t[e]}`}var $=Object.defineProperty,x=Object.getOwnPropertyDescriptor,d=(t,e,a,n)=>{for(var r=n>1?void 0:n?x(e,a):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(n?s(e,a,r):s(r))||r);return n&&r&&$(e,a,r),r};let c=class extends m{constructor(){super(...arguments),this.data={items:[],page:0,perPage:0,totalItems:0,totalPages:0}}connectedCallback(){super.connectedCallback(),this.fetchData()}async fetchData(){const e=await(await fetch("http://127.0.0.1:8090/api/collections/products/records")).json();this.data=e}render(){return l`
      <div class="container">
        <ul>
          ${this.data.items.map(t=>l`
              <li>
                <a href="/">
                  <figure>
                    <img src="${P(t)}" alt="" />
                  </figure>
                  <span class="brand">${t.brand}</span>
                  <span class="description">${t.description}</span>
                  <span class="price">${t.price.toLocaleString()}</span>
                  <div>
                    <span class="discount">${t.discount}</span>
                    <span class="rear-price">${(t.price-t.price*t.discount*.01).toLocaleString()}원</span>
                  </div>
                </a>
              </li>
            `)}
        </ul>
      </div>
    `}};c.styles=[f,g`
      .container {
        margin: 0 auto;

        & img {
          width: 100%;
        }

        & ul {
          display: grid;
          place-items: center;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2rem;
          margin: 2.5rem;

          & li {
            & a {
              max-width: 30vw;
              display: flex;
              flex-direction: column;
              gap: 0.6rem;
            }
          }

          .description {
            font-size: 0.8rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .price {
            color: gray;
            text-decoration: line-through;
          }

          .discount {
            font-size: 1.2rem;
            color: red;
          }

          .real-price {
            font-weight: bold;
          }
        }
      }
    `];d([y({type:Object})],c.prototype,"data",2);c=d([v("product-list")],c);
