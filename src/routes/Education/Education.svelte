<script lang='ts'>
    import { fly } from 'svelte/transition'
    import { Heading } from '../../components/+components';
    import { EducationCard as Card } from '../../components/+components';
</script>

<div class='Education' in:fly={{y: 100, duration: 1000}}>
    <Heading HeadingTitle='Education' />
    <div class='EduDivWrap'>
        <div class='HR'></div>
        <div class="EduDiv">
            <Card CardClass='CardEdu Card1' CertificateUrl='Documents/SSC-Marksheet.pdf' imgUrl='assets/Images/School.png' imgAlt='School' Degree='10th SSC - Semi English' Name='New English School' Location='Adgaon, Nashik, Maharashtra' Date='2018' Duration='1 Year' />
            <Card CardClass='CardEdu Card2' CertificateUrl='Documents/ITI-ConsolidatedMarksheet_R180827051938.pdf' imgUrl='assets/Images/MVP.png' imgAlt='MVP' Degree='Industrial Training Institute' Name='NDMVP Samaj&apos;s ITI' Location='Nashik, Maharashtra' Date='Aug 2018 - May 2021' Duration='2 Year' />
            <Card CardClass='CardEdu Card1' CertificateUrl='Documents/Electrical-Diploma-Final-Sem-Marsheet.pdf' imgUrl='assets/Images/MET.png' imgAlt='MET' Degree='Diploma - Electrical' Name='Met Bhujbal Knowledge City' Location='Adgaon, Nashik, Maharashtra' Date='Oct 2021 - Jun 2023' Duration='2 Year' />
            <Card CardClass='CardEdu Card2' CertificateUrl='Documents/Abhijeet Dhikale-FSD-Java-Certificate.pdf' imgUrl='assets/Images/Seed.png' imgAlt='Java Certificate' Degree='Full Stack Developer - Java Plus' Name='Seed Infotech' Location='Nashik, Maharashtra' Date='Nov 2023 - Oct 2024' Duration='6 Months' />
            <Card CardClass='CardEdu Card1' CertificateUrl='' imgUrl='assets/Images/YCMOU.png' imgAlt='Certificate' Degree='Bachelor of Computer Application' Name='YCMOU' Location='Nashik, Maharashtra' Date='Sep 2023 - Present' Duration='Appear' />
        </div>
    </div>
</div>

<style lang='scss'>
    .Education {
        .EduDivWrap {
            @apply relative flex mt-10 mb-20;
        }

        .EduDiv {
            @apply w-[88vw] h-fit;
            @apply flex flex-col shrink-1 gap-y-20;
        }

        .HR {
            border-left: .1px solid rgb(255, 255, 255, 0.4);
            @apply justify-self-center self-center w-0 h-100% absolute inset-0;
            @apply hidden md:block lg:block xl:block 2xl:block z--1 shrink-1 grow-1;
        }
    }
</style>