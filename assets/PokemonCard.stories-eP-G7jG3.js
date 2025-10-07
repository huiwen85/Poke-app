import{j as e}from"./jsx-runtime-C8Pcd0j4.js";import{c as r}from"./css-s1az7Xug.js";import"./iframe-CGTs9-ER.js";import"./preload-helper-PPVm8Dsz.js";function c({pokemon:n,href:s,className:t,LinkComponent:i}){const m=e.jsxs("div",{className:r({boxShadow:"md",borderRadius:"md",display:"flex",flexDirection:"column",alignItems:"center",bg:"neutral.100"})+(t?` ${t}`:""),children:[e.jsx("div",{className:r({flex:1}),children:e.jsx("img",{src:n.url,alt:n.name})}),e.jsx("div",{className:r({w:"full",bg:"orange.100",p:2}),children:e.jsxs("div",{className:r({w:"full",display:"flex",justifyContent:"space-between"}),children:[e.jsx("h2",{className:r({fontSize:"xl"}),children:n.name.charAt(0).toUpperCase()+n.name.slice(1)}),e.jsx("p",{children:`#${n.id}`})]})})]});return s&&i?e.jsx(i,{href:s,children:m}):m}c.__docgenInfo={description:"",methods:[],displayName:"PokemonCard",props:{pokemon:{required:!0,tsType:{name:"Pokemon"},description:""},href:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},LinkComponent:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { href: string; children: ReactNode }) => JSX.Element",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ href: string; children: ReactNode }",signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactNode",required:!0}}]}},name:"props"}],return:{name:"JSX.Element"}}},description:""}}};const d=({href:n,children:s})=>e.jsx("a",{href:n,children:s}),p={id:1,name:"bulbasaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},g={title:"Components/PokemonCard",component:c,parameters:{docs:{description:{component:`
          The PokemonCard component displays a Pokémon's image, name, and ID
          inside a styled card. Optionally, it can be wrapped with a Link
          component to make the card clickable.
        `}}}},a={args:{pokemon:p,href:"/pokemon/bulbasaur",LinkComponent:d},parameters:{docs:{description:{component:"This component displays a Pokémon in a card with its image, name, and number"}}}},o={args:{pokemon:p},parameters:{docs:{description:{story:"This variant shows the card without a link"}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    pokemon: samplePokemon,
    href: "/pokemon/bulbasaur",
    LinkComponent: MockLink
  },
  parameters: {
    docs: {
      description: {
        component: "This component displays a Pokémon in a card with its image, name, and number"
      }
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    pokemon: samplePokemon
  },
  parameters: {
    docs: {
      description: {
        story: "This variant shows the card without a link"
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const f=["Default","WithoutLink"];export{a as Default,o as WithoutLink,f as __namedExportsOrder,g as default};
