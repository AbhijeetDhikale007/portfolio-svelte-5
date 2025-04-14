import { PHP, C, CPlus, TypeScript, JavaScript, HTML, CSS, SCSS, UnoCSS, TailwindCSS, Bootstrap, WordPress, Webflow, Svelte, React, Angular, Threejs, MySQL, Postman, VSCode, GitHub, Firebase, Eclipse, IntelliJ } from "./SkillsPages"

type Type = {
    Page: any,
    name: string,
    class: string,
    SVG: string
}[]

const Skill1: Type = [
    { Page: PHP , name: 'PHP', class: 'SVG PHP', SVG: 'PHP' },
    { Page: C , name: 'C', class: 'SVG C', SVG: 'CLang' },
    { Page: CPlus, name: 'C++', class: 'SVG CPlus', SVG: 'CPlus' },
    { Page: TypeScript, name: 'TypeScript', class: 'SVG TypeScript', SVG: 'TypeScript' },
    { Page: JavaScript, name: 'JavaScript', class: 'SVG Javascript', SVG: 'JavaScript' }
]

const Skill2: Type = [
    { Page: HTML, name: 'HTML 5', class: 'SVG HTML', SVG: 'HTML' },
    { Page: CSS, name: 'CSS 3', class: 'SVG CSS', SVG: "CSS" },
    { Page: SCSS, name: 'SCSS', class: 'SVG SCSS', SVG: "Sass" },
    { Page: UnoCSS, name: 'UnoCSS', class: 'SVG UnoCSS', SVG: "Unocss" },
    { Page: TailwindCSS, name: 'Tailwind CSS', class: 'SVG Tailwind', SVG: "Tailwind" },
    { Page: Bootstrap, name: 'Bootstrap', class: 'SVG Bootstrap', SVG: "Bootstrap" }
]

const Skill3: Type = [
    { Page: WordPress, name: 'WordPress', class: 'SVG Wordpress', SVG: 'WordPress' },
    { Page: Webflow, name: 'Webflow', class: 'SVG Webflow', SVG: 'Webflow' }
]

const Skill4: Type = [
    { Page: Svelte, name: 'Svelte', class: 'SVG Svelte', SVG: "Svelte" },
    { Page: React, name: 'React', class: 'SVG React', SVG: "React" },
    { Page: Angular, name: 'Angular', class: 'SVG Angular', SVG: "Angular", },
    { Page: Threejs, name: 'Three js', class: 'SVG Threejs', SVG: "Threejs" },
]

const Skill5: Type = [
    { Page: MySQL, name: 'MySQL', class: 'SVG MySQL', SVG: "MySQL" }
]

const Skill6: Type = [
    { Page: Postman, name: 'Postman', class: 'SVG Postman', SVG: "Postman", }
]

const Skill7: Type = [
    { Page: VSCode, name: 'VSCode', class: 'SVG VSCode', SVG: 'VSCode' },
    { Page: GitHub, name: 'GitHub', class: 'SVG GitHub', SVG: 'GitHub' },
    // { Page: ProjectIDX, name: 'Project IDX', class: 'SVG ProjectIDX', SVG: 'IDX' },
    { Page: Firebase, name: 'Firebase Studio', class: 'SVG Firebase', SVG: 'Firebase' },
    { Page: Eclipse, name: 'Eclipse', class: 'SVG Eclipse', SVG: 'Eclipse' },
    { Page: IntelliJ, name: 'IntelliJ', class: 'SVG InteliJ', SVG: 'IntelliJ' },
]

export { Skill1, Skill2, Skill3, Skill4, Skill5, Skill6, Skill7 }