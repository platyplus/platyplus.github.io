(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{159:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"implementers-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementers-documentation","aria-hidden":"true"}},[e._v("#")]),e._v(" Implementers documentation")]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("h3",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("Docker")]),e._v(" "),a("h3",{attrs:{id:"build-the-docker-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-the-docker-images","aria-hidden":"true"}},[e._v("#")]),e._v(" Build the docker images")]),e._v(" "),a("h4",{attrs:{id:"authentication-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Authentication service")]),e._v(" "),a("h4",{attrs:{id:"server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server","aria-hidden":"true"}},[e._v("#")]),e._v(" Server")]),e._v(" "),a("h4",{attrs:{id:"application-this-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-this-repo","aria-hidden":"true"}},[e._v("#")]),e._v(" Application (this repo)")]),e._v(" "),a("h3",{attrs:{id:"set-the-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-the-environment-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Set the environment variables")]),e._v(" "),a("h3",{attrs:{id:"set-the-secrets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-the-secrets","aria-hidden":"true"}},[e._v("#")]),e._v(" Set the secrets")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Generate a hasura secret\nLC_ALL=C tr -dc 'A-Za-z0-9_!@#$%^&*()\\-+=' < /dev/urandom | head -c 128 > secret\nbase64 secret.key\n\n# Generate the RSA keys\nopenssl genrsa -out private.pem 2048\nopenssl rsa -in private.pem -pubout > public.pem\n\n# print the keys in an escaped format\nawk -v ORS='\\\\n' '1' private.pem | base64\nawk -v ORS='\\\\n' '1' public.pem | base64\n\n# don't forget to store the private key and the hasura secret key in a safe place!\n\n\n")])])]),a("p",[e._v("cat")]),e._v(" "),a("h3",{attrs:{id:"install-the-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-stack","aria-hidden":"true"}},[e._v("#")]),e._v(" Install the stack")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker stack deploy -c docker-compose.yml -c docker-compose-prod.yml platyplus\n")])])])])}],!1,null,null,null);r.options.__file="README.md";t.default=r.exports}}]);