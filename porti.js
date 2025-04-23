document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const sideMenu = document.getElementById('side-menu');
    const categoryButtons = document.querySelectorAll('.category-button');
    const emailElement = document.getElementById('email');

    // abri e fecha o menu lateral
    menuButton.addEventListener('click', function () {
        sideMenu.classList.toggle('open');
    });

    // mostra e esconde subcategorias
    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const subcategoryList = this.nextElementSibling;
            if (subcategoryList.style.display === 'block') {
                subcategoryList.style.display = 'none';
            } else {
                subcategoryList.style.display = 'block';
            }
        });
    });

    // mostra e esconde as sub-subcategorias do Técnico
    const courseToggleButtons = document.querySelectorAll('.course-toggle-button');
    courseToggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const subSubcategoryList = this.nextElementSibling;
            if (subSubcategoryList.style.display === 'block') {
                subSubcategoryList.style.display = 'none';
            } else {
                subSubcategoryList.style.display = 'block';
            }
        });
    });

    // copia o email
    emailElement.addEventListener('click', function () {
        const email = this.textContent;
        navigator.clipboard.writeText(email).then(() => {
        }).catch(err => {
            alert('Erro ao copiar o email: ' + err);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Redirecionamento para botão SA
    const saButton = document.getElementById('btn-sa');
    if (saButton) {
        saButton.addEventListener('click', () => {
            window.location.href = '/'; // substitua pelo caminho correto
        });
    }

    // Redirecionamento para botão PPE
    const ppeButton = document.getElementById('btn-ppe');
    if (ppeButton) {
        ppeButton.addEventListener('click', () => {
            window.location.href = '/path/to/ppe'; // substitua pelo caminho correto
        });
    }

    // Redirecionamento para botão EXTRAS
    const extrasButton = document.getElementById('btn-extras');
    if (extrasButton) {
        extrasButton.addEventListener('click', () => {
            window.location.href = '/path/to/extras'; // substitua pelo caminho correto
        });
    }
});

