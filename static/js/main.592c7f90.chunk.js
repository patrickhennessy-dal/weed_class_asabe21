(this.webpackJsonpweed_class_asabe21=this.webpackJsonpweed_class_asabe21||[]).push([[0],{257:function(e,r,n){},264:function(e,r){},265:function(e,r){},273:function(e,r){},276:function(e,r){},277:function(e,r){},278:function(e,r,n){"use strict";n.r(r);var t=n(47),a=n.n(t),s=n(232),i=n.n(s),c=(n(257),n.p+"static/media/Logo_CPU.34e63f65.svg"),o=n(20),l=function(e){e.title;return Object(o.jsx)("header",{className:"header",children:Object(o.jsxs)("h1",{className:"centreColumn",children:[Object(o.jsx)("img",{className:"logoCPU",src:c,alt:"Logo"}),"CNN Weed Classifier"]})})},d=function(){return Object(o.jsxs)("div",{className:"intro text centreColumn",children:[Object(o.jsxs)("p",{children:["This is an application for classifying weeds in wild blueberry fields using the MobileNet (Howard et al., 2017) Convolutional Neural Network. The currently supported weeds are hair fescue, sheep sorrel, hawkweed, goldenrod, and bunchberry. MobileNet was trained on Google Colab (Bisong, 2019) using TensorFlow (Abadi et al., 2015) and Keras (Chollet et al., 2020). The website runs on the ReactJS framework (Facebook Inc. & Walke, 2021) and processes the MobileNet model in your browser using Tensorflow.JS (Smilkov et al., 2019). This applicaton was presented at ASABE AIM 2021 with a ",Object(o.jsx)("a",{href:"https://github.com/patrickhennessy-dal/weed_class_asabe21/blob/master/src/assets/hennessy_asabe21_poster.pdf",target:"_blank",rel:"noopener noreferrer",children:"corresponding poster"})," in the conference proceedings."]}),Object(o.jsxs)("p",{children:["To use the application, capture an image of the weed from directly above from a height of around 1 metre. Alternatively, download some ",Object(o.jsx)("a",{href:"https://www.dropbox.com/sh/tk734ttl2k6yw4n/AAAoJ4cJfgmjSatJYAh-JhYla?dl=0",target:"_blank",rel:"noopener noreferrer",children:"sample images"}),". Then, upload the image and let the deep learning algorithm do the work!"]})]})},h=n(4),u=n.n(h),b=n(11),p=n(6),j=n(136),f=function(){var e=Object(t.useState)(!1),r=Object(p.a)(e,2),n=r[0],a=r[1],s=Object(t.useState)(null),i=Object(p.a)(s,2),c=i[0],l=i[1],d=Object(t.useState)(null),h=Object(p.a)(d,2),f=h[0],m=h[1],g=Object(t.useState)([]),x=Object(p.a)(g,2),O=x[0],w=x[1],y=Object(t.useState)([]),v=Object(p.a)(y,2),N=v[0],k=v[1],A=["Goldenrod","Hawkweed","Bunchberry","Sheep Sorrel","No Weeds","Hair Fescue"],C=Object(t.useRef)(),S=Object(t.useRef)(),B=function(){var e=Object(b.a)(u.a.mark((function e(){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,j.e("https://cdn.jsdelivr.net/gh/patrickhennessy-dal/modelZoo/ASABE21/modelMN/model.json");case 4:r=e.sent,l(r),a(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),a(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(u.a.mark((function e(){var r,n,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.b.fromPixelsAsync(C.current);case 2:return r=e.sent,r=j.c(r,0),r=j.d.resizeBilinear(r,[224,224]),e.next=7,c.predict(r);case 7:n=e.sent,t=j.a(n,1),w(A[t.dataSync()[0]]),k(n.dataSync()[t.dataSync()[0]]);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(t.useEffect)((function(){B()}),[]),n?Object(o.jsx)("h2",{className:"centreColumn",children:"Please wait..."}):Object(o.jsx)("div",{className:"classifier",children:Object(o.jsxs)("div",{className:"mainWrapper centreColumn",children:[Object(o.jsxs)("div",{className:"mainContent",children:[Object(o.jsx)("div",{className:"imageHolder",children:f&&Object(o.jsx)("img",{src:f,className:"image",alt:"Upload Preview",crossOrigin:"anonymous",ref:C})}),O.length>0&&Object(o.jsx)("div",{className:"resultsHolder text",children:Object(o.jsxs)("div",{className:"result",children:[Object(o.jsx)("span",{className:"name",children:Object(o.jsxs)("p",{children:["Result: ",O," "]})}),Object(o.jsxs)("span",{className:"confidence",children:["Confidence level: ",(100*N).toFixed(2)," %"]})]},O.className)})]}),Object(o.jsxs)("div",{className:"inputHolder",children:[Object(o.jsx)("input",{type:"file",accept:"image/*",capture:"camera",className:"uploadInput",onChange:function(e){var r=e.target.files;if(r.length>0){var n=URL.createObjectURL(r[0]);m(n)}else m(null)},ref:S}),Object(o.jsxs)("div",{className:"btnHolder",children:[Object(o.jsx)("button",{className:"ctrlBtn",onClick:function(){S.current.click()},children:"Upload Image"}),f&&Object(o.jsx)("button",{className:"ctrlBtn",onClick:T,children:"Identify Image"})]})]})]})})},m=function(){return Object(o.jsxs)("div",{className:"management text centreColumn",children:[Object(o.jsxs)("h2",{children:["Management Options",Object(o.jsx)("a",{href:"#disclaimer",children:Object(o.jsx)("i",{children:"*"})})]}),Object(o.jsxs)("p",{children:["Please consult Perennia's guide to weed, insect, and disease management in wild blueberry. [",Object(o.jsx)("a",{href:"https://www.perennia.ca/wp-content/uploads/2018/03/Wild-Blueberry-WEED-INSECT-DISEASE-GUIDE-2021-WEB.pdf",target:"_blank",rel:"noopener noreferrer",children:"pdf link"}),"]"]})]})},g=function(){return Object(o.jsxs)("div",{className:"text centreColumn",children:[Object(o.jsx)("h2",{children:"Acknowledgements"}),Object(o.jsx)("p",{children:"This work was supported by Mitacs through the Mitacs Accelerate Program (IT23150), in partnership with the Wild Blueberry Producers Association of Nova Scotia. Additional funding for this research was provided by Natural Sciences and Engineering Research Council of Canada Discovery Grants Program (RGPIN-06295-2019), Doug Bragg Enterprises, Ltd, and New Brunswick Canadian Agricultural Partnership (CAP). The authors would like to thank the wild blueberry growers in Nova Scotia for use of their fields during image collection. Also, the authors acknowledge the efforts of the mechanized systems and precision agriculture research teams at Dalhousie University\u2019s Faculty of Agriculture."})]})},x=function(){return Object(o.jsxs)("div",{className:"cite text centreColumn",children:[Object(o.jsx)("h2",{children:"Cite"}),Object(o.jsxs)("p",{children:["If you wish to use this work, please cite our ",Object(o.jsx)("a",{href:"https://github.com/patrickhennessy-dal/weed_class_asabe21/blob/master/src/assets/hennessy_asabe21_poster.pdf",target:"_blank",rel:"noopener noreferrer",children:"poster"})," in the ASABE AIM 2021 conference proceedings:"]}),Object(o.jsx)("pre",{className:"citeCode",children:Object(o.jsx)("span",{children:"const citation = () => {\n    title       = 'Convolutional Neural Network Web Application for Aiding Field Management in Wild Blueberry';\n    authors     = ['Patrick J. Hennessy', 'Travis J. Esau', 'Arnold W. Schumann', 'Qamar U. Zaman', 'Scott N. White', 'Aitazaz A. Farooque'];\n    year        = 2021;\n    procTitle   = '2021 ASABE Annual International Meeting';\n    procCity    = 'Virtual';\n};"})})]})},O=function(){return Object(o.jsxs)("div",{className:"references text centreColumn",children:[Object(o.jsx)("h2",{children:"References"}),Object(o.jsxs)("p",{className:"reference",children:["Abadi, M., Agarwal, A., Barnham, P., Brevdo, E., Chen, Z., Citro, C., et al. (2015). TensorFlow: Large-Scale Machine Learning on Heterogeneous Distributed Systems. In ",Object(o.jsx)("i",{children:"Google Research."})," ",Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://doi.org/10.1080/09548980500300507",children:"https://doi.org/10.1080/09548980500300507"})]}),Object(o.jsxs)("p",{className:"reference",children:["Bisong, E. (2019). Google Colaboratory. In ",Object(o.jsx)("i",{children:"Building Machine Learning and Deep Learning Models on Google Cloud Platform"})," (pp. 59\u201364). Apress Media LLC. ",Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://doi.org/10.1007/978-1-4842-4470-8_7",children:"https://doi.org/10.1007/978-1-4842-4470-8_7"})]}),Object(o.jsxs)("p",{className:"reference",children:["Chollet, F., et al. (2020). ",Object(o.jsx)("i",{children:"Keras."})," GitHub Repository. ",Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/keras-team/keras",children:"https://github.com/keras-team/keras"})]}),Object(o.jsxs)("p",{className:"reference",children:["Eriavbe, M. (2015). ",Object(o.jsx)("i",{children:"Management of Hawkweed (Hieracium spp.) in Wild Blueberry Fields on Prince Edward Island"})," [M.Sc. Thesis, Dalhousie University]. ",Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://hdl.handle.net/10222/60770",children:"http://hdl.handle.net/10222/60770"})]}),Object(o.jsxs)("p",{className:"reference",children:["Facebook Inc., & Walke, J. (2021). ",Object(o.jsx)("i",{children:"React - A JavaScript library for building user interfaces."})," ",Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://reactjs.org/",children:"https://reactjs.org/"})]}),Object(o.jsxs)("p",{className:"reference",children:["Farooq, M. H. (2018). ",Object(o.jsx)("i",{children:"Management of goldenrods (Solidago spp.) in wild blueberry (Vaccinium angustifolium Ait.) fields"})," [M.Sc. Thesis, Dalhousie University]. ",Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://hdl.handle.net/10222/74162",children:"http://hdl.handle.net/10222/74162"})]}),Object(o.jsxs)("p",{className:"reference",children:["Government of New Brunswick. (2017). ",Object(o.jsx)("i",{children:"Wild Blueberry IPM, Weed Management Guide"}),". Department of Agriculture, Aquaculture and Fisheries. ",Object(o.jsx)("a",{href:"https://www2.gnb.ca/content/dam/gnb/Departments/10/pdf/Agriculture/WildBlueberries-BleuetsSauvages/C420-E.pdf",target:"_blank",rel:"noopener noreferrer",children:"https://www2.gnb.ca/content/dam/gnb/Departments/10/pdf/Agriculture/WildBlueberries-BleuetsSauvages/C420-E.pdf"})]}),Object(o.jsxs)("p",{className:"reference",children:["Howard, A. G., Zhu, M., Chen, B., Kalenichenko, D., Wang, W., Weyand, T., Andreetto, M., & Adam, H. (2017). MobileNets: Efficient convolutional neural networks for mobile vision applications. ",Object(o.jsx)("i",{children:"ArXiv."})," ",Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://arxiv.org/abs/1704.04861",children:"https://arxiv.org/abs/1704.04861"})]}),Object(o.jsxs)("p",{className:"reference",children:["Hughes, A., White, S. N., Boyd, N. S., Hildebrand, P., & Cutler, C. G. (2016). Red sorrel management and potential effect of red sorrel pollen on ",Object(o.jsx)("i",{children:"Botrytis cinerea"})," spore germination and infection of lowbush blueberry (",Object(o.jsx)("i",{children:"Vaccinium angustifolium"})," Ait.) flowers. ",Object(o.jsx)("i",{children:"Canadian Journal of Plant Science"}),", 96(4), 590\u2013596. ",Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://doi.org/10.1139/cjps-2015-0285",children:"https://doi.org/10.1139/cjps-2015-0285"})]}),Object(o.jsxs)("p",{className:"reference",children:["Kennedy, K. J., Boyd, N. S., & Nams, V. O. (2010). Hexazinone and fertilizer impacts on sheep sorrel (",Object(o.jsx)("i",{children:"Rumex acetosella"}),") in wild blueberry. Weed Science, 58(3), 317\u2013322. ",Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://doi.org/10.1614/WS-D-09-00081.1",children:"https://doi.org/10.1614/WS-D-09-00081.1"})]}),Object(o.jsxs)("p",{className:"reference",children:["Smilkov, D., Thorat, N., Assogba, Y., Yuan, A., Kreeger, N., Yu, P., et al. (2019). Tensorflow.JS: Machine learning for the web and beyond. ",Object(o.jsx)("i",{children:"ArXiv."})," ",Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://arxiv.org/abs/1901.05350",children:"https://arxiv.org/abs/1901.05350"})]}),Object(o.jsxs)("p",{className:"reference",children:["White, S. N. (2019). Evaluation of herbicides for hair fescue (Festuca filiformis) management and potential seedbank reduction in lowbush blueberry. ",Object(o.jsx)("i",{children:"Weed Technology"}),", 33(6), 840\u2013846. ",Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://doi.org/10.1017/wet.2019.71",children:"https://doi.org/10.1017/wet.2019.71"})]}),Object(o.jsxs)("p",{className:"reference",children:["Yarborough, D. E. (2009). ",Object(o.jsx)("i",{children:"255-Tribenuron Methyl for Bunchberry Control in Wild Blueberries."})," The University of Maine Cooperative Extension. ",Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://extension.umaine.edu/blueberries/factsheets/weeds/255-tribenuron-methyl-for-bunchberry-control-in-wild-blueberries/",children:"https://extension.umaine.edu/blueberries/factsheets/weeds/255-tribenuron-methyl-for-bunchberry-control-in-wild-blueberries/"})]})]})},w=function(){return Object(o.jsx)("div",{className:"disclaimer text centreColumn",id:"disclaimer",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"disclaimerStar",children:"*"}),"Patrick J. Hennessy and Dalhousie University in collaboration with the Wild Blueberry Producers Association of Nova Scotia (WBPANS) [\u201cThe Owners\u201d] compiled this Application to help wild blueberry farmers identify weeds commonly found in wild blueberry fields. The Application relies on information and data obtained from third party sources over which The Owners have no control, and which information is continuously changing and therefore can cease to be current and accurate. Pesticide labels are the best source of information and should always be consulted prior to using a product. The label is the best source of information on: registered crop uses, rates, days to harvest, compatibility with other pesticides, toxicity and other special information on its effective and safe use. The Owners do not make any representations as to the accuracy of the Application, and specifically disclaims all warranties, expressed or implied, with respect to its use. The Owners do not assume any liability for any losses caused by the use of a pesticide mentioned in this Application, including without limitation crop loss, animal loss, or health, safety or environmental hazard. By accessing, printing, or using this Application each user agrees to release, waive, and hold harmless The Owners from all liability or claims for loss however incurred. This Application is meant to be used only as a reference for identification of weeds in wild blueberry production. Where there are brand names of a specific active ingredient registered in Canada, they are for reference purpose only and as such do not form an endorsement of one brand over another. If you have used or have purchased a generic product not specifically in this Application but the generic product has your crop and pest on the label, always follow that product label. If any information in this Application or any other publication conflicts with the information on the label, always use the label recommendation. Pesticides are only to be used in an approved manner and that are in accordance with that of the buyer/processor."]})})},y=function(){return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)("p",{className:"centreColumn",children:"\xa9 2021 Patrick J. Hennessy, Dalhousie University, and The Wild Blueberry Producers Association of Nova Scotia"}),Object(o.jsx)("p",{className:"centreColumn",children:Object(o.jsx)("a",{className:"contactLink",href:"mailto:Patrick.Hennessy@Dal.ca",children:"Contact"})})]})};var v=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(l,{}),Object(o.jsx)(d,{}),Object(o.jsx)(f,{}),Object(o.jsx)(m,{}),Object(o.jsx)(g,{}),Object(o.jsx)(x,{}),Object(o.jsx)(w,{}),Object(o.jsx)(O,{}),Object(o.jsx)(y,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,279)).then((function(r){var n=r.getCLS,t=r.getFID,a=r.getFCP,s=r.getLCP,i=r.getTTFB;n(e),t(e),a(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),N()}},[[278,1,2]]]);
//# sourceMappingURL=main.592c7f90.chunk.js.map