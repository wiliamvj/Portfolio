const portfolioData = { 
	"imageUrl": 'http://localhost:3000/',
	"logo": "images/app-logo.svg",
	"logoWhite": "images/app-logo-white.svg",
	"name": 'Wiliam V. Joaquim',
	"role": 'Full Stack Developer',
	"intro": "Talking is easy. Show me the code.",
	"projects": [
		{
			"id": 0,
			"title": "Movie Library using React/Redux",
			"imageUrl": "images/portfolio/movie-app-thumbnail.png",
			"link": "https://movie-db-app.netlify.com/discover/popular/",
			"codeLink": "https://github.com/jrussumbrella/react-movie-library",
			"description": "This projects fetches data from themovied.org api. It basically display all popular, top rated, upcoming movies from the api. View and search info to certain movie.",
			"technology": ["HTML/CSS", "SASS(SCSS)/ CSS Modules/ Styled Component", "React", "Redux"],
		},	
		{
			"id": 1,
			"title": "Hataw Ecommerce Website",
			"imageUrl": "images/portfolio/hataw-thumbnail.png",
			"link": "https://hataw.ph/shop/",
			"codeLink": "",
			"description": "Hataw is an Ecommerce website that provides low cost and high quality products. Im the one who do the front end stuff in this project.",
			"technology": ["HTML/CSS", "SASS(SCSS)", "Javascript", "Zepto Js / Jquery"],
		},
		{
			"id": 2,
			"title": "Hataw Web",
			"imageUrl": "images/portfolio/hataw-web.png",
			"link": "https://hataw.netlify.com/",
			"codeLink": "",
			"description": "Hataw Web is a projects that show all quality products. It is just for showcasing all the low cost and high quality products",
			"technology": ["HTML/CSS", "SASS(SCSS)", "React"],
		},
		{
			"id": 3,
			"title": "Hataw Ecommerce (Wap)",
			"imageUrl": "images/portfolio/hataw-wap.png",
			"link": "https://hataw.ph/wap/",
			"codeLink": "",
			"description": "Hataw Ecommerce (Wap) is a mobile web version.",
			"technology": ["HTML",  "SASS/SCSS", "Zepto Js"]				
		},
		{
			"id": 4,			
			"title": "Paper Todo App using React",
			"imageUrl": "images/portfolio/react-todo-thumbnail.png",
			"link": "",
			"codeLink": "https://github.com/jrussumbrella/react-paper-todo",
			"description": "Simple to do app that uses local storage to save to do list.",
			"technology": ["HTML", "Paper CSS", "React"]			
		},
		{
			"id": 5,
			"title": "MHI 2K18 Web based Tabulation System Demo",
			"imageUrl": "images/portfolio/mhi-thumbnail.jpg",
			"link": "",
			"codeLink": "https://github.com/jrussumbrella/mhi-web-based-tabulation",
			"description": "It is a network based system that I developed to easily tabulate the scored of certain candidates per judge.",
			"technology": ["HTML/CSS", "Bootstrap", "Javascript/Jquery", "Mysql", "PHP" ]				
		},
		{
			"id": 6,			
			"title": "Online Registration using Laravel",
			"imageUrl": "images/portfolio/attendance-thumbnail.png",
			"link": "http://doitpsualaminos.herokuapp.com/",
			"codeLink": "",
			"description": "Online Registration for certain activities in our school.",
			"technology": ["HTML/CSS", "Bootstrap", "Javascript/Jquery", "Laravel"]				
		},
		{
			"id": 7,
			"title": "Java Made Easy Android App",
			"imageUrl": "images/portfolio/java-made-app.jpg",
			"link": "",
			"codeLink": "https://github.com/jrussumbrella/java-made-easy",
			"description": "This projects was my thesis that aimed to help those students especially IT students or those people who wants to learn java programming language.",
			"technology": ["XML","Java"]				
		},								
		],
	"skills": [
		{
			"name": "HTML/CSS",
			"percentage": 80
		},
		{
			"name": "Javascript",
			"percentage": 80
    },
    {
			"name": "NodeJS",
			"percentage": 70
		},
		{
			"name": "React",
			"percentage": 60
    },
    {
			"name": "React Native",
			"percentage": 40
    },					
	],
	"workExp": [
		{
			"title": "Front-end Developer",
			"date" : 'June 2017- June 2019',
			"description": "Converting mockup designs into web pages, making sure it's mobile responsive and cross browser compatible. Maintaing and improving website.",
			"company": 'E-Creations Inc.'
		},
		{
			"title": "Junior Software Engineer (Intern)",
			"date" : 'January 2017 - May 2017',
			"company": 'Advanced Techinnovations Systems',
			"description": " Works as junior software engineer and help senior developer in developing the Hanap Trabaho web application."
		},				
	]	
 
}

export default portfolioData;