/*/*
This is empty on purpose! Your code to build the resume will go here.
*/



/*var awesomeThoughts = "Awesome";
var new1 =  awesomeThoughts.replace("Awesome","Fun");
console.log(new1);*/

/* var name = "Aziz Khilawala";
var role = "User Experience Desginer & Developer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
var picture = "images/solo.jpg"
var biopic = HTMLbioPic.replace("%data%",picture);
var mobileNumber = "+91-9930816776";
var mobileInfo = HTMLcontactGeneric.replace("%data%",mobileNumber).replace("%contact%","Contact Me");
var welcome = "Hello Humans, feel free to explore the story of my life";
var welcomeMessage = HTMLwelcomeMsg.replace("%data%",welcome);*/


/*$("#header").append(slicing('audacity'));*/
/*audacity Udacity*/

/*var skills = ["HTML","CSS","JavaScript"];
skills = skills.join(" , ");
var skillsInfo = HTMLskills.replace("%data%",skills);*/
/*function slicing(stringName){
var firstChar = stringName.slice(1,2);

var upper = firstChar.charAt(0).toUpperCase();

var fullString = upper + stringName.slice(2);
return fullString;
}*/

//created object called bio using object literal notation; object literal notation can be identified by curly braces {}
/*var bio = {
"name" : formattedName,
"role" : formattedRole,
"contact" : {
"mobile" : mobileInfo,
"email": "azizkhilawala@gmail.com",
"twitter": "@azizkhilawala",
"github": "https://github.com/azizkhilawala",
"blog": "www.aziz.khilawala.com",
"location": "Mumbai , India"
},
"picture" : biopic,
"welcomeMessage" : welcomeMessage,
"skills" : skillsInfo
};

$("#header").prepend(bio.welcomeMessage);
$("#header").prepend(bio.role);
$("#header").prepend(bio.name);
$("#header").prepend(bio.picture);

$("#topContacts").prepend(bio.contact.mobile);
$("#topContacts").prepend(HTMLemail.replace("%data%",bio.contact.email));
$("#topContacts").prepend(HTMLtwitter.replace("%data%",bio.contact.twitter));
$("#topContacts").prepend(HTMLgithub.replace("%data%",bio.contact.github));
$("#topContacts").prepend(HTMLblog.replace("%data%",bio.contact.blog));
$("#topContacts").prepend(HTMLlocation.replace("%data%",bio.contact.location));

$("#topContacts").prepend(HTMLskillsStart);
$("#skills").prepend(bio.skills);

var work = new Object();

work.jobPosition = "Consultant";
work.employer = "Quinnox Consultany Services";
work.city = "Mumbai";
work.yearsWorked = "1.5 years";

var education = new Object();

education["lastSchool"] = "M.H Saboo Siddik College of Engineering";
education["yearsAttended"] = "August 2010 -  June 2014";
education["schoolCity"] = "Mumbai";

$("#workExperience").prepend(HTMLworkStart);
$("#workExperience").append(HTMLworkTitle.replace("%data%",work.jobPosition));

$("#education").prepend(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%",education["lastSchool"]));

var school = {
"junior" : [{
"name" : "St Peter's school",
"city": "Mumbai",
"degree" : "ICSE",
"major" : ["Science","Maths"]
},
{
"name" : "M.H Saboo Siddik COE",
"city" :"Mumbai",
"degree" : "Bachelor of Engineering",
"major" : "Computer Science"
}
]
};
*/

//1. work object
var work = {

	"jobs" : [
		{
			"employer" : "Quinnox Consultany Services",
			"title" : "Consultant",
			"location" : "SEEPZ, Andheri(East), Mumbai, India",
			"dates" : "August 2014 to Present",
			"description" : "Working for a client named Waste Management(WM) Inc. In the first year, I worked in production support under the OCS project (Onboard Computing System). Later shifted to development project named OPUS (Opeations Performance and Utility System). Currently working as a UI / Java / Support resource in OPUS. In a nutshell, Worked as a developer on various applications. Also Provided L2 & L3 support. Fixed user interface fixes to enhance the usability of the applications."
		},
		{
			"employer" : "Tata Institute of Fundamental Research (TIFR)",
			"title" : "Project Intern",
			"location": "Navy Nagar, Colaba, Mumbai, India",
			"dates" : "March 2013 - March 2014",
			"description" : "Developed a web application used to manage the class B-IPv4 network and associated subnets at TIFR."
		}
	]

};


// $("div.work-entry").prepend(HTMLworkEmployer.replace("%data%",work.jobs[0].employer));

// $("#workExperience").prepend(HTMLworkStart);
// $("div.work-entry>a").prepend(HTMLworkTitle.replace("%data%",work.jobs[0].title));
// $('HTMLworkEmployer').append(HTMLworkTitle.replace("%data%",work.jobs[0].title));
// $("div.work-entry").prepend(HTMLworkEmployer.replace("%data%",work.jobs[0].employer));

function displayWork(){
	for(job in work.jobs){
		if(work.jobs[job]){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer =  HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

displayWork();

//append button
$('#main').append(internationalizeButton);

// $("#workExperience").append(HTMLworkEmployer.replace("%data%",work.jobs[0].employer));



//2. projects object
var projects = {

	"projects" : [
		{
			"title" : "OPUS (Operations Performance and Utility System)",
			"dates" : "Jan 2016 - Present",
			"description" : "OPUS is a platform where all proprierty WM applications data is integrated for reporting purposes",
			"images" : "images/OPUS.gif"
		},
		{
			"title" : "OCS (Onboard Computing System)",
			"dates" : "October 2014 - December 2015",
			"description" : "OCS (Onboard Computing System) is a order execution system. OCS has two primary components: the OBU and OCSD. An OBU (On-Board Unit), is a computer in the truck that runs the Route Assistant (RA) software. The RA shows all stops/tickets on a route, and the  driver uses the computer to identify specific information such as stops start and finish times, landfill times and weights, exceptions, downtimes, etc.",
			"images" : "images/OCS.png"
		},
		{
			"title" : "Perfect Steel Furniture",
			"dates" : "February 2014",
			"description":"Developed a corporate website for Perfect Steel Furniture, a known manufacturer delivering perfect steel furniture for residential and commercial use.",
			"images": "images/PSFlogo.png"
		}
	]
};

projects.display = function(){

	for(project in projects.projects){
		if(projects.projects[project]){
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			var formattedProjectDate = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			var formattedProjectImages = HTMLprojectImage.replace("%data%",projects.projects[project].images);
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDate);
			$(".project-entry:last").append(formattedProjectDescription);
			$(".project-entry:last").append(formattedProjectImages);
		}
	}
};
projects.display();


//3. bio object
var bio = {
	"name" : "Aziz Khilawala",
	"role" : "User Experience Desginer & Developer",
	"welcomeMessage" : "Hello Humans, feel free to explore the story of my life",
	"bioPic" : 'images/solo.jpg',
	"contacts" : {
		"mobile" : "91-9930816774",
		"email" : "azizkhilawala@gmail.com",
		"github" : "https://github.com/azizkhilawala",
		"twitter" : "@azizkhilawala",
		"location" : "Cotton Green, Mumbai, India",
		"blog": "http://www.aziz.khilawala.com"
	},
	"skills" : ["HTML","CSS","JavaScript"]
};


$("#header").prepend(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
$("#header").prepend(HTMLbioPic.replace("%data%",bio.bioPic));
$("#topContacts").prepend(HTMLblog.replace("%data%",bio.contacts.blog));
$("#topContacts").prepend(HTMLgithub.replace("%data%",bio.contacts.github));
$("#topContacts").prepend(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$("#topContacts").prepend(HTMLemail.replace("%data%",bio.contacts.email));
$("#topContacts").prepend(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#header").prepend($("#topContacts"));
$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

$("#footerContacts").prepend(HTMLblog.replace("%data%",bio.contacts.blog));
$("#footerContacts").prepend(HTMLgithub.replace("%data%",bio.contacts.github));
$("#footerContacts").prepend(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$("#footerContacts").prepend(HTMLemail.replace("%data%",bio.contacts.email));
$("#footerContacts").prepend(HTMLmobile.replace("%data%",bio.contacts.mobile));


if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var skills1 =  bio.skills[0];
	$("#skills").append(HTMLskills.replace("%data%",skills1));
	skills1 = bio.skills[1];
	$("#skills").append(HTMLskills.replace("%data%",skills1));
	skills1 = bio.skills[2];
	$("#skills").append(HTMLskills.replace("%data%",skills1));
	skills1 = bio.skills[3];
}

//4. education object
var education = {
	"schools" : [
		{
			"name" : "St Peter's school",
			"location": "Shivdas Champsi Marg, Mazgaon, Mumbai, India",
			"degree" : "ICSE",
			"major" : "Science",
			"dates" : "March 1996 - March 2008",
			"url" : "http://www.stpetersschool.net.in"
		},
		{
			"name" : "B.J.P.C Jr College",
			"location" : "Charni Road, Mumbai, India",
			"degree" : "H.S.C",
			"major" : "Science",
			"dates" : "August 2008 - April 2010",
			"url" : "http://www.bjpci.org"
		},
		{
			"name" : "M.H Saboo Siddik COE",
			"location" :"Byculla, Mumbai, India",
			"degree" : "Bachelor of Engineering",
			"major" : "Computer Science",
			"dates" : "August 2010 - May 2014",
			"url" : "http://www.mhssce.ac.in"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Food Nutrition & your Heath",
			"school" : "Open2Study.com",
			"dates" : "11th February 2014",
			"url" : "https://www.open2study.com"
		},
		{
			"title" : "Basic Physics",
			"school" : "Open2Study.com",
			"dates" : "18th March 2014",
			"url" : "https://www.open2study.com"
		},
		{
			"title" : "Responsive Web Design Fundamentals",
			"school" : "Udacity.com",
			"dates" : "November 2015",
			"url" : "https://www.udacity.com"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity.com",
			"dates" : "January 2015",
			"url" : "https://www.udacity.com"
		},
		{
			"title" : "Discover Dev Tools",
			"school" : "Codeschool.com",
			"dates" : "November 2015",
			"url" : "https://www.codeschool.com"
		}
	]
};

education.display = function(){
	for(edu in education.schools){
		if(education.schools[edu])	{
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%",education.schools[edu].name);
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[edu].location);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[edu].degree);
			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[edu].major);
			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[edu].dates);
			var formattedNameDegree = formattedName + formattedDegree;
			$(".education-entry:last").append(formattedNameDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedMajor);
			$(".education-entry:last").append(formattedLocation);
		}
	}
	$("#education").append(HTMLonlineClasses);
	$("#education h3").after(HTMLschoolStart);
	for(online in education.onlineCourses){
		if(education.onlineCourses[online]){
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[online].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[online].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[online].dates);
			var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[online].url);
			var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
			$(".education-entry:last").append(formattedOnlineTitleSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineUrl);
		}
	}
};

education.display();

$("#mapDiv").append(googleMap);


var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
		var firstName;
		var lastName;
    if(Array.isArray(names)){
    for(var i=0;i<names.length;i++){
		names[i] = names[i].split(" ");
		names[i].reverse();
		names[i] = names[i][0] +" "+ names[i][1];
}
names = names.sort();
// console.log(names[0][0]);
// for(var j=0;j<names.length;j++){
// 	{
// 		names[j] = names[j][0] +" "+ names[j][1];
// 	}
// }
return names.join("\n");
}
}
// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));


// page speed insights example

// Create a totalBytes(psiResults) function that iterates through pageStats in the psiResults object and returns the total number of bytes to load the website.
//
// Then, create a ruleList(psiResults) function that iterates through the localizedRuleNames in ruleResults and returns an array of their strings.

var psiResults;

psiResults = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
   "AvoidBadRequests": {
    "localizedRuleName": "Avoid bad requests",
    "ruleImpact": 0.0
   },

   "MinifyJavaScript": {
    "localizedRuleName": "Minify JavaScript",
    "ruleImpact": 0.1417,
    "urlBlocks": [
     {
      "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },

       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },

   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
}

var sum = 0;
function totalBytes(psiResults){
	for(bytes in psiResults.pageStats){
		if(bytes.match("Bytes"))
			sum = sum + Number(psiResults.pageStats[bytes]);
	}
	return sum;
}
console.log(totalBytes(psiResults));

var nameArray = [];
function ruleList(psiResults){
	for(names in psiResults.formattedResults.ruleResults){
		nameArray.push(psiResults.formattedResults.ruleResults[names].localizedRuleName);
	}
	return nameArray;
}

console.log(ruleList(psiResults));
