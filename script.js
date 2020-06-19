//objelerimi içeren modeller dizisi
var models = [
    {
        name : 'Audi',
        image : 'img/audi.jpg',
        link: 'https://www.google.com/search?safe=strict&sxsrf=ALeKk01pF_nqCitncMmmjiBA3gZcT4KvPA%3A1592588070009&ei=JvfsXosNnpOMuw-Z4424BA&q=audi&oq=audi&gs_lcp=CgZwc3ktYWIQAzIHCAAQsQMQQzIHCAAQsQMQQzIFCAAQsQMyBwgAELEDEEMyBwgAELEDEEMyBQgAELEDMgcIABCxAxBDMgUIABCxAzIECAAQQzIHCAAQsQMQQzoECAAQRzoECCMQJ1CM2gNY694DYPvfA2gAcAJ4AIABmgKIAf0FkgEFMC4yLjKYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwiLuL7xtI7qAhWeCWMBHZlxA0cQ4dUDCAw&uact=5'
    },
    {
        name : 'Bmw',
        image : 'img/bmw.jpg',
        link: 'https://www.google.com/search?q=bmw&oq=bmw&aqs=chrome..69i57j0l3j69i60l4.643j0j7&sourceid=chrome&ie=UTF-8'
    },
    {
        name : 'Jeep',
        image : 'img/jeep.jpg',
        link : 'https://www.google.com/search?safe=strict&sxsrf=ALeKk000G4TFcFrkD1C2oVHaRZ_1RuYmFA%3A1592588132929&ei=ZPfsXpChOKa7gwf86bbIAw&q=jeep&oq=jeep&gs_lcp=CgZwc3ktYWIQAzIHCAAQsQMQQzIHCAAQsQMQQzIHCAAQsQMQQzIHCAAQsQMQQzIHCAAQsQMQQzIHCAAQgwEQQzIHCAAQsQMQQzIFCAAQgwEyBAgAEEMyBAgAEEM6BAgAEEc6BAgjECc6BQgAELEDOgcIIxDqAhAnOgYIIxAnEBNQz-wBWMv0AWDJ9wFoAXADeACAAb0BiAGOBpIBAzAuNZgBAKABAaoBB2d3cy13aXqwAQo&sclient=psy-ab&ved=0ahUKEwiQ476PtY7qAhWm3eAKHfy0DTkQ4dUDCAw&uact=5'
    },
    {
        name : 'Mercedes',
        image : 'img/mercedes.jpg',
        link : 'https://www.google.com/search?safe=strict&sxsrf=ALeKk03eg8lHq5uRRVY-Lhk9DpI4LyrsZA%3A1592588165654&ei=hffsXv-uJ4udsAe0nayYBg&q=mercedes&oq=mercedes&gs_lcp=CgZwc3ktYWIQAzIHCAAQsQMQQzIECAAQQzIHCAAQsQMQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIFCAAQsQMyBwgAELEDEEMyBQgAELEDMgQIABBDOgQIABBHOgQIIxAnOgUIABCDAVDxxQVYuc4FYIXPBWgAcAF4AIAB6gGIAcwJkgEFMC41LjKYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwi_hYyftY7qAhWLDuwKHbQOC2MQ4dUDCAw&uact=5'
    },
    {
        name : 'Range Rover',
        image : 'img/range-rover.jpg',
        link : 'https://www.google.com/search?safe=strict&sxsrf=ALeKk031d0lbPwfTOLvdERzZZKeYMTZqSQ%3A1592588258894&ei=4vfsXsKRNtL9kwXbjpmYAw&q=range+rover&oq=range+rover&gs_lcp=CgZwc3ktYWIQAzIHCAAQsQMQQzIFCAAQsQMyBAgAEEMyBQgAELEDMgUIABCxAzIHCAAQsQMQQzIFCAAQsQMyBAgAEEMyBQgAELEDMgQIABBDOgQIABBHOgQIIxAnOgUIABCDAToCCABQ1hZYsyFgzCFoAHACeACAAeUBiAGWC5IBBTAuNy4ymAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwjCisfLtY7qAhXS_qQKHVtHBjMQ4dUDCAw&uact=5'
    }

];

let index  = 0; //obje indeksi
document.querySelector('.card-img-top').setAttribute('src',models[index].image); //slayt araba resmi
document.querySelector('.card-title').textContent = models[index].name; //slayt araba ismi
document.querySelector('.card-link').setAttribute('href',models[index].link); //slayt araba link