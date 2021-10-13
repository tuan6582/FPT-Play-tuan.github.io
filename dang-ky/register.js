var register = {


    menuMobileChild: function () {
        var showMenuChild = document.querySelector('.header__menu--box-item-fixx');

        var menuChild = document.querySelector('.header__menu--show');

        var hideMenuChild = document.querySelector('.header__menu--item-hide');



        showMenuChild.addEventListener('click', function () {
            menuChild.classList.add('block-menu')
            hideMenuChild.style.display = 'block';
        })

        hideMenuChild.addEventListener('click', function () {
            menuChild.classList.remove('block-menu')
            hideMenuChild.style.display = 'none';
        })
    },

    showMenuMobile: function () {
        var menu = document.querySelector('.header__menu--icon');

        var boxMenu = document.querySelector('.header__menu--box');

        var closeMenu = document.querySelector('.close')

        menu.addEventListener('click', function () {
            boxMenu.classList.add('header__menu--box-block')
        })

        closeMenu.addEventListener('click', function () {
            boxMenu.classList.remove('header__menu--box-block')
        })
    },


    registerStart: function () {
        this.menuMobileChild();
        this.showMenuMobile();
    }
};

register.registerStart();
