<template>
    <div class="footer2">
        <a href="https://www.youtube.com/channel/UCeRY2jujVBYRqmilrCZytFw" target="_blank" class="link" id="youtube">
            <font-awesome-icon :icon="['fab', 'youtube']" class="icon"/>
            <span class="title">&laquo; YouTubeでライブ配信中！</span>
        </a>
        <a href="https://www.youtube.com/channel/UCeRY2jujVBYRqmilrCZytFw" target="_blank" class="link" id="survey">
            <font-awesome-icon :icon="['fas', 'file-alt']" class="icon"/>
            <span class="title">&laquo; アンケート実施中！</span>
        </a>
    </div>
</template>

<style scoped>
.footer2 {
    display: flex;
    height: 158px;
    background-color: rgb(233, 233, 233);
}
.link {
    display: flex;
    text-decoration: none;
    align-items: center;
    width: 50%;
    color: rgb(116, 116, 116);
}
.link:hover {
    color: rgb(0, 0, 0);
}
#youtube {
    justify-content: flex-end;
    margin-right: 60px;
}
#survey {
    margin-left: 60px;
}
.title {
    margin-left: 30px;
    font-size: 32px;
}
#youtube .icon {
    width: 60px;
    height: auto;
}
#survey .icon {
    width: 40px;
    height: auto;
}
@media screen and (max-width: 1200px) {
    .footer2 {
        display: block;
        height: 250px;
    }
    #youtube, #survey {
        width: 100%;
    }
    #youtube {
        margin-right: 0;
        padding-top: 40px;
        justify-content: center;
        padding-right: 0;
    }
    #survey {
        margin-top: 50px;
        margin-left: 0;
        padding-left: 0;
        justify-content: center;
    }
}
@media screen and (max-width: 650px) {
    .footer2 {
        height: 220px;
    }
    .title {
        font-size: 25px;
        margin-left: 10px;
    }
    #youtube .icon {
        width: 50px;
        height: auto;
    }
    #survey .icon {
        width: 30px;
        height: auto;
    }
}
@media screen and (max-width: 481px) {
    .footer2 {
        height: 200px;
    }
    .title {
        font-size: 20px;
        margin-left: 10px;
    }
    #youtube .icon {
        width: 40px;
        height: auto;
    }
    #survey .icon {
        width: 25px;
        height: auto;
    }
}
</style>