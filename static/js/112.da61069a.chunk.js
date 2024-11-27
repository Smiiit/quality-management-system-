"use strict";(self.webpackChunk_minimal_kit_simple_cra_js=self.webpackChunk_minimal_kit_simple_cra_js||[]).push([[112],{6112:function(e,r,n){n.r(r),n.d(r,{default:function(){return s}});var i=n(6907),t=n(276),a=n(184);function s(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.ql,{children:(0,a.jsx)("title",{children:" QMS Login"})}),(0,a.jsx)(t.Q,{})]})}},276:function(e,r,n){n.d(r,{Q:function(){return P},$:function(){return T}});var i=n(4165),t=n(5861),a=n(9439),s=n(8007),l=n(1134),o=n(2791),d=n(4695),c=n(6002),u=n(533),m=n(2363),h=n(6314),p=n(3400),x=n(4567),v=n(3466),g=n(8072),j=n(3854),Z=n(9208),f=n(3805),b=n(2459),y=n(8976),w=n(4e3),S=n(1413),_=n(5987),k=n(2640),q=n(184),N=["name","helperText","type"];function C(e){var r=e.name,n=e.helperText,i=e.type,t=(0,_.Z)(e,N),a=(0,l.Gc)().control;return(0,q.jsx)(l.Qr,{name:r,control:a,render:function(e){var r=e.field,a=e.fieldState.error;return(0,q.jsx)(k.Z,(0,S.Z)((0,S.Z)({},r),{},{fullWidth:!0,type:i,value:"number"===i&&0===r.value?"":r.value,onChange:function(e){"number"===i?r.onChange(Number(e.target.value)):r.onChange(e.target.value)},error:!!a,helperText:a?null===a||void 0===a?void 0:a.message:n},t))}})}function E(e){var r=e.children,n=e.onSubmit,i=e.methods;return(0,q.jsx)(l.RV,(0,S.Z)((0,S.Z)({},i),{},{children:(0,q.jsx)("form",{onSubmit:n,children:r})}))}function P(){var e=(0,y.E)().login,r=(0,Z.tv)(),n=(0,o.useState)(""),S=(0,a.Z)(n,2),_=S[0],k=S[1],N=(0,Z.lr)().get("returnTo"),P=(0,b.k)(),T=s.Ry().shape({email:s.Z_().required("Email is required").email("Email must be a valid email address"),password:s.Z_().required("Password is required")}),A=(0,l.cI)({resolver:(0,d.X)(T)}),F=A.reset,I=A.handleSubmit,Q=A.formState.isSubmitting,L=I(function(){var n=(0,t.Z)((0,i.Z)().mark((function n(t){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,null===e||void 0===e?void 0:e(t.email,t.password);case 3:r.push(N||f.wd),n.next=11;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0),F(),k("string"===typeof n.t0?n.t0:n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()),R=(0,q.jsxs)(h.Z,{spacing:2,sx:{mb:5},children:[(0,q.jsx)(x.Z,{variant:"h4",children:"Sign in to Quality Management"}),(0,q.jsxs)(h.Z,{direction:"row",spacing:.5,children:[(0,q.jsx)(x.Z,{variant:"body2",children:"New user?"}),(0,q.jsx)(u.Z,{component:j.r,href:g.H.auth.jwt.register,variant:"subtitle2",children:"Create an account"})]})]}),W=(0,q.jsxs)(h.Z,{spacing:2.5,children:[!!_&&(0,q.jsx)(m.Z,{severity:"error",children:_}),(0,q.jsx)(C,{name:"email",label:"Email Address"}),(0,q.jsx)(C,{name:"password",label:"Password",type:P.value?"text":"password",InputProps:{endAdornment:(0,q.jsx)(v.Z,{position:"end",children:(0,q.jsx)(p.Z,{onClick:P.onToggle,edge:"end",children:(0,q.jsx)(w.Z,{icon:P.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(0,q.jsx)(u.Z,{variant:"body2",color:"inherit",underline:"always",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),(0,q.jsx)(c.Z,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:Q,children:"Login"})]});return(0,q.jsxs)(E,{methods:A,onSubmit:L,children:[R,W]})}function T(){var e=(0,y.E)().register,r=(0,Z.tv)(),n=(0,o.useState)(""),S=(0,a.Z)(n,2),_=S[0],k=S[1],N=(0,Z.lr)().get("returnTo"),P=(0,b.k)(),T=s.Ry().shape({firstName:s.Z_().required("First name required"),lastName:s.Z_().required("Last name required"),email:s.Z_().required("Email is required").email("Email must be a valid email address"),password:s.Z_().required("Password is required")}),A=(0,l.cI)({resolver:(0,d.X)(T),defaultValues:{firstName:"",lastName:"",email:"",password:""}}),F=A.reset,I=A.handleSubmit,Q=A.formState.isSubmitting,L=I(function(){var n=(0,t.Z)((0,i.Z)().mark((function n(t){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,null===e||void 0===e?void 0:e(t.email,t.password,t.firstName,t.lastName);case 3:r.push(N||f.wd),n.next=11;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0),F(),k("string"===typeof n.t0?n.t0:n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()),R=(0,q.jsxs)(h.Z,{spacing:2,sx:{mb:5,position:"relative"},children:[(0,q.jsx)(x.Z,{variant:"h4",children:"Registration"}),(0,q.jsxs)(h.Z,{direction:"row",spacing:.5,children:[(0,q.jsx)(x.Z,{variant:"body2",children:" Already have an account? "}),(0,q.jsx)(u.Z,{href:g.H.auth.jwt.login,component:j.r,variant:"subtitle2",children:"Sign in"})]})]}),W=(0,q.jsxs)(x.Z,{component:"div",sx:{color:"text.secondary",mt:2.5,typography:"caption",textAlign:"center"},children:["By signing up, I agree to ",(0,q.jsx)(u.Z,{underline:"always",color:"text.primary",children:"Terms of Service"})," and ",(0,q.jsx)(u.Z,{underline:"always",color:"text.primary",children:"Privacy Policy"}),"."]}),z=(0,q.jsx)(E,{methods:A,onSubmit:L,children:(0,q.jsxs)(h.Z,{spacing:2.5,children:[!!_&&(0,q.jsx)(m.Z,{severity:"error",children:_}),(0,q.jsxs)(h.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,q.jsx)(C,{name:"firstName",label:"First name"}),(0,q.jsx)(C,{name:"lastName",label:"Last name"})]}),(0,q.jsx)(C,{name:"email",label:"Email address"}),(0,q.jsx)(C,{name:"password",label:"Password",type:P.value?"text":"password",InputProps:{endAdornment:(0,q.jsx)(v.Z,{position:"end",children:(0,q.jsx)(p.Z,{onClick:P.onToggle,edge:"end",children:(0,q.jsx)(w.Z,{icon:P.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(0,q.jsx)(c.Z,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:Q,children:"Create account"})]})});return(0,q.jsxs)(q.Fragment,{children:[R,z,W]})}}}]);
//# sourceMappingURL=112.da61069a.chunk.js.map