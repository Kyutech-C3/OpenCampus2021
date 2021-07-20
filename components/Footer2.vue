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
    width: 100%;
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
    opacity: 0.5;
    transition: 0.3s;
}
#youtube {
    justify-content: flex-end;
}
#survey {
    margin-left: 60px;
}
.title {
    margin-left: 30px;
    font-size: 32px;
}
#youtube .icon {
    font-size: 60px;
    color: red;
}
#survey .icon {
    font-size: 55px;
    color: #7347b8;
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
        font-size: 30px;
    }
    #survey .icon {
        font-size: 30px;
    }
}
@media screen and (max-width: 481px) {
    .footer2 {
        height: 90px;
    }
    .title {
        font-size: 15px;
        margin-left: 10px;
    }
    #youtube, #survey {
        padding: 10px;
        margin: 0;
    }
    #youtube .icon {
        font-size: 20px;
    }
    #survey .icon {
        font-size: 20px;
    }
}
</style>
