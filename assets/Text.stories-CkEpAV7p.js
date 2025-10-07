import{j as x}from"./jsx-runtime-C8Pcd0j4.js";import{c as y}from"./css-s1az7Xug.js";import{r as T}from"./iframe-CGTs9-ER.js";import"./preload-helper-PPVm8Dsz.js";const o=T.forwardRef(({as:n="p",size:i="md",color:d="neutral.950",weight:c="bold",truncate:s=!1,uppercase:u=!1,italic:p=!1,underline:m=!1,children:f,...h},g)=>{const v=n||"p";return x.jsx(v,{ref:g,className:y({fontSize:i,color:d,fontWeight:c,textTransform:u?"uppercase":void 0,fontStyle:p?"italic":void 0,textDecoration:m?"underline":void 0,whiteSpace:s?"nowrap":void 0,overflow:s?"hidden":void 0,textOverflow:s?"ellipsis":void 0}),...h,children:f})});o.__docgenInfo={description:"",methods:[],displayName:"Text",props:{as:{required:!1,tsType:{name:"ElementType"},description:"",defaultValue:{value:'"p"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"neutral.950"',computed:!1}},weight:{required:!1,tsType:{name:"union",raw:'"light" | "normal" | "bold"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"normal"'},{name:"literal",value:'"bold"'}]},description:"",defaultValue:{value:'"bold"',computed:!1}},truncate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},uppercase:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},italic:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},underline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Components/Text",component:o,tags:["autodocs"],argTypes:{as:{control:{type:"select"},options:["p","div","span","h1","h2","h3"]},size:{control:{type:"radio"},options:["sm","md","lg","xl"]},color:{control:{type:"text"},description:"Puedes usar tokens del tema o cualquier color CSS válido (hex, rgb, etc.)"},weight:{control:{type:"radio"},options:["light","normal","bold"]},truncate:{control:"boolean"},uppercase:{control:"boolean"},italic:{control:"boolean"},underline:{control:"boolean"},children:{control:"text"}}},e={args:{children:"Hello, I am default text!",as:"p",size:"xl",color:"red",weight:"bold",truncate:!1,uppercase:!1,italic:!1,underline:!1}},a={args:{children:"I am an h1",as:"h1",size:"xl",weight:"bold",uppercase:!0,underline:!0,color:"red"}},r={args:{children:"This text is very long and will be truncated with ellipsis at the end",truncate:!0,size:"md",color:"neutral.600"}},t={args:{children:"Text with combined styles",size:"sm",color:"orange.500",weight:"light",uppercase:!0,italic:!0,underline:!0}},l={args:{children:"I am a div using the 'as' prop",as:"div",size:"md",color:"sky.600"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Hello, I am default text!",
    as: "p",
    size: "xl",
    color: "red",
    weight: "bold",
    truncate: false,
    uppercase: false,
    italic: false,
    underline: false
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "I am an h1",
    as: "h1",
    size: "xl",
    weight: "bold",
    uppercase: true,
    underline: true,
    color: "red"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "This text is very long and will be truncated with ellipsis at the end",
    truncate: true,
    size: "md",
    color: "neutral.600"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Text with combined styles",
    size: "sm",
    color: "orange.500",
    weight: "light",
    uppercase: true,
    italic: true,
    underline: true
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "I am a div using the 'as' prop",
    as: "div",
    size: "md",
    color: "sky.600"
  }
}`,...l.parameters?.docs?.source}}};const V=["Default","Heading","Truncated","StyledText","AsDiv"];export{l as AsDiv,e as Default,a as Heading,t as StyledText,r as Truncated,V as __namedExportsOrder,q as default};
