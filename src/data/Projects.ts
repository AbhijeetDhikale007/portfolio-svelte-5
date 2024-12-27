type Cards = { Title: string, Logo: string, Type: string, urlGit: string, urlDeploy: string, Duration: string, Details: string, From: string, To: string, SVG1: string, SVG2: string, SVG3?: string, SVG4?: string, SVG5?: string, SVG6?: string, SVG7?: string, SVG8?: string, SVG9?: string, SVG10?: string }[]

export let Project: Cards = [
    { Title: 'Portfolio', Logo: 'Icons/React.svg', Type: 'Website', urlGit: 'https://github.com/AbhijeetDhikale007/Porfolio', urlDeploy: 'https://abhijeetdhikale007.vercel.app', Duration: '2 Months 25 Days', Details: 'Developed a personal portfolio website using React showcasing skills in web development. It includes header, hero, navbar, profile, education, skills, contact, footer and some 3D interactive objects by using react- three-fiber.', From: '2 July 2024', To: '27 Sep 2024', SVG1: 'React', SVG2: 'Threejs' },
    { Title: 'Portfolio', Logo: 'Icons/Svelte.svg', Type: 'Website', urlGit: '', urlDeploy: '', Duration: '2 Months 16 Days', Details: 'Developed a more advanced personal portfolio website using Svelte showcasing skills in web development. It includes header, hero, navbar, profile, education, skills, contact and footer.', From: '2 Oct 2024', To: '18 Dec 2024', SVG1: 'Svelte', SVG2: 'Unocss' }
]