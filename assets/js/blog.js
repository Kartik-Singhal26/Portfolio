/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Robust Trajectory Tracking Control of Non-Holonomic Wheeled Mobile Robots using an Adaptive Fractional Order Parallel Fuzzy PID Controller",
        authors : "Kartik Singhal, Vineet Kumar, K.P.S Rana",
        conferences : "Journal of the Franklin Institute - Elsevier",
        Status : "Publication Under Review",
        researchYr : 2020,
        image : "assets/images/research-page/caif.PNG",
        link: ""
    },

    {
        title : "IoT Applications in the Pharmaceutical Industry",
        authors : "Deepak Kumar Sharma, Saakshi Bhargava and Kartik Singhal",
        conferences : "Chapter 6: Internet of Things applications in the pharmaceutical industry - Elsevier",
        Status : "Published",
        researchYr : 2020,
        image : "assets/images/research-page/els.jpg",
        link : "https://www.sciencedirect.com/science/article/pii/B9780128213261000061?via%3Dihub"
    },

    {
        title : "Fuzzy Systems in Medicine and Healthcare: Need, Challenges, and Applications",
        authors : "Deepak K. Sharma, Sakshi, Kartik Singhal",
        conferences : "Chapter 8: Soft Computing Applications and Techniques in Healthcare - CRC Press",
        Status : "Published",
        researchYr : 2020,
        image : "assets/images/research-page/fuzzy.jpg",
        link : "https://www.taylorfrancis.com/chapters/fuzzy-systems-medicine-healthcare-deepak-sharma-sakshi-kartik-singhal/e/10.1201/9781003003496-8"
    },

    {
        title : "Differentiation of Mamdani and Sugeno Fuzzy Inference System in developing Automatic Plant Watering Systems for Domestic Use",
        authors : "Kartik Singhal, Rani Medhashree, Ranganath M. Singari",
        conferences : "International Conference on Innovative & Advanced Multidisciplinary Research, Singapore",
        Status : "Published",
        researchYr : 2019,
        image : "assets/images/research-page/model.PNG",
        link : "https://www.ijitee.org/wp-content/uploads/papers/v9i1/A9232119119.pdf"
    }
];
  
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, Status, researchYr, link}) =>
        (output +=`
            <tr> 
            <td class="imgCol"><img src="${image}" class="rImg"></td>
            <td class = "researchTitleName">
            <div><span class="imgResponsive"><img src="${image}" class="imgRes"></span></div>
            <a href="#0" class="paperTitle"> ${title} </a> 
            <div> ${authors} </div> <div class="rConferences"> ${conferences} 
            <div class="researchY">${Status} ${researchYr}</div>
            </div>
        
            <!--LINK BUTTON-->
            <div class="d-flex justify-content-end" style="margin-right:5%;">
            
            <a href="${link}" class="button button-accent button-small text-right button-abstract" target="_blank">LINK</a>
            </div>
            </td>
            </tr>
            `)
        );
    researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
