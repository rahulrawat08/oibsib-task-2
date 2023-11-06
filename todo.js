var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;

document.getElementById("time").innerHTML = dateTime;




const a = document.querySelector('input');
const b = document.querySelector('.addTask > button');

b.addEventListener('click', addList);
a.addEventListener('keyup', (d) => {
    (d.keyCode === 13 ? addList(d) : null);
})

function addList(d) {
    const notdone = document.querySelector('.notCompleted');
    const done = document.querySelector('.Completed');

    const z = document.createElement('li');
    const w = document.createElement('button');
    const q = document.createElement('button');

    w.innerHTML = '<i class="fa fa-check"></i>';
    q.innerHTML = '<i class="fa fa-trash"></i>';


    if (a.value !== '') {
        z.textContent = a.value;
        a.value = '';
        notdone.appendChild(z);
        z.appendChild(w);
        z.appendChild(q);
    }

    w.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
        done.appendChild(parent);
        w.style.display = 'Empty';
    });

    q.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
    });
}