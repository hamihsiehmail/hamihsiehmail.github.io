/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.46.0(21007360cad28648bdf46282a2592cb47c3a7a6f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/mdx/mdx",["require","require"],(e=>{"use strict";var t=(()=>{var t=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,r=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,d=(t=>typeof e<"u"?e:typeof Proxy<"u"?new Proxy(t,{get:(t,n)=>(typeof e<"u"?e:t)[n]}):t)((function(t){if(typeof e<"u")return e.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')})),p=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),c=(e,t)=>{for(var o in t)n(e,o,{get:t[o],enumerable:!0})},a=(e,t,r,d)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let p of i(t))!s.call(e,p)&&p!==r&&n(e,p,{get:()=>t[p],enumerable:!(d=o(t,p))||d.enumerable});return e},l=(e,t,n)=>(a(e,t,"default"),n&&a(n,t,"default")),x=(e,o,i)=>(i=null!=e?t(r(e)):{},a(!o&&e&&e.__esModule?i:n(i,"default",{value:e,enumerable:!0}),e)),k=e=>a(n({},"__esModule",{value:!0}),e),m=p(((e,t)=>{var n=x(d("vs/editor/editor.api"));t.exports=n})),b={};c(b,{conf:()=>g,language:()=>f});var u={};l(u,x(m()));var g={comments:{blockComment:["{/*","*/}"]},brackets:[["{","}"]],autoClosingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"“",close:"”"},{open:"‘",close:"’"},{open:"`",close:"`"},{open:"{",close:"}"},{open:"(",close:")"},{open:"_",close:"_"},{open:"**",close:"**"},{open:"<",close:">"}],onEnterRules:[{beforeText:/^\s*- .+/,action:{indentAction:u.languages.IndentAction.None,appendText:"- "}},{beforeText:/^\s*\+ .+/,action:{indentAction:u.languages.IndentAction.None,appendText:"+ "}},{beforeText:/^\s*\* .+/,action:{indentAction:u.languages.IndentAction.None,appendText:"* "}},{beforeText:/^> /,action:{indentAction:u.languages.IndentAction.None,appendText:"> "}},{beforeText:/<\w+/,action:{indentAction:u.languages.IndentAction.Indent}},{beforeText:/\s+>\s*$/,action:{indentAction:u.languages.IndentAction.Indent}},{beforeText:/<\/\w+>/,action:{indentAction:u.languages.IndentAction.Outdent}},...Array.from({length:100},((e,t)=>({beforeText:new RegExp(`^${t}\\. .+`),action:{indentAction:u.languages.IndentAction.None,appendText:`${t+1}. `}})))]},f={defaultToken:"",tokenPostfix:".mdx",control:/[!#()*+.[\\\]_`{}\-]/,escapes:/\\@control/,tokenizer:{root:[[/^---$/,{token:"meta.content",next:"@frontmatter",nextEmbedded:"yaml"}],[/^\s*import/,{token:"keyword",next:"@import",nextEmbedded:"js"}],[/^\s*export/,{token:"keyword",next:"@export",nextEmbedded:"js"}],[/<\w+/,{token:"type.identifier",next:"@jsx"}],[/<\/?\w+>/,"type.identifier"],[/^(\s*)(>*\s*)(#{1,6}\s)/,[{token:"white"},{token:"comment"},{token:"keyword",next:"@header"}]],[/^(\s*)(>*\s*)([*+-])(\s+)/,["white","comment","keyword","white"]],[/^(\s*)(>*\s*)(\d{1,9}\.)(\s+)/,["white","comment","number","white"]],[/^(\s*)(>*\s*)(\d{1,9}\.)(\s+)/,["white","comment","number","white"]],[/^(\s*)(>*\s*)(-{3,}|\*{3,}|_{3,})$/,["white","comment","keyword"]],[/`{3,}(\s.*)?$/,{token:"string",next:"@codeblock_backtick"}],[/~{3,}(\s.*)?$/,{token:"string",next:"@codeblock_tilde"}],[/`{3,}(\S+).*$/,{token:"string",next:"@codeblock_highlight_backtick",nextEmbedded:"$1"}],[/~{3,}(\S+).*$/,{token:"string",next:"@codeblock_highlight_tilde",nextEmbedded:"$1"}],[/^(\s*)(-{4,})$/,["white","comment"]],[/^(\s*)(>+)/,["white","comment"]],{include:"content"}],content:[[/(\[)(.+)(]\()(.+)(\s+".*")(\))/,["","string.link","","type.identifier","string.link",""]],[/(\[)(.+)(]\()(.+)(\))/,["","type.identifier","","string.link",""]],[/(\[)(.+)(]\[)(.+)(])/,["","type.identifier","","type.identifier",""]],[/(\[)(.+)(]:\s+)(\S*)/,["","type.identifier","","string.link"]],[/(\[)(.+)(])/,["","type.identifier",""]],[/`.*`/,"variable.source"],[/_/,{token:"emphasis",next:"@emphasis_underscore"}],[/\*(?!\*)/,{token:"emphasis",next:"@emphasis_asterisk"}],[/\*\*/,{token:"strong",next:"@strong"}],[/{/,{token:"delimiter.bracket",next:"@expression",nextEmbedded:"js"}]],import:[[/'\s*(;|$)/,{token:"string",next:"@pop",nextEmbedded:"@pop"}]],expression:[[/{/,{token:"delimiter.bracket",next:"@expression"}],[/}/,{token:"delimiter.bracket",next:"@pop",nextEmbedded:"@pop"}]],export:[[/^\s*$/,{token:"delimiter.bracket",next:"@pop",nextEmbedded:"@pop"}]],jsx:[[/\s+/,""],[/(\w+)(=)("(?:[^"\\]|\\.)*")/,["attribute.name","operator","string"]],[/(\w+)(=)('(?:[^'\\]|\\.)*')/,["attribute.name","operator","string"]],[/(\w+(?=\s|>|={|$))/,["attribute.name"]],[/={/,{token:"delimiter.bracket",next:"@expression",nextEmbedded:"js"}],[/>/,{token:"type.identifier",next:"@pop"}]],header:[[/.$/,{token:"keyword",next:"@pop"}],{include:"content"},[/./,{token:"keyword"}]],strong:[[/\*\*/,{token:"strong",next:"@pop"}],{include:"content"},[/./,{token:"strong"}]],emphasis_underscore:[[/_/,{token:"emphasis",next:"@pop"}],{include:"content"},[/./,{token:"emphasis"}]],emphasis_asterisk:[[/\*(?!\*)/,{token:"emphasis",next:"@pop"}],{include:"content"},[/./,{token:"emphasis"}]],frontmatter:[[/^---$/,{token:"meta.content",nextEmbedded:"@pop",next:"@pop"}]],codeblock_highlight_backtick:[[/\s*`{3,}\s*$/,{token:"string",next:"@pop",nextEmbedded:"@pop"}],[/.*$/,"variable.source"]],codeblock_highlight_tilde:[[/\s*~{3,}\s*$/,{token:"string",next:"@pop",nextEmbedded:"@pop"}],[/.*$/,"variable.source"]],codeblock_backtick:[[/\s*`{3,}\s*$/,{token:"string",next:"@pop"}],[/.*$/,"variable.source"]],codeblock_tilde:[[/\s*~{3,}\s*$/,{token:"string",next:"@pop"}],[/.*$/,"variable.source"]]}};return k(b)})();return t}));