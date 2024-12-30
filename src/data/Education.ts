type Cards = {
    CardClass: string,
    CertificateUrl: string,
    imgUrl: string,
    imgAlt: string,
    Degree: string,
    Name: string,
    Location: string,
    Date: string,
    Duration: string,
}[]

export let Education: Cards = [
    { CardClass: 'CardEdu Card1', CertificateUrl: 'Documents/SSC-Marksheet.pdf', imgUrl: 'assets/Images/School.png', imgAlt: 'School', Degree: '10th SSC - Semi English', Name: 'New English School', Location: 'Adgaon, Nashik, Maharashtra', Date: '2018', Duration: '1 Year'},
    { CardClass: 'CardEdu Card2', CertificateUrl: 'Documents/ITI-ConsolidatedMarksheet_R180827051938.pdf', imgUrl: 'assets/Images/MVP.png', imgAlt: 'MVP', Degree: 'Industrial Training Institute', Name: `NDMVP Samaj's ITI`, Location: 'Nashik, Maharashtra', Date: 'Aug 2018 - May 2021', Duration: '2 Year' },
    { CardClass: 'CardEdu Card1', CertificateUrl: 'Documents/Electrical-Diploma-Final-Sem-Marsheet.pdf', imgUrl: 'assets/Images/MET.png', imgAlt: 'MET', Degree: 'Diploma - Electrical', Name: 'Met Bhujbal Knowledge City', Location: 'Adgaon, Nashik, Maharashtra', Date: 'Oct 2021 - Jun 2023', Duration: '2 Year' },
    { CardClass: 'CardEdu Card2', CertificateUrl: 'Documents/Abhijeet Dhikale-FSD-Java-Certificate.pdf', imgUrl: 'assets/Images/Seed.png', imgAlt: 'Java Certificate', Degree: 'Full Stack Developer - Java Plus', Name: 'Seed Infotech', Location: 'Nashik, Maharashtra', Date: 'Nov 2023 - Oct 2024', Duration: '6 Months' },
    { CardClass: 'CardEdu Card1', CertificateUrl: '', imgUrl: 'assets/Images/YCMOU.png', imgAlt: 'Certificate', Degree: 'Bachelor of Computer Application', Name: 'YCMOU', Location: 'Nashik, Maharashtra', Date: 'Sep 2023 - Present', Duration: 'Appear' }
]