$(function () {
    var projects = [
        {
            fullImg: [
                '/images/projects/projfull_1_1.jpg',
                '/images/projects/projfull_1_2.jpg',
                '/images/projects/projfull_1_3.jpg',
            ],
            region: 'Алла',
            title: 'Дом для семьи из трёх человек c двумя спальнями, просторным залом и большой террасой',
            kind: '',
            material: '',
            square: '90м',
            garantee: '',
            time: '',
            project: '3D-эскиз',
            price: '2 014 980',
            srub: '1 597 000'
        },
        {
            fullImg: [
                '/images/projects/projfull_2_1.jpg',
                '/images/projects/projfull_2_2.jpg',
                '/images/projects/projfull_2_3.jpg',
            ],
            region: 'Георгий',
            title: 'Гостевой дом-баня с бассейном, барбекю и просторным залом',
            kind: 'русская рубка',
            material: '',
            square: '95м2',
            garantee: '',
            time: '',
            project: '3D-эскиз',
            price: '2 091 700',
            srub: '1 523 900'
        },
        {
            fullImg: [
                '/images/projects/projfull_3_1.jpg',
                '/images/projects/projfull_3_2.jpg',
                '/images/projects/projfull_3_3.jpg',
            ],
            region: 'Елена',
            title: 'Большой дом с каминным залом , 6 спальнями  и сауной',
            kind: '',
            material: '',
            square: '166м',
            garantee: '',
            time: '',
            project: '3D-эскиз',
            price: '4 800 000',
            srub: '3 019 700'
        },
        {
            fullImg: [
                '/images/projects/projfull_4_1.jpg',
                '/images/projects/projfull_4_2.jpg',
                '/images/projects/projfull_4_3.jpg',
            ],
            region: 'Константин',
            title: 'Небольшой дом с двумя спальнями , двумя сан узлами  и просторной гостиной',
            kind: '',
            material: '',
            square: '93м',
            garantee: '',
            time: '',
            project: '3D-эскиз',
            price: 'от 2 275 000',
            srub: '1 418 700'
        },
        {
            fullImg: [
                '/images/projects/projfull_5_1.jpg',
                '/images/projects/projfull_5_2.jpg',
                '/images/projects/projfull_5_3.jpg',
            ],
            region: 'Стаббур',
            title: 'Дом-студия с скандинавской архитектурой',
            kind: '',
            material: '',
            square: '42м',
            garantee: '',
            time: '',
            project: '3D-эскиз',
            price: '1 153 400',
            srub: '1 006 800'
        },
        {
            fullImg: [
                '/images/projects/projfull_6_1.jpg',
                '/images/projects/projfull_6_2.jpg',
                '/images/projects/projfull_6_3.jpg',
            ],
            region: 'Лилия',
            title: 'Удобный дом с 5 спальнями , двумя террасами , сауной',
            kind: '',
            material: '',
            square: '174м',
            garantee: '',
            time: '',
            project: '3D-эскиз',
            price: '4 433 200',
            srub: '2 990 700'
        },
        {
            fullImg: [
                '/images/projects/projfull_7_1.jpg',
                '/images/projects/projfull_7_2.jpg',
                '/images/projects/projfull_7_3.jpg',
                '/images/projects/projfull_7_4.jpg',
            ],
            region: 'Лорен',
            title: 'Дом для большой семьи с 6 спальнями , сауной  и тремя сан узлами',
            kind: '',
            material: '',
            square: '201м',
            garantee: '',
            time: '',
            project: '3D-эскиз',
            price: '5 150 000',
            srub: '3 645 000'
        },
        {
            fullImg: [
                '/images/projects/projfull_8_1.jpg',
                '/images/projects/projfull_8_2.jpg',
                '/images/projects/projfull_8_3.jpg',
            ],
            region: 'Мария',
            title: 'Уютный дом с тремя спальнями, камином  и сауной',
            kind: '',
            material: '',
            square: '150м',
            garantee: '',
            time: '',
            project: '',
            price: '2 959 800',
            srub: '2 596 700'
        },
        {
            fullImg: [
                '/images/projects/projfull_9_1.jpg',
                '/images/projects/projfull_9_2.jpg',
                '/images/projects/projfull_9_3.jpg',
            ],
            region: 'Модест',
            title: 'Дом с полатями, тремя спальнями и сауной',
            kind: '',
            material: '',
            square: '97м',
            garantee: '',
            time: '',
            project: '3D-эскиз',
            price: '2 456 300',
            srub: '2 330 500'
        },
        {
            fullImg: [
                '/images/projects/projfull_10_1.jpg',
                '/images/projects/projfull_10_2.jpg',
            ],
            region: 'Бабочка',
            title: 'Дом свободной планировки по системе POST and BEAM. Можно под офис',
            kind: '',
            material: '',
            square: '',
            garantee: '',
            time: '',
            project: '',
            price: '',
            srub: ''
        },
        {
            fullImg: [
                '/images/projects/projfull_11_1.jpg',
                '/images/projects/projfull_11_2.jpg',
                '/images/projects/projfull_11_3.jpg',
            ],
            region: 'Юлия',
            title: 'Просторный дом с 5-ю спальнями, гостиной и сауной',
            kind: '',
            material: '',
            square: '176м',
            garantee: '',
            time: '',
            project: '',
            price: '3 446 800',
            srub: '3 213 700'
        },
        {
            fullImg: [
                '/images/projects/projfull_12_1.jpg',
                '/images/projects/projfull_12_2.jpg',
                '/images/projects/projfull_12_3.jpg',
                '/images/projects/projfull_12_4.jpg',
            ],
            region: 'Зоря',
            title: '',
            kind: '',
            material: '',
            square: '',
            garantee: '',
            time: '',
            project: '',
            price: '',
            srub: ''
        },
        {
            fullImg: [
                '/images/projects/projfull_13_1.jpg',
                '/images/projects/projfull_13_2.jpg',
                '/images/projects/projfull_13_3.jpg',
            ],
            region: 'Кантри',
            title: '',
            kind: '',
            material: '',
            square: '',
            garantee: '',
            time: '',
            project: '',
            price: '',
            srub: ''
        }
    ];

    function loadContent(projectId, projectNode) {
        var projectBody = projects[projectId];
        /*projectNode.find('.projectcart__photo img').attr('src',projectBody.fullImg);

         if (projectId!=0) {
         projectNode.find('.projectcart__photo_unactivebody1 img').attr('src',projects[projectId-1].fullImg);
         } else projectNode.find('.projectcart__photo_unactivebody1 img').attr('src',projects[projects.length-1].fullImg);

         if (projectId!=(projects.length-1)) {
         projectNode.find('.projectcart__photo_unactivebody2 img').attr('src',projects[projectId+1].fullImg);
         } else projectNode.find('.projectcart__photo_unactivebody2 img').attr('src',projects[0].fullImg);*/

        projectNode.find('.projectcart__photo img').attr('src', projectBody.fullImg[1]);
        projectNode.find('.projectcart__photo_unactivebody1 img').attr('src', projectBody.fullImg[0]);
        projectNode.find('.projectcart__photo_unactivebody2 img').attr('src', projectBody.fullImg[2]);

        projectNode.find('.projectcart__region').text(projectBody.region);
        projectNode.find('.projectcart__title').text(projectBody.title);
        projectNode.find('.projectcart__kind').text(projectBody.kind);
        projectNode.find('.projectcart__material').text(projectBody.material);
        projectNode.find('.projectcart__square').text(projectBody.square);
        projectNode.find('.projectcart__garant').text(projectBody.garantee);
        projectNode.find('.projectcart__time').text(projectBody.time);
        projectNode.find('.projectcart__project').text(projectBody.project);
        projectNode.find('.projectcart__pricein').html(projectBody.price + ' <img src="/images/rouble.svg">');
        projectNode.find('.projectcart__pricein_srub').html(projectBody.srub + ' <img src="/images/rouble.svg">');
        projectNode.find('.projectform__title').val(projectBody.title);
        return projectNode;
    }

    $('.project__info_button').on('click', function () {
        var projectId = $(this).parents('.project').index();
        var projectContent = $('#projectCart');
        var activePhoto = 1;
        lightboxShow(loadContent(projectId, projectContent));
        $('.lightbox__content #projectCart').addClass('projectcart__project');

        function projectcartArrow(dir) {
            if (dir) {
                if (activePhoto < projects[projectId].fullImg.length - 1) {
                    activePhoto++;
                } else activePhoto = 0;
            } else {
                if (activePhoto != 0) {
                    activePhoto--;
                } else {
                    activePhoto = projects[projectId].fullImg.length - 1;
                }
            }
            if (activePhoto == 0) {
                $('.lightbox__content #projectCart').find('.projectcart__photo img').attr('src', projects[projectId].fullImg[activePhoto]);
                $('.lightbox__content #projectCart').find('.projectcart__photo_unactivebody1 img').attr('src', projects[projectId].fullImg[projects[projectId].fullImg.length - 1]);
                $('.lightbox__content #projectCart').find('.projectcart__photo_unactivebody2 img').attr('src', projects[projectId].fullImg[activePhoto + 1]);
            }
            else if (activePhoto < projects[projectId].fullImg.length - 1) {
                $('.lightbox__content #projectCart').find('.projectcart__photo img').attr('src', projects[projectId].fullImg[activePhoto]);
                $('.lightbox__content #projectCart').find('.projectcart__photo_unactivebody1 img').attr('src', projects[projectId].fullImg[activePhoto - 1]);
                $('.lightbox__content #projectCart').find('.projectcart__photo_unactivebody2 img').attr('src', projects[projectId].fullImg[activePhoto + 1]);
            } else {
                $('.lightbox__content #projectCart').find('.projectcart__photo img').attr('src', projects[projectId].fullImg[activePhoto]);
                $('.lightbox__content #projectCart').find('.projectcart__photo_unactivebody1 img').attr('src', projects[projectId].fullImg[activePhoto - 1]);
                $('.lightbox__content #projectCart').find('.projectcart__photo_unactivebody2 img').attr('src', projects[projectId].fullImg[0]);
            }
        }

        $('.projectcart__project .projectcart__next').on('click', function () {
            projectcartArrow(true);
        });
        $('.projectcart__project .projectcart__prev').on('click', function () {
            projectcartArrow(false);
        });
    });
});