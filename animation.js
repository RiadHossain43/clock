
window.addEventListener('load',()=>{
    let loader = document.getElementById('loader');
    setTimeout(()=>{
        loader.style.animation = 'fadeaway .8s ease';
        setTimeout(()=>{
            loader.style.display ='none';
        },800);
        function eleID(name) {
            return document.getElementById(name);
        }
        function anim(elem, cls) {
            elem.classList.add(cls);
        }
        function permanent_after(elem, time) {
            setTimeout(() => {
                elem.style.opacity = '1';
            }, time);
        }
        function animate() {
            let a_clock = eleID('a_clock');
            let d_time = eleID('d_time');
            let time_zone = eleID('time_zone');
            let area = eleID('area');
        
            anim(a_clock, 'bounce');
            anim(d_time, 'bounceIn');
            permanent_after(d_time, 1400);
            anim(time_zone, 'fadeInUp');
            anim(area, 'fadeInUp');
            permanent_after(time_zone, 1800);
            permanent_after(area, 1800);
        }
        animate();

    },1300); 
});






