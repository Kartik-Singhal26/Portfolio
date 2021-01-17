/*Research Details Table*/

const researchTable = document.querySelector(".main");
const citeTable1 = document.querySelector(".citeT1");
const citeTable2 = document.querySelector(".citeT2");
const citeTable3 = document.querySelector(".citeT3");
const citeTable4 = document.querySelector(".citeT4");

const research = [
    {
        title : "Robust Trajectory Tracking Control of Non-Holonomic Wheeled Mobile Robots using an Adaptive Fractional Order Parallel Fuzzy PID Controller",
        authors : "Kartik Singhal, Vineet Kumar, K.P.S Rana",
        conferences : "Journal of the Franklin Institute - Elsevier",
        Status : "Publication Under Review",
        researchYr : 2020,
        citebox : "#popup1",
        image : "assets/images/research-page/caif.PNG",
        link: ""
    },

    {
        title : "IoT Applications in the Pharmaceutical Industry",
        authors : "Deepak Kumar Sharma, Saakshi Bhargava and Kartik Singhal",
        conferences : "Chapter 6: Internet of Things applications in the pharmaceutical industry - Elsevier",
        Status : "Published",
        researchYr : 2020,
        citebox : "#popup2",
        image : "assets/images/research-page/els.jpg",
        link : "https://www.sciencedirect.com/science/article/pii/B9780128213261000061?via%3Dihub"
    },

    {
        title : "Fuzzy Systems in Medicine and Healthcare: Need, Challenges, and Applications",
        authors : "Deepak K. Sharma, Sakshi, Kartik Singhal",
        conferences : "Chapter 8: Soft Computing Applications and Techniques in Healthcare - CRC Press",
        Status : "Published",
        researchYr : 2020,
        citebox : "#popup3",
        image : "assets/images/research-page/fuzzy.jpg",
        link : "https://www.taylorfrancis.com/chapters/fuzzy-systems-medicine-healthcare-deepak-sharma-sakshi-kartik-singhal/e/10.1201/9781003003496-8"
    },

    {
        title : "Differentiation of Mamdani and Sugeno Fuzzy Inference System in developing Automatic Plant Watering Systems for Domestic Use",
        authors : "Kartik Singhal, Rani Medhashree, Ranganath M. Singari",
        conferences : "International Conference on Innovative & Advanced Multidisciplinary Research, Singapore",
        Status : "Published",
        researchYr : 2019,
        citebox : "#popup4",
        image : "assets/images/research-page/model.PNG",
        link : "https://www.ijitee.org/wp-content/uploads/papers/v9i1/A9232119119.pdf"
    }
];

const cite1 = [{
    vancouver : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    bibtex : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
}];

const cite2 = [{
    vancouver : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    bibtex : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
}];

const cite3 = [{
    vancouver : "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    bibtex : "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
}];

const cite4 = [{
    vancouver : "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    bibtex : "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
}];
    
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, Status, researchYr, citebox, link}) =>
        (output +=`
            <tr> 
            <td class="imgCol"><img src="${image}" class="rImg"></td>
            <td class = "researchTitleName">
            <div><span class="imgResponsive"><img src="${image}" class="imgRes"></span></div>
            <a href="#0" class="paperTitle"> ${title} </a> 
            <div> ${authors} </div> <div class="rConferences"> ${conferences} 
            <div class="researchY">${Status} ${researchYr}</div>
            </div>
        
            <!--CITE BUTTON-->
            <div class="d-flex justify-content-end" style="margin-right:5%;">
            
            <a href="${link}" class="button button-accent button-small text-right button-abstract" target="_blank">LINK</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="${citebox}" class="button button-accent button-small button-cite">CITE</a
            </div>
            </td>
            </tr>
            `)
        );
    researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

const citeData1 = () => {
    let output = "";
    cite1.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable1.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData1);

const citeData2 = () => {
    let output = "";
    cite2.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable2.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData2);

const citeData3 = () => {
    let output = "";
    cite3.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable3.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData3);

const citeData4 = () => {
    let output = "";
    cite4.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable4.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData4);
