"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[570],{4784:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(184);function s(){return(0,a.jsx)("div",{className:"d-flex justify-content-center","data-aos":"fade-up",children:(0,a.jsx)("h3",{className:"font-secondary",children:"Something went wrong ;("})})}},570:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(4165),s=n(3433),r=n(5861),c=n(9439),l=n(2791),i=n(1243),o=n(1087),d=n(2426),u=n.n(d),m=n(4784),h=n(184);function p(){var e=(0,l.useState)([]),t=(0,c.Z)(e,2),n=t[0],d=t[1],p=(0,l.useState)(0),f=(0,c.Z)(p,2),x=f[0],b=f[1],j=(0,l.useState)(!1),y=(0,c.Z)(j,2),N=y[0],g=y[1],v=(0,l.useState)(!1),Z=(0,c.Z)(v,2),w=Z[0],k=Z[1],S=(0,l.useState)(!1),M=(0,c.Z)(S,2),A=M[0],C=M[1],R=(0,l.useState)([]),D=(0,c.Z)(R,2),E=D[0],L=D[1],U=document.querySelector("#deleteModal");function _(){return z.apply(this,arguments)}function z(){return(z=(0,r.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/api/emails?sort=createdAt&direction=desc",{baseURL:"https://ahmad-muhajir.vercel.app"}).then((function(e){e.data<1&&k(!0),d(e.data),b(e.data.length)})).catch((function(e){g(!0),console.log(e.response)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,l.useEffect)((function(){_()}),[]);var I=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L([].concat((0,s.Z)(E),[t])),b((function(e){return e-1===0&&k(!0),e-1})),e.next=4,i.Z.delete("/api/emails/".concat(t),{baseURL:"https://ahmad-muhajir.vercel.app"}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e.response)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,i.Z.delete("/api/emails",{baseURL:"https://ahmad-muhajir.vercel.app"}).then((function(){window.bootstrap.Modal.getInstance(U).hide(),_()})).catch((function(e){return console.log(e.response)})).finally((function(){return C(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h1",{className:"fw-bold font-primary mb-3","data-aos":"fade-right",children:"EMAIL"}),N?(0,h.jsx)(m.Z,{}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"d-flex mb-4 justify-content-between align-items-center px-3 py-2 tertiary",style:{borderRadius:"10px"},"data-aos":"fade-up",children:[(0,h.jsxs)("span",{className:"font-secondary",children:["There are ",x," Emails"]}),(0,h.jsx)("span",{className:"cool-btn-dark py-2 px-3",style:{aspectRatio:"unset",borderRadius:"20px"},"data-bs-toggle":"modal","data-bs-target":"#deleteModal",children:(0,h.jsx)("span",{className:"text-danger text-end",style:{cursor:"pointer"},children:"Delete All"})})]}),w&&(0,h.jsx)("div",{className:"d-flex justify-content-center mt-5",style:{position:"absolute",right:"25%",left:"25%"},children:(0,h.jsx)("h1",{className:"font-primary text-center",children:"No Emails"})}),n.map((function(e){return(0,h.jsxs)("div",{className:"".concat(E.includes(e._id)?"deleting":"show-email"),children:[(0,h.jsx)("hr",{className:"m-0 mb-1"}),(0,h.jsxs)("div",{className:"email-container mb-1 d-flex justify-content-start align-items-center",children:[(0,h.jsx)(o.rU,{to:"/admin/email/".concat(e._id),className:"w-100 p-3 d-flex justify-content-between",children:(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:"font-primary m-0",children:e.name}),(0,h.jsx)("p",{className:"font-secondary m-0",style:{fontSize:"12px"},children:e.subject}),(0,h.jsx)("p",{className:"font-secondary m-0",style:{fontSize:"12px"},children:e.message})]})}),(0,h.jsx)("div",{style:{position:"absolute",right:"10px",top:"10px"},children:(0,h.jsx)("p",{className:"font-secondary m-0 text-end",style:{fontSize:"12px"},children:u()(e.createdAt).format("HH:mm, MMMM Do")})}),(0,h.jsx)("div",{style:{position:"absolute",right:"10px",bottom:"10px"},onClick:function(){return I(e._id)},children:(0,h.jsx)("span",{className:"cool-btn-dark",children:(0,h.jsx)("i",{className:"fa-solid fa-trash text-danger"})})})]})]},e._id)})),(0,h.jsx)("div",{className:"modal fade",id:"deleteModal",tabIndex:"-1","aria-hidden":"true",children:(0,h.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,h.jsxs)("div",{className:"modal-content tertiary",children:[(0,h.jsxs)("div",{className:"modal-header","data-bs-theme":"dark",children:[(0,h.jsx)("h1",{className:"modal-title fs-5 ",children:"Delete Email"}),(0,h.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,h.jsxs)("div",{className:"modal-body ",children:["Are you sure want to delete ",(0,h.jsx)("b",{className:"",children:"All"}),"?",(0,h.jsxs)("div",{className:"mt-5 d-flex gap-2 justify-content-end",children:[(0,h.jsx)("button",{type:"button",className:"btn btn-cancel","data-bs-dismiss":"modal",children:"Cancel"}),A?(0,h.jsx)("button",{type:"button",className:"btn btn-danger",disabled:!0,children:"Deleting..."}):(0,h.jsx)("button",{type:"button",className:"btn btn-danger",onClick:F,children:"Delete"})]})]})]})})})]})]})}}}]);
//# sourceMappingURL=570.6483d1ed.chunk.js.map