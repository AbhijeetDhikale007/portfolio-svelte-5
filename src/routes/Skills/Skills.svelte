<script lang="ts">
    import { fly } from 'svelte/transition'
    import { cubicIn } from 'svelte/easing'
    import { Heading } from '../../components/+components';
    import { CardDiv } from "../../components/+components";
    import { Card1, Card2, Card3, Card4, Card5, Card6, Card7 } from '../../components/+components'
    import './Card.scss'
</script>

<div class="Skills" in:fly={{ easing: cubicIn, x: -100, duration: 1200 }}>
    <Heading HeadingTitle='Skills' />
    <CardDiv HRName='Programming Languages'>
        <div slot="Wrapper">
          <Card1/>
        </div>
    </CardDiv>
    <CardDiv HRName='Markup and Styling'>
        <div slot="Wrapper">
          <Card2/>
        </div>
    </CardDiv>
    <CardDiv HRName='Web Development Tools'>
      <div slot="Wrapper">
        <Card3/>
      </div>
    </CardDiv>
    <CardDiv HRName='Frameworks & Libraries'>
        <div slot="Wrapper">
          <Card4/>
        </div>
    </CardDiv>
    <CardDiv HRName='Databases'>
        <div slot="Wrapper">
          <Card5/>
        </div>
    </CardDiv>
    <CardDiv HRName='Tools'>
        <div slot="Wrapper">
          <Card6/>
        </div>
    </CardDiv>
    <CardDiv HRName='Other'>
        <div slot="Wrapper">
          <Card7/>
        </div>
    </CardDiv>
</div>

<style lang="scss">
    .Skills {
      @apply xl:w-[80vw] 2xl:w-[78vw];
    }
</style>