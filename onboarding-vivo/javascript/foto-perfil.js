const inputFile = document.querySelector('#picture__input');
const pictureImage = document.querySelector('.picture__image');
const fotoPerfilNav = document.querySelector('.foto-perfil');
const pictureImageTxt = 'Escolha uma imagem ';
pictureImage.textContent = pictureImageTxt;

inputFile.addEventListener('change', function(e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];
    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', function(e) {
        const thisReader = e.target;

        const img = document.createElement('img');
        img.src = thisReader.result;
        img.classList.add('picture__img');
        pictureImage.textContent = '';

        pictureImage.appendChild(img);

        // Atualiza também a foto no header/nav
        if (fotoPerfilNav) {
          fotoPerfilNav.src = thisReader.result;
        }
      })

      reader.readAsDataURL(file);
    } else {
        pictureImage.textContent = pictureImageTxt
    }


})
