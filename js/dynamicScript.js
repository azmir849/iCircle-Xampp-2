//function to set about
var base_url = "https://icircles.app/";
let username = "";
let authorImgUrl = "";
aboutRender = (about) => {
  username = about.username;//for globally access

  //user tab name
  username = about.username;
  document.getElementById("tabName").innerHTML = `${about.username}`;


  //Left side bar
  authorImgUrl = base_url+about.thumb;
  document.getElementById('authorImg').style.backgroundImage=`url(${authorImgUrl})`;
  let fName = about.firstname;
  let lName = about.lastname;
  let fullName = fName.concat(" ", lName);
  const nameLength = fullName.length;
  if(nameLength>16){
    document.getElementById("johnDoe-logo").style.fontSize = "15px";
  }
  document.getElementById("johnDoe-logo").innerHTML = `<a href="#">${fullName}</a>`;
  document.getElementById("johnDoeSideBarDesignation").innerHTML = `${about.designation}`;
  
  //Top home about
  document.getElementById("homeUserFullName").innerHTML = `${fullName}`;

  const aboutMeLength = about.about_me.length;
  console.log("About me length" +aboutMeLength);
  if(aboutMeLength>50){
    document.getElementById("homeUserAbout").style.textAlign = "left";
  }

  //About description
  let htmlText = "";
  const strShort = about.about_me;
  const strlong = about.about_me;
  // 👇️ First 25 words
  const shortDescription = strShort.split(" ").slice(0, 30).join(" ");
  const longDescription = strlong.split(" ").slice(31, 100).join(" ");

  if(shortDescription.length<50){
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("homeUserAbout").innerHTML = `${about.about_me}`;
  }else{
    htmlText = `
    <div><span id="shortTitle">${shortDescription}</span><span id="dots"> ... </span></div>
    <div id="more">${longDescription}</div>
    `;
    document.getElementById("homeUserAboutDiv").innerHTML = htmlText;
  }
 
 


  // Resume url
  document.getElementById("ResumeUrl").href = base_url + about.resume;
  
//Social Icons
  let socialIcon = ``;
  if (about.facebook) {
    socialIcon += `<a style="color: #696969;" href=${about.facebook} role="button"><i class="fab fa-facebook-f fa-lg"></i></a>`;
  }
  if (about.twitter) {
    socialIcon += `<a style="color: #696969;" href=${about.twitter} role="button"><i class="fab fa-twitter fa-lg"></i></a>`;
  }
  if (about.instagram) {
    socialIcon += `<a style="color: #696969;" href=${about.instagram} role="button"><i class="fab fa-instagram fa-lg"></i></a>`;
  }
  if (about.linkedin) {
    socialIcon += `<a style="color: #696969;" href=${about.linkedin} role="button"><i class="fab fa-linkedin fa-lg"></i></a>`;
  }
  if (about.github) {
    socialIcon += `	<a style="color: #696969;" href=${about.github} role="button"><i class="fab fa-github fa-lg"></i></a>`;
  }
  if (about.whatsapp) {
    socialIcon += `	<a style="color: #696969;" href=${about.whatsapp} role="button"><i class="fab fa-whatsapp fa-lg"></i></a>`;
  }
  if (about.skype) {
    socialIcon += `	<a style="color: #696969;" href=${about.skype} role="button"><i class="fab fa-skype fa-lg"></i></a>`;
  }
  document.getElementById("socilaMediaBg").innerHTML = socialIcon;

  //About section
  document.getElementById("aboutHeading").innerHTML = `My name is ${about.firstname} ${about.lastname}`;
  // document.getElementById("aboutDescription").innerHTML = about.about_me;
  
  //About achievement

  //About 
  let details = ``;
  if (about.email) {
    details += `
      <div  class="col-md-4">
        <h2><img src="./images/paperPlaneIcon.png">${about.email}</h2>
      </div>`;
  }
  if (about.phone) {
    details += `
      <div class="col-md-4">
        <h2><img src="./images/phoneIcon.png">${about.phone}</h2>
      </div>`;
  }
  if (about.country) {
    details += `
    <div class="col-md-4">
    <h2><img src="./images/web.png">${about.country}</h2>
  </div>
    `;
  }
  if (about.city) {
    details += `
    <div class="col-md-4">
    <h2><img src="./images/city.png">${about.city}</h2>
  </div>
    `;
  }
  if (about.address) {
    details += `
    <div class="col-md-4">
    <h2><img src="./images/location.png">${about.address}</h2>
  </div>
    `;
  }
  if (about.mobile) {
    details += `
    <div class="col-md-4">
    <h2><img src="./images/mobile.png">${about.mobile}</h2>
  </div>
    `;
  }
  if (about.web_site) {
    details += `
    <div class="col-md-4">
    <h2><img src="./images/link.png">${about.web_site}</h2>
  </div>
    `;
  }

  document.getElementById("aboutDetails").innerHTML = details;
};
//function to set profile photos
myphotosRender = (profile_images) => {
  let htmlText = "";
  profile_images.map((profilePhoto)=>{
      htmlText += `
       <div class="col-md-4 mb-5 animate-box aboutMeImage" data-animate-effect="fadeInTop">
          <img src="https://icircles.app/uploads/user/${username}/${profilePhoto.image}" style='height: 100%; width: 100%; object-fit: contain'>
       </div>
      `
  });
  document.getElementById("aboutPhotos").innerHTML = htmlText;
  //alert(document.getElementById("myPhotos"));
};

//function to set portfolio video
profileVideoRender = (portfolioVideo) =>{
  let htmlText = "";
  portfolioVideo.map((videoData)=>{
      htmlText += `
  
      <div class="banner_thumb ">
				<div class="home_img wow slideInRight" data-wow-duration="1.5s" data-wow-delay=".1s">
							<img src=${authorImgUrl} alt=""  style='height: 100%; width: 100%; object-fit: contain'>
				</div>
				<div class="play">
          <a class="venobox" data-autoplay="true" data-vbtype="video" href="https://icircles.app/uploads/user/${username}/${videoData.video}"> <i class="fas fa-play-circle"></i></a>
				</div>
			</div>
      `;
  });
  document.getElementById("profileVideo").innerHTML = htmlText;
};
//function to set work experiences
workExperienceRender = (experiences) => {
  var length = experiences.length;
  if(length===0){
    document.getElementById("experienceDiv").style.display= "none";
  }

  let htmlText = "";
  experiences.map((expData) => {
    let end_date = expData.to_date.split("-");
    const thatYear = new Date(expData.from_date);
    let year = thatYear.getFullYear();
      htmlText += `
      <div class="row experience  mt-5">
					<div class="col-md-4 text-right experienceLeftCol">
							<h3>${expData.company_name}</h3>
							<h3 class="mt-4">${year}</h3>
					</div>
					<div class="col-md-8">
							<h3><span><img src="./images/Tube.png" width="3%" height="3%"></span> <span style="color: #1c9d5d;font-weight: bold;">${expData.job_title}</span></h3>
							<h3 class="ml-5">${expData.details}</h3>
				  </div>
			 </div>

      `;
   
  });
  document.getElementById("experienceFullCard").innerHTML = htmlText;
};

//function to set Skills
skillRender = (skills) => {
  var length = skills.length;
  if(length===0){
    document.getElementById("skillsDiv").style.display= "none";
  }

  let htmlText = "";
  skills.map((skills) => {
    if (skills.skill_level == "Advanced") {
      htmlText += `
      <div class="col-md-6 animate-box mb-5" data-animate-effect="fadeInLeft">
				<div class="progress-wrap">
					<h3>${skills.name}</h3>
					<div class="progress">
						<div class="progress-bar color-1" role="progressbar" aria-valuenow="90"
							aria-valuemin="0" aria-valuemax="100" style="width:90%">
							<span>90%</span>
						</div>
					</div>
				</div>
			</div>
            `;
    }
    if (skills.skill_level == "Intermediate") {
      htmlText += `
      <div class="col-md-6 animate-box mb-5" data-animate-effect="fadeInLeft">
      <div class="progress-wrap">
      <h3>${skills.name}</h3>
        <div class="progress">
          <div class="progress-bar color-1" role="progressbar" aria-valuenow="60"
            aria-valuemin="0" aria-valuemax="100" style="width:60%">
            <span>60%</span>
          </div>
        </div>
      </div>
    </div>
            `;
    }
    if (skills.skill_level == "Beginner") {
      htmlText += `
      <div class="col-md-6 animate-box mb-5" data-animate-effect="fadeInLeft">
      <div class="progress-wrap">
      <h3>${skills.name}</h3>
        <div class="progress">
          <div class="progress-bar color-1" role="progressbar" aria-valuenow="30"
            aria-valuemin="0" aria-valuemax="100" style="width:30%">
            <span>30%</span>
          </div>
        </div>
      </div>
    </div>
            `;
    }
  });
  document.getElementById("skillBar").innerHTML = htmlText;
};

// function to set user educations information
educationsRender = (educations) => {
  var length = educations.length;
  if(length===0){
    document.getElementById("educationDiv").style.display= "none";
  }

  let htmlText = "";
  educations.map((eduData) => {
    let end_date = eduData.to_date.split("-");
    const thatYear = new Date(eduData.from_date);
    let year = thatYear.getFullYear();
      htmlText += `
      <div class="col-md-3 p-3 m-5 animate-box educationCard text-center" data-animate-effect="fadeInLeft">
        <img src="./images/educationIcon.png">
        <h3 class="mt-3">${eduData.degree_name}</h3>
        <button>${year}</button>
    </div>
      `;
  });
  document.getElementById("educationSectionData").innerHTML = htmlText;
};

//function to set services
serviceRender = (services) => {
  var length = services.length;
  if(length===0){
    document.getElementById("servicesDiv").style.display= "none";
  }

  let htmlText = "";
  services.map((serviceData) => {
    const str = serviceData.details;
    // 👇️ First 25 words
    const shortDescription = str.split(" ").slice(0, 25).join(" ");

    htmlText += ` 
    <div  class="col-md-4 animate-box">
    <a class="card1" href="#">
      <h3 class="mt-5 font-weight-bold">${serviceData.service_name}</h3>
      <p class="small cardShortDes">${shortDescription}  ...</p>
      <div class="go-corner" href="#">
        <div class="go-arrow">
        <i class="${serviceData.fa_class}"></i>
        </div>
      </div>
      </a>
  </div>
    `;
  });
  document.getElementById("servicesData").innerHTML = htmlText;
};

//function to set languages
languageRender = (languages) => {
  var length = languages.length;
  if(length===0){
    document.getElementById("languageDiv").style.display= "none";
  }


  let htmlText = "";
  languages.map((languages) => {
    htmlText += `
    <div class="col p-0 mt-5 languageTriangle animate-box">
		  <h2>${languages.title}</h2>
		  <img src="./images/triangle.png" alt="" style="width:200px;">
		  <div class="centered">${languages.level}</div>
		</div>  
    `;
  });
  document.getElementById("languageSectionData").innerHTML = htmlText;
};

//function to set portfolio
portfolioRender = (portfolios) => {
  var length = portfolios.length;
  if(length===0){
    document.getElementById("portfolioDiv").style.display= "none";
  }

  let htmlText = "";
  const keys = Object.keys(portfolios);
  keys.map((key, index) => {
    portfolios[key].map((item, index) => {
    htmlText +=`
    <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
    <div class="portfolio-entry">
      <a href="" class="portfolio-img"><img src="${base_url + "/" + item.image}" height="90%" width="90%"
          class="img-responsive" alt=""></a>
    </div>
  </div>
    `;
  })
});

  document.getElementById("portfolioData").innerHTML = htmlText;
};

//function to set awards
awardRender = (awards) => {
  var length = awards.length;
  if(length===0){
    document.getElementById("awardDiv").style.display= "none";
  }

  let htmlText = "";
  awards.map((awardData) => {
    const thatYear = new Date(awardData.created_date);
    let year = thatYear.getFullYear();
    const str = awardData.details;
    // 👇️ First 25 words
    const shortDescription = str.split(" ").slice(0, 25).join(" ");
    htmlText += `
    <div class="col-md-5 col-sm-12 m-5 animate-box" data-animate-effect="fadeInLeft">
				<div class="card awardsCard">
					<div class="card-body">
						<img src="images/award.png" height="10%" width="10%"class="img-responsive" alt="">
						<h2 class="card-title ml-5 mt-4">${awardData.title} - ${year}</h2>
						<p class="card-text ml-5">${shortDescription} ...</p>
					</div>
					</div>
			</div>  
    `;
  });
  document.getElementById("awardSectionData").innerHTML = htmlText;
};


//function to set interests
interestRender = (interest) => {
  var length = interest.length;
  if(length===0){
    document.getElementById("interestDiv").style.display= "none";
  }

  let htmlText = "";
  interest.map((interestData) => {
    htmlText += `
    <div class="col-md-3 col3replace col-sm-6 animate-box mt-3 mb-5" data-animate-effect="fadeInLeft">
       <div class="clientCardElements text-center">
          <h2 class="mt-3">${interestData.title}</h2>
        </div>
      </div>
    `;
  });
  document.getElementById("interestSectionData").innerHTML = htmlText;
};

//function to set clients
clientRender = (clients) => {
  var length = clients.length;
  if(length===0){
    document.getElementById("clientDiv").style.display= "none";
  }

  let htmlText = "";
  clients.map((clientData)=>{
     if(clientData.image==null){
      htmlText += `
      <div class="col-md-3 col3replace col-sm-6 animate-box mt-3 mb-5" data-animate-effect="fadeInLeft">
       <div class="clientCardElements text-center">
          <h2 class="mt-3">${clientData.client_name}</h2>
        </div>
      </div>
      `
     }else if(clientData.image!=null ){
      htmlText += `
      <div class="col-md-3 col3replace col-sm-6 animate-box mt-3 mb-5" data-animate-effect="fadeInLeft">
       <div class="clientCardElements text-center">
          <img src="https://icircles.app/uploads/user/${username}/${clientData.image}" height="135px" width="135px" class="" alt="">
          <h2 class="mt-3">${clientData.client_name}</h2>
        </div>
      </div>
      `
     }
  });
  document.getElementById("clientSectionData").innerHTML = htmlText;
};

//function to set blogs or journal
blogRender = (blogs) => {
  var length = blogs.length;
  if(length===0){
    document.getElementById("blogDiv").style.display= "none";
  }

  let htmlText = "";
  const keys = Object.keys(blogs);
  keys.map((key) => {
    blogs[key].map((item) => {
      const thatYear = new Date(item.created_date);
      let year = thatYear.getFullYear();
      let day = thatYear.toLocaleString("en-US", { "weekday": "long" }); // Monday
      let month = thatYear.toLocaleString('en-us', { month: 'long' }); /* June */
      let date = thatYear.getDate() /* 9 */


      const str = item.description;
      // 👇️ First 25 words
      const shortDescription = str.split(" ").slice(0, 45).join(" ");
      const longtDescription = str.split(" ").slice(46, 120).join(" ");
      htmlText += `
      <div  class="row mb-5 list-element">
           <div class="col-md-1"></div>
							<div class="col-md-10 journalCard">
								<div class="row">
									<div class="col-md-4">
										<img class="blogImgInText" src=${base_url + "/" + item.image} style="border-radius: 5px;" height="100%" width="100%" class="" alt="">
									</div>
									<div class="col-md-8 journalRightText">
										<h2>${item.title}</h2>
										<p class="jounalDate">${day},${month} ${date},${year}</p>
										<p class="blogText">${shortDescription}</p>
									</div>
								</div>
								<p class="journalBodyText">${longtDescription}</p>
							</div>
							<div class="col-md-1"></div>
        </div>
      `;
    });
  });
  document.getElementById("journalSectionData").innerHTML = htmlText;
  
};

//function to set references
referenceRender = (references) => {
  var length = references.length;
  if(length===0){
    document.getElementById("referenceDiv").style.display= "none";
  }

  let htmlText = "";
  references.map((referenceData)=>{
      htmlText += `
      <div class="col-md-3 col3replace col-sm-6 animate-box mt-3 mb-5" data-animate-effect="fadeInLeft">
				<div class="clientCardElements text-center">
					<img src="images/client1.png" height="135px" width="135px" class="" alt="">
					<h2 class="mt-3">${referenceData.name}</h2>
					<p class="">${referenceData.email}</p>
				</div>
			</div>
      `;
     });
  document.getElementById("referencesData").innerHTML = htmlText;
};


//function to set the whole ui
render = (data) => {
  aboutRender(data.about);
  myphotosRender(data.profile_images);
  profileVideoRender(data.profile_video);
  workExperienceRender(data.experiences);
  skillRender(data.subskills);
  educationsRender(data.educations);
  serviceRender(data.services);
  languageRender(data.languages);
  portfolioRender(data.portfolios);
  awardRender(data.awards);
  interestRender(data.interests);
  clientRender(data.clients);
  blogRender(data.blogs);
  referenceRender(data.references);
};


//Fetch api
var url = document.URL;
let usrnm = url.split('/'); 
fetch("https://icircles.app/api/profile/usermicrosite/"+usrnm[usrnm.length-1])
  .then((responsse) => responsse.json())
  .then((data) => { 
    console.log(data);
    render(data);
  });

//Get dynamic aside ul list
fetch("https://icircles.app/api/profile/usermicrosite/"+usrnm[usrnm.length-1])
  .then((responsse) => responsse.json())
  .then((data) => { 
  
    //Get all the field length
    const experienceLength = data.experiences.length;
    const subskillsLength = data.subskills.length;
    console.log(subskillsLength);
    const servicesLength = data.services.length;
    const educationsLength = data.educations.length;
    const languagesLength = data.languages.length;
    const referencesLength = data.references.length;
    const clientsLength = data.clients.length;
    const interestsLength = data.interests.length;
    const awardsLength = data.awards.length;
    const portfoliosLength = Object.keys(data.portfolios).length;
    const blogsLength = Object.keys(data.blogs).length;
    const testimonialsLength = data.testimonials.length;

    let asideUl = ``;
    if (data.user_id) {
      asideUl += `
      <li><a href="#johnDoe-hero" data-nav-section="home">Home</a></li>
        `;
    }
    if (data.user_id) {
      asideUl += `
      <li><a href="#aboutDiv" data-nav-section="about">About</a></li>
        `;
    }
    if (experienceLength>=1) {
      asideUl += `
      <li><a href="#experienceDiv" data-nav-section="experience">Experience</a></li>
        `;
    }
    if (subskillsLength>=1) {
      asideUl += `
      <li><a href="#skillsDiv" data-nav-section="skills">Skills</a></li>
        `;
    }
    if (educationsLength>=1) {
      asideUl += `
      <li><a href="#educationDiv" data-nav-section="education">Education</a></li>
        `;
    }
    if (servicesLength>=1) {
      asideUl += `
    	<li><a href="#servicesDiv" data-nav-section="service">Services</a></li>
        `;
    }
    if (languagesLength>=1) {
      asideUl += `
      <li><a href="#languageDiv" data-nav-section="language">Languages</a></li>
        `;
    }
    if (portfoliosLength>=1) {
      asideUl += `
      <li><a href="#portfolioDiv" data-nav-section="portfolio">Portfolio</a></li>
        `;
    }
    if (awardsLength>=1) {
      asideUl += `
      <li><a href="#awardDiv" data-nav-section="awards">Awards</a></li>
        `;
    }
    if (interestsLength>=1) {
      asideUl += `
      <li><a href="#interestDiv" data-nav-section="interests">Interests</a></li>
        `;
    }
    if (clientsLength>=1) {
      asideUl += `
      <li><a href="#clientDiv" data-nav-section="clients">Clients</a></li>
        `;
    }
    if (blogsLength>=1) {
      asideUl += `
      <li><a href="#blogDiv" data-nav-section="journal">Journal</a></li>
        `;
    }
    if (referencesLength>=1) {
      asideUl += `
      <li><a href="#referenceDiv" data-nav-section="reference">References</a></li>
        `;
    }
    if (data.user_id) {
      asideUl += `
      <li><a href="#appointmentDiv" data-nav-section="appoinment">Appointment</a></li>
        `;
    }
    if (data.user_id) {
      asideUl += `
      <li id="lastlI"><a href="#contactDiv" data-nav-section="contact">Contact</a></li>
        `;
    }


    document.getElementById("asideUlList").innerHTML = asideUl;

//For testing
  //   const keys = Object.keys(data);
  //   console.log(keys);
  //   console.log("field name" +keys[1]);
  //   var length = data.microsites.length;
  //   var length2 = data.experiences.length;
  //   console.log("fileld length "+length);
  //   console.log("experiences fileld length "+length2);

  // if(data.user_id){
  //   alert("User ID is "+ data.user_id);
  // }

  //   if(keys[1]==="username"){
  //     alert("Username is "+ data.username);
  //   }else{
  //     alert("Username not found");
  //   }
  });


