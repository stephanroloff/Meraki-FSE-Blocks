setTimeout(() => {

    //Select all slides
    let slides = document.querySelectorAll('.slide');

    //The space of the active slide is 75%, then the rest is 25%.
    //One slide has to be always open so we have (the total slides amount - 1) left.
    // Each slice left has 25 / (slides.length - 1) width.
    let spaceRestSlides = 25 / (slides.length - 1)

    //From slide 3 
    let slidesExtra = document.querySelectorAll('.slide-extra');

    // The slide 2 starts at 75%, that's fixed. So from the slice 3 starts in: 75 + spaceRestSlides * (index + 1)
    for (let index = 0; index < slidesExtra.length; index++) {
        const element = slidesExtra[index];
        n = 75 + spaceRestSlides * (index + 1);
        element.style.left = `${n}%`;
    }

    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];

        element.addEventListener('click', () => {
            //If you click a slice, this will move to the the distance `${(index) * spaceRestSlides}%` seen from the left.
            element.style.left = `${(index) * spaceRestSlides}%`;

            if (element.classList.contains('slide-open')) {
                if (element.classList.contains('slide-active')) {
                } else {

                    //if an opened slice want to be closed, we have to move it (and all the slice which are on the right of this) to `${75 + (j * spaceRestSlides)}%`
                    for (let j = index; j < slides.length - 1; j++) {
                        const ele = slides[j + 1];
                        ele.style.left = `${75 + (j * spaceRestSlides)}%`;
                        ele.classList.remove('slide-open');
                    }
                    element.classList.add('slide-active');

                    for (let a = index - 1; a > -1; a--) {
                        const el = slides[a];
                        el.classList.remove('slide-active');
                        el.classList.add('slide-open');
                    }
                    for (let a = index + 1; a <= slides.length; a++) {
                        const el = slides[a];
                        if (!el) return;
                        el.classList.remove('slide-active');
                    }

                }
                //Every time we click a slice, a 'slice-open' and 'slice-active' class will be added.
                //slice-open: all slices who are on the left side positioned
                //slice-active: the slice which is currently using the 75% width. 
            } else {
                element.classList.add('slide-open');
                element.classList.add('slide-active');

                //if a slice on the left side before the current we are trying to open is active, we remove that class
                for (let a = index - 1; a > -1; a--) {
                    const el = slides[a];
                    el.classList.remove('slide-active');
                    el.classList.add('slide-open');
                }

                //if an closed slice want to be opened, we have to move it (and all the slice which are on the left of this) to `${(i - 1) * spaceRestSlides}%`;
                if (index > 1) {
                    for (let i = index; i > 1; i--) {
                        const e = slides[i - 1];
                        e.style.left = `${(i - 1) * spaceRestSlides}%`;
                    }
                }
            }


        })
    }

}, 1000)