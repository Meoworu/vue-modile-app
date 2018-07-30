<template>
    <div id="contactUs">
        <h3>{{$t('contactUs.contactUs')}}</h3>
        <br>
        <p>
            {{$t('contactUs.email')}}：
            <a href="javascript:;" id="top">admin@bling.plus</a>
            <br>
        </p>
        <br>
        <br>
        <h3>{{$t('contactUs.business')}}</h3>
        <br>
        <p>
            {{$t('contactUs.market')}}：
            <a href="javascript:;" id="btom">admin@bling.plus</a>

            <br>
            <br>

        </p>
    </div>
</template>

<script>
    export default {
        name: "contactUs"
    }
</script>

<style scoped>
    html {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    a {
        color: blue;
    }
    a:active {
        color: blue;
    }
    h1,h2,h3,h4,h5,p {
        padding: 0;
        margin: 0;
        font-size: 14px;
        font-family: PingFangSC-Semibold;
    }
    #contactUs {
        padding: 40px 15px 10px 15px;
        margin: 0 auto;
        min-width: 300px;
        max-width: 620px;
    }
    h1 {
        font-size: 15px;
        color: #1b1926;
        text-align: center;
        line-height: 15px;
        letter-spacing: 0.6px;
    }
    h2 {
        font-size: 16px;
        color: #30449A;
        text-align: left;
        padding-bottom: 10px;
    }
    h3,h5 {
        color: #1b1926;
    }
    h5 {
        padding: 30px 0 15px 0;
        font-size: 12px;
        line-height: 12px;
        letter-spacing: 0.4px;
    }
    h4 {
        font-family: PingFangSC-Regular;
        font-size: 11px;
        line-height: 11px;
        color: #979797;
        text-align: center;
        padding-top: 10px;
        letter-spacing: 0.4px;
    }
    p {
        line-height: 22px;
        color: #979797;
        text-align: left;
        font-size: 12px;
        font-family: Helvetica;
        letter-spacing: 0.6px;
    }

    p.p1 {
        margin: 0.0px 0.0px 12.0px 0.0px;
        font: 12.0px Times;
        color: #000000;
        -webkit-text-stroke: #000000;
        min-height: 14.0px
    }
    span.s1 {
        font-kerning: none
    }
    p a {
        text-decoration: none;
    }
</style>
