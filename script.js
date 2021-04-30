const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
        name: 'Нургуш',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
    },
    {
        name: 'Тулиновка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
    },
    {
        name: 'Остров Желтухина',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
    },
    {
        name: 'Владивосток',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
    }
];

const placesList = document.querySelector('.places-list')

/* добавление карточек из массива */

function addCards(name, link) {

    const placeCard = document.createElement('div')
    const placeCardImage = document.createElement('div')
    const placeCardDeleteIcon = document.createElement('button')
    const placeCardDescription = document.createElement('div')
    const placeCardName = document.createElement('h3')
    const placeCardLikeIcon = document.createElement('button')

    placeCard.classList.add('place-card')
    placeCardImage.classList.add('place-card__image')
    placeCardImage.style.backgroundImage = "url(" + link + ")";

    placeCardDeleteIcon.classList.add('place-card__delete-icon')
        /* удаление карточки */
    placeCardDeleteIcon.addEventListener('click', function(event) {
        event.target.closest('.place-card').remove();
    })
    placeCardDescription.classList.add('place-card__description')
    placeCardName.classList.add('place-card__name')
    placeCardName.textContent = name
    placeCardLikeIcon.classList.add('place-card__like-icon')
    placeCardLikeIcon.addEventListener('click', iconLike)

    placesList.appendChild(placeCard)
    placeCard.appendChild(placeCardImage)
    placeCardImage.appendChild(placeCardDeleteIcon)
    placeCard.appendChild(placeCardDescription)
    placeCardDescription.appendChild(placeCardName)
    placeCardDescription.appendChild(placeCardLikeIcon)
    return placeCard
}



initialCards.forEach(item => {
    addCards(item.name, item.link)
})

/* открытие карточки */

const popup = document.querySelector('.popup')
const popupOpen = document.querySelector('.user-info__button')
popupOpen.addEventListener('click', openClose)


function openClose() {
    popup.classList.toggle('popup_is-opened')
}


/* закрытие карточки */

const popupClose = document.querySelector('.popup__close')
popupClose.addEventListener('click', openClose)

/* лайк карточки */

const cardLike = document.querySelectorAll('.place-card__like-icon')
cardLike.forEach(function(item) {
    item.addEventListener('click', iconLike)
})

function iconLike(event) {
    event.target.classList.toggle('place-card__like-icon_liked')
}

/* добавление новой карточки */

const popupForm = document.forms.new

function render(name, link) {
    const placeCard = addCards(name, link)
    placesList.appendChild(placeCard)
}

popupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const popupForm = event.currentTarget;
    const name = popupForm.elements.name
    const link = popupForm.elements.link
    render(name.value, link.value)
    name.value = ''
    link.value = ''
    openClose()
})