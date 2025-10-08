import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-Dn88_YMQ.js";import{c as s}from"./css-s1az7Xug.js";import"./preload-helper-PPVm8Dsz.js";function g({title:e,titleId:a,...i},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},i),e?r.createElement("title",{id:a},e):null,r.createElement("path",{fillRule:"evenodd",d:"M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z",clipRule:"evenodd"}))}const f=r.forwardRef(g),m=({placeholder:e="Search",onSearch:a,className:i})=>{const[o,u]=r.useState(""),h=r.useCallback(d=>{d.preventDefault();const p=o.trim();p&&a(p)},[o,a]);return t.jsx("form",{onSubmit:h,className:`${s({display:"flex",alignItems:"center"})} ${i||""}`,children:t.jsxs("div",{className:s({display:"flex",h:12,alignItems:"center",borderBottomWidth:"1px",borderBottomColor:"gray.400",position:"relative",w:"full"}),children:[t.jsx(f,{"aria-hidden":"true",className:s({w:6,h:6,pointerEvents:"none",position:"absolute",left:3,color:"gray.400"})}),t.jsx("input",{name:"search",type:"search",placeholder:e,value:o,onChange:d=>u(d.target.value),className:s({w:"full",rounded:"md",bg:{base:"white",_dark:"white/5"},py:1.5,pl:10,pr:3,fontSize:"base",color:{base:"gray.900",_dark:"white"},outline:1,outlineOffset:-1,outlineColor:"orange.500",_focus:{outline:2,outlineOffset:-2,outlineColor:"orange.500",_dark:{outlineColor:"orange.500"}},_placeholder:{color:{base:"gray.400",_dark:"gray.500"}}})})]})})};m.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search"',computed:!1}},onSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"(term: string) => void",signature:{arguments:[{type:{name:"string"},name:"term"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const w={title:"Components/SearchBar",component:m,tags:["autodocs"],argTypes:{placeholder:{control:"text"},onSearch:{action:"searched"}},parameters:{docs:{description:{component:`
          The SearchBar component provides an input field for users to enter search terms.
          It supports a customizable placeholder and triggers a callback function when
          the user submits a search. Ideal for filtering lists or navigating content
          in your application.
        `}}}},n={args:{placeholder:"Search something..."}},c={args:{placeholder:"Find your Pokemon"}},l={args:{placeholder:"Type and press Enter",onSearch:e=>{console.log("Search term:",e)}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search something..."
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Find your Pokemon"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type and press Enter",
    onSearch: (term: string) => {
      console.log("Search term:", term);
    }
  }
}`,...l.parameters?.docs?.source}}};const x=["Default","CustomPlaceholder","WithSearchAction"];export{c as CustomPlaceholder,n as Default,l as WithSearchAction,x as __namedExportsOrder,w as default};
